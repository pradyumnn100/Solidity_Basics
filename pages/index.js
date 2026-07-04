import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { FUNDME_ADDRESS, FUNDME_ABI } from '../lib/contract';
import { useFunders } from '../lib/useFunders';

const MEDALS = ['🥇', '🥈', '🥉'];

function shortAddr(a) {
  return a ? `${a.slice(0, 6)}…${a.slice(-4)}` : '';
}

const FUNDING_GOAL_ETH = process.env.NEXT_PUBLIC_FUNDING_GOAL_ETH
  ? Number(process.env.NEXT_PUBLIC_FUNDING_GOAL_ETH)
  : null;

export default function Home() {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [celebrate, setCelebrate] = useState(false);

  const { data: vaultBalance, refetch: refetchBalance } = useBalance({
    address: FUNDME_ADDRESS,
  });

  const { data: ownerAddress } = useReadContract({
    address: FUNDME_ADDRESS,
    abi: FUNDME_ABI,
    functionName: 'i_owner',
  });

  const { data: myContribution, refetch: refetchMine } = useReadContract({
    address: FUNDME_ADDRESS,
    abi: FUNDME_ABI,
    functionName: 'addressToAmountFunded',
    args: [address],
    query: { enabled: !!address },
  });

  const { loading: leaderboardLoading, recent, leaderboard, totalEntries, reload } =
    useFunders(refreshKey);

  const isOwner =
    isConnected &&
    ownerAddress &&
    address &&
    ownerAddress.toLowerCase() === address.toLowerCase();

  const {
    writeContract: donate,
    data: donateHash,
    isPending: donatePending,
    error: donateError,
  } = useWriteContract();

  const { isLoading: donateConfirming, isSuccess: donateConfirmed } =
    useWaitForTransactionReceipt({ hash: donateHash });

  const {
    writeContract: withdraw,
    data: withdrawHash,
    isPending: withdrawPending,
    error: withdrawError,
  } = useWriteContract();

  const { isLoading: withdrawConfirming, isSuccess: withdrawConfirmed } =
    useWaitForTransactionReceipt({ hash: withdrawHash });

  useEffect(() => {
    if (donateConfirmed) {
      setNote({ kind: 'success', text: 'Contribution confirmed. Thank you.' });
      setAmount('');
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 900);
      refetchBalance();
      refetchMine();
      setRefreshKey((k) => k + 1);
    }
  }, [donateConfirmed]);

  useEffect(() => {
    if (withdrawConfirmed) {
      setNote({ kind: 'success', text: 'Vault emptied to your wallet.' });
      refetchBalance();
      setRefreshKey((k) => k + 1);
    }
  }, [withdrawConfirmed]);

  useEffect(() => {
    if (donateError) setNote({ kind: 'error', text: donateError.shortMessage || 'Donation failed or was rejected.' });
  }, [donateError]);

  useEffect(() => {
    if (withdrawError) setNote({ kind: 'error', text: withdrawError.shortMessage || 'Withdrawal failed or was rejected.' });
  }, [withdrawError]);

  function handleDonate() {
    if (!amount || Number(amount) <= 0) {
      setNote({ kind: 'error', text: 'Enter an amount greater than zero.' });
      return;
    }
    setNote(null);
    donate({
      address: FUNDME_ADDRESS,
      abi: FUNDME_ABI,
      functionName: 'fund',
      value: parseEther(amount),
    });
  }

  function handleWithdraw() {
    setNote(null);
    withdraw({
      address: FUNDME_ADDRESS,
      abi: FUNDME_ABI,
      functionName: 'withdraw',
    });
  }

  const vaultEth = vaultBalance ? Number(formatEther(vaultBalance.value)) : 0;
  const goalPct = FUNDING_GOAL_ETH ? Math.min(100, (vaultEth / FUNDING_GOAL_ETH) * 100) : null;

  const myRank =
    address && leaderboard.findIndex((f) => f.address === address.toLowerCase());
  const iAmRanked = myRank !== undefined && myRank !== -1;

  return (
    <div className="wrap">
      <header>
        <div className="brand">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4Z"
              stroke="#C9A227"
              strokeWidth="1.4"
              fill="rgba(201,162,39,0.1)"
            />
          </svg>
          The Vault
        </div>
        <ConnectButton showBalance={false} />
      </header>

      <section className="hero">
        <div className="eyebrow">FundMe · Sepolia Testnet</div>
        <div className="plaque">
          {celebrate && (
            <svg className="coin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#C9A227" stroke="#8A7420" strokeWidth="1" />
              <text x="12" y="16" textAnchor="middle" fontSize="11" fill="#14121F" fontFamily="monospace">Ξ</text>
            </svg>
          )}
          <div className="plaque-label">Held in the vault</div>
          <div className="plaque-value">
            {vaultBalance ? vaultEth.toFixed(4) : '—'}
            <span className="unit">ETH</span>
          </div>
          <div className="plaque-sub">
            {ownerAddress ? `keeper: ${shortAddr(ownerAddress)}` : 'reading contract…'}
            {totalEntries > 0 && ` · ${totalEntries} contribution${totalEntries === 1 ? '' : 's'} recorded`}
          </div>
          {goalPct !== null && (
            <div className="goal-bar-wrap">
              <div className="goal-bar-track">
                <div className="goal-bar-fill" style={{ width: `${goalPct}%` }} />
              </div>
              <div className="goal-bar-label">
                {goalPct.toFixed(1)}% toward the {FUNDING_GOAL_ETH} ETH community goal
              </div>
            </div>
          )}
        </div>
        <p className="lede">
          There's no server and no password here. RainbowKit handles the
          wallet connection, and the smart contract itself is the record of
          who has funded it and who is allowed to withdraw.
        </p>
      </section>

      <section className="panel">
        <h3>Make a contribution</h3>
        <p className="desc">
          Funds are sent straight into the contract and counted toward its
          minimum funding threshold, enforced on-chain.
        </p>
        <div className="field-row">
          <input
            className="amount-input"
            type="number"
            min="0"
            step="0.001"
            placeholder="0.02"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={!isConnected}
          />
          <button
            className="btn btn-primary"
            onClick={handleDonate}
            disabled={!isConnected || donatePending || donateConfirming}
          >
            {donatePending || donateConfirming ? 'Confirming…' : 'Donate ETH'}
          </button>
        </div>
        <div className="ledger-row">
          <span className="k">Your total contribution</span>
          <span className="v">
            {myContribution !== undefined ? `${Number(formatEther(myContribution)).toFixed(4)} ETH` : '—'}
          </span>
        </div>
        {iAmRanked && (
          <div className="ledger-row">
            <span className="k">Your leaderboard rank</span>
            <span className="v">#{myRank + 1} of {leaderboard.length}</span>
          </div>
        )}
      </section>

      <section className="panel">
        <div className="panel-head-row">
          <div>
            <h3>Top funders</h3>
            <p className="desc">Ranked by total ETH contributed.</p>
          </div>
          <button className="btn-icon" onClick={reload} title="Refresh leaderboard" disabled={leaderboardLoading}>
            {leaderboardLoading ? '…' : '↻'}
          </button>
        </div>

        {leaderboardLoading && leaderboard.length === 0 && (
          <p className="empty-state">Reading the ledger…</p>
        )}

        {!leaderboardLoading && leaderboard.length === 0 && (
          <p className="empty-state">No contributions yet — be the first to fund the vault.</p>
        )}

        {leaderboard.length > 0 && (
          <ol className="leaderboard">
            {leaderboard.map((f, i) => (
              <li key={f.address} className={i < 3 ? 'top3' : ''}>
                <span className="rank">{MEDALS[i] || `#${i + 1}`}</span>
                <a
                  className="funder-addr"
                  href={`https://sepolia.etherscan.io/address/${f.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shortAddr(f.address)}
                </a>
                <span className="funder-amount">{Number(formatEther(f.amount)).toFixed(4)} ETH</span>
              </li>
            ))}
          </ol>
        )}
      </section>

      {recent.length > 0 && (
        <section className="panel">
          <h3>Recent activity</h3>
          <p className="desc">Latest entries added to the vault's funder record, most recent first.</p>
          <ul className="recent-feed">
            {recent.map((addr, i) => (
              <li key={`${addr}-${i}`}>
                <span className="dot" />
                <span className="addr-pill">{shortAddr(addr)}</span>
                <span className="recent-label">contributed to the vault</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="panel">
        <h3>Vault keeper</h3>
        <p className="desc">
          Authentication isn't a password — it's cryptographic. The contract
          only opens for the exact wallet address that deployed it.
        </p>
        <div className="keeper">
          <div className={`lock-wrap ${isOwner ? 'unlocked' : ''}`}>
            <svg viewBox="0 0 32 26" fill="none">
              <rect x="6" y="11" width="20" height="14" rx="3" fill="none" stroke="#C9A227" strokeWidth="1.6" />
              <path
                className="shackle"
                d="M10 11V8a6 6 0 0 1 12 0v3"
                stroke="#C9A227"
                strokeWidth="1.6"
                fill="none"
              />
            </svg>
          </div>
          <div className="keeper-copy">
            {!isConnected && <>
              <h4>Waiting for a keeper</h4>
              <p>Connect a wallet to check whether it holds the vault key.</p>
            </>}
            {isConnected && isOwner && <>
              <h4>This is your vault</h4>
              <p>Connected as <span className="addr-pill">{shortAddr(address)}</span> — the deploying address. You may withdraw the full balance.</p>
            </>}
            {isConnected && !isOwner && ownerAddress && <>
              <h4>Locked to another keeper</h4>
              <p>Connected as <span className="addr-pill">{shortAddr(address)}</span>, but the vault key belongs to <span className="addr-pill">{shortAddr(ownerAddress)}</span>.</p>
            </>}
          </div>
        </div>
        {isOwner && (
          <div className="withdraw-cta">
            <button
              className="btn btn-verdigris"
              onClick={handleWithdraw}
              disabled={withdrawPending || withdrawConfirming}
            >
              {withdrawPending || withdrawConfirming ? 'Confirming…' : 'Open vault & withdraw everything'}
            </button>
          </div>
        )}
      </section>

      {note && <div className={`note ${note.kind}`}>{note.text}</div>}

      <footer>
        Built for a FundMe contract on Sepolia. View it on{' '}
        <a
          href={`https://sepolia.etherscan.io/address/${FUNDME_ADDRESS}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Etherscan
        </a>.
      </footer>
    </div>
  );
}

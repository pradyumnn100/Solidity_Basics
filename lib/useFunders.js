import { useCallback, useEffect, useState } from 'react';
import { usePublicClient } from 'wagmi';
import { FUNDME_ADDRESS, FUNDME_ABI, MAX_FUNDER_LOOKUP } from './contract';

/**
 * The FundMe contract has no length getter for its `funders` array and
 * emits no events, so there's no cheap way to ask "who has funded this
 * contract?" directly. What it does expose is `funders(uint256)`, the
 * auto-generated getter for a public array — calling it with an
 * out-of-bounds index simply reverts. So: we call funders(0), funders(1),
 * ... and treat the first revert as "end of array". From the resulting
 * address list we can build a chronological feed and, by cross-referencing
 * addressToAmountFunded, a leaderboard.
 *
 * This does one RPC call per array slot, which is fine for a learning
 * project with a handful of donors. If this ever needs to scale, the real
 * fix is adding a `Funded` event to the contract and reading logs instead.
 */
export function useFunders(refreshKey) {
  const publicClient = usePublicClient();
  const [loading, setLoading] = useState(true);
  const [recent, setRecent] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);

  const load = useCallback(async () => {
    if (!publicClient) return;
    setLoading(true);
    try {
      const addresses = [];
      for (let i = 0; i < MAX_FUNDER_LOOKUP; i++) {
        try {
          const addr = await publicClient.readContract({
            address: FUNDME_ADDRESS,
            abi: FUNDME_ABI,
            functionName: 'funders',
            args: [BigInt(i)],
          });
          addresses.push(addr);
        } catch {
          break;
        }
      }

      setTotalEntries(addresses.length);
      setRecent([...addresses].slice(-5).reverse());

      const unique = [...new Set(addresses.map((a) => a.toLowerCase()))];
      const amounts = await Promise.all(
        unique.map((addr) =>
          publicClient.readContract({
            address: FUNDME_ADDRESS,
            abi: FUNDME_ABI,
            functionName: 'addressToAmountFunded',
            args: [addr],
          })
        )
      );

      const board = unique
        .map((address, i) => ({ address, amount: amounts[i] }))
        .filter((f) => f.amount > 0n)
        .sort((a, b) => (b.amount > a.amount ? 1 : b.amount < a.amount ? -1 : 0))
        .slice(0, 10);

      setLeaderboard(board);
    } catch (e) {
      console.error('Failed to load funders list', e);
    } finally {
      setLoading(false);
    }
  }, [publicClient]);

  useEffect(() => {
    load();
  }, [load, refreshKey]);

  return { loading, recent, leaderboard, totalEntries, reload: load };
}

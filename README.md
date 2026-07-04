# The Vault — FundMe Frontend (RainbowKit + wagmi)

A React/Next.js frontend for the `FundMe` smart contract, using RainbowKit for wallet connection and wagmi/viem for reading and writing to the contract.

## 🛠️ Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Get a WalletConnect Project ID**
   RainbowKit requires this even if people connect with MetaMask. It's free:
   👉 https://cloud.walletconnect.com — create a project, copy the Project ID.

3. **Configure environment variables**
   Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```
   Then fill in:
   ```
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_FUNDME_ADDRESS=0xYourDeployedContractAddress
   ```

4. **Run it locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## 📁 Structure

```
fundme-vault-rainbowkit/
├── lib/
│   ├── wagmiConfig.js   # RainbowKit + wagmi config, pinned to Sepolia
│   └── contract.js      # Contract address + ABI
├── pages/
│   ├── _app.js          # Wraps the app in wagmi + RainbowKit providers
│   └── index.js         # The donate / withdraw UI
├── styles/
│   └── globals.css
```

## 🔐 How authentication works

There's no login system. RainbowKit connects a wallet, and the app reads `i_owner()` from the contract to check whether the connected address matches the address that deployed it. Only that address can successfully call `withdraw()` — this is enforced by the contract's own `onlyowner` modifier, not by anything in the frontend. The UI just reflects that reality: the withdraw button is hidden unless the connected wallet is the owner.

## 🏆 Top funders & recent activity

The contract doesn't emit events, so there's no efficient log to query for donor history. Instead, `lib/useFunders.js` takes advantage of the fact that `funders` is a public array — Solidity auto-generates a `funders(uint256 index)` getter for it. The hook calls `funders(0)`, `funders(1)`, ... and treats the first revert as "end of array," then cross-references each unique address against `addressToAmountFunded` to build:

- **Top funders** — sorted by total ETH contributed, top 3 get medal emoji
- **Recent activity** — the last few array entries, most recent first

This works with your existing deployed contract as-is — no redeploy needed. The tradeoff: it's one RPC call per array slot, which is fine for a learning project with a small number of donors but wouldn't scale to a contract with thousands of contributions.

## ⚠️ Known limitation

Because there are no events, the "recent activity" feed can only show *who* contributed and in what order — not the individual amount of that specific transaction (only each address's running total is stored on-chain). If you want per-transaction history and amounts, add this to the contract:

```solidity
event Funded(address indexed funder, uint256 amount);
// inside fund():
emit Funded(msg.sender, msg.value);
```

Then the frontend could use wagmi's `useWatchContractEvent` (or `getLogs`) for a fully accurate, more efficient activity feed — but that requires redeploying the contract, since events can't be added retroactively to an already-deployed contract.

## ⚙️ Optional: funding goal progress bar

Set `NEXT_PUBLIC_FUNDING_GOAL_ETH` in `.env.local` to show a progress bar on the homepage (e.g. `NEXT_PUBLIC_FUNDING_GOAL_ETH=1` for a 1 ETH goal). This is purely a frontend display target for community motivation — the contract has no concept of an overall goal, only the per-donation `MINIMUM_USD` check. Leave it unset to hide the bar entirely.

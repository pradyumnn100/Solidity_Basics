# 💰 The Vault — Decentralized FundMe DApp

A full-stack Web3 crowdfunding application built on Ethereum.  
The project consists of a Solidity smart contract backend and a React/Next.js frontend that allows users to connect their wallet, fund ETH, track contributors, and securely withdraw funds as the contract owner.

The smart contract uses Chainlink Price Feeds to enforce a minimum USD-based contribution amount, while the frontend uses RainbowKit + wagmi + viem for modern wallet interaction.

---

## ✨ Features

### 🔗 Smart Contract

- 💸 Users can fund the contract using ETH
- 📊 ETH contributions are converted to USD using Chainlink ETH/USD Price Feed
- ✅ Enforces minimum funding amount ($5 equivalent ETH)
- 🗂️ Tracks funder addresses and contribution amounts
- 🔐 Owner-only withdrawal system
- 🧹 Resets funding records after withdrawal
- 📩 Supports direct ETH transfers using `receive()` and `fallback()`
- 🛡️ Uses secure withdrawal pattern with low-level `call`

### 🌐 Frontend

- 🦊 Wallet connection using RainbowKit
- 🔗 wagmi + viem integration
- 🌈 Modern React/Next.js interface
- 💰 Fund contract directly from UI
- 📤 Owner-only withdraw button
- 👑 Automatically detects contract owner
- 🏆 Shows top contributors
- 📜 Displays recent funding activity
- 📈 Optional funding goal progress bar

---

# 🛠️ Tech Stack

## Blockchain

- Solidity `^0.8.18`
- Ethereum
- Sepolia Testnet
- Chainlink Price Feeds
- Remix IDE

## Frontend

- Next.js
- React.js
- RainbowKit
- wagmi
- viem
- WalletConnect
- MetaMask

---

# 📂 Repository Structure

```
FundMe/
│
├── contracts/
│   ├── FundMe.sol
│   ├── Price_Converter.sol
│   └── aggregatorV3Interface.sol
│
└── frontend/
    │
    ├── lib/
    │   ├── contract.js
    │   ├── wagmiConfig.js
    │   └── useFunders.js
    │
    ├── pages/
    │   ├── _app.js
    │   └── index.js
    │
    ├── styles/
    │   └── globals.css
    │
    └── package.json
```

---

# ⚙️ Smart Contract Working

## Funding ETH

Users call:

```solidity
function fund() public payable {
    require(
        msg.value.getConversionRate() >= MINIMUM_USD,
        "Didn't send enough ETH"
    );

    funders.push(msg.sender);
    addressToAmountFunded[msg.sender] += msg.value;
}
```

The contract:

- receives ETH
- converts ETH value → USD
- verifies minimum amount
- stores contributor data

---

# 🔮 Chainlink Price Feed

The contract connects with Chainlink:

```solidity
AggregatorV3Interface pricefeed =
AggregatorV3Interface(
0x694AA1769357139BE9E8931Fb34877dD2b32d976
);
```

It fetches real-time ETH/USD price data:

```solidity
latestRoundData()
```

The library converts:

```
ETH Amount × ETH/USD Price = USD Value
```

---

# 🔐 Withdraw System

Only the deployer can withdraw:

```solidity
modifier onlyowner {
    require(
        msg.sender == i_owner,
        "Sender is not owner"
    );
    _;
}
```

Withdrawal process:

1. Reset all funder balances
2. Clear funder array
3. Transfer ETH balance to owner

Uses:

```solidity
.call{value: amount}()
```

instead of `transfer()` for better gas compatibility.

---

# 📩 Receive & Fallback

Direct ETH transfers are handled:

```solidity
receive() external payable {
    fund();
}

fallback() external payable {
    fund();
}
```

Any ETH sent directly still follows the funding rules.

---

# 🚀 Frontend Setup

Move into frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

## WalletConnect Setup

Create a free project:

https://cloud.walletconnect.com

Get Project ID.

Create:

```bash
.env.local
```

Add:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
NEXT_PUBLIC_FUNDME_ADDRESS=
```

---

# ▶️ Run Locally

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🔑 Wallet Authentication

This DApp has no traditional login.

Authentication works through Ethereum wallets.

RainbowKit connects the wallet.

The frontend checks:

```solidity
i_owner()
```

and compares:

```
connected wallet == contract owner
```

If true:

- Withdraw UI appears

If false:

- User can only fund

The contract itself still enforces security through the `onlyowner` modifier.

---

# 🏆 Funders Tracking

The frontend reads:

```solidity
funders(index)
```

because public Solidity arrays automatically create getter functions.

It builds:

- Top contributors
- Recent activity
- Contribution ranking

using:

```solidity
addressToAmountFunded(address)
```

No contract redeployment required.

---

# ⚠️ Current Limitations

The contract does not emit events.

Therefore:

- Transaction history cannot be indexed efficiently
- Individual donation amounts are not stored separately

Future improvement:

```solidity
event Funded(
    address indexed funder,
    uint256 amount
);
```

Then frontend can listen using:

```javascript
useWatchContractEvent()
```

---

# 🚀 Future Improvements

- 🧪 Add Foundry testing framework
- ⛽ Replace require strings with custom errors
- 📢 Add Solidity events
- 📊 Add indexed funding history
- ⚡ Optimize withdrawal gas usage
- 🏦 Multi-campaign crowdfunding support
- 🌍 Deploy production frontend

---

# 🧠 Concepts Learned

- Solidity storage
- mappings
- dynamic arrays
- libraries
- Chainlink oracle integration
- payable functions
- receive/fallback
- modifiers
- immutable variables
- wallet connection
- smart contract frontend integration
- reading/writing blockchain state

---

# 📜 License

MIT License

---

Built while learning Ethereum Smart Contract Development 🚀

# ⚡ ChainAudit — Solana Smart Contract Security Auditor

> AI-powered live security auditing for **any** Solana project — smart contracts, DeFi frontends, DEXes, staking protocols, launchpads, and more.

![ChainAudit](https://img.shields.io/badge/Solana-Security%20Auditor-9945FF?style=for-the-badge&logo=solana)
![Model](https://img.shields.io/badge/Powered%20by-Claude%203.5%20Sonnet-14F195?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 🔗 Live Demo

**[https://easytrend.github.io/chainaudit](https://easytrend.github.io/chainaudit)**

## ✨ Features

- 🦀 **Rust / Anchor smart contract auditing** — signer checks, arithmetic safety, CPI safety, PDA derivation, ownership validation, reentrancy, upgrade authority
- 🌐 **Solana Web3 Frontend auditing** — React/JS/TS apps using `@solana/web3.js`, wallet adapters, SPL tokens
- 🏗️ **Universal architectural auditing** — DEX, DeFi, Staking, Swap, Launchpads, Liquidity Protocols — any Solana project
- 📦 **Live GitHub repo fetching** — paste any GitHub URL and the app fetches the actual source code automatically
- 🎯 **8 configurable audit scopes** — toggle exactly what to check
- 📊 **Rich report UI** — security score ring, severity breakdown, collapsible findings, executive summary, recommendations
- 🔑 **Your key, your data** — API key stored locally in your browser only

## 🚀 Usage

1. Open the app at the live URL above
2. Click **"Configure API"** → enter your [Anthropic API key](https://console.anthropic.com)
3. Paste a GitHub repo URL **or** paste Rust/JS source code directly
4. Select your audit scope
5. Click **Run Security Audit** 🟢

## 🛡️ Supported Project Types

| Type | Examples |
|------|---------|
| Rust Smart Contracts | Anchor programs, native Solana programs |
| DeFi Frontends | Swap UIs, wallet apps, dashboards |
| DEX Protocols | AMMs, order books, liquidity pools |
| Staking Programs | Single/dual token staking, yield farming |
| Launchpads | IDO platforms, token sales |
| Lending Protocols | Collateral, liquidation logic |

## 🔧 Self-Hosting

Just open `index.html` in any web server. No build step needed — it's a single HTML file.

```bash
# Python
python -m http.server 3000

# Node.js
npx serve .
```

## 📄 License

MIT — built by [easytrend](https://github.com/easytrend)

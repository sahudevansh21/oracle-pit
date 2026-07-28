<div align="center">

  <h1>🎯 Oracle Pit</h1>
  <p><strong>The Future Has a Price. Trade What Happens Next.</strong></p>
  <p>A next-generation, high-performance prediction market platform built for Base Chain.</p>

  <p>
    <a href="https://oracle-pit.vercel.app"><strong>🌐 Live Demo App »</strong></a>
    &nbsp;&nbsp;•&nbsp;&nbsp;
    <a href="https://github.com/sahudevansh21/oracle-pit"><strong>📦 GitHub Repository »</strong></a>
  </p>

  <br />

</div>

---

## 📌 Overview

**Oracle Pit** is an interactive, light-themed prediction market application built on **Base L2**. It enables users to trade YES/NO outcome shares on real-world events, crypto price movements, sports matches, political elections, and creator-made custom markets with instant settlement and fully on-chain oracle verification.

Designed with a sleek, futuristic **XUSAI-inspired glassmorphic aesthetic**, Oracle Pit features a sticky floating pill navbar, live portfolio snapshot dashboards, real-time probability area charts, and permissionless market creation.

---

## 🚀 Live Links & Deployment

| Resource | Link |
| :--- | :--- |
| 🌐 **Production Web App** | [https://oracle-pit.vercel.app](https://oracle-pit.vercel.app) |
| 📦 **GitHub Repository** | [https://github.com/sahudevansh21/oracle-pit](https://github.com/sahudevansh21/oracle-pit) |
| ⚡ **Vercel Alias** | [https://web3-nine-self.vercel.app](https://web3-nine-self.vercel.app) |

---

## ✨ Key Features

### 1. 📈 Prediction Market Trading Engine
- **YES/NO Outcome Shares**: Trade probability-priced outcome tokens with continuous automated market maker (AMM) liquidity.
- **Interactive Price & Probability Charts**: View real-time probability trends over time built with Recharts.
- **Order Book & Activity Feed**: Inspect live order books, buy/sell depth, holder distributions, and recent trades.

### 2. 🎨 XUSAI-Style Light UI & Hero Section
- **Floating Pill Navbar**: Glassmorphic top navigation bar with auto-floating scroll dynamics and quick wallet connectivity.
- **Live Portfolio Dashboard Mockup**: Embedded interactive portfolio snapshot displaying portfolio value, win rates, open positions, and claimable payouts.
- **Curated Color Tokens**: Crisp white-to-light-blue gradient background (`#FFFFFF` → `#EAF1FC`), near-black slate typography (`#0F172A`), and primary blue accents (`#3B6DF0`).

### 3. 🛡️ Web3 & Base L2 Integration
- **RainbowKit & Wagmi**: Native Web3 wallet connection supporting MetaMask, Coinbase Wallet, WalletConnect, and Rainbow.
- **Base Chain Native**: Sub-second transaction confirmation times and low gas fee execution.

### 4. 🏆 Leaderboard & Creator Pre-Sale Markets
- **Trader Leaderboard**: Track top volume and profit leaders in real time.
- **Permissionless Market Creation**: Propose custom markets with custom outcome labels, resolution dates, and liquidity bonding.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design System
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Web3 Stack**: [Wagmi](https://wagmi.sh/), [RainbowKit](https://www.rainbowkit.com/), [Viem](https://viem.sh/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) & [TanStack Query](https://tanstack.com/query)
- **Backend / Database Integration**: [Supabase](https://supabase.com/) client with fallback mock store
- **Deployment**: [Vercel](https://vercel.com/)

---

## ⚙️ Local Development & Setup

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sahudevansh21/oracle-pit.git
   cd oracle-pit
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=3a8170812b534d0ff9d794f19a901d64
   NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Run the local development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:3001](http://localhost:3001) (or `http://localhost:3000`).

---

## 📂 Project Structure

```text
oracle-pit/
├── src/
│   ├── app/                    # Next.js App Router pages (Home, Markets, Leaderboard, Create, Pre-Sale)
│   ├── components/
│   │   ├── layout/             # Master Navbar, Footer, CategoryStrip, PriceTicker
│   │   ├── market/             # MarketCard, MatchCard, ProbabilityChart, TradePanel, OrderBook
│   │   ├── marketing/          # Hero, DashboardMockup, FeatureGridXusai, UseCaseSplit
│   │   ├── ui/                 # Reusable UI primitives (Button, Card, Input, Tabs, Dialog)
│   │   └── web3/               # ConnectButton wrapper
│   ├── lib/                    # API client, mock data, Supabase connection, TypeScript definitions
│   ├── providers/              # Web3Provider & ThemeProvider
│   └── store/                  # Zustand trading state store
├── public/                     # Static assets & icons
├── tailwind.config.ts          # Design tokens & color system
└── package.json
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

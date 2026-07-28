"use client";

import * as React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  lightTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  injectedWallet,
  phantomWallet,
  rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, WagmiProvider, http, fallback } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const WALLET_CONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64";

const connectors = connectorsForWallets(
  [
    {
      group: "Popular",
      wallets: [
        rainbowWallet,
        coinbaseWallet,
        metaMaskWallet,
        walletConnectWallet,
        injectedWallet,
        phantomWallet,
        rabbyWallet,
      ],
    },
  ],
  {
    appName: "Oracle Pit",
    projectId: WALLET_CONNECT_PROJECT_ID,
  }
);

const config = createConfig({
  connectors,
  chains: [base],
  transports: {
    [base.id]: fallback([
      http("https://mainnet.base.org", { timeout: 8_000 }),
      http("https://base.llamarpc.com", { timeout: 8_000 }),
      http("https://1rpc.io/base", { timeout: 8_000 }),
      http("https://base.drpc.org", { timeout: 8_000 }),
    ]),
  },
  ssr: true,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Prevent unhandled WalletConnect RPC connection errors from breaking Next.js runtime
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason?.message?.includes("Connection interrupted while trying to subscribe") ||
        event.reason?.message?.includes("WebSocket") ||
        event.reason?.message?.includes("walletconnect")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () => window.removeEventListener("unhandledrejection", handleUnhandledRejection);
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={lightTheme({
            accentColor: "#3B6DF0",
            accentColorForeground: "#FFFFFF",
            borderRadius: "medium",
          })}
          modalSize="compact"
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}


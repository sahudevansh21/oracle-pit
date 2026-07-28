import {
  mockMarkets,
  mockLeaderboard,
  CURRENT_USER,
  genComments,
  genHolders,
  genOrderBook,
  genActivity,
} from "./mockMarkets";
import type { Market, MarketCategory, LeaderboardEntry, Comment, Holder, OrderBook, Trade, Position } from "./types";
import { supabase, isSupabaseConfigured } from "./supabase";

let marketStore: Market[] = [...mockMarkets];

export async function getMarkets(params?: {
  category?: MarketCategory | "all";
  status?: Market["status"];
}): Promise<Market[]> {
  if (isSupabaseConfigured()) {
    try {
      let query = supabase.from("markets").select("*");
      if (params?.category && params.category !== "all") {
        query = query.eq("category", params.category);
      }
      if (params?.status) {
        query = query.eq("status", params.status);
      }
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data as Market[];
      }
    } catch (err) {
      console.warn("Supabase fetch failed, falling back to local store", err);
    }
  }

  let results = [...marketStore];
  if (params?.category && params.category !== "all") {
    results = results.filter((m) => m.category === params.category);
  }
  if (params?.status) {
    results = results.filter((m) => m.status === params.status);
  }
  return results;
}

export async function getMarketBySlug(slug: string): Promise<Market | undefined> {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from("markets").select("*").eq("slug", slug).single();
      if (!error && data) return data as Market;
    } catch (err) {
      console.warn("Supabase getMarketBySlug failed", err);
    }
  }

  return marketStore.find((m) => m.slug === slug);
}

export async function getFeaturedMarkets(): Promise<Market[]> {
  const markets = await getMarkets({ status: "live" });
  return markets.filter((m) => m.featured && m.status === "live");
}

export async function getEndingSoonMarkets(limit = 8): Promise<Market[]> {
  const liveMarkets = await getMarkets({ status: "live" });
  return [...liveMarkets]
    .sort((a, b) => new Date(a.resolutionDate).getTime() - new Date(b.resolutionDate).getTime())
    .slice(0, limit);
}

export async function getMarketsByCategory(category: MarketCategory, limit?: number): Promise<Market[]> {
  const catMarkets = await getMarkets({ category, status: "live" });
  return limit ? catMarkets.slice(0, limit) : catMarkets;
}

export async function getPresaleMarkets(): Promise<Market[]> {
  return getMarkets({ status: "presale" });
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from("leaderboard").select("*").order("rank", { ascending: true });
      if (!error && data && data.length > 0) return data as LeaderboardEntry[];
    } catch (err) {
      console.warn("Supabase getLeaderboard failed", err);
    }
  }
  return mockLeaderboard;
}

export async function getComments(marketId: string): Promise<Comment[]> {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from("comments").select("*").eq("market_id", marketId);
      if (!error && data && data.length > 0) return data as Comment[];
    } catch (err) {
      console.warn("Supabase getComments failed", err);
    }
  }
  return genComments(marketId);
}

export async function getHolders(marketId: string): Promise<Holder[]> {
  const market = marketStore.find((m) => m.id === marketId);
  if (!market) return [];
  return genHolders(marketId, market.outcomes);
}

export async function getOrderBook(marketId: string): Promise<OrderBook | undefined> {
  const market = marketStore.find((m) => m.id === marketId);
  if (!market) return undefined;
  const yesOutcome = market.outcomes.find((o) => o.id === "yes" || o.id === "home" || o.id === "a");
  return genOrderBook(yesOutcome?.probability ?? market.outcomes[0].probability);
}

export async function getActivity(marketId: string): Promise<Trade[]> {
  const market = marketStore.find((m) => m.id === marketId);
  if (!market) return [];
  return genActivity(market.id, market.slug, market.title, market.outcomes);
}

export async function getCurrentUser() {
  return CURRENT_USER;
}

export async function getPortfolioPositions(): Promise<Position[]> {
  const live = marketStore.filter((m) => m.status === "live").slice(0, 6);
  return live.map((m, i) => {
    const outcome = m.outcomes[i % m.outcomes.length];
    const avgPrice = Math.max(5, outcome.probability - 8 + Math.random() * 6);
    const shares = Math.floor(50 + Math.random() * 900);
    return {
      id: `pos-${m.id}`,
      marketId: m.id,
      marketSlug: m.slug,
      marketTitle: m.title,
      outcomeId: outcome.id,
      outcomeLabel: outcome.label,
      position: outcome.id === "yes" || outcome.id === "home" || outcome.id === "a" ? "yes" : "no",
      shares,
      avgPrice: Math.round(avgPrice * 100) / 100,
      currentPrice: outcome.probability,
      invested: Math.round(shares * (avgPrice / 100) * 100) / 100,
      status: m.status,
      claimable: false,
    };
  });
}

interface ProposeMarketInput {
  title: string;
  description: string;
  category: MarketCategory;
  resolutionDate: string;
  kind: Market["kind"];
  outcomeLabels: string[];
  bondAmount: number;
  creatorHandle: string;
}

export async function proposeMarket(input: ProposeMarketInput): Promise<Market> {
  const slug = input.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const evenProb = Math.round(100 / input.outcomeLabels.length);
  const market: Market = {
    id: `presale-${Date.now()}`,
    slug: `${slug}-${Date.now().toString(36)}`,
    title: input.title,
    description: input.description,
    category: input.category,
    kind: input.kind,
    outcomes: input.outcomeLabels.map((label, i) => ({
      id: `o${i}`,
      label,
      probability: evenProb,
      multiplier: Math.round((100 / evenProb) * 100) / 100,
    })),
    volume: 0,
    comments: 0,
    resolutionDate: input.resolutionDate,
    status: "presale",
    priceHistory: [{ t: Date.now(), yes: evenProb }],
    liquidity: input.bondAmount,
    bondStaked: input.bondAmount,
    creator: { handle: input.creatorHandle, avatar: "https://api.dicebear.com/9.x/identicon/svg?seed=" + input.creatorHandle },
    rules: "Resolution criteria set by creator; verified by optimistic oracle at market close.",
    oracleSource: "UMA Optimistic Oracle",
  };

  if (isSupabaseConfigured()) {
    try {
      await supabase.from("markets").insert([market]);
    } catch (err) {
      console.warn("Supabase market insert failed", err);
    }
  }

  marketStore = [market, ...marketStore];
  return market;
}

export async function backPresaleMarket(marketId: string, amount: number): Promise<Market | undefined> {
  const market = marketStore.find((m) => m.id === marketId);
  if (!market) return undefined;
  market.volume += amount;
  market.liquidity += amount;

  if (isSupabaseConfigured()) {
    try {
      await supabase.from("markets").update({ volume: market.volume, liquidity: market.liquidity }).eq("id", marketId);
    } catch (err) {
      console.warn("Supabase market update failed", err);
    }
  }

  return market;
}

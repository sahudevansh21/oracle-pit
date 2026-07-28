import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MarketCard } from "@/components/market/MarketCard";
import { MatchCard } from "@/components/market/MatchCard";
import { Hero } from "@/components/marketing/Hero";
import { FeatureGridXusai } from "@/components/marketing/FeatureGridXusai";
import { getFeaturedMarkets, getEndingSoonMarkets, getMarketsByCategory, getLeaderboard } from "@/lib/api";
import { CATEGORY_LABELS, formatVolume } from "@/lib/format";
import type { MarketCategory } from "@/lib/types";

const RAIL_CATEGORIES: MarketCategory[] = ["crypto", "sports", "politics", "esports", "tech"];

export default async function Home() {
  const [featured, endingSoon, leaderboard] = await Promise.all([
    getFeaturedMarkets(),
    getEndingSoonMarkets(8),
    getLeaderboard(),
  ]);

  const categorySections = await Promise.all(
    RAIL_CATEGORIES.map(async (category) => ({
      category,
      markets: await getMarketsByCategory(category, 4),
    }))
  );

  return (
    <div className="flex flex-col gap-16 pb-16 bg-[#FFFFFF] text-slate-900">
      {/* Re-themed XUSAI-style Hero section with floating navbar & live portfolio mockup */}
      <Hero />

      {/* Feature Row on soft blue panel */}
      <FeatureGridXusai />

      {/* Featured markets rail */}
      <section className="container flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Featured Markets</h2>
          <Link href="/markets" className="text-sm font-semibold text-blue-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {featured.map((market) => (
            <MatchCard key={market.id} market={market} />
          ))}
        </div>
      </section>

      {/* Ending soon */}
      <section className="container flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Ending Soon</h2>
          <Link href="/markets" className="text-sm font-semibold text-blue-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {endingSoon.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </section>

      {/* Category sections */}
      {categorySections.map(({ category, markets }) =>
        markets.length ? (
          <section key={category} className="container flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                {CATEGORY_LABELS[category]} <span className="text-slate-500 font-normal">({markets.length} total)</span>
              </h2>
              <Link href={`/${category}`} className="text-sm font-semibold text-blue-600 hover:underline">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {markets.map((market) => (
                <MarketCard key={market.id} market={market} />
              ))}
            </div>
          </section>
        ) : null
      )}

      {/* Leaderboard preview */}
      <section className="container flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Top Traders</h2>
          <Link href="/leaderboard" className="text-sm font-semibold text-blue-600 hover:underline">
            Full leaderboard
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {leaderboard.slice(0, 3).map((entry) => (
            <Card key={entry.handle} className="flex items-center gap-4 p-4 bg-white border border-slate-200 shadow-sm">
              <span className="font-mono text-2xl font-bold text-slate-400">#{entry.rank}</span>
              <Avatar className="size-10">
                <AvatarImage src={entry.avatar} alt="" />
                <AvatarFallback>{entry.handle[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col">
                <span className="font-semibold text-slate-900">{entry.handle}</span>
                <span className="font-mono text-xs text-slate-500">{formatVolume(entry.volume)} volume</span>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm font-semibold text-emerald-600">{formatVolume(entry.profit)}</div>
                <div className="text-xs text-slate-500">{entry.marketsCreated} markets</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

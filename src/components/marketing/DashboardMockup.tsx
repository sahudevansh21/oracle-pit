"use client";

import {
  LayoutDashboard,
  TrendingUp,
  Briefcase,
  Trophy,
  Settings,
  Share2,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SAMPLE_CHART_DATA = [
  { month: "Jan 1", val: 32000 },
  { month: "Jan 15", val: 41000 },
  { month: "Feb 1", val: 38000 },
  { month: "Feb 15", val: 54000 },
  { month: "Mar 1", val: 62000 },
  { month: "Mar 15", val: 74000 },
  { month: "Mar 28", val: 82450 },
];

const SAMPLE_POSITIONS = [
  { market: "BTC Up or Down – 5 Min", outcome: "YES", shares: "1,250", val: "$800.00", profit: "+18.4%" },
  { market: "Will Fed Cut Rates in Q3?", outcome: "YES", shares: "3,400", val: "$2,176.00", profit: "+24.1%" },
  { market: "Man City vs Bournemouth", outcome: "HOME", shares: "850", val: "$595.00", profit: "+9.2%" },
];

export function DashboardMockup() {
  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] overflow-hidden text-left font-sans">
      <div className="grid grid-cols-12 min-h-[520px]">
        {/* Left Sidebar */}
        <div className="col-span-3 border-r border-slate-100 bg-slate-50/50 p-5 flex flex-col justify-between hidden sm:flex">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 font-bold text-sm text-slate-900 px-3 py-2">
              <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs">
                OP
              </div>
              <span>Oracle Pit</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-sm">
                <Briefcase className="w-4 h-4" />
                <span>My Portfolio</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl transition-colors cursor-pointer">
                <TrendingUp className="w-4 h-4" />
                <span>Markets</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl transition-colors cursor-pointer">
                <Trophy className="w-4 h-4" />
                <span>Leaderboard</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl transition-colors cursor-pointer">
                <LayoutDashboard className="w-4 h-4" />
                <span>Pre-Sale</span>
              </div>
            </div>

            <div className="pt-4 space-y-1 border-t border-slate-200/60">
              <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 rounded-xl transition-colors cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </div>
            </div>
          </div>

          {/* Connected Wallet Pill */}
          <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold text-slate-800">0x7F...3B92</span>
            </div>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              Base
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-12 sm:col-span-9 p-6 sm:p-8 space-y-6 bg-white">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900">
                  My Portfolio
                </h3>
                <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex -space-x-1.5">
                  <img
                    className="w-5 h-5 rounded-full border border-white"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 rounded-full border border-white"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt=""
                  />
                  <img
                    className="w-5 h-5 rounded-full border border-white"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt=""
                  />
                </div>
                <span className="text-xs text-slate-500">Ava, Liam, Noah +12 others</span>
              </div>
            </div>

            <button className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-colors">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>

          {/* Tab Row */}
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 border-b border-slate-100 pb-3">
            <span className="text-blue-600 border-b-2 border-blue-600 pb-3 -mb-3 font-bold">
              Overview
            </span>
            <span className="hover:text-slate-900 cursor-pointer">Positions</span>
            <span className="hover:text-slate-900 cursor-pointer">Activity</span>
          </div>

          {/* 4 Stat Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="text-xs text-slate-500 font-medium">Portfolio Value</div>
              <div className="text-2xl font-bold font-mono text-slate-900 mt-1.5">
                $82,450
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" /> +4.2%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="text-xs text-slate-500 font-medium">Open Positions</div>
              <div className="text-2xl font-bold font-mono text-slate-900 mt-1.5">
                14
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" /> +2 new
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="text-xs text-slate-500 font-medium">Win Rate</div>
              <div className="text-2xl font-bold font-mono text-slate-900 mt-1.5">
                68%
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" /> +3.5%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div className="text-xs text-slate-500 font-medium">Claimable</div>
              <div className="text-2xl font-bold font-mono text-slate-900 mt-1.5">
                $1,240
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3" /> Ready
              </div>
            </div>
          </div>

          {/* Chart & Positions Table Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Recharts Blue Area Chart */}
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800">Portfolio Growth</span>
                <span className="font-mono text-xs font-bold text-blue-600">+157% YTD</span>
              </div>

              <div className="h-36 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SAMPLE_CHART_DATA}>
                    <defs>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" hide />
                    <YAxis hide domain={["auto", "auto"]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        borderColor: "#e2e8f0",
                        borderRadius: "12px",
                        fontSize: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="val"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#blueGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Positions Table Card */}
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800">Top Positions</span>
                <span className="text-[11px] text-blue-600 font-medium cursor-pointer hover:underline">View all</span>
              </div>

              <div className="space-y-2.5 pt-1">
                {SAMPLE_POSITIONS.map((pos, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 text-xs">
                    <div>
                      <div className="font-semibold text-slate-900 line-clamp-1">{pos.market}</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="px-1.5 py-0.2 rounded font-bold text-[10px] bg-emerald-100 text-emerald-700">
                          {pos.outcome}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">{pos.shares} shares</span>
                      </div>
                    </div>
                    <div className="text-right font-mono">
                      <div className="font-bold text-slate-900">{pos.val}</div>
                      <div className="text-[10px] text-emerald-600 font-semibold">{pos.profit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

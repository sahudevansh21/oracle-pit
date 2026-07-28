"use client";

import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  LayoutDashboard,
  BarChart3,
  Globe,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  Share2,
  MoreHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroShowcase() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EBF5FF] via-[#F3F8FF] to-[#FFFFFF] dark:from-[#0A0A0A] dark:via-[#0F172A] dark:to-[#0A0A0A] overflow-hidden border-b border-black/5 dark:border-white/10">
      {/* Background Curved Glow Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-400/20 via-cyan-300/10 to-transparent rounded-full blur-[100px]" />
        <svg
          className="absolute inset-0 w-full h-full stroke-blue-400/20 dark:stroke-blue-500/10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-200 100 Q 600 400 1400 100" strokeWidth="1.5" />
          <path d="M-200 200 Q 600 500 1400 200" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* User Avatars Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#12181F]/80 border border-black/10 dark:border-white/10 shadow-md backdrop-blur-md mb-6"
        >
          <span className="text-xs font-semibold text-[#0A0A0A] dark:text-[#E6EDF3]">
            3,500+ Pro Traders
          </span>
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-[#12181F]"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 1"
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-[#12181F]"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 2"
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-[#12181F]"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 3"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#1E293B] dark:text-[#E6EDF3] max-w-4xl leading-[1.15] font-sans"
        >
          Transforming Predictions into <br />
          <span className="font-semibold bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
            Liquid Visual Experiences
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-[#64748B] dark:text-[#8A97A6] max-w-2xl font-normal leading-relaxed"
        >
          We create unique digital solutions that elevate your on-chain trading. Stand out in a crowded marketplace with our innovative YES/NO prediction engine.
        </motion.p>

        {/* Action Pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/markets"
            className="px-8 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/30 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Floating App Dashboard Component Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-5xl bg-white dark:bg-[#12181F] rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl shadow-blue-500/10 overflow-hidden text-left"
        >
          <div className="grid grid-cols-12 min-h-[540px]">
            {/* Sidebar */}
            <div className="col-span-3 border-r border-black/5 dark:border-white/5 bg-[#F8FAFC] dark:bg-[#0E1318] p-5 flex flex-col justify-between hidden sm:flex">
              <div className="space-y-6">
                <div className="flex items-center gap-2 font-bold text-sm text-[#0A0A0A] dark:text-white px-3 py-2">
                  <LayoutDashboard className="w-4 h-4 text-blue-500" />
                  <span>Dashboard</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-500 text-white font-medium text-xs shadow-sm">
                    <BarChart3 className="w-4 h-4" />
                    <span>Report</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>Product</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Users className="w-4 h-4" />
                    <span>Customers</span>
                  </div>
                </div>

                <div className="pt-4 space-y-1 border-t border-black/5 dark:border-white/5">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                    Financials
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <CreditCard className="w-4 h-4" />
                    <span>Transactions</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Invoices</span>
                  </div>
                </div>

                <div className="pt-4 space-y-1 border-t border-black/5 dark:border-white/5">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                    Tools
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <HelpCircle className="w-4 h-4" />
                    <span>Help</span>
                  </div>
                </div>
              </div>

              {/* Upgrade Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white space-y-2 border border-slate-700">
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Upgrade To Premium
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Discover the benefits of upgrading to Premium!
                </p>
                <button className="w-full py-1.5 rounded-xl bg-white text-slate-900 font-bold text-[11px] hover:bg-slate-100 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>

            {/* Main Area */}
            <div className="col-span-12 sm:col-span-9 p-6 sm:p-8 space-y-6">
              {/* Header Bar */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Oracle Pit Dashboard
                    </h3>
                    <MoreHorizontal className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex -space-x-1.5">
                      <img
                        className="w-5 h-5 rounded-full border border-white dark:border-slate-800"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt=""
                      />
                      <img
                        className="w-5 h-5 rounded-full border border-white dark:border-slate-800"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                        alt=""
                      />
                      <img
                        className="w-5 h-5 rounded-full border border-white dark:border-slate-800"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                        alt=""
                      />
                    </div>
                    <span className="text-xs text-slate-400">Ava, Liam, Noah +12 others</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3.5 py-1.5 rounded-full bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm">
                    <Share2 className="w-3.5 h-3.5" /> Share
                  </button>
                </div>
              </div>

              {/* Sub Navigation Pills */}
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="text-blue-500 border-b-2 border-blue-500 pb-3 -mb-3">
                  All Overview
                </span>
                <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">
                  AI Reports
                </span>
                <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">
                  Smart Analytics
                </span>
              </div>

              {/* Stat Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Revenue</span>
                    <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-2">
                    $200K
                  </div>
                  <div className="text-[11px] text-emerald-500 font-semibold mt-0.5">+5%</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Users</span>
                    <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-2">
                    1.2K
                  </div>
                  <div className="text-[11px] text-emerald-500 font-semibold mt-0.5">+3%</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Sessions</span>
                    <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-2">
                    3.4K
                  </div>
                  <div className="text-[11px] text-emerald-500 font-semibold mt-0.5">+7%</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Bounce Rate</span>
                    <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-2">
                    45%
                  </div>
                  <div className="text-[11px] text-rose-500 font-semibold mt-0.5">-2%</div>
                </div>
              </div>

              {/* Charts & Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Monthly Volume Area Chart */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Monthly Revenue
                    </span>
                    <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                    $80K <span className="text-xs text-blue-500 font-normal">+2%</span>
                  </div>

                  {/* SVG Area Chart */}
                  <div className="h-28 w-full pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 60 Q 50 30 100 50 T 200 20 T 300 35 L 300 80 L 0 80 Z"
                        fill="url(#chartGrad)"
                      />
                      <path
                        d="M0 60 Q 50 30 100 50 T 200 20 T 300 35"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                  </div>
                </div>

                {/* Outcome Breakdown Table */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Card Title
                    </span>
                    <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  <div className="grid grid-cols-3 text-[11px] font-semibold text-slate-400 border-b border-slate-200 dark:border-slate-700/60 pb-2">
                    <span>Main Title</span>
                    <span>Secondary Title</span>
                    <span>Tertiary Title</span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="grid grid-cols-3 text-slate-700 dark:text-slate-300">
                      <span className="font-bold text-blue-500">42</span>
                      <span>37</span>
                      <span>29</span>
                    </div>
                    <div className="grid grid-cols-3 text-slate-600 dark:text-slate-400 font-sans text-[11px]">
                      <span className="text-blue-500 font-medium">Blue</span>
                      <span className="text-rose-500 font-medium">Red</span>
                      <span className="text-emerald-500 font-medium">Green</span>
                    </div>
                    <div className="grid grid-cols-3 text-slate-600 dark:text-slate-400 font-sans text-[11px]">
                      <span>Giraffe</span>
                      <span>Elephant</span>
                      <span>Tiger</span>
                    </div>
                    <div className="grid grid-cols-3 text-slate-600 dark:text-slate-400 font-sans text-[11px]">
                      <span>Sunshine</span>
                      <span>Rainfall</span>
                      <span>Thunderstorm</span>
                    </div>
                    <div className="grid grid-cols-3 text-slate-600 dark:text-slate-400 font-sans text-[11px]">
                      <span>Mountain Peak</span>
                      <span>Desert Oasis</span>
                      <span>Forest Clearing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

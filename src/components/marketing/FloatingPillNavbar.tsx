"use client";

import Link from "next/link";
import { Crosshair, ArrowRight } from "lucide-react";

export function FloatingPillNavbar() {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-5xl h-14 px-4 sm:px-6 rounded-full bg-white/90 dark:bg-[#12181F]/90 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] p-0.5 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[6px] flex items-center justify-center">
              <Crosshair className="w-4 h-4 text-[#3B82F6] group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-bold text-base tracking-tight text-[#0A0A0A] dark:text-[#E6EDF3] group-hover:text-[#3B82F6] transition-colors">
            Oracle Pit
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
          <Link
            href="/"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0A0A0A] dark:text-[#E6EDF3] bg-white dark:bg-[#1F2933] shadow-sm"
          >
            Home
          </Link>
          <Link
            href="/markets"
            className="px-4 py-1.5 rounded-full text-xs font-medium text-[#8A97A6] hover:text-[#0A0A0A] dark:hover:text-[#E6EDF3] transition-colors"
          >
            Markets
          </Link>
          <Link
            href="/leaderboard"
            className="px-4 py-1.5 rounded-full text-xs font-medium text-[#8A97A6] hover:text-[#0A0A0A] dark:hover:text-[#E6EDF3] transition-colors"
          >
            Leaderboard
          </Link>
          <Link
            href="/create"
            className="px-4 py-1.5 rounded-full text-xs font-medium text-[#8A97A6] hover:text-[#0A0A0A] dark:hover:text-[#E6EDF3] transition-colors"
          >
            Create
          </Link>
          <Link
            href="/presale"
            className="px-4 py-1.5 rounded-full text-xs font-medium text-[#8A97A6] hover:text-[#0A0A0A] dark:hover:text-[#E6EDF3] transition-colors"
          >
            Pre-Sale
          </Link>
        </nav>

        {/* Launch App Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/markets"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold text-xs transition-all duration-200 shadow-md shadow-blue-500/25 flex items-center gap-1.5 group hover:scale-[1.02] active:scale-[0.98]"
          >
            Launch App
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </header>
    </div>
  );
}

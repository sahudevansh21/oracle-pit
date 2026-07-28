"use client";

import Link from "next/link";
import { Crosshair, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function MarketingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0A0A0A]/80 border-b border-[#1F2933] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#8B7BF0] p-0.5 flex items-center justify-center shadow-lg shadow-[#F5A623]/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
              <Crosshair className="w-5 h-5 text-[#F5A623] group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight text-[#E6EDF3] group-hover:text-[#F5A623] transition-colors">
            Oracle Pit
          </span>
          <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/30 rounded-full">
            Base
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/markets"
            className="text-sm font-medium text-[#8A97A6] hover:text-[#E6EDF3] transition-colors"
          >
            Markets
          </Link>
          <Link
            href="/leaderboard"
            className="text-sm font-medium text-[#8A97A6] hover:text-[#E6EDF3] transition-colors"
          >
            Leaderboard
          </Link>
          <Link
            href="/create"
            className="text-sm font-medium text-[#8A97A6] hover:text-[#E6EDF3] transition-colors"
          >
            Create
          </Link>
          <Link
            href="/presale"
            className="text-sm font-medium text-[#8A97A6] hover:text-[#E6EDF3] transition-colors"
          >
            Pre-Sale
          </Link>
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/markets"
            className="px-5 py-2 rounded-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0A0A0A] font-semibold text-sm transition-all duration-200 shadow-md shadow-[#F5A623]/20 flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
          >
            Launch App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#8A97A6] hover:text-[#E6EDF3] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1F2933] bg-[#0A0A0A] px-4 pt-4 pb-6 space-y-4">
          <Link
            href="/markets"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#E6EDF3] hover:text-[#F5A623]"
          >
            Markets
          </Link>
          <Link
            href="/leaderboard"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#E6EDF3] hover:text-[#F5A623]"
          >
            Leaderboard
          </Link>
          <Link
            href="/create"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#E6EDF3] hover:text-[#F5A623]"
          >
            Create
          </Link>
          <Link
            href="/presale"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#E6EDF3] hover:text-[#F5A623]"
          >
            Pre-Sale
          </Link>
          <div className="pt-2">
            <Link
              href="/markets"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#F5A623] text-[#0A0A0A] font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              Launch App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

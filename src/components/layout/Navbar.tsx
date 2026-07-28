"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Target, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ConnectButton } from "@/components/web3/ConnectButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/markets", label: "Markets" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/create", label: "Create" },
  { href: "/presale", label: "Pre-Sale" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-3 z-50 w-full flex justify-center px-4 pointer-events-none transition-all duration-300">
      <header
        className={cn(
          "pointer-events-auto w-full max-w-6xl h-14 px-4 sm:px-6 rounded-full transition-all duration-300 flex items-center justify-between",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.10)]"
            : "bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900 tracking-tight group">
            <span className="flex size-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Target className="size-4.5" />
            </span>
            <span className="hidden sm:inline text-base group-hover:text-blue-600 transition-colors">
              Oracle Pit
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Search & Connect Wallet */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex relative w-44">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search..."
              className="h-8 pl-8 text-xs bg-slate-50 border-slate-200 text-slate-900 rounded-full placeholder:text-slate-400 focus-visible:ring-blue-500"
              aria-label="Search markets"
            />
          </div>

          <ConnectButton />

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-600 p-1 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 z-50 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col gap-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <ConnectButton />
          </div>
        </div>
      )}
    </div>
  );
}

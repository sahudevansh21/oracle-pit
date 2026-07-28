"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] via-[#F3F8FF] to-[#EAF1FC] text-slate-900 overflow-hidden border-b border-slate-200/60">
      {/* Background Subtle Mesh / Glow Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-400/15 via-cyan-300/10 to-transparent rounded-full blur-[120px]" />
      </div>

      {/* Hero Body */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Avatar Stack Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] mb-6"
        >
          <span className="text-xs font-semibold text-slate-900">
            3,500+ Pro Traders
          </span>
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 1"
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 2"
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 3"
            />
          </div>
        </motion.div>

        {/* Large Centered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.12] font-sans"
        >
          The Future Has a Price. <br />
          <span className="text-blue-600">Trade What Happens Next.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          Trade YES/NO outcome shares on real-world events, crypto, sports, and creator markets on Base chain with instant settlement and fully on-chain oracle verification.
        </motion.p>

        {/* Primary Blue Pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/markets"
            className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/30 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Trading
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Floating Live Dashboard Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 w-full flex justify-center"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

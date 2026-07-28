"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero3DCanvasLazy = dynamic(
  () => import("./Hero3DCanvas").then((mod) => mod.Hero3DCanvas),
  { ssr: false }
);

function CanvasFallback() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0A0A0A] via-[#12181F] to-[#0A0A0A] flex items-center justify-center pointer-events-none opacity-50">
      <div className="w-64 h-64 rounded-full border border-[#F5A623]/20 animate-ping opacity-20" />
    </div>
  );
}

export function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#1F2933]">
      {/* 3D WebGL Canvas Layer */}
      <Suspense fallback={<CanvasFallback />}>
        <Hero3DCanvasLazy />
      </Suspense>

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3DDC84]/15 via-[#8B7BF0]/15 to-[#FF5C72]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12181F]/90 border border-[#1F2933] text-xs font-semibold text-[#8A97A6] mb-8 shadow-xl backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
          <span>Base Chain Prediction Engine</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-pulse" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#E6EDF3] max-w-4xl leading-[1.1] font-sans"
        >
          The future has a price. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#3DDC84] via-[#F5A623] to-[#FF5C72] bg-clip-text text-transparent">
            Choose how you profit.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg sm:text-xl text-[#8A97A6] max-w-2xl font-normal leading-relaxed"
        >
          Trade YES/NO outcome shares on real-world events, crypto milestones, sports, and creator markets with instant settlement and fully on-chain oracle verification.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/markets"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0A0A0A] font-bold text-base transition-all duration-200 shadow-xl shadow-[#F5A623]/25 flex items-center justify-center gap-3 group hover:scale-[1.03] active:scale-[0.98]"
          >
            Start Trading
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/create"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#12181F] hover:bg-[#1F2933] border border-[#1F2933] text-[#E6EDF3] font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#8A97A6]/40"
          >
            Propose a Market
          </Link>
        </motion.div>

        {/* Interactive YES/NO floating preview indicators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 grid grid-cols-2 gap-4 max-w-md w-full"
        >
          <div className="p-3.5 rounded-xl bg-[#12181F]/80 border border-[#3DDC84]/30 backdrop-blur-md flex items-center justify-between shadow-lg hover:border-[#3DDC84] transition-colors group">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3DDC84] animate-ping" />
              <span className="font-bold text-sm text-[#3DDC84] tracking-wider uppercase">YES</span>
            </div>
            <span className="font-mono font-semibold text-sm text-[#E6EDF3]">64¢ (1.56x)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#12181F]/80 border border-[#FF5C72]/30 backdrop-blur-md flex items-center justify-between shadow-lg hover:border-[#FF5C72] transition-colors group">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5C72]" />
              <span className="font-bold text-sm text-[#FF5C72] tracking-wider uppercase">NO</span>
            </div>
            <span className="font-mono font-semibold text-sm text-[#E6EDF3]">36¢ (2.77x)</span>
          </div>
        </motion.div>

        {/* Feature Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8A97A6] font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#3DDC84]" />
            <span>UMA Optimistic Oracle</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#F5A623]" />
            <span>Base Sub-Second Finality</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8B7BF0]" />
            <span>Zero Lockup Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
}

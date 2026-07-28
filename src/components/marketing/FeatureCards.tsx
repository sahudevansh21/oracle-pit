"use client";

import dynamic from "next/dynamic";
import { TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const CardOrb3DLazy = dynamic(
  () => import("./CardOrb3D").then((mod) => mod.CardOrb3D),
  { ssr: false }
);

export function FeatureCards() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-b border-[#1F2933]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-semibold text-[#F5A623]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Engineered for Traders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#E6EDF3]">
            Built for speed, transparency, & precision
          </h2>
          <p className="text-base sm:text-lg text-[#8A97A6]">
            Trade probabilities with institutional precision and zero counterparty friction.
          </p>
        </div>

        {/* 3 Feature Strip Cards (Mix of Light Glass & Dark Violet/Amber Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Light Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-[#E6EDF3]/95 via-[#E6EDF3]/90 to-[#E6EDF3]/80 text-[#0A0A0A] border border-white/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-80">
              <CardOrb3DLazy color={0x3ddc84} type="sphere" />
            </div>

            <div className="space-y-4 pt-4">
              <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-[#3DDC84] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#0A0A0A]">
                Real-time odds
              </h3>
              <p className="text-sm font-medium text-[#1F2933]/80 leading-relaxed">
                Probability prices update continuously on-chain as market sentiment shifts. Watch live tick pulses with zero delay.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between font-mono text-xs font-semibold">
              <span className="text-[#3DDC84] font-bold">YES 64% ↑</span>
              <span className="text-[#FF5C72] font-bold">NO 36% ↓</span>
            </div>
          </motion.div>

          {/* Card 2: Dark Violet Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-[#12181F] to-[#12181F]/90 border border-[#8B7BF0]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-[#8B7BF0] transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-80">
              <CardOrb3DLazy color={0x8b7bf0} type="torus" />
            </div>

            <div className="space-y-4 pt-4">
              <div className="w-10 h-10 rounded-xl bg-[#8B7BF0]/20 border border-[#8B7BF0]/40 text-[#8B7BF0] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#E6EDF3]">
                Deep liquidity, instant settlement
              </h3>
              <p className="text-sm font-normal text-[#8A97A6] leading-relaxed">
                Powered by automated market maker (AMM) vaults. No lockup periods — enter or exit positions anytime before market resolution.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1F2933] flex items-center justify-between font-mono text-xs text-[#8B7BF0]">
              <span>Base L2 Execution</span>
              <span>Sub-Second Finality</span>
            </div>
          </motion.div>

          {/* Card 3: Dark Amber Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-[#12181F] to-[#12181F]/90 border border-[#F5A623]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-[#F5A623] transition-colors duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-80">
              <CardOrb3DLazy color={0xf5a623} type="octahedron" />
            </div>

            <div className="space-y-4 pt-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#E6EDF3]">
                Fully on-chain resolution
              </h3>
              <p className="text-sm font-normal text-[#8A97A6] leading-relaxed">
                Automated optimistic oracle verification eliminates centralized admin control. Transparent rules and instant payout claims.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1F2933] flex items-center justify-between font-mono text-xs text-[#F5A623]">
              <span>UMA Optimistic Oracle</span>
              <span>Trustless Claims</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

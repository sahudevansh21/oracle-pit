"use client";

import { LayoutGrid, TrendingUp, Layers, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function FeatureGridXusai() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EAF1FC] to-[#FFFFFF] border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
        {/* Innovate Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-blue-600"
        >
          <LayoutGrid className="w-4 h-4 text-blue-600" />
          <span>Innovate</span>
        </motion.div>

        {/* Section Heading & Subtext */}
        <div className="space-y-4 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900"
          >
            Turn Any Prediction <br />
            Into a Position
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base text-slate-600 font-normal"
          >
            Our platform turns real-world predictions into liquid, tradable assets with instant settlement.
          </motion.p>
        </div>

        {/* Soft Blue-Tinted Rounded Panel with 3 Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full p-6 sm:p-8 rounded-3xl bg-[#EAF1FC]/80 border border-blue-200/80 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.06)] grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              Real-Time Odds
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Live probability updates on-chain as market sentiment shifts continuously.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              Deep Liquidity
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instant settlement via automated market maker vaults. No lockups, trade anytime.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              On-Chain Resolution
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Oracle-verified outcomes via UMA optimistic oracle. Fully transparent and automated.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

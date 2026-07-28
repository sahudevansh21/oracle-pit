"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function IntroTwoColumn() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-b border-[#1F2933]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B7BF0]/10 border border-[#8B7BF0]/30 text-xs font-semibold text-[#8B7BF0]">
            <Compass className="w-3.5 h-3.5" />
            <span>Decentralized Prediction Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E6EDF3] leading-tight">
            What is <br className="hidden sm:inline" />
            <span className="text-[#F5A623]">Oracle Pit?</span>
          </h2>

          <div>
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#12181F] hover:bg-[#1F2933] border border-[#1F2933] text-[#E6EDF3] font-semibold text-sm transition-all duration-200 hover:border-[#F5A623]/50 group"
            >
              Explore Markets
              <ArrowRight className="w-4 h-4 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Paragraph Description & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6 bg-[#12181F] p-8 sm:p-10 rounded-2xl border border-[#1F2933] shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5A623]/10 to-transparent rounded-full pointer-events-none" />

          <p className="text-lg sm:text-xl text-[#E6EDF3] font-normal leading-relaxed">
            Oracle Pit is a next-generation decentralized prediction market built natively on Base chain. We transform global intelligence and market consensus into tradeable YES/NO share contracts.
          </p>

          <p className="text-base text-[#8A97A6] font-normal leading-relaxed">
            Whether forecasting crypto price targets, athletic matchups, election outcomes, or backing creator-owned proposals, users enjoy instant settlement, deep automated liquidity, and trustless resolution verified by optimistic oracles.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1F2933]">
            <div>
              <div className="font-mono font-bold text-2xl text-[#3DDC84]">$12.4M+</div>
              <div className="text-xs text-[#8A97A6] mt-1">Total Trading Volume</div>
            </div>
            <div>
              <div className="font-mono font-bold text-2xl text-[#F5A623]">100%</div>
              <div className="text-xs text-[#8A97A6] mt-1">On-Chain Resolution</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-mono font-bold text-2xl text-[#8B7BF0]">&lt; 1 sec</div>
              <div className="text-xs text-[#8A97A6] mt-1">Base Finality Speed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

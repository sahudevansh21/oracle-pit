

const PARTNERS = [
  { name: "BASE", label: "BASE CHAIN" },
  { name: "UMA", label: "OPTIMISTIC ORACLE" },
  { name: "SUPABASE", label: "SUPABASE BACKEND" },
  { name: "RAINBOW", label: "RAINBOWKIT" },
  { name: "CHAINLINK", label: "CHAINLINK FEEDS" },
  { name: "VIEM", label: "VIEM / WAGMI" },
  { name: "RECHARTS", label: "RECHARTS" },
  { name: "ZUSTAND", label: "ZUSTAND STATE" },
];

export function LogoMarquee() {
  return (
    <section className="py-12 bg-[#0A0A0A] border-b border-[#1F2933] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#8A97A6]">
          POWERED BY & BACKED BY INDUSTRY LEADING INFRASTRUCTURE
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full flex overflow-x-hidden group">
        {/* Left/Right Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#12181F]/60 border border-[#1F2933] text-[#8A97A6] hover:text-[#E6EDF3] hover:border-[#8A97A6]/40 transition-all duration-200 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#F5A623]" />
              <span className="font-mono font-bold text-sm tracking-wider uppercase">
                {partner.name}
              </span>
              <span className="text-[10px] text-[#8A97A6]/70 uppercase tracking-widest font-sans">
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

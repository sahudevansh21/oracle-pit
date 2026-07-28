import { FloatingPillNavbar } from "@/components/marketing/FloatingPillNavbar";
import { HeroShowcase } from "@/components/marketing/HeroShowcase";
import { FeatureGridXusai } from "@/components/marketing/FeatureGridXusai";
import { IntroTwoColumn } from "@/components/marketing/IntroTwoColumn";
import { FeatureCards } from "@/components/marketing/FeatureCards";
import { LogoMarquee } from "@/components/marketing/LogoMarquee";
import { UseCaseSplit } from "@/components/marketing/UseCaseSplit";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Oracle Pit — Visual Prediction Market",
  description: "Transforming ideas into stunning visual experiences on Base chain.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-slate-900 dark:text-[#E6EDF3] flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <FloatingPillNavbar />
      <main className="flex-grow">
        <HeroShowcase />
        <FeatureGridXusai />
        <IntroTwoColumn />
        <FeatureCards />
        <LogoMarquee />
        <UseCaseSplit />
      </main>
      <Footer />
    </div>
  );
}

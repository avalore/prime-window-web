import { ConfidenceSection } from "@/components/sections/confidence-section";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { EarlyAccessSection } from "@/components/sections/early-access-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { InsightSection } from "@/components/sections/insight-section";
import { NavBar } from "@/components/sections/nav-bar";
import { ShareSection } from "@/components/sections/share-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { RevealObserver } from "@/components/reveal-observer";

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <NavBar />
      <main>
        <HeroSection />
        <InsightSection />
        <HowItWorksSection />
        <UseCasesSection />
        <ConfidenceSection />
        <CredibilityStrip />
        <ShareSection />
        <EarlyAccessSection />
      </main>
      <SiteFooter />
    </>
  );
}

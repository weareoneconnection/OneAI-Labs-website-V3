import { HeroSection } from "@/components/sections/HeroSection";
import { EntryLanes } from "@/components/sections/EntryLanes";
import { ProofStripSection } from "@/components/sections/ProofStripSection";
import { PlatformStackSection } from "@/components/sections/PlatformStackSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ForgeSection } from "@/components/sections/ForgeSection";
import { OneAICoreSection } from "@/components/sections/OneAICoreSection";
import { ConstructionSection } from "@/components/sections/ConstructionSection";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import type { PageParams } from "@/lib/seo";

// The lanes sit between the hero and the numbered argument on purpose: the hero
// says who we are, the lanes let a reader say who they are, and only then does the
// case for the platform begin.
// Sections are numbered 01-08 so the homepage reads as one argument in sequence.
// The hero opens it and the closing CTA lands it, so neither takes an index.
// Construction sits at 06: the platform has been described and proven by 05, so
// this is the first point where "what actually runs on it" is a fair question.
export default async function HomePage({ params }: PageParams) {
  const { locale } = await params;
  return (
    <>
      <HeroSection locale={locale} />
      <EntryLanes locale={locale} />
      <ProofStripSection locale={locale} index={1} />
      <PlatformStackSection locale={locale} index={2} />
      <ProblemSection locale={locale} index={3} />
      <ForgeSection locale={locale} index={4} />
      <OneAICoreSection locale={locale} index={5} />
      <ConstructionSection locale={locale} index={6} />
      <DeveloperSection locale={locale} index={7} />
      <SecuritySection locale={locale} index={8} />
      <FinalCTASection locale={locale} />
    </>
  );
}

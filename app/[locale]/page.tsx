import { HeroSection } from "@/components/sections/HeroSection";
import { EntryLanes } from "@/components/sections/EntryLanes";
import { ProofStripSection } from "@/components/sections/ProofStripSection";
import { PlatformStackSection } from "@/components/sections/PlatformStackSection";
import { ConstructionSection } from "@/components/sections/ConstructionSection";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import type { PageParams } from "@/lib/seo";

// The homepage is intentionally a short argument: identify the reader, show the
// operating loop, prove the claims, then show what can be built on it.
export default async function HomePage({ params }: PageParams) {
  const { locale } = await params;
  return (
    <>
      <HeroSection locale={locale} />
      <EntryLanes locale={locale} />
      <PlatformStackSection locale={locale} index={1} />
      <ProofStripSection locale={locale} index={2} />
      <ConstructionSection locale={locale} index={3} />
      <DeveloperSection locale={locale} index={4} />
      <SecuritySection locale={locale} index={5} />
      <FinalCTASection locale={locale} />
    </>
  );
}

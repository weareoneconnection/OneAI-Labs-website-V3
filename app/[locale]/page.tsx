import { HeroSection } from "@/components/sections/HeroSection";
import { ProofStripSection } from "@/components/sections/ProofStripSection";
import { PlatformStackSection } from "@/components/sections/PlatformStackSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ForgeSection } from "@/components/sections/ForgeSection";
import { OneAICoreSection } from "@/components/sections/OneAICoreSection";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import type { PageParams } from "@/lib/seo";

export default async function HomePage({ params }: PageParams) {
  const { locale } = await params;
  return (
    <>
      <HeroSection locale={locale} />
      <ProofStripSection locale={locale} />
      <PlatformStackSection locale={locale} />
      <ProblemSection locale={locale} />
      <ForgeSection locale={locale} />
      <OneAICoreSection locale={locale} />
      <DeveloperSection locale={locale} />
      <SecuritySection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

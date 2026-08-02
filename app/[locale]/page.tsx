import { HeroSection } from "@/components/sections/HeroSection";
import { PlatformStackSection } from "@/components/sections/PlatformStackSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OperatingLoopSection } from "@/components/sections/OperatingLoopSection";
import { ForgeSection } from "@/components/sections/ForgeSection";
import { OneAICoreSection } from "@/components/sections/OneAICoreSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FutureReadySection } from "@/components/sections/FutureReadySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import type { PageParams } from "@/lib/seo";

export default async function HomePage({ params }: PageParams) {
  const { locale } = await params;
  return (
    <>
      <HeroSection locale={locale} />
      <PlatformStackSection locale={locale} />
      <ProblemSection locale={locale} />
      <OperatingLoopSection locale={locale} />
      <ForgeSection locale={locale} />
      <OneAICoreSection locale={locale} />
      <ApplicationsSection locale={locale} />
      <DeveloperSection locale={locale} />
      <SecuritySection locale={locale} />
      <FutureReadySection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

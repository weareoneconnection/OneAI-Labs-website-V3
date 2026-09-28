import { PageHero } from "@/components/sections/PageHero";
import { AgentOSSection } from "@/components/sections/AgentOSSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "OneAI Agent Systems · Govern, Persist, Execute and Prove",
    description: "TheOne, OneMission, OneClaw and OneField turn Core-powered intelligence into durable, governed and independently verifiable work."
  },
  zh: {
    title: "OneAI Agent 系统 · 治理、持久、执行与验证",
    description: "TheOne、OneMission、OneClaw 与 OneField 把 Core 驱动的智能变成持久、受治理且可独立验证的工作。"
  }
};

const hero = {
  en: {
    eyebrow: "OneAI Agent Systems",
    title: "Governed agents that can finish real work.",
    description: "TheOne governs the goal, OneMission preserves the work, OneClaw performs approved actions and OneField keeps the verified shared reality.",
    ctaLabel: "Explore Agent Systems"
  },
  zh: {
    eyebrow: "OneAI Agent Systems",
    title: "能够完成真实工作的受治理 Agent。",
    description: "TheOne 治理目标，OneMission 保存工作，OneClaw 执行获准动作，OneField 留下经过验证的共享现实。",
    ctaLabel: "了解 Agent 系统"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/agent-os", meta);
}

export default async function AgentOSPage({ params }: PageParams) {
  const { locale } = await params;
  const t = hero[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} ctaHref={localePath(locale, "/contact")} ctaLabel={t.ctaLabel} />
      <AgentOSSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

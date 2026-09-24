import { PageHero } from "@/components/sections/PageHero";
import { AgentOSSection } from "@/components/sections/AgentOSSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "OneAI Agent Systems · Plan, Execute and Prove",
    description: "OneAI Agent Systems combine TheOne, OneClaw and OneField to turn Core-powered intelligence into governed, verifiable action."
  },
  zh: {
    title: "OneAI Agent 系统 · 规划、执行与留证",
    description: "OneAI Agent 系统组合 TheOne、OneClaw 与 OneField，把 Core 驱动的智能变成受治理、可验证的行动。"
  }
};

const hero = {
  en: {
    eyebrow: "OneAI Agent Systems",
    title: "The agent layer above OneAI Core: plan, execute, prove",
    description: "OneAI Agent Systems combine TheOne, OneClaw and OneField to turn Core-powered intelligence into governed, verifiable action.",
    ctaLabel: "Explore Agent Systems"
  },
  zh: {
    eyebrow: "OneAI Agent Systems",
    title: "OneAI Core 之上的 Agent 层：规划、执行、留证",
    description: "OneAI Agent Systems 组合 TheOne、OneClaw 与 OneField，把 Core 驱动的智能变成受治理、可验证的行动。",
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

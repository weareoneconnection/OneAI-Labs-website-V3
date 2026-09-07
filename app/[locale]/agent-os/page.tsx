import { PageHero } from "@/components/sections/PageHero";
import { AgentOSSection } from "@/components/sections/AgentOSSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "OneAI Agent Systems · Intelligence, Interface and Execution",
    description: "OneAI Agent Systems combine OneAI Intelligence, OneAI Bot and OneClaw to turn Core-powered task intelligence into real action."
  },
  zh: {
    title: "OneAI Agent 系统 · 智能、界面与执行",
    description: "OneAI Agent 系统组合 OneAI Intelligence、OneAI Bot 与 OneClaw，把 Core 驱动的任务智能变成真实行动。"
  }
};

const hero = {
  en: {
    eyebrow: "OneAI Agent Systems",
    title: "Intelligence, interface and execution on top of OneAI Core",
    description: "OneAI Agent Systems combine OneAI Intelligence, OneAI Bot and OneClaw to turn Core-powered task intelligence into action.",
    ctaLabel: "Explore Agent Systems"
  },
  zh: {
    eyebrow: "OneAI Agent Systems",
    title: "构建在 OneAI Core 之上的智能、界面与执行",
    description: "OneAI Agent Systems 组合 OneAI Intelligence、OneAI Bot 与 OneClaw，把 Core 驱动的任务智能变成行动。",
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

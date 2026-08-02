import { PageHero } from "@/components/sections/PageHero";
import { OneAICoreSection } from "@/components/sections/OneAICoreSection";
import { CoreArchitectureSection } from "@/components/sections/CoreArchitectureSection";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const meta = {
  en: {
    title: "OneAI Core · Commercial AI Operating Layer",
    description: "Turn model APIs into paid, governed and measurable AI products with gateway access, task intelligence, routing policy, cost controls and usage tracking."
  },
  zh: {
    title: "OneAI Core · 商业化 AI 运营层",
    description: "把模型 API 变成可收费、可治理、可度量的 AI 产品：网关访问、任务智能、路由策略、成本控制和用量追踪。"
  }
};

const hero = {
  en: {
    eyebrow: "OneAI Core",
    title: "Commercial AI Operating Layer",
    description: "Turn model APIs into paid, governed and measurable AI products with gateway access, task intelligence, routing policy, cost controls, usage tracking and a commercial console.",
    ctaLabel: "Open OneAI Core"
  },
  zh: {
    eyebrow: "OneAI Core",
    title: "商业化 AI 运营层",
    description: "把模型 API 变成可收费、可治理、可度量的 AI 产品：网关访问、任务智能、路由策略、成本控制、用量追踪和商业控制台。",
    ctaLabel: "打开 OneAI Core"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/core", meta);
}

export default async function CorePage({ params }: PageParams) {
  const { locale } = await params;
  const t = hero[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} ctaHref={site.appUrl} ctaLabel={t.ctaLabel} />
      <OneAICoreSection locale={locale} />
      <CoreArchitectureSection locale={locale} />
      <DeveloperSection locale={locale} />
      <SecuritySection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

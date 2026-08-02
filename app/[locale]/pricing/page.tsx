import { PageHero } from "@/components/sections/PageHero";
import { PricingSection } from "@/components/sections/PricingSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Pricing · Commercial API Access and Cost Controls",
    description: "OneAI Core pricing is built around commercial API access: model routing, structured outputs, customer usage, billing and cost guardrails. Free, Pro, Team and Enterprise plans."
  },
  zh: {
    title: "定价 · 商业 API 访问与成本控制",
    description: "OneAI Core 的定价围绕商业 API 访问设计：模型路由、结构化输出、客户用量、计费和成本护栏。提供 Free、Pro、Team 和 Enterprise 套餐。"
  }
};

const hero = {
  en: {
    eyebrow: "Pricing",
    title: "Sell full-model intelligence with cost controls built in",
    description: "OneAI Core pricing is built around commercial API access: model routing, structured outputs, customer usage, billing and cost guardrails.",
    ctaLabel: "View Core Pricing"
  },
  zh: {
    eyebrow: "定价",
    title: "内置成本控制，放心售卖全模型智能",
    description: "OneAI Core 的定价围绕商业 API 访问设计：模型路由、结构化输出、客户用量、计费和成本护栏。",
    ctaLabel: "查看 Core 定价"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/pricing", meta);
}

export default async function PricingPage({ params }: PageParams) {
  const { locale } = await params;
  const t = hero[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} ctaHref={site.pricingUrl} ctaLabel={t.ctaLabel} />
      <PricingSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

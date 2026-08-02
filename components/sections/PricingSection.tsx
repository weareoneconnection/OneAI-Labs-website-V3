import Link from "next/link";
import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/cards/PricingCard";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Pricing",
    heading: "Commercial API pricing for OneAI Core.",
    body: "Plans are built around real operating limits: monthly requests, model cost guardrails, routing modes, rate limits, debug access and model registry controls.",
    viewPricing: "View Core Pricing",
    contactSales: "Contact Sales"
  },
  zh: {
    eyebrow: "定价",
    heading: "OneAI Core 的商业 API 定价。",
    body: "套餐围绕真实的运营限额设计：月度请求量、模型成本护栏、路由模式、速率限制、调试权限和模型注册表控制。",
    viewPricing: "查看 Core 定价",
    contactSales: "联系销售"
  }
} as const;

export function PricingSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell-wide section-y">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
      </div>
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        {pricingPlans[locale].map((plan, index) => <PricingCard key={plan.name} {...plan} highlighted={index === 2} />)}
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={site.pricingUrl} className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto">{t.viewPricing}</a>
        <Link href={localePath(locale, "/contact")} className="inline-flex w-full justify-center rounded-full border border-oneai-gold/30 px-6 py-3 text-sm font-semibold text-oneai-gold transition hover:bg-oneai-gold/10 sm:w-auto">{t.contactSales}</Link>
      </div>
    </section>
  );
}

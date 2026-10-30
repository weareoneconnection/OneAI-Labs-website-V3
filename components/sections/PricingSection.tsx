import { Info } from "lucide-react";
import Link from "next/link";
import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/cards/PricingCard";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const content = {
  en: {
    eyebrow: "Pricing",
    heading: "Commercial API pricing for OneAI Core.",
    body: "Plans are built around real operating limits: monthly requests, model cost guardrails, routing modes, rate limits, debug access and model registry controls.",
    viewPricing: "View Core Pricing",
    contactSales: "Contact Sales",
    rulesTitle: "How to read these limits",
    rules: [
      "Subscription: Free is $0; Pro is $29/month; Team is $99/month; Enterprise is custom after assessment.",
      "Included usage: the requests/month figure is the plan allowance shown here. It is not a promise of unlimited model tokens or external actions.",
      "Cost Guard: the dollar figure is the model-cost ceiling shown for the plan. It is a control boundary, not a prepaid balance or performance guarantee.",
      "Overage: this website does not promise automatic overage billing. When an allowance or guard is reached, Core's actual plan enforcement and in-app billing terms are the source of truth; confirm them before production use."
    ],
    pilotEyebrow: "Enterprise engagement",
    pilotHeading: "30-Day Governed Agent Pilot",
    pilotBody: "One operational workflow, explicit authority, durable execution and an evidence-backed outcome review. Scope and pricing are set after assessment — not hidden behind a fake fixed price.",
    pilotCta: "Explore the pilot"
  },
  zh: {
    eyebrow: "定价",
    heading: "OneAI Core 的商业 API 定价。",
    body: "套餐围绕真实的运营限额设计：月度请求量、模型成本护栏、路由模式、速率限制、调试权限和模型注册表控制。",
    viewPricing: "查看 Core 定价",
    contactSales: "联系销售",
    rulesTitle: "这些限额应该怎么读",
    rules: [
      "订阅费：Free 为 $0；Pro 为 $29/月；Team 为 $99/月；Enterprise 在评估后定制。",
      "包含用量：每月请求量是这里展示的套餐额度，不代表无限模型 token 或外部动作。",
      "Cost Guard：美元数字是该套餐展示的模型成本上限，是控制边界，不是预付余额，也不是性能保证。",
      "超额：本网站不承诺自动超额计费。达到请求额度或成本护栏后，以 Core 后台实际限制和应用内计费条款为准；用于生产前请先确认。"
    ],
    pilotEyebrow: "企业合作",
    pilotHeading: "30 天受治理 Agent 试点",
    pilotBody: "围绕一个真实业务流程，明确权限、持久执行，并以证据复盘结果。范围与价格在评估后确定，不用虚假的固定价格掩盖差异。",
    pilotCta: "查看试点方案"
  }
} as const;

export function PricingSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell-wide section-y">
      <div className="max-w-3xl">
        <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
      </div>
      <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        {pricingPlans[locale].map((plan, index) => <PricingCard key={plan.name} {...plan} highlighted={index === 2} />)}
      </div>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-oneai-cyan" />
          <div>
            <h3 className="font-semibold text-white">{t.rulesTitle}</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-400">
              {t.rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <TrackedLink href={site.pricingUrl} event="cta_click" eventParams={{ locale, source: "pricing" }} className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto">{t.viewPricing}</TrackedLink>
        <TrackedLink href={localePath(locale, "/contact")} event="cta_click" eventParams={{ locale, source: "pricing" }} className="inline-flex w-full justify-center rounded-full border border-oneai-gold/30 px-6 py-3 text-sm font-semibold text-oneai-gold transition hover:bg-oneai-gold/10 sm:w-auto">{t.contactSales}</TrackedLink>
      </div>
      <div className="mt-14 grid gap-6 rounded-3xl border border-oneai-gold/25 bg-oneai-gold/[0.06] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="font-mono-accent text-xs font-semibold uppercase tracking-[0.18em] text-oneai-gold">{t.pilotEyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{t.pilotHeading}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{t.pilotBody}</p>
        </div>
        <Link href={localePath(locale, "/pilot")} className="inline-flex justify-center rounded-full bg-oneai-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200">
          {t.pilotCta}
        </Link>
      </div>
    </section>
  );
}

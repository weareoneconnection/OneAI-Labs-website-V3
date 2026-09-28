import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { PlatformStackSection } from "@/components/sections/PlatformStackSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { products } from "@/data/products";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: { title: "OneAI Platform · Governed Intelligence to Verified Outcomes", description: "OneAI Core, OneForge, TheOne, OneMission, OneClaw and OneField form a governed operating platform for durable, independently verified AI work." },
  zh: { title: "OneAI Platform · 从受治理智能到可验证结果", description: "OneAI Core、OneForge、TheOne、OneMission、OneClaw 与 OneField 组成一套让 AI 工作持久、受治理并可独立验证的运行平台。" }
};

const content = {
  en: {
    hero: { eyebrow: "OneAI Platform", title: "One governed loop from intent to evidence.", description: "Core supplies intelligence. Forge governs capability releases. TheOne, OneMission, OneClaw, independent verification and OneField turn a goal into durable work and a result into trusted experience.", cta: "Start building" },
    eyebrow: "Explicit boundaries", heading: "Every system owns one kind of truth.", body: "The platform stays governable because cognition, operational state, side effects and shared evidence do not collapse into one database or one agent.", role: "Platform role", maturity: "Current maturity", function: "Owns", links: { products: "See every product", evidence: "Inspect platform evidence" }
  },
  zh: {
    hero: { eyebrow: "OneAI Platform", title: "从意图到证据，一套受治理闭环。", description: "Core 提供智能，Forge 治理能力发布；TheOne、OneMission、OneClaw、独立验证与 OneField 把目标变成持久工作，再把结果变成可信经验。", cta: "开始构建" },
    eyebrow: "明确边界", heading: "每个系统只拥有一种事实。", body: "认知、运行状态、外部副作用与共享证据不会坍缩进同一个数据库或同一个 Agent，因此平台才能持续受治理。", role: "平台角色", maturity: "当前成熟度", function: "负责", links: { products: "查看全部产品", evidence: "检查平台证据" }
  }
} as const;

export async function generateMetadata({ params }: PageParams) { const { locale } = await params; return pageMetadata(locale, "/platform", meta); }

export default async function PlatformPage({ params }: PageParams) {
  const { locale } = await params; const t = content[locale]; const platform = products[locale].filter((item) => item.role === "platform");
  return <>
    <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} ctaHref={site.appUrl} ctaLabel={t.hero.cta} />
    <PlatformStackSection locale={locale} />
    <section className="border-b border-white/10"><div className="site-shell-wide section-y">
      <div className="max-w-3xl"><p className="section-eyebrow">{t.eyebrow}</p><h2 className="section-title mt-4">{t.heading}</h2><p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p></div>
      <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{platform.map((product) => { const Icon = product.icon; return <div key={product.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><div className="flex items-start justify-between gap-4"><div className="rounded-xl border border-white/10 bg-slate-950/60 p-3 text-cyan-200"><Icon className="h-5 w-5" /></div><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[.14em] text-slate-400">{product.stage}</span></div><h3 className="mt-5 text-lg font-semibold text-white">{product.name}</h3><p className="mt-1 text-sm text-oneai-gold">{product.tagline}</p><p className="mt-4 text-sm leading-6 text-slate-400">{product.description}</p><p className="mt-5 text-[10px] uppercase tracking-[.14em] text-slate-600">{t.function}</p><p className="mt-1 text-sm text-slate-300">{product.capabilities?.join(" · ")}</p></div>; })}</div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={localePath(locale, "/products")} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">{t.links.products}<ArrowUpRight className="h-4 w-4" /></Link><Link href={localePath(locale, "/evidence")} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">{t.links.evidence}<ArrowUpRight className="h-4 w-4" /></Link></div>
    </div></section>
    <FinalCTASection locale={locale} />
  </>;
}

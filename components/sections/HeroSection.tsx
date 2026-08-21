import Link from "next/link";
import { ArrowRight, Braces, CheckCircle2, PlayCircle, ShieldCheck } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { OperatingSystemMap } from "@/components/visuals/OperatingSystemMap";

const content = {
  en: {
    badge: "AI infrastructure · capability systems · agent operations",
    headlineA: "From models to missions.",
    headlineB: "One governed platform for real-world AI.",
    body: "OneAI Labs brings model access, capability development, agent coordination and persistent memory into one operating platform — all of it governed, so AI moves from isolated experiments into products you can answer for.",
    primary: "Explore the platform",
    secondary: "Launch OneForge",
    demo: "Request a demo",
    proof: [
      "Every release has a named approver",
      "Every run leaves an append-only record",
      "Every promotion is reversible"
    ],
    rail: ["Access", "Build", "Coordinate", "Execute", "Learn"]
  },
  zh: {
    badge: "AI 基础设施 · 能力系统 · Agent 运营",
    headlineA: "从模型，到使命。",
    headlineB: "一个受治理的平台，承载真实世界 AI。",
    body: "OneAI Labs 将模型接入、能力开发、Agent 协同与长期记忆统一到同一运行平台——并且全程受治理，让 AI 从孤立试验走向你敢于负责的产品。",
    primary: "探索整个平台",
    secondary: "进入 OneForge",
    demo: "预约企业演示",
    proof: [
      "每一次发布都有具名审批人",
      "每一次运行都留下只增不改的记录",
      "每一次晋级都可回退"
    ],
    rail: ["接入", "锻造", "协同", "执行", "学习"]
  }
} as const;

export function HeroSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="hero-surface relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-mask opacity-35" />
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-[120px]" />
      <div className="absolute right-[5%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-indigo-500/[0.10] blur-[150px]" />

      <div className="relative site-shell-wide grid min-h-[calc(100svh-64px)] items-center gap-10 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(540px,1.1fr)] lg:gap-10 lg:py-16">
        <div className="min-w-0">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl sm:text-xs">
            <Braces className="h-4 w-4 shrink-0" />
            <span className="truncate">{t.badge}</span>
          </div>

          <h1 className="mt-7 max-w-5xl text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.052em] text-white min-[390px]:text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.65rem]">
            {t.headlineA}
            <span className="mt-2 block bg-gradient-to-r from-white via-cyan-100 to-indigo-300 bg-clip-text text-transparent">{t.headlineB}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{t.body}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={localePath(locale, "/products")} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
              {t.primary} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.forgeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/[0.07] px-6 py-3.5 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/10">
              {t.secondary} <PlayCircle className="h-4 w-4" />
            </a>
            <Link href={localePath(locale, "/contact")} className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.04]">
              {t.demo}
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
            {t.proof.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-cyan-300/80" />{item}
              </span>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-2 backdrop-blur-xl">
            <div className="grid grid-cols-5 gap-1">
              {t.rail.map((item, index) => (
                <div key={item} className="relative rounded-xl px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
                  <CheckCircle2 className={`mx-auto mb-2 h-3.5 w-3.5 ${index < 2 ? "text-cyan-300" : index === 2 ? "text-indigo-300" : "text-slate-600"}`} />
                  {item}
                  {index < t.rail.length - 1 ? <span className="absolute right-[-4px] top-1/2 hidden h-px w-2 bg-white/15 sm:block" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <OperatingSystemMap locale={locale} compact />
      </div>
    </section>
  );
}

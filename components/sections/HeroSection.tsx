import Link from "next/link";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { MissionControl } from "@/components/visuals/MissionControl";

/**
 * The headline is set very large and very light, then broken across four lines, so
 * the four words the company is actually built on — models, missions, governed,
 * platform — each get their own line. The weight contrast (thin setup, heavy payoff)
 * carries the emphasis instead of colour, which is reserved for the instrument.
 *
 * The supporting copy, CTAs and proof lines sit below a rule rather than beside the
 * headline: the hero has one voice at a time.
 */
const content = {
  en: {
    badge: "AI infrastructure · capability systems · agent operations",
    lines: ["FROM MODELS", "TO MISSIONS."],
    body: "OneAI Labs brings model access, capability development, agent coordination and persistent memory into one operating platform — all of it governed, so AI moves from isolated experiments into products you can answer for.",
    primary: "Explore the platform",
    secondary: "Launch OneForge",
    demo: "Request a demo",
    proof: [
      "Every release has a named approver",
      "Every run leaves an append-only record",
      "Every promotion is reversible"
    ]
  },
  zh: {
    badge: "AI 基础设施 · 能力系统 · Agent 运营",
    lines: ["从模型", "到使命。"],
    body: "OneAI Labs 将模型接入、能力开发、Agent 协同与长期记忆统一到同一运行平台——并且全程受治理，让 AI 从孤立试验走向你敢于负责的产品。",
    primary: "探索整个平台",
    secondary: "进入 OneForge",
    demo: "预约企业演示",
    proof: [
      "每一次发布都有具名审批人",
      "每一次运行都留下只增不改的记录",
      "每一次晋级都可回退"
    ]
  }
} as const;

export function HeroSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="hero-surface relative overflow-hidden border-b border-white/10">
      <div className="absolute left-[57%] top-[46%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.13),rgba(37,99,235,0.035)_29%,transparent_64%)]" />

      <div className="relative site-shell-wide grid items-center gap-8 pb-16 pt-12 lg:min-h-[calc(100svh-64px)] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-10 lg:pb-20 lg:pt-16">
        <div className="z-[5] min-w-0">
          <p className="section-eyebrow flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-6 bg-oneai-cyan shadow-[0_0_9px_rgba(0,214,245,0.7)]" />
            <span className="min-w-0">{t.badge}</span>
          </p>

          {/* Latin caps carry space above and below, so they can be set at 0.84 and
              tracked in tightly. CJK glyphs fill their em box edge to edge: the same
              metrics make the lines collide and the characters crowd. */}
          <h1
            className={`mt-6 font-extralight text-slate-400 ${
              locale === "zh"
                ? "text-[clamp(3rem,6.8vw,6.4rem)] leading-[1.02] tracking-[-0.02em]"
                : "text-[clamp(3.1rem,7.4vw,7.1rem)] leading-[0.84] tracking-[-0.075em]"
            }`}
          >
            {t.lines.map((line, index) => (
              <span key={line} className="block">
                {index === t.lines.length - 1
                  ? <strong className="font-semibold text-cyan-50 [text-shadow:0_0_70px_rgba(207,250,254,0.14)]">{line}</strong>
                  : line}
              </span>
            ))}
          </h1>

          <div className="mt-8 max-w-xl border-t border-white/10 pt-5">
            <p className="text-sm leading-7 text-slate-400 sm:text-base">{t.body}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

            <div className="mt-6 grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
              {t.proof.map((item) => (
                <span key={item} className="inline-flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300/80" />{item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* The instrument needs a fixed canvas: its panels are positioned as
            percentages of this box, not of the page. */}
        <div className="relative h-[430px] min-w-0 sm:h-[560px] lg:h-[730px]">
          <MissionControl locale={locale} />
        </div>
      </div>
    </section>
  );
}

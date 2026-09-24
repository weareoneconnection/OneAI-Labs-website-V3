import { ArrowRight, Compass, Cpu, Route, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { SectionIndex } from "@/components/sections/SectionIndex";

const content = {
  en: {
    badge: "Governed Agent Kernel",
    eyebrow: "TheOne",
    heading: "One agent that understands, acts, verifies, and learns.",
    body: "TheOne is OneAI Labs' persistent root intelligence: a governed, verifiable agent kernel that turns human intent into audited action, and every verified outcome into experience it acts on next time.",
    openTheOne: "Open TheOne",
    exploreAgentOs: "See how it's built",
    shellLabel: "The core loop",
    shellHeading: "Every run follows the same governed cycle.",
    layers: [
      { label: "Understand", text: "Turn a goal into a policy-aware plan and execution contract.", icon: Compass },
      { label: "Act", text: "Execute through governed tools, sub-agents and connected systems.", icon: Workflow },
      { label: "Verify", text: "Check proof, cost and quality before a result is accepted.", icon: ShieldCheck }
    ],
    note: "Nothing here is a demo shell over a chatbot: identity, state, policy, approval and proof are enforced by a kernel, not a prompt."
  },
  zh: {
    badge: "受治理的 Agent 内核",
    eyebrow: "TheOne",
    heading: "一个智能体，理解、行动、验证、进化。",
    body: "TheOne 是 OneAI Labs 的持续根智能体：一个受治理、可验证的 Agent 内核，把人的目标变成有审计记录的行动，并把每一次验证过的结果，沉淀成下一次做得更好的经验。",
    openTheOne: "打开 TheOne",
    exploreAgentOs: "了解它如何构建",
    shellLabel: "核心闭环",
    shellHeading: "每一次运行都遵循同一个受治理的循环。",
    layers: [
      { label: "理解", text: "把目标转化为符合策略的计划与执行契约。", icon: Compass },
      { label: "行动", text: "通过受治理的工具、子智能体和连接系统执行。", icon: Workflow },
      { label: "验证", text: "在结果被接受前，核对证据、成本与质量。", icon: ShieldCheck }
    ],
    note: "这不是套在聊天机器人外面的演示壳层：身份、状态、策略、审批与证据由内核强制执行，而不是靠提示词约定。"
  }
} as const;

export function TheOneSection({ locale, index }: { locale: Locale; index?: number }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-oneai-gold/30 bg-oneai-gold/10 px-3 py-2 text-xs font-semibold text-oneai-gold sm:px-4 sm:text-sm">
              <Route className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">{t.badge}</span>
            </div>

            <div className="mt-8">
              <SectionIndex index={index} label={t.eyebrow} />
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.theOneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto"
              >
                {t.openTheOne} <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href={localePath(locale, "/theone")}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60 sm:w-auto"
              >
                {t.exploreAgentOs}
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-oneai-bg/80 p-4 shadow-glow sm:p-5 md:rounded-[2rem]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 sm:p-6 md:rounded-[1.5rem]">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-oneai-gold">
                    {t.shellLabel}
                  </p>
                  <h3 className="mt-2 break-words text-2xl font-semibold text-white">
                    {t.shellHeading}
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-oneai-cyan/20 bg-oneai-cyan/10 text-oneai-cyan">
                  <Cpu className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {t.layers.map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <div key={layer.label} className="flex min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-oneai-bg text-oneai-cyan">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">0{index + 1} / {layer.label}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{layer.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 p-4">
                <p className="text-sm leading-6 text-amber-100">
                  {t.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

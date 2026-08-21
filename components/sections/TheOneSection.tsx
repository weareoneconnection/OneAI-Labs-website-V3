import { ArrowRight, Command, Layers3, Route, Workflow } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    badge: "Execution OS",
    eyebrow: "TheOne",
    heading: "One intent. One system. One execution layer.",
    body: "TheOne is the orchestration shell for turning AI intent into coordinated execution, connecting Core infrastructure, Agent OS intelligence and product workflows into one operating surface.",
    openTheOne: "Open TheOne",
    exploreAgentOs: "Explore Agent OS",
    shellLabel: "Orchestration Shell",
    shellHeading: "Launch the full execution surface.",
    layers: [
      { label: "Intent", text: "Start from one clear user direction.", icon: Command },
      { label: "System", text: "Shape that direction into an operating surface.", icon: Layers3 },
      { label: "Execution", text: "Route work into coordinated actions and workflows.", icon: Workflow }
    ],
    note: "TheOne sits above individual product demos: it shows how OneAI Labs can move from intelligence to shell, from shell to workflow, and from workflow to execution."
  },
  zh: {
    badge: "执行 OS",
    eyebrow: "TheOne",
    heading: "一个意图，一套系统，一个执行层。",
    body: "TheOne 是把 AI 意图变成协同执行的编排壳层，把 Core 基础设施、Agent OS 智能和产品工作流连接成一个操作面。",
    openTheOne: "打开 TheOne",
    exploreAgentOs: "了解 Agent OS",
    shellLabel: "编排壳层",
    shellHeading: "启动完整的执行操作面。",
    layers: [
      { label: "意图", text: "从一个清晰的用户方向开始。", icon: Command },
      { label: "系统", text: "把方向塑造成一个操作面。", icon: Layers3 },
      { label: "执行", text: "把工作路由为协同的动作与工作流。", icon: Workflow }
    ],
    note: "TheOne 位于单个产品演示之上：它展示了 OneAI Labs 如何从智能走到壳层、从壳层走到工作流、从工作流走到执行。"
  }
} as const;

export function TheOneSection({ locale }: { locale: Locale }) {
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

            <p className="mt-8 font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
              {t.eyebrow}
            </p>
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
                href={localePath(locale, "/agent-os")}
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
                  <Command className="h-6 w-6" />
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

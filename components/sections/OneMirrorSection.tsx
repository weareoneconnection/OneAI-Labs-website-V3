import { ArrowRight, Eye, Globe2, Sparkles } from "lucide-react";
import { site } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    badge: "Public-facing AI experience",
    eyebrow: "OneAI Mirror",
    heading: "What if the whole world was like you?",
    body: "Type one belief, instinct or behavior. OneAI Mirror turns it into a civilization-scale outcome that users can feel, compare and share.",
    open: "Open OneAI Mirror",
    viewMatrix: "View Product Matrix",
    panelLabel: "Civilization Mirror",
    panelHeading: "One belief becomes a world.",
    inputLabel: "Input",
    inputText: "“I only care about winning.”",
    worldLabel: "World",
    worldText: "Hyper Competitive Order",
    note: "The result feels like a verdict, not a quiz. That makes OneAI Mirror a fast, shareable proof of how Core and Agent OS can become a public product experience.",
    consequences: ["World type", "Verdict", "Shock line", "System consequences"]
  },
  zh: {
    badge: "面向大众的 AI 体验",
    eyebrow: "OneAI Mirror",
    heading: "如果全世界都像你，会怎样？",
    body: "输入一个信念、本能或行为，OneAI Mirror 把它放大成一个文明级的世界结果——可感受、可对比、可分享。",
    open: "打开 OneAI Mirror",
    viewMatrix: "查看产品矩阵",
    panelLabel: "文明镜像",
    panelHeading: "一个信念，长成一个世界。",
    inputLabel: "输入",
    inputText: "「我只在乎赢。」",
    worldLabel: "世界",
    worldText: "超竞争秩序",
    note: "结果读起来像一份判决，而不是一份问卷。这让 OneAI Mirror 成为 Core 与 Agent OS 走向大众产品体验的一个快速、可传播的证明。",
    consequences: ["世界类型", "判决", "冲击语", "系统性后果"]
  }
} as const;

export function OneMirrorSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-3 py-2 text-xs font-semibold text-oneai-cyan sm:px-4 sm:text-sm">
              <Eye className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words">{t.badge}</span>
            </div>

            <p className="mt-8 font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
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
                href={site.mirrorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto"
              >
                {t.open} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#product-matrix"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60 sm:w-auto"
              >
                {t.viewMatrix}
              </a>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-oneai-bg/80 p-4 shadow-glow sm:p-5 md:rounded-[2rem]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 sm:p-6 md:rounded-[1.5rem]">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-oneai-cyan">
                    {t.panelLabel}
                  </p>
                  <h3 className="mt-2 break-words text-2xl font-semibold text-white">
                    {t.panelHeading}
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 text-oneai-gold">
                  <Globe2 className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-5 m-carousel gap-4 md:grid md:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-2xl border border-white/10 bg-oneai-bg/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{t.inputLabel}</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-white">
                    {t.inputText}
                  </p>
                </div>

                <div className="rounded-2xl border border-oneai-cyan/20 bg-oneai-cyan/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-cyan">{t.worldLabel}</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-white">
                    {t.worldText}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 shrink-0 text-oneai-gold" />
                  <p className="text-sm leading-6 text-amber-100">
                    {t.note}
                  </p>
                </div>
              </div>

              <div className="mt-5 m-carousel gap-2 md:grid sm:grid-cols-2">
                {t.consequences.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Anvil, ArrowRight, BrainCircuit, Database, Layers3, Zap, type LucideIcon } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/motion/Reveal";

// The architecture diagram lives in the hero. Repeating it one screen later told the
// reader nothing new; this section breaks the same five systems into what each one
// actually owns, and absorbs the governed-loop material that used to be its own screen.
const systems: { key: string; icon: LucideIcon; tone: string }[] = [
  { key: "core", icon: Layers3, tone: "text-cyan-200 border-cyan-300/25 bg-cyan-300/[0.07]" },
  { key: "forge", icon: Anvil, tone: "text-violet-200 border-violet-300/25 bg-violet-300/[0.07]" },
  { key: "theone", icon: BrainCircuit, tone: "text-blue-200 border-blue-300/25 bg-blue-300/[0.07]" },
  { key: "claw", icon: Zap, tone: "text-amber-200 border-amber-300/25 bg-amber-300/[0.07]" },
  { key: "field", icon: Database, tone: "text-emerald-200 border-emerald-300/25 bg-emerald-300/[0.07]" }
];

const content = {
  en: {
    eyebrow: "The OneAI operating architecture",
    heading: "Five systems. One production loop.",
    body: "Each system owns one responsibility and no more. Plans, approvals, proofs and results move between them through explicit contracts — so automation can grow without the control plane blurring.",
    cta: "Explore all platform systems",
    owns: "Owns",
    handsOff: "Hands off",
    detail: {
      core: { name: "OneAI Core", owns: "Model access, routing, cost guards, usage", off: "A routed request with a recorded cost" },
      forge: { name: "OneForge", owns: "Versioned data, evaluated training, approved releases", off: "A capability cleared for production" },
      theone: { name: "TheOne", owns: "Planning, coordination, task decomposition", off: "A plan with named owners" },
      claw: { name: "OneClaw", owns: "Integration and execution of approved actions", off: "A result and its side effects" },
      field: { name: "OneField", owns: "Memory, contribution records, evidence", off: "Evidence for the next release" }
    },
    loopTitle: "The loop closes here",
    loopBody: "Production outcomes return to OneForge as evidence. The next release is decided by what actually happened, not by what was expected to happen."
  },
  zh: {
    eyebrow: "OneAI 运行架构",
    heading: "五大系统，一个生产闭环。",
    body: "每个系统只拥有一项职责，不多也不少。计划、审批、证据与结果通过明确契约在系统间流转——让自动化持续扩大，而控制平面不会因此模糊。",
    cta: "查看全部平台系统",
    owns: "负责",
    handsOff: "交付",
    detail: {
      core: { name: "OneAI Core", owns: "模型接入、路由、成本护栏、用量", off: "一次带成本记录的路由请求" },
      forge: { name: "OneForge", owns: "数据版本、训练评估、发布审批", off: "一个被批准进入生产的能力" },
      theone: { name: "TheOne", owns: "规划、协同、任务拆解", off: "一份有明确责任人的计划" },
      claw: { name: "OneClaw", owns: "已批准动作的集成与执行", off: "一个结果及其副作用" },
      field: { name: "OneField", owns: "记忆、贡献记录、证据", off: "下一次发布所需的证据" }
    },
    loopTitle: "闭环在这里合上",
    loopBody: "生产结果作为证据回到 OneForge。下一次发布由真实发生的事情决定，而不是由预期决定。"
  }
} as const;

export function PlatformStackSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="relative border-y border-white/10 bg-white/[0.015]">
      <div className="site-shell-wide section-y">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-eyebrow">{t.eyebrow}</p>
              <h2 className="section-title mt-4">{t.heading}</h2>
            </div>
            <div className="lg:pb-1">
              <p className="max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
              <Link href={localePath(locale, "/products")} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {systems.map(({ key, icon: Icon, tone }, index) => {
            const d = t.detail[key as keyof typeof t.detail];
            return (
              <Reveal key={key} delay={index * 70} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition hover:border-white/20 hover:bg-slate-950/70">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{d.name}</h3>
                  <p className="mt-4 font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">{t.owns}</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">{d.owns}</p>
                  <p className="mt-4 font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">{t.handsOff}</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500">{d.off}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04]">
            <div className="flow-line h-px w-full bg-white/10" />
            <div className="p-6 sm:p-7">
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.18em] text-cyan-300">{t.loopTitle}</p>
              <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{t.loopBody}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

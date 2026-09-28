import Link from "next/link";
import { Anvil, ArrowRight, BadgeCheck, BrainCircuit, Database, ListChecks, Network, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/motion/Reveal";
import { SectionIndex } from "@/components/sections/SectionIndex";

const systems: { key: "theone" | "mission" | "claw" | "verify" | "field"; icon: LucideIcon; tone: string }[] = [
  { key: "theone", icon: BrainCircuit, tone: "text-blue-200 border-blue-300/25 bg-blue-300/[0.07]" },
  { key: "mission", icon: ListChecks, tone: "text-violet-200 border-violet-300/25 bg-violet-300/[0.07]" },
  { key: "claw", icon: Zap, tone: "text-amber-200 border-amber-300/25 bg-amber-300/[0.07]" },
  { key: "verify", icon: ShieldCheck, tone: "text-cyan-200 border-cyan-300/25 bg-cyan-300/[0.07]" },
  { key: "field", icon: Database, tone: "text-emerald-200 border-emerald-300/25 bg-emerald-300/[0.07]" }
];

const content = {
  en: {
    eyebrow: "The governed operating loop",
    heading: "A goal becomes durable work. A result becomes trusted experience.",
    body: "The platform is an operating loop, not a row of unrelated products. TheOne governs intent, OneMission makes the work durable, OneClaw executes approved actions, independent verification checks the result, and OneField preserves the shared reality.",
    cta: "Explore the complete architecture",
    core: { name: "OneAI Core", text: "Model access, routing, usage and cost control under every intelligence call." },
    forge: { name: "OneForge", text: "Evaluates, promotes, canaries and rolls back the capabilities used by the loop." },
    input: "Receives", output: "Produces",
    detail: {
      theone: { name: "TheOne", input: "A goal and its constraints", output: "A governed plan and authority decisions", href: "/theone" },
      mission: { name: "OneMission", input: "An approved execution plan", output: "Durable tasks, assignments and run state", href: "/mission" },
      claw: { name: "OneClaw", input: "Scoped, approved work", output: "Actions, side effects and execution evidence", href: "/agent-os" },
      verify: { name: "Independent Verifier", input: "Subjects and evidence digests", output: "A signed, independently checked receipt", href: "/evidence" },
      field: { name: "OneField", input: "Settled facts and consent", output: "Shared context and auditable evidence", href: "/field" }
    },
    loopTitle: "The loop closes only after evidence",
    loopBody: "Verified outcomes become context for TheOne and evidence for OneForge. Failed, refused and rolled-back work remains visible too; learning from production must not mean rewriting history."
  },
  zh: {
    eyebrow: "受治理运行闭环",
    heading: "目标变成持久工作，结果变成可信经验。",
    body: "这不是一排彼此无关的产品，而是一套运行闭环。TheOne 治理意图，OneMission 让工作持久化，OneClaw 执行获准动作，独立 Verifier 检查结果，OneField 保存共享现实。",
    cta: "查看完整架构",
    core: { name: "OneAI Core", text: "为每一次智能调用提供模型接入、路由、用量与成本控制。" },
    forge: { name: "OneForge", text: "评测、晋级、灰度并回滚闭环使用的能力。" },
    input: "接收", output: "产出",
    detail: {
      theone: { name: "TheOne", input: "目标及其约束", output: "受治理计划与 Authority 决策", href: "/theone" },
      mission: { name: "OneMission", input: "获准的执行计划", output: "持久任务、分配与运行状态", href: "/mission" },
      claw: { name: "OneClaw", input: "限定范围且获准的工作", output: "动作、副作用与执行证据", href: "/agent-os" },
      verify: { name: "独立 Verifier", input: "验证对象与证据摘要", output: "独立检查并签名的回执", href: "/evidence" },
      field: { name: "OneField", input: "已结算事实与授权", output: "共享上下文与可审计证据", href: "/field" }
    },
    loopTitle: "证据形成之后，闭环才真正合上",
    loopBody: "经过验证的结果成为 TheOne 的上下文和 OneForge 的证据。失败、拒绝与回滚同样被保留；从生产中学习，不等于重写历史。"
  }
} as const;

export function PlatformStackSection({ locale, index }: { locale: Locale; index?: number }) {
  const t = content[locale];
  return (
    <section className="relative border-y border-white/10 bg-white/[0.015]">
      <div className="site-shell-wide section-y">
        <Reveal><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><SectionIndex index={index} label={t.eyebrow} /><h2 className="section-title mt-4">{t.heading}</h2></div>
          <div className="lg:pb-1"><p className="max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p><Link href={localePath(locale, "/platform")} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">{t.cta} <ArrowRight className="h-4 w-4" /></Link></div>
        </div></Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {[{ ...t.core, icon: Network }, { ...t.forge, icon: Anvil }].map((rail) => { const Icon = rail.icon; return <div key={rail.name} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5"><div className="flex items-start gap-4"><div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-2.5 text-cyan-200"><Icon className="h-5 w-5" /></div><div><h3 className="font-semibold text-white">{rail.name}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{rail.text}</p></div></div></div>; })}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {systems.map(({ key, icon: Icon, tone }, position) => { const d = t.detail[key]; return (
            <Reveal key={key} delay={position * 60} className="h-full"><Link href={localePath(locale, d.href)} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition hover:border-white/25 hover:bg-slate-950/70">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${tone}`}><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-base font-semibold text-white">{d.name}</h3>
              <p className="mt-4 font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">{t.input}</p><p className="mt-1.5 text-sm leading-6 text-slate-300">{d.input}</p>
              <p className="mt-4 font-mono-accent text-[10px] uppercase tracking-[0.16em] text-slate-500">{t.output}</p><p className="mt-1.5 text-sm leading-6 text-slate-500">{d.output}</p><ArrowRight className="mt-5 h-4 w-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
            </Link></Reveal>
          ); })}
        </div>

        <Reveal delay={120}><div className="mt-6 overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04]"><div className="flow-line h-px w-full bg-white/10" /><div className="flex items-start gap-3 p-6 sm:p-7"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" /><div><p className="font-mono-accent text-[10px] uppercase tracking-[0.18em] text-cyan-300">{t.loopTitle}</p><p className="mt-3 max-w-4xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{t.loopBody}</p></div></div></div></Reveal>
      </div>
    </section>
  );
}

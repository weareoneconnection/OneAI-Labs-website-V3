import { Activity, Bot, Database, FileCheck2, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "How intelligence becomes dependable work",
    heading: "A governed loop from intent to improvement.",
    body: "OneAI Labs separates reasoning, coordination, execution, evidence and learning—so enterprises can automate more without losing control.",
    steps: [
      { title: "Intent", text: "A user, application or enterprise system defines the objective and operating context.", icon: Sparkles },
      { title: "Plan", text: "TheOne converts the goal into a policy-aware workflow, approval path and execution contract.", icon: GitBranch },
      { title: "Act", text: "OneAI Core provides intelligence while OneClaw executes through governed tools and integrations.", icon: Bot },
      { title: "Verify", text: "Proof, outputs, cost, status and quality checks are captured before the result is accepted.", icon: FileCheck2 },
      { title: "Remember", text: "OneField preserves durable context, evidence, relationships and organizational memory.", icon: Database },
      { title: "Evolve", text: "OneForge evaluates production experience and turns it into safer, measurable capability releases.", icon: Activity }
    ],
    guard: "Human approval, policy boundaries and auditability remain active across the entire loop."
  },
  zh: {
    eyebrow: "智能如何成为可靠工作",
    heading: "从意图到改进的受治理闭环。",
    body: "OneAI Labs 将推理、协同、执行、证据和学习分离治理，让企业在扩大自动化的同时仍然保持控制力。",
    steps: [
      { title: "意图", text: "用户、应用或企业系统定义目标、约束和运行上下文。", icon: Sparkles },
      { title: "计划", text: "TheOne 将目标转化为符合策略的工作流、审批路径和执行契约。", icon: GitBranch },
      { title: "行动", text: "OneAI Core 提供智能，OneClaw 通过受治理工具和集成完成执行。", icon: Bot },
      { title: "验证", text: "在接受结果前，系统记录证据、输出、成本、状态和质量检查。", icon: FileCheck2 },
      { title: "记忆", text: "OneField 保存长期上下文、证据、关系和组织记忆。", icon: Database },
      { title: "进化", text: "OneForge 评估生产经验，并将其转化为更安全、可度量的新能力版本。", icon: Activity }
    ],
    guard: "人工审批、策略边界与审计能力贯穿整个闭环。"
  }
} as const;

export function OperatingLoopSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="site-shell-wide section-y">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <h2 className="section-title mt-4">{t.heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.05] p-4 text-sm leading-6 text-emerald-100/80">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" /> {t.guard}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {t.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-5 transition hover:-translate-y-1 hover:border-cyan-300/25 sm:p-6">
                <div className="absolute right-4 top-3 text-5xl font-semibold tracking-[-0.08em] text-white/[0.035]">0{index + 1}</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.07] text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

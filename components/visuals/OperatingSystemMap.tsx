import { Anvil, BrainCircuit, Database, Layers3, Network, Sparkles, Workflow, Zap } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    top: "Model & enterprise inputs",
    bottom: "Products, workflows & outcomes",
    feedback: "Production feedback",
    center: "OneAI Labs",
    centerSub: "AI Operating Platform",
    nodes: [
      { name: "OneAI Core", role: "Access · Route · Operate", icon: Layers3, tone: "cyan" },
      { name: "OneForge", role: "Train · Evaluate · Evolve", icon: Anvil, tone: "violet" },
      { name: "TheOne", role: "Plan · Govern · Coordinate", icon: BrainCircuit, tone: "blue" },
      { name: "OneClaw", role: "Integrate · Execute · Act", icon: Zap, tone: "amber" },
      { name: "OneField", role: "Remember · Prove · Learn", icon: Database, tone: "emerald" }
    ],
    outcomes: ["Creative AI", "Enterprise AI", "Industry AI", "Physical AI"]
  },
  zh: {
    top: "模型、数据与企业系统输入",
    bottom: "产品、工作流与真实结果",
    feedback: "生产反馈闭环",
    center: "OneAI Labs",
    centerSub: "AI 运行平台",
    nodes: [
      { name: "OneAI Core", role: "接入 · 路由 · 运营", icon: Layers3, tone: "cyan" },
      { name: "OneForge", role: "训练 · 评估 · 进化", icon: Anvil, tone: "violet" },
      { name: "TheOne", role: "计划 · 治理 · 协同", icon: BrainCircuit, tone: "blue" },
      { name: "OneClaw", role: "集成 · 执行 · 行动", icon: Zap, tone: "amber" },
      { name: "OneField", role: "记忆 · 证明 · 学习", icon: Database, tone: "emerald" }
    ],
    outcomes: ["创作 AI", "企业 AI", "行业 AI", "物理 AI"]
  }
} as const;

const toneClass = {
  cyan: "border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200",
  violet: "border-violet-300/25 bg-violet-300/[0.08] text-violet-200",
  blue: "border-blue-300/25 bg-blue-300/[0.08] text-blue-200",
  amber: "border-amber-300/25 bg-amber-300/[0.08] text-amber-200",
  emerald: "border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200"
} as const;

export function OperatingSystemMap({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = copy[locale];
  return (
    <div className={`relative mx-auto w-full ${compact ? "max-w-[760px]" : "max-w-[1120px]"}`}>
      <div className="absolute inset-x-[12%] top-[13%] h-[72%] rounded-[50%] bg-cyan-400/[0.05] blur-[80px]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(15,23,42,.86),rgba(2,6,23,.72))] p-4 shadow-[0_30px_120px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
            <Network className="h-4 w-4 text-cyan-300" /> {t.top}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-200 sm:text-[10px]">
            <Sparkles className="h-3.5 w-3.5" /> {t.feedback}
          </div>
        </div>

        <div className="relative py-5 sm:py-7">
          <div className="pointer-events-none absolute inset-x-[10%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent lg:block" />
          <div className="pointer-events-none absolute bottom-[10%] left-1/2 top-[10%] hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-indigo-300/25 to-transparent lg:block" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.18fr_1fr_1fr] lg:items-center">
            {t.nodes.map((node, index) => {
              const Icon = node.icon;
              const center = index === 2;
              return (
                <div key={node.name} className={`${center ? "order-first sm:col-span-2 lg:order-none lg:col-span-1" : ""} relative z-10`}>
                  {center ? (
                    <div className="relative mx-auto flex min-h-[168px] max-w-[235px] flex-col items-center justify-center rounded-[2rem] border border-cyan-200/25 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,.18),transparent_48%),rgba(2,6,23,.94)] p-5 text-center shadow-[0_0_70px_rgba(34,211,238,.15)]">
                      <div className="absolute inset-3 rounded-[1.55rem] border border-white/[0.06]" />
                      <Workflow className="relative h-7 w-7 text-cyan-200" />
                      <div className="relative mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">{t.center}</div>
                      <div className="relative mt-2 text-xs text-slate-400">{t.centerSub}</div>
                      <div className="relative mt-4 rounded-full border border-blue-300/20 bg-blue-300/[0.06] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-200">{node.name}</div>
                      <div className="relative mt-2 text-[10px] text-slate-500">{node.role}</div>
                    </div>
                  ) : (
                    <div className="group min-h-[142px] rounded-2xl border border-white/10 bg-slate-950/65 p-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/85">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${toneClass[node.tone]}`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="mt-5 text-sm font-semibold text-white">{node.name}</div>
                      <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">{node.role}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{t.bottom}</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {t.outcomes.map((item) => (
              <div key={item} className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-xs">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

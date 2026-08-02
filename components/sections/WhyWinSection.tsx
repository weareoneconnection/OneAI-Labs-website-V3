import { Check, Minus } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Why OneAI Labs",
    heading: "Beyond model access. Toward operational intelligence.",
    body: "Most AI products solve one layer. OneAI Labs connects the full operating lifecycle so enterprises can build faster without losing control.",
    columns: ["Typical AI tool", "OneAI Labs"],
    rows: [
      ["Model APIs", "Unified commercial AI infrastructure"],
      ["Prompt workflows", "Structured capability engineering"],
      ["Single-point automation", "Governed multi-agent operations"],
      ["Static deployment", "Continuous evaluation and evolution"],
      ["Fragmented logs", "Memory, evidence and auditability"]
    ],
    proof: [
      { value: "5", label: "integrated operating layers" },
      { value: "10+", label: "products and vertical systems" },
      { value: "1", label: "shared capability architecture" }
    ]
  },
  zh: {
    eyebrow: "为什么是 OneAI Labs",
    heading: "不止模型接入，而是可运营的智能。",
    body: "多数 AI 产品只解决一个环节。OneAI Labs 连接完整运行生命周期，让企业在保持治理能力的同时，更快构建生产级 AI。",
    columns: ["普通 AI 工具", "OneAI Labs"],
    rows: [
      ["模型 API", "统一商业 AI 基础设施"],
      ["提示词工作流", "结构化 AI 能力工程"],
      ["单点自动化", "受治理的多 Agent 运营"],
      ["静态部署", "持续评估与持续进化"],
      ["分散日志", "记忆、证据与审计闭环"]
    ],
    proof: [
      { value: "5", label: "大一体化运行层" },
      { value: "10+", label: "产品与行业系统" },
      { value: "1", label: "套共享能力架构" }
    ]
  }
} as const;

export function WhyWinSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="site-shell-wide section-y">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <h2 className="section-title mt-4">{t.heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {t.proof.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <div className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</div>
                <div className="mt-2 text-xs leading-5 text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-[0_30px_100px_rgba(0,0,0,.3)]">
          <div className="grid grid-cols-[0.78fr_1.22fr] border-b border-white/10 bg-white/[0.035]">
            {t.columns.map((column, index) => <div key={column} className={`px-5 py-4 text-sm font-semibold ${index === 1 ? "text-cyan-200" : "text-slate-500"}`}>{column}</div>)}
          </div>
          {t.rows.map(([left, right]) => (
            <div key={left} className="grid grid-cols-[0.78fr_1.22fr] border-b border-white/[0.07] last:border-0">
              <div className="flex items-center gap-3 px-5 py-5 text-sm text-slate-500"><Minus className="h-4 w-4 shrink-0" /> {left}</div>
              <div className="flex items-center gap-3 border-l border-white/[0.07] bg-cyan-300/[0.025] px-5 py-5 text-sm font-medium text-slate-200"><Check className="h-4 w-4 shrink-0 text-cyan-200" /> {right}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

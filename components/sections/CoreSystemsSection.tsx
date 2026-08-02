import type { ReactNode } from "react";
import Link from "next/link";
import { Anvil, ArrowRight, BrainCircuit, Layers3, Zap } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Operating model",
    heading: "Company platform first. Product ecosystem second.",
    body: "OneAI Labs builds a commercial infrastructure layer, a governance layer and an execution layer — then turns them into products, interfaces and vertical operating systems.",
    core: {
      title: "OneAI Core",
      label: "Commercial AI Operating Layer",
      description: "The commercial layer: gateway, task API, routing, policy, usage, cost and billing-ready controls."
    },
    forge: {
      title: "OneForge",
      label: "AI Capability Control Plane",
      description: "The governance layer: versioned data, evaluated training, approved releases and audited runs."
    },
    agentOs: {
      title: "OneAI Agent OS",
      label: "Intelligence to interface to execution",
      description: "The execution layer: turns Core-powered intelligence into bots, workflows, actions and industry systems."
    },
    banner: "Core makes AI commercial. Forge keeps it governed. Agent OS makes it operational. The product matrix makes it usable."
  },
  zh: {
    eyebrow: "运营模式",
    heading: "先建公司级平台，再长出产品生态。",
    body: "OneAI Labs 先打造商业化基础设施层、治理层和执行层，再把它们转化为产品、交互界面和垂直操作系统。",
    core: {
      title: "OneAI Core",
      label: "商业化 AI 运营层",
      description: "商业层：网关、任务 API、路由、策略、用量、成本与可计费的运营控制。"
    },
    forge: {
      title: "OneForge",
      label: "AI 能力控制平面",
      description: "治理层：数据版本、训练评估、发布审批与可审计的运行。"
    },
    agentOs: {
      title: "OneAI Agent OS",
      label: "从智能到界面，再到执行",
      description: "执行层：把 Core 驱动的智能变成机器人、工作流、动作和行业系统。"
    },
    banner: "Core 让 AI 可商业化，Forge 让 AI 受治理，Agent OS 让 AI 可运转，产品矩阵让 AI 真正可用。"
  }
} as const;

const corePoints = ["/v1/generate", "/v1/chat/completions", "API keys", "model routing", "cost guards", "usage analytics"];
const forgePoints = ["versioned data", "training eval", "reviewable releases", "approver sign-off", "lineage", "audit trail"];
const agentPoints = ["OneAI Intelligence", "OneAI Bot", "OneClaw", "workflow actions", "industry OS", "task automation"];

export function CoreSystemsSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <CoreCard
            href={localePath(locale, "/core")}
            icon={<Layers3 className="h-7 w-7" />}
            title={t.core.title}
            label={t.core.label}
            description={t.core.description}
            points={corePoints}
          />
          <CoreCard
            href={localePath(locale, "/forge")}
            icon={<Anvil className="h-7 w-7" />}
            title={t.forge.title}
            label={t.forge.label}
            description={t.forge.description}
            points={forgePoints}
            highlighted
          />
          <CoreCard
            href={localePath(locale, "/agent-os")}
            icon={<BrainCircuit className="h-7 w-7" />}
            title={t.agentOs.title}
            label={t.agentOs.label}
            description={t.agentOs.description}
            points={agentPoints}
          />
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 p-5 text-center text-base leading-7 text-amber-100 sm:text-lg">
          <Zap className="mx-auto mb-3 h-6 w-6 text-oneai-gold" />
          {t.banner}
        </div>
      </div>
    </section>
  );
}

function CoreCard({ href, icon, title, label, description, points, highlighted = false }: { href: string; icon: ReactNode; title: string; label: string; description: string; points: string[]; highlighted?: boolean }) {
  return (
    <Link
      href={href}
      className={`group min-w-0 rounded-3xl border p-5 shadow-glow transition hover:-translate-y-1 hover:border-oneai-cyan/40 sm:p-7 md:rounded-[2rem] ${highlighted ? "border-oneai-cyan/30 bg-oneai-cyan/[0.06]" : "border-white/10 bg-oneai-panel/70"}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-oneai-gold">{icon}</div>
        <ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:text-oneai-gold" />
      </div>
      <h3 className="mt-6 break-words text-2xl font-semibold">{title}</h3>
      <p className="mt-2 break-words text-oneai-cyan">{label}</p>
      <p className="mt-4 leading-7 text-slate-400">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {points.map((point) => <span key={point} className="break-all rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{point}</span>)}
      </div>
    </Link>
  );
}

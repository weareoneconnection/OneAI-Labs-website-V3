import Link from "next/link";
import { ArrowUpRight, Building2, Clapperboard, LineChart, Target, Users, WandSparkles } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Platform-powered applications",
    heading: "One architecture, tested across different realities.",
    body: "Applications turn the platform into measurable workflows. Each one validates a different operating requirement—from creative continuity and enterprise knowledge to controlled execution and human–agent coordination.",
    primary: [
      { name: "OneVideo", label: "Creative AI", text: "Script, storyboard, generation, continuity and production workflows for AI-native video.", icon: Clapperboard, href: "/video", status: "Live" },
      { name: "Construction OS", label: "Industry AI", text: "Project, contract, quality, cost and site intelligence for construction and infrastructure.", icon: Building2, href: "/construction", status: "Beta" },
      { name: "OneMission", label: "Human + Agent coordination", text: "Turn objectives into missions, proofs, contributions, reviews and governed rewards.", icon: Target, href: "/mission", status: "Beta" },
      { name: "Trading OS", label: "Controlled execution", text: "AI-assisted market intelligence, deterministic risk controls and performance review.", icon: LineChart, href: "/trading", status: "Research" }
    ],
    secondaryTitle: "Additional ecosystem environments",
    secondary: [
      { name: "OneAI Bot", text: "Community and conversational interface", icon: Users },
      { name: "OneAI Studio", text: "Structured AI task workspace", icon: WandSparkles },
      { name: "OneAI Mirror", text: "Scenario and civilization simulation", icon: WandSparkles }
    ]
  },
  zh: {
    eyebrow: "平台驱动的应用",
    heading: "同一套架构，在不同现实场景中验证。",
    body: "应用将平台转化为可衡量的工作流。每个应用验证不同的运行要求——从创作连续性、企业知识，到受控执行与人类—Agent 协作。",
    primary: [
      { name: "OneVideo", label: "创作 AI", text: "面向 AI 原生视频的脚本、分镜、生成、连续性和制作工作流。", icon: Clapperboard, href: "/video", status: "已上线" },
      { name: "Construction OS", label: "行业 AI", text: "面向建筑与基础设施的项目、合同、质量、成本与现场智能。", icon: Building2, href: "/construction", status: "Beta" },
      { name: "OneMission", label: "人类 + Agent 协作", text: "将目标转化为任务、证据、贡献、审核和受治理的奖励。", icon: Target, href: "/mission", status: "Beta" },
      { name: "Trading OS", label: "受控执行", text: "AI 市场智能、确定性风控与绩效复盘。", icon: LineChart, href: "/trading", status: "研究" }
    ],
    secondaryTitle: "更多生态验证环境",
    secondary: [
      { name: "OneAI Bot", text: "社区与对话式入口", icon: Users },
      { name: "OneAI Studio", text: "结构化 AI 任务工作台", icon: WandSparkles },
      { name: "OneAI Mirror", text: "场景与文明模拟", icon: WandSparkles }
    ]
  }
} as const;

export function ApplicationsSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="border-y border-white/10 bg-white/[0.015]">
      <div className="site-shell-wide section-y">
        <div className="max-w-4xl">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <h2 className="section-title mt-4">{t.heading}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.primary.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.name} href={localePath(locale, item.href)} className="group rounded-3xl border border-white/10 bg-slate-950/55 p-5 transition hover:-translate-y-1 hover:border-indigo-300/30 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-300/10 text-indigo-200"><Icon className="h-5 w-5" /></div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{item.status}</span>
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">{item.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-500">{item.text}</p>
                <ArrowUpRight className="mt-7 h-4 w-4 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-200" />
              </Link>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/35 p-5 sm:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{t.secondaryTitle}</div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {t.secondary.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-200"><Icon className="h-4 w-4" /></div>
                  <div><div className="text-sm font-semibold text-white">{item.name}</div><div className="mt-1 text-xs text-slate-500">{item.text}</div></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

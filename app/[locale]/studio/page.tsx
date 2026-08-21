import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileOutput,
  Layers3,
  Repeat2,
  Workflow,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { ProductMatrixSection } from "@/components/sections/ProductMatrixSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "OneAI Studio · Structured Generation Workspace",
    description: "A lightweight workspace for structured generation, validation, export and workflow-ready AI outputs built on OneAI Core."
  },
  zh: {
    title: "OneAI Studio · 结构化生成工作台",
    description: "基于 OneAI Core 的轻量工作台：结构化生成、验证、导出和可直接进入工作流的 AI 输出。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneAI Studio",
      title: "From prompt to workflow-ready systems",
      description: "OneAI Studio is a lightweight workspace for structured generation, validation, export and workflow-ready AI outputs.",
      ctaLabel: "Open Studio Demo"
    },
    section1: {
      eyebrow: "Structured Generation",
      heading: "Turn prompts into structured outputs.",
      body: "OneAI Studio helps builders create structured AI outputs, validate results, export artifacts and move from ideas into execution-ready workflows.",
      openDemo: "Open Studio Demo",
      requestAccess: "Request Access",
      panelLabel: "Studio Lite",
      panelHeading: "Launch Pack Generator",
      panelBody: "Generate structured launch assets from a single product idea.",
      preview: "Preview",
      prompt: "Create a launch plan for an AI SaaS product targeting founders and small teams.",
      chips: ["Positioning", "Content", "CTA"]
    },
    features: [
      { title: "Structured Outputs", description: "Convert loose prompts into clear, reusable and workflow-ready AI outputs.", icon: Layers3 },
      { title: "Validation", description: "Review, refine and improve outputs before using them in real workflows.", icon: CheckCircle2 },
      { title: "Export", description: "Export generated packs, documents, plans and structured content for product, business and automation use cases.", icon: FileOutput },
      { title: "Workflow-ready", description: "Move from prompt results into repeatable workflows, product systems and execution-ready outputs.", icon: Workflow }
    ],
    workflow: {
      eyebrow: "Workflow",
      heading: "A cleaner path from idea to execution.",
      body: "Studio is designed for builders who need more than a raw AI response. It helps shape outputs into reusable assets that can move into products, content systems and automation workflows.",
      steps: [
        { label: "Prompt", text: "Start with an idea, request, goal or task." },
        { label: "Structure", text: "Turn the input into reusable sections, fields and outputs." },
        { label: "Validate", text: "Review quality, improve reliability and reduce messy results." },
        { label: "Export", text: "Move the result into documents, workflows or product systems." }
      ]
    },
    fit: {
      eyebrow: "Where it fits",
      heading: "Studio sits between Core and Agent OS.",
      body: "OneAI Core provides the commercial operating layer. OneAI Studio gives builders a workspace to shape outputs. OneAI Agent OS turns validated intent into action through OneAI, OneAI Bot and OneClaw.",
      coreLabel: "OneAI Core",
      coreText: "Commercialize AI APIs, usage, cost and product operations.",
      studioLabel: "OneAI Studio",
      studioText: "Structure, validate and export workflow-ready outputs.",
      agentLabel: "OneAI Agent OS",
      agentText: "Turn intent into plan, interface and execution."
    }
  },
  zh: {
    hero: {
      eyebrow: "OneAI Studio",
      title: "从提示词到即用型工作流系统",
      description: "OneAI Studio 是一个轻量工作台，覆盖结构化生成、验证、导出和可直接进入工作流的 AI 输出。",
      ctaLabel: "打开 Studio 演示"
    },
    section1: {
      eyebrow: "结构化生成",
      heading: "把提示词变成结构化输出。",
      body: "OneAI Studio 帮助开发者创建结构化 AI 输出、验证结果、导出产物，从想法走向可执行的工作流。",
      openDemo: "打开 Studio 演示",
      requestAccess: "申请使用",
      panelLabel: "Studio Lite",
      panelHeading: "上线资料包生成器",
      panelBody: "从一个产品想法生成结构化的上线资产。",
      preview: "预览",
      prompt: "为一款面向创始人和小团队的 AI SaaS 产品制定上线计划。",
      chips: ["定位", "内容", "行动号召"]
    },
    features: [
      { title: "结构化输出", description: "把松散的提示词变成清晰、可复用、可进工作流的 AI 输出。", icon: Layers3 },
      { title: "验证", description: "在进入真实工作流之前审阅、打磨并改进输出。", icon: CheckCircle2 },
      { title: "导出", description: "导出生成的资料包、文档、计划和结构化内容，服务产品、业务和自动化场景。", icon: FileOutput },
      { title: "即用型工作流", description: "从提示词结果走向可复用的工作流、产品系统和可执行输出。", icon: Workflow }
    ],
    workflow: {
      eyebrow: "工作流",
      heading: "从想法到执行的一条更干净的路径。",
      body: "Studio 为需要的不止是一段 AI 回复的开发者而设计。它把输出塑造成可复用的资产，进入产品、内容系统和自动化工作流。",
      steps: [
        { label: "提示", text: "从一个想法、请求、目标或任务开始。" },
        { label: "结构化", text: "把输入变成可复用的段落、字段和输出。" },
        { label: "验证", text: "审查质量、提升可靠性、减少混乱结果。" },
        { label: "导出", text: "把结果送进文档、工作流或产品系统。" }
      ]
    },
    fit: {
      eyebrow: "所处位置",
      heading: "Studio 位于 Core 和 Agent OS 之间。",
      body: "OneAI Core 提供商业运营层。OneAI Studio 给开发者一个塑造输出的工作台。OneAI Agent OS 通过 OneAI、OneAI Bot 和 OneClaw 把验证过的意图变成行动。",
      coreLabel: "OneAI Core",
      coreText: "把 AI API、用量、成本和产品运营商业化。",
      studioLabel: "OneAI Studio",
      studioText: "结构化、验证并导出即用型输出。",
      agentLabel: "OneAI Agent OS",
      agentText: "把意图变成计划、界面和执行。"
    }
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/studio", meta);
}

export default async function StudioPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={site.studioUrl}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
                {t.section1.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {t.section1.heading}
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                {t.section1.body}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.studioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-oneai-gold sm:w-auto"
                >
                  {t.section1.openDemo}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href={localePath(locale, "/contact")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
                >
                  {t.section1.requestAccess}
                </Link>
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-oneai-blue/10 sm:p-5 md:rounded-[2rem]">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-5 md:rounded-[1.5rem]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oneai-gold sm:tracking-[0.25em]">
                      {t.section1.panelLabel}
                    </p>
                    <h3 className="mt-2 break-words text-xl font-semibold text-white">
                      {t.section1.panelHeading}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {t.section1.panelBody}
                    </p>
                  </div>

                  <div className="w-fit rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-3 py-1 text-xs font-medium text-oneai-cyan">
                    {t.section1.preview}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-oneai-cyan" />
                    <div className="h-2 w-32 rounded-full bg-white/20" />
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-br from-oneai-blue/20 to-oneai-gold/10 p-4">
                    <p className="text-sm text-slate-300">
                      {t.section1.prompt}
                    </p>

                    <div className="mt-4 m-carousel gap-2 md:grid sm:grid-cols-3">
                      {t.section1.chips.map((chip) => (
                        <span key={chip} className="rounded-full bg-white/10 px-3 py-2 text-center text-xs text-slate-300">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2">
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-5/6 rounded-full bg-white/10" />
                    <div className="h-2 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="mt-5 m-carousel gap-3 md:grid sm:grid-cols-2">
                  {t.features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <Icon className="h-5 w-5 text-oneai-cyan" />
                        <h4 className="mt-3 text-sm font-semibold text-white">
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {t.workflow.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.workflow.heading}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.workflow.body}
            </p>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
            {t.workflow.steps.map((step, index) => (
              <div
                key={step.label}
                className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 text-sm font-semibold text-oneai-cyan">
                  {index + 1}
                </div>

                <h3 className="mt-5 break-words text-lg font-semibold text-white">
                  {step.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
                {t.fit.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {t.fit.heading}
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                {t.fit.body}
              </p>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-5 sm:p-6 md:rounded-[2rem]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-gold sm:tracking-[0.25em]">
                    {t.fit.coreLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {t.fit.coreText}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Repeat2 className="h-5 w-5 text-oneai-cyan" />
                </div>

                <div className="rounded-2xl border border-oneai-cyan/20 bg-oneai-cyan/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-cyan sm:tracking-[0.25em]">
                    {t.fit.studioLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {t.fit.studioText}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Repeat2 className="h-5 w-5 text-oneai-cyan" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-gold sm:tracking-[0.25em]">
                    {t.fit.agentLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {t.fit.agentText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductMatrixSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

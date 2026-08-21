import Link from "next/link";
import { ArrowRight, CheckCircle2, FileOutput, Layers3, Workflow } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "OneAI Studio",
    heading: "From Core task output to workflow-ready systems.",
    body: "OneAI Studio is a lightweight workspace for structured generation, validation, export and workflow-ready AI outputs built on OneAI Core.",
    explore: "Explore Studio",
    openDemo: "Open Studio Demo",
    panelLabel: "Studio Lite",
    panelHeading: "Structured Generation Workspace",
    preview: "Preview",
    prompt: "Generate a launch pack for an AI product.",
    chips: ["Plan", "Validate", "Export"],
    features: [
      { title: "Structured Outputs", description: "Turn Core task contracts into reusable, structured and workflow-ready AI outputs.", icon: Layers3 },
      { title: "Validation", description: "Review, refine and improve structured outputs before using them in real workflows.", icon: CheckCircle2 },
      { title: "Export", description: "Export generated plans, documents, packs and structured content from Core-powered tasks.", icon: FileOutput },
      { title: "Workflow-ready", description: "Move from structured outputs into repeatable workflows and product systems.", icon: Workflow }
    ]
  },
  zh: {
    eyebrow: "OneAI Studio",
    heading: "从 Core 任务输出到即用型工作流系统。",
    body: "OneAI Studio 是基于 OneAI Core 的轻量工作台，覆盖结构化生成、验证、导出和可直接进入工作流的 AI 输出。",
    explore: "了解 Studio",
    openDemo: "打开 Studio 演示",
    panelLabel: "Studio Lite",
    panelHeading: "结构化生成工作台",
    preview: "预览",
    prompt: "为一款 AI 产品生成上线资料包。",
    chips: ["计划", "验证", "导出"],
    features: [
      { title: "结构化输出", description: "把 Core 任务契约变成可复用、结构化、可直接进工作流的 AI 输出。", icon: Layers3 },
      { title: "验证", description: "在进入真实工作流之前，审阅、打磨并改进结构化输出。", icon: CheckCircle2 },
      { title: "导出", description: "从 Core 驱动的任务中导出生成的计划、文档、资料包和结构化内容。", icon: FileOutput },
      { title: "即用型工作流", description: "从结构化输出走向可复用的工作流和产品系统。", icon: Workflow }
    ]
  }
} as const;

export function StudioSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell section-y">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
              {t.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.heading}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localePath(locale, "/studio")}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-oneai-gold sm:w-auto"
              >
                {t.explore}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={site.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
              >
                {t.openDemo}
              </a>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-oneai-blue/10 sm:p-5 md:rounded-[2rem]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-5 md:rounded-[1.5rem]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oneai-gold sm:tracking-[0.25em]">
                    {t.panelLabel}
                  </p>
                  <h3 className="mt-2 break-words text-xl font-semibold text-white">
                    {t.panelHeading}
                  </h3>
                </div>

                <div className="w-fit rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-3 py-1 text-xs font-medium text-oneai-cyan">
                  {t.preview}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="h-2 w-32 rounded-full bg-white/20" />
                <div className="mt-3 h-2 w-48 rounded-full bg-white/10" />
                <div className="mt-5 rounded-xl border border-white/10 bg-gradient-to-br from-oneai-blue/20 to-oneai-gold/10 p-4">
                  <p className="text-sm text-slate-300">
                    {t.prompt}
                  </p>
                  <div className="mt-4 m-carousel gap-2 md:grid sm:grid-cols-3">
                    {t.chips.map((chip) => (
                      <span key={chip} className="rounded-full bg-white/10 px-3 py-2 text-center text-xs text-slate-300">
                        {chip}
                      </span>
                    ))}
                  </div>
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
  );
}

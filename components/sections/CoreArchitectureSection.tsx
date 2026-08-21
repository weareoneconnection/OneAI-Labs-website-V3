import { Activity, Boxes, Braces, Cpu, KeyRound, Route, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Core architecture",
    heading: "One request. Multiple layers of commercial intelligence.",
    body: "OneAI Core wraps every AI request with authentication, task shaping, routing, policy, provider execution, usage tracking and billing-ready visibility.",
    commercialLayer: "Commercial layer",
    commercialBody: "Your products keep their own UX. OneAI Core provides the infrastructure behind keys, routing, task contracts, limits, requests, costs and operator control.",
    lifecycle: [
      { step: "01", title: "Authenticate key", text: "Validate API key, customer plan and access scope.", icon: KeyRound },
      { step: "02", title: "Shape task", text: "Convert product intent into a stable task contract.", icon: Braces },
      { step: "03", title: "Apply routing", text: "Select cheap, balanced, fast, auto or explicit provider:model behavior.", icon: Route },
      { step: "04", title: "Enforce policy", text: "Apply cost guard, tier access and request rules.", icon: ShieldCheck },
      { step: "05", title: "Execute model", text: "Route to the selected provider, model catalog or gateway path.", icon: Cpu },
      { step: "06", title: "Track usage", text: "Record request, customer, usage, cost, latency and billing context.", icon: Activity }
    ],
    apiSurfaces: [
      {
        label: "Task Intelligence API",
        route: "/v1/generate",
        text: "Structured business workflows such as business_strategy, content_engine, support_brain and market_research."
      },
      {
        label: "Model Gateway API",
        route: "/v1/chat/completions",
        text: "OpenAI-compatible access with provider:model routing, streaming-ready behavior and observability."
      },
      {
        label: "Model Catalog",
        route: "/v1/models",
        text: "Catalog discovery, pricing coverage, readiness checks and model strategy for operators."
      }
    ]
  },
  zh: {
    eyebrow: "Core 架构",
    heading: "一次请求，穿过多层商业智能。",
    body: "OneAI Core 为每一次 AI 请求包上认证、任务塑形、路由、策略、供应商执行、用量追踪和可计费的可见性。",
    commercialLayer: "商业层",
    commercialBody: "你的产品保留自己的体验。OneAI Core 提供密钥、路由、任务契约、限额、请求、成本和运营者控制背后的基础设施。",
    lifecycle: [
      { step: "01", title: "密钥认证", text: "校验 API 密钥、客户套餐和访问范围。", icon: KeyRound },
      { step: "02", title: "任务塑形", text: "把产品意图转化为稳定的任务契约。", icon: Braces },
      { step: "03", title: "应用路由", text: "选择 cheap、balanced、fast、auto 或指定 provider:model。", icon: Route },
      { step: "04", title: "执行策略", text: "应用成本护栏、层级访问和请求规则。", icon: ShieldCheck },
      { step: "05", title: "执行模型", text: "路由到选定的供应商、模型目录或网关路径。", icon: Cpu },
      { step: "06", title: "追踪用量", text: "记录请求、客户、用量、成本、延迟和计费上下文。", icon: Activity }
    ],
    apiSurfaces: [
      {
        label: "任务智能 API",
        route: "/v1/generate",
        text: "结构化业务工作流，如 business_strategy、content_engine、support_brain 和 market_research。"
      },
      {
        label: "模型网关 API",
        route: "/v1/chat/completions",
        text: "OpenAI 兼容访问，支持 provider:model 路由、流式输出和可观测性。"
      },
      {
        label: "模型目录",
        route: "/v1/models",
        text: "目录发现、定价覆盖、就绪检查和面向运营者的模型策略。"
      }
    ]
  }
} as const;

export function CoreArchitectureSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="site-shell-wide section-y">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3 text-oneai-cyan">
              <Boxes className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em]">{t.commercialLayer}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{t.commercialBody}</p>
          </div>
        </div>

        <div className="m-carousel gap-4 md:grid sm:grid-cols-2 xl:grid-cols-3">
          {t.lifecycle.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.step} className="min-w-0 rounded-2xl border border-white/10 bg-oneai-panel/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-oneai-gold">{item.step}</span>
                  <Icon className="h-5 w-5 text-oneai-cyan" />
                </div>
                <h3 className="mt-4 break-words text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 m-carousel gap-5 md:grid md:grid-cols-3">
        {t.apiSurfaces.map((surface) => (
          <div key={surface.route} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="break-words text-sm font-semibold text-white">{surface.label}</p>
            <p className="mt-2 break-all font-mono text-sm text-oneai-gold">{surface.route}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{surface.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Fingerprint, KeyRound, LineChart, LockKeyhole, ShieldCheck } from "lucide-react";
import { site } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Trust layer",
    heading: "Built like API infrastructure, not a toy demo.",
    body: "OneAI Core is designed around production concerns: key hygiene, scoped access, cost control, request observability, provider policy and operator review.",
    viewSecurity: "View Security Posture",
    recTitle: "Operational recommendation",
    recBody: "Use idempotency keys, monitor usage daily and health-check new providers before exposing them to customers.",
    readDocs: "Read API Docs",
    items: [
      { title: "Hashed API keys", description: "Keep secrets server-side, create separate keys per environment and revoke leaked keys quickly.", icon: KeyRound },
      { title: "Usage and cost visibility", description: "Track provider, model, tokens, estimated cost, latency and requestId for support and operations.", icon: LineChart },
      { title: "Provider policy", description: "Use routing modes, allowlists, fallbacks and maxCostUsd to keep production calls controlled.", icon: ShieldCheck },
      { title: "Execution boundary", description: "OneAI returns plans, structured decisions and coordination outputs while execution stays in product workflows.", icon: LockKeyhole }
    ]
  },
  zh: {
    eyebrow: "信任层",
    heading: "按 API 基础设施的标准构建，而不是玩具演示。",
    body: "OneAI Core 围绕生产环境的关切设计：密钥卫生、权限范围、成本控制、请求可观测性、供应商策略和运营者审查。",
    viewSecurity: "查看安全态势",
    recTitle: "运营建议",
    recBody: "使用幂等键、每日监控用量，并在向客户开放前对新供应商做健康检查。",
    readDocs: "查看 API 文档",
    items: [
      { title: "哈希化 API 密钥", description: "密钥保留在服务端，按环境分开签发，泄露后可快速吊销。", icon: KeyRound },
      { title: "用量与成本可见性", description: "追踪供应商、模型、token、预估成本、延迟和 requestId，支撑客服与运营。", icon: LineChart },
      { title: "供应商策略", description: "用路由模式、白名单、回退和 maxCostUsd 管控生产调用。", icon: ShieldCheck },
      { title: "执行边界", description: "OneAI 返回计划、结构化决策和协调输出，执行留在产品工作流内。", icon: LockKeyhole }
    ]
  }
} as const;

export function SecuritySection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
            <div className="mt-8">
              <a href={site.securityUrl} className="inline-flex w-full justify-center rounded-full border border-oneai-gold/30 px-6 py-3 text-sm font-semibold text-oneai-gold transition hover:bg-oneai-gold/10 sm:w-auto">
                {t.viewSecurity}
              </a>
            </div>
          </div>

          <div className="m-carousel gap-4 md:grid md:grid-cols-2">
            {t.items.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="min-w-0 rounded-2xl border border-white/10 bg-oneai-bg/80 p-5">
                  <Icon className="h-6 w-6 text-oneai-cyan" />
                  <h3 className="mt-5 break-words text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-2xl border border-oneai-cyan/20 bg-oneai-cyan/10 p-3 text-oneai-cyan">
                <Fingerprint className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{t.recTitle}</p>
                <p className="mt-1 text-sm text-slate-400">{t.recBody}</p>
              </div>
            </div>
            <a href={site.docsUrl} className="inline-flex w-full shrink-0 justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto">
              {t.readDocs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Code2, TerminalSquare } from "lucide-react";
import { site } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

const taskCode = `curl ${site.apiUrl}/v1/generate \\
  -H "content-type: application/json" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Idempotency-Key: launch-plan-001" \\
  -d '{
    "type": "business_strategy",
    "input": {
      "goal": "Launch a paid AI feature in 30 days",
      "audience": "SaaS founders and product teams"
    },
    "options": {
      "llm": {
        "mode": "balanced",
        "maxCostUsd": 0.03
      }
    }
  }'`;

const gatewayCode = `curl ${site.apiUrl}/v1/chat/completions \\
  -H "content-type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "openai:gpt-5.2",
    "messages": [
      {
        "role": "user",
        "content": "Turn this idea into a commercial AI product plan."
      }
    ],
    "max_completion_tokens": 300
  }'`;

const content = {
  en: {
    eyebrow: "Developers",
    heading: "Two APIs. One product-grade AI system.",
    body: "Use the gateway for familiar model access. Use Task Intelligence when your product needs stable business outputs instead of loose prompt responses.",
    taskBadge: "Task Intelligence",
    gatewayBadge: "Model Gateway",
    readDocs: "Read Docs",
    createKey: "Create API Key",
    examplesLabel: "Core API examples",
    taskBlock: "structured task api",
    gatewayBlock: "model gateway"
  },
  zh: {
    eyebrow: "开发者",
    heading: "两套 API，一个产品级 AI 系统。",
    body: "用网关获得熟悉的模型访问方式；当产品需要稳定的业务输出而非松散的提示词响应时，用任务智能。",
    taskBadge: "任务智能",
    gatewayBadge: "模型网关",
    readDocs: "查看文档",
    createKey: "创建 API 密钥",
    examplesLabel: "Core API 示例",
    taskBlock: "结构化任务 API",
    gatewayBlock: "模型网关"
  }
} as const;

export function DeveloperSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
          <div className="mt-6 m-carousel gap-3 md:grid sm:grid-cols-2">
            <ApiBadge title={t.taskBadge} text="/v1/generate" />
            <ApiBadge title={t.gatewayBadge} text="/v1/chat/completions" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.docsUrl} className="inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-oneai-bg transition hover:bg-oneai-gold sm:w-auto">{t.readDocs}</a>
            <a href={site.appUrl} className="inline-flex w-full justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/60 sm:w-auto">{t.createKey}</a>
          </div>
        </div>
        <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-glow sm:p-5 md:rounded-[2rem]">
          <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4 text-sm text-slate-300"><Code2 className="h-4 w-4 shrink-0 text-oneai-gold" /> {t.examplesLabel}</div>
          <div className="grid min-w-0 gap-4">
            <CodeBlock title={t.taskBlock} code={taskCode} />
            <CodeBlock title={t.gatewayBlock} code={gatewayCode} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ApiBadge({ title, text }: { title: string; text: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <TerminalSquare className="h-4 w-4 shrink-0 text-oneai-cyan" />
        {title}
      </div>
      <p className="mt-2 break-all font-mono text-xs text-oneai-gold">{text}</p>
    </div>
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="min-w-0 max-w-full overflow-hidden">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-oneai-cyan sm:tracking-[0.2em]">{title}</p>
      <pre className="max-w-full overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-6 text-slate-300"><code>{code}</code></pre>
    </div>
  );
}

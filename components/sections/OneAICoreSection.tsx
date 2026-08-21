import { coreFeatures } from "@/data/products";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "OneAI Core",
    heading: "Operate AI products through one commercial control layer.",
    body: "OneAI Core is the commercial layer above every model, task, customer and request. It lets teams route models, package structured intelligence, enforce policy, track usage and operate AI as a SaaS product.",
    banner: "OneAI Core governs how intelligence is accessed, routed, measured and commercialized. The rest of the platform turns that intelligence into dependable work."
  },
  zh: {
    eyebrow: "OneAI Core",
    heading: "通过统一商业控制层运营 AI 产品。",
    body: "OneAI Core 是覆盖每个模型、任务、客户和请求之上的商业层。它让团队可以路由模型、封装结构化智能、执行策略、追踪用量，并像运营 SaaS 一样运营 AI。",
    banner: "OneAI Core 治理智能如何接入、路由、度量与商业化；其余平台系统负责将智能转化为可靠工作。"
  }
} as const;

export function OneAICoreSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <DashboardMockup />
          <div>
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
            <div className="mt-8 rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 p-5 text-base leading-7 text-amber-100">{t.banner}</div>
          </div>
        </div>
        <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures[locale].map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </div>
      </div>
    </section>
  );
}

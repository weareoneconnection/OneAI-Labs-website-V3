import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Long-term direction",
    heading: "From enterprise AI to the physical world.",
    phases: [
      { year: "Now", title: "Capability platform", items: ["OneAI Core", "OneForge", "TheOne", "OneField", "Enterprise pilots"] },
      { year: "Next", title: "Model and ecosystem scale", items: ["OneAI model family", "Capability marketplace", "Private deployments", "Developer ecosystem"] },
      { year: "Future", title: "Physical AI", items: ["Robot intelligence layer", "Digital twins", "Construction robotics", "Real-world coordination"] }
    ]
  },
  zh: {
    eyebrow: "长期方向",
    heading: "从企业 AI，走向物理世界。",
    phases: [
      { year: "现在", title: "能力平台", items: ["OneAI Core", "OneForge", "TheOne", "OneField", "企业试点"] },
      { year: "下一阶段", title: "模型与生态规模化", items: ["OneAI 自有模型家族", "能力市场", "企业私有部署", "开发者生态"] },
      { year: "未来", title: "物理 AI", items: ["机器人智能层", "数字孪生", "建筑机器人", "真实世界协同"] }
    ]
  }
} as const;

export function RoadmapSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="site-shell-wide section-y">
      <p className="section-eyebrow">{t.eyebrow}</p>
      <h2 className="section-title mt-4 max-w-4xl">{t.heading}</h2>
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {t.phases.map((phase, index) => (
          <div key={phase.year} className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">{phase.year}</span>
              {index < t.phases.length - 1 ? <ArrowRight className="hidden h-4 w-4 text-slate-700 lg:block" /> : null}
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{phase.title}</h3>
            <div className="mt-6 space-y-3">
              {phase.items.map((item) => <div key={item} className="flex items-center gap-3 text-sm text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" /> {item}</div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

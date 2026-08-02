import { Box, Building2, Cpu, Factory, Orbit, Waypoints } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Designed beyond a single market",
    heading: "One architecture—from software AI to physical operations.",
    body: "The platform is intentionally modular. The same control, evidence, memory and capability systems can support software agents today and connected machines, digital twins and physical AI tomorrow.",
    now: "Now",
    next: "Next",
    future: "Future",
    tracks: [
      { stage: "Now", title: "Enterprise & creative AI", text: "Model gateways, agent workflows, video, knowledge and business operations.", icon: Cpu },
      { stage: "Next", title: "Industry intelligence", text: "Construction, infrastructure, project operations, inspection and digital engineering.", icon: Building2 },
      { stage: "Future", title: "Physical AI", text: "Robot coordination, digital twins, sensor systems and real-world execution.", icon: Factory }
    ]
  },
  zh: {
    eyebrow: "不局限于单一市场",
    heading: "同一套架构，从软件 AI 延伸到物理世界运营。",
    body: "平台采用模块化设计。今天用于软件 Agent 的控制、证据、记忆和能力系统，未来可以继续支持联网设备、数字孪生和物理 AI。",
    now: "现在",
    next: "下一阶段",
    future: "未来",
    tracks: [
      { stage: "现在", title: "企业与创作 AI", text: "模型网关、Agent 工作流、视频、知识与业务运营。", icon: Cpu },
      { stage: "下一阶段", title: "行业智能", text: "建筑、基础设施、项目运营、巡检与数字工程。", icon: Building2 },
      { stage: "未来", title: "物理 AI", text: "机器人协同、数字孪生、传感系统与真实世界执行。", icon: Factory }
    ]
  }
} as const;

export function FutureReadySection({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,.35),rgba(2,6,23,.7))]">
      <div className="absolute inset-0 grid-mask opacity-20" />
      <div className="relative site-shell-wide section-y">
        <div className="max-w-4xl">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <h2 className="section-title mt-4">{t.heading}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>

        <div className="relative mt-12 grid gap-4 lg:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-[44px] hidden h-px bg-gradient-to-r from-cyan-300/20 via-indigo-300/35 to-amber-300/20 lg:block" />
          {t.tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <article key={track.title} className="relative z-10 rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200"><Icon className="h-5 w-5" /></div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">0{index + 1}</span>
                </div>
                <div className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{track.stage}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{track.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{track.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { CheckCircle2, FileCheck2, LockKeyhole, Play, ScanSearch, Target } from "lucide-react";
import { useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { missionDemoScenes, missionDemoSource, type MissionDemoSceneKey, type MissionDemoStageKey } from "@/data/mission-demo";
import { trackEvent, analyticsEvents } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

const stageIcons = {
  goal: Target,
  plan: Play,
  approval: LockKeyhole,
  execution: Play,
  verification: ScanSearch,
  evidence: FileCheck2
} satisfies Record<MissionDemoStageKey, typeof Target>;

const content = {
  en: {
    eyebrow: "Read-only mission demo",
    heading: "See the operating logic before you talk to a salesperson.",
    body: "Choose a scenario, then step through the same governed path: Goal → Plan → Approval → Execution → Independent Verification → Evidence.",
    scenarioLabel: "Scenario",
    stageLabel: "Mission stages",
    detailLabel: "What this stage shows",
    boundaryTitle: "Public safety boundary",
    boundary: "This interface only changes local display state. It never signs in, calls a production API, uses a customer credential or performs an external write.",
    sourceLabel: "Data status",
    source: "Static redacted simulation — not a customer case, production run, benchmark or certification.",
    pilot: "Discuss a bounded pilot"
  },
  zh: {
    eyebrow: "只读 Mission Demo",
    heading: "在联系销售前，先看清它如何运行。",
    body: "选择一个场景，依次查看同一条受治理路径：目标 → 计划 → 审批 → 执行 → 独立验证 → 证据。",
    scenarioLabel: "场景",
    stageLabel: "Mission 阶段",
    detailLabel: "这个阶段展示什么",
    boundaryTitle: "公开安全边界",
    boundary: "这个界面只改变本地展示状态。它不会登录、调用生产 API、使用客户凭证或执行外部写入。",
    sourceLabel: "数据状态",
    source: "静态脱敏模拟——不是客户案例、生产运行、性能基准或认证。",
    pilot: "讨论一个有边界的试点"
  }
} as const;

export function AgentMissionDemo({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [sceneKey, setSceneKey] = useState<MissionDemoSceneKey>(missionDemoScenes[0].key);
  const [stageIndex, setStageIndex] = useState(0);
  const scene = missionDemoScenes.find((item) => item.key === sceneKey) ?? missionDemoScenes[0];
  const activeStage = scene.stages[stageIndex];
  const ActiveIcon = stageIcons[activeStage.key];

  function selectScene(key: MissionDemoSceneKey) {
    setSceneKey(key);
    setStageIndex(0);
    trackEvent(analyticsEvents.missionDemoScenarioSelect, { locale, scenario: key });
  }

  function selectStage(index: number) {
    setStageIndex(index);
    trackEvent(analyticsEvents.missionDemoStepSelect, { locale, scenario: scene.key, stage: scene.stages[index].key });
  }

  return (
    <section id="agent-mission-demo" className="border-y border-white/10 bg-white/[0.025]" aria-labelledby="agent-mission-demo-title">
      <div className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <h2 id="agent-mission-demo-title" className="section-title mt-4">{t.heading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/55 p-4 sm:p-5">
            <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{t.scenarioLabel}</p>
            <div className="mt-3 grid gap-2" role="tablist" aria-label={t.scenarioLabel}>
              {missionDemoScenes.map((item) => {
                const selected = item.key === scene.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="mission-demo-panel"
                    onClick={() => selectScene(item.key)}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${selected ? "border-oneai-cyan/50 bg-oneai-cyan/10" : "border-white/10 bg-white/[0.03] hover:border-white/25"}`}
                  >
                    <span className={`block text-sm font-semibold ${selected ? "text-cyan-100" : "text-white"}`}>{item.label[locale]}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">{item.description[locale]}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-oneai-gold/20 bg-oneai-gold/[0.06] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-oneai-gold">{t.boundaryTitle}</p>
              <p className="mt-2 text-sm leading-6 text-amber-100/80">{t.boundary}</p>
            </div>
          </div>

          <div id="mission-demo-panel" role="tabpanel" aria-live="polite" className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/55 p-4 sm:p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono-accent text-xs uppercase tracking-[0.16em] text-oneai-cyan">{scene.label[locale]}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{scene.description[locale]}</p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                <LockKeyhole className="h-3.5 w-3.5" /> {locale === "zh" ? "只读" : "Read-only"}
              </span>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{t.stageLabel}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3" role="tablist" aria-label={t.stageLabel}>
              {scene.stages.map((item, index) => {
                const Icon = stageIcons[item.key];
                const selected = index === stageIndex;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="mission-demo-stage-panel"
                    onClick={() => selectStage(index)}
                    className={`flex min-w-0 items-center gap-2 rounded-xl border px-3 py-3 text-left transition ${selected ? "border-oneai-cyan/50 bg-oneai-cyan/10 text-cyan-100" : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/25 hover:text-white"}`}
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 truncate text-xs font-semibold">{item.label[locale]}</span>
                    {index < stageIndex ? <CheckCircle2 className="ml-auto h-3.5 w-3.5 shrink-0 text-emerald-300" aria-hidden="true" /> : null}
                  </button>
                );
              })}
            </div>

            <div id="mission-demo-stage-panel" className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5" tabIndex={-1}>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-oneai-cyan/25 bg-oneai-cyan/10 text-oneai-cyan">
                  <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">{activeStage.label[locale]}</h3>
                    <span className="rounded-full border border-oneai-gold/25 bg-oneai-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-oneai-gold">{activeStage.state[locale]}</span>
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-200">{activeStage.summary[locale]}</p>
                </div>
              </div>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.detailLabel}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{activeStage.detail[locale]}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs leading-5 text-slate-500 sm:flex-row sm:items-start sm:justify-between">
              <span><strong className="font-semibold text-slate-300">{t.sourceLabel}:</strong> {t.source}</span>
              <span className="shrink-0 text-slate-600">{missionDemoSource[locale]}</span>
            </div>
          </div>
        </div>

        <TrackedLink href={locale === "zh" ? "/zh/pilot" : "/pilot"} event="cta_click" eventParams={{ locale, source: "mission_demo" }} className="mt-8 inline-flex items-center justify-center rounded-full border border-oneai-gold/30 px-5 py-3 text-sm font-semibold text-oneai-gold transition hover:border-oneai-gold/60 hover:bg-oneai-gold/10">
          {t.pilot}
        </TrackedLink>
      </div>
    </section>
  );
}

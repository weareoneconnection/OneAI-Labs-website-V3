import { ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/i18n";

/**
 * A real OneForge run — the one where the gate said no.
 *
 * The candidate scored 0.5667 against a 0.6167 baseline and was rejected, so
 * production never changed. Showing a rejection rather than a green training
 * curve is the point: a gate that only ever approves proves nothing, which is
 * the same argument the proof strip makes with its 37 / 11 figure.
 *
 * Figures are fixed because they describe one specific archived run. They are not
 * live telemetry and the panel does not pretend to be.
 */

const LOG_LEVELS = ["ok", "ok", "warn", "fail", "safe", "ok"] as const;

const content = {
  en: {
    bar: "ONEFORGE / CAPABILITY CONTROL PLANE",
    barRight: "ARCHIVED RUN",
    runId: "RUN / QWEN3-8B",
    runTitle: "Capability evaluation",
    runMeta: "QLoRA · 2× NVIDIA T4",
    candidate: "CANDIDATE",
    candidateNote: "assistant-v6",
    baseline: "BASELINE",
    baselineNote: "production",
    vs: "VS",
    gateLabel: "RELEASE GATE",
    gateState: "REJECTED",
    gateNote: "PRODUCTION PROTECTED",
    chartLeft: "TRAINING SIGNAL",
    chartRight: "5 STEPS / 10M 40S",
    logHead: "EXECUTION LOG",
    logState: "COMPLETE",
    logs: [
      ["10:42:11", "gpu.dispatch", "2× T4 allocated", "OK"],
      ["10:42:27", "trainer.cuda", "QLoRA session active", "OK"],
      ["10:53:07", "eval.score", "candidate 0.5667", "WARN"],
      ["10:53:08", "gate.compare", "baseline 0.6167", "FAIL"],
      ["10:53:09", "release.guard", "assistant-v6 rejected", "HELD"],
      ["10:53:10", "production", "current version unchanged", "OK"]
    ],
    resources: [
      ["GPU UTIL.", "100%"],
      ["NODES", "02"],
      ["CUDA", "ACTIVE"],
      ["AUDIT", "SEALED"]
    ]
  },
  zh: {
    bar: "ONEFORGE / 能力控制平面",
    barRight: "归档运行",
    runId: "运行 / QWEN3-8B",
    runTitle: "能力评估",
    runMeta: "QLoRA · 2× NVIDIA T4",
    candidate: "候选版本",
    candidateNote: "assistant-v6",
    baseline: "生产基线",
    baselineNote: "当前线上",
    vs: "对比",
    gateLabel: "发布门禁",
    gateState: "已驳回",
    gateNote: "生产环境未受影响",
    chartLeft: "训练信号",
    chartRight: "5 步 / 10 分 40 秒",
    logHead: "执行日志",
    logState: "已完成",
    logs: [
      ["10:42:11", "gpu.dispatch", "已分配 2× T4", "OK"],
      ["10:42:27", "trainer.cuda", "QLoRA 会话激活", "OK"],
      ["10:53:07", "eval.score", "候选 0.5667", "WARN"],
      ["10:53:08", "gate.compare", "基线 0.6167", "FAIL"],
      ["10:53:09", "release.guard", "assistant-v6 被驳回", "拦截"],
      ["10:53:10", "production", "线上版本保持不变", "OK"]
    ],
    resources: [
      ["GPU 利用率", "100%"],
      ["节点", "02"],
      ["CUDA", "运行中"],
      ["审计", "已封存"]
    ]
  }
} as const;

export function ForgeControlRoom({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <div className="oa-forge-room">
      <div className="oa-forge-bar">
        <span aria-hidden="true"><i /><i /><i /></span>
        <b>{t.bar}</b>
        <em>{t.barRight}</em>
      </div>

      <div className="oa-forge-grid">
        <div className="oa-forge-main">
          <div className="oa-forge-title">
            <span>{t.runId}</span>
            <strong>{t.runTitle}</strong>
            <em>{t.runMeta}</em>
          </div>

          <div className="oa-scores">
            <div className="oa-score">
              <small>{t.candidate}</small>
              <strong>0.5667</strong>
              <span>{t.candidateNote}</span>
            </div>
            <div className="oa-score-vs" aria-hidden="true">{t.vs}</div>
            <div className="oa-score">
              <small>{t.baseline}</small>
              <strong>0.6167</strong>
              <span>{t.baselineNote}</span>
            </div>
            <div className="oa-gate">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>{t.gateLabel}</span>
              <strong>{t.gateState}</strong>
              <small>{t.gateNote}</small>
            </div>
          </div>

          <div className="oa-chart" aria-hidden="true">
            <div className="oa-chart-grid" />
            <svg viewBox="0 0 1000 230" preserveAspectRatio="none">
              <path d="M0 174 C95 156 123 115 215 138 S354 85 425 112 S574 47 645 83 S795 108 1000 56" />
            </svg>
            <div className="oa-chart-labels">
              <span>{t.chartLeft}</span>
              <span>{t.chartRight}</span>
            </div>
          </div>
        </div>

        <div className="oa-forge-side">
          <div className="oa-forge-side-head">
            <span>{t.logHead}</span>
            <b><i />{t.logState}</b>
          </div>
          <div className="oa-log-list">
            {t.logs.map(([time, event, detail, state], index) => (
              <div key={event} className="oa-log" data-level={LOG_LEVELS[index]}>
                <span>{time}</span>
                <b>{event}</b>
                <p>{detail}</p>
                <em>{state}</em>
              </div>
            ))}
          </div>
          <div className="oa-resources">
            {t.resources.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

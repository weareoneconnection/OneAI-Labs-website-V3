import type { Locale } from "@/lib/i18n";

/**
 * The hero instrument: one governed mission, mid-flight.
 *
 * It shows the same five stages the platform actually runs — route, plan, assign,
 * execute, record — and ends on SEALED rather than on a success tick, because the
 * claim the site makes is about evidence, not about throughput.
 *
 * Server-rendered with CSS-only motion, so the labels are in the HTML for crawlers
 * and the panel still reads as an instrument with JavaScript disabled.
 */

const content = {
  en: {
    core: { id: "Mission / 7A9C", state: "ACTIVE", note: "GOVERNED EXECUTION" },
    nodes: ["MODEL ROUTER", "CAPABILITY", "PLANNER", "EXECUTOR", "EVIDENCE", "MEMORY"],
    panel: "MISSION CONTROL",
    live: "LIVE",
    objectiveLabel: "OBJECTIVE",
    objective: "Coordinate governed AI execution",
    objectiveMeta: "priority / P1     approval / required",
    rows: ["MODEL ROUTED", "PLAN CREATED", "AGENT ASSIGNED", "ACTION EXECUTED", "PROOF RECORDED"],
    ok: "OK",
    sealed: "SEALED",
    chips: [
      { label: "MODEL ROUTE", value: "QWEN3-8B", note: "provider / controlled" },
      { label: "POLICY", value: "APPROVAL", note: "human gate / armed" }
    ],
    footer: { left: "ONEAI OPERATING LAYER", mid: "MODELS → MISSIONS → EVIDENCE", right: "UTC+08" }
  },
  zh: {
    core: { id: "任务 / 7A9C", state: "执行中", note: "受治理执行" },
    nodes: ["模型路由", "能力", "规划器", "执行器", "证据", "记忆"],
    panel: "任务控制台",
    live: "实时",
    objectiveLabel: "目标",
    objective: "协同一次受治理的 AI 执行",
    objectiveMeta: "优先级 / P1     审批 / 必需",
    rows: ["模型已路由", "计划已生成", "Agent 已指派", "动作已执行", "证据已记录"],
    ok: "通过",
    sealed: "已封存",
    chips: [
      { label: "模型路由", value: "QWEN3-8B", note: "供应商 / 受控" },
      { label: "策略", value: "需审批", note: "人工门禁 / 已布防" }
    ],
    footer: { left: "ONEAI 运行层", mid: "模型 → 使命 → 证据", right: "UTC+08" }
  }
} as const;

// Percentage positions around the orbit. Deliberately irregular: an evenly spaced
// ring reads as decoration, an uneven one reads as a topology.
const NODE_POSITIONS = [
  { left: "28%", top: "33%" },
  { left: "60%", top: "15%" },
  { left: "83%", top: "49%" },
  { left: "66%", top: "78%" },
  { left: "27%", top: "81%" },
  { left: "10%", top: "51%" }
] as const;

export function MissionControl({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <div className="oa-mission" aria-hidden="true">
      <div className="oa-plane" />
      <div className="oa-orbit oa-orbit-a" />
      <div className="oa-orbit oa-orbit-b" />
      <div className="oa-orbit oa-orbit-c" />

      <div className="oa-core">
        <span>{t.core.id}</span>
        <strong>{t.core.state}</strong>
        <em>{t.core.note}</em>
      </div>

      {t.nodes.map((label, index) => (
        <div
          key={label}
          className="oa-node"
          style={{ ...NODE_POSITIONS[index], animationDelay: `${index * 0.38}s` }}
        >
          <i />
          <span>{label}</span>
        </div>
      ))}

      <svg className="oa-links" viewBox="0 0 1000 720" preserveAspectRatio="none">
        <path d="M170 150 C340 80 510 120 730 122" />
        <path d="M730 122 C860 205 850 265 830 352" />
        <path d="M830 352 C810 470 760 530 660 562" />
        <path d="M660 562 C500 650 370 620 270 583" />
        <path d="M270 583 C120 520 85 450 100 367" />
        <path d="M100 367 C95 265 120 205 170 150" />
      </svg>

      <div className="oa-panel">
        <div className="oa-panel-head">
          <span>{t.panel}</span>
          <b><i />{t.live}</b>
        </div>
        <div className="oa-objective">
          <small>{t.objectiveLabel}</small>
          <strong>{t.objective}</strong>
          <span>{t.objectiveMeta}</span>
        </div>
        {t.rows.map((row, index) => (
          <div key={row} className="oa-row" style={{ animationDelay: `${index * 0.45}s` }}>
            <span>0{index + 1}</span>
            <b>{row}</b>
            <em>{index < t.rows.length - 1 ? t.ok : t.sealed}</em>
          </div>
        ))}
      </div>

      {t.chips.map((chip, index) => (
        <div key={chip.label} className={`oa-chip ${index === 0 ? "oa-chip-a" : "oa-chip-b"}`}>
          <span>{chip.label}</span>
          <strong>{chip.value}</strong>
          <small>{chip.note}</small>
        </div>
      ))}

      <div className="oa-mission-footer">
        <span>{t.footer.left}</span>
        <b>{t.footer.mid}</b>
        <span>{t.footer.right}</span>
      </div>
    </div>
  );
}

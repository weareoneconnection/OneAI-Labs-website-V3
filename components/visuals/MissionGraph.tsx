import { Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n";

/**
 * A sample deliverable, not a product screenshot.
 *
 * The agent-development page cannot promise delivery capacity yet, so what it can
 * honestly show is the standard: this is the shape of the artefact an engagement
 * ends with — named agents against one mission, and a sealed ledger of everything
 * they did. A prospect can judge whether that is the level of accountability they
 * want before anyone talks about scope.
 */

const content = {
  en: {
    head: "MISSION GRAPH / SAMPLE",
    count: "5 AGENTS",
    core: { label: "MISSION", id: "inspect_project_risk" },
    nodes: [
      { name: "PLANNER", state: "decomposed" },
      { name: "RESEARCH", state: "gathered" },
      { name: "EXECUTOR", state: "acted" },
      { name: "FIELD", state: "observed" },
      { name: "EVIDENCE", state: "sealed" }
    ],
    ledgerHead: "EXECUTION LEDGER",
    ledgerState: "TRACEABLE",
    rows: [
      ["mission.created", "verified"],
      ["context.bound", "verified"],
      ["approval.granted", "verified"],
      ["action.executed", "verified"],
      ["artifact.sha256", "sealed"],
      ["result.recorded", "sealed"]
    ],
    hashLabel: "LEDGER HASH",
    hashNote: "Append-only. Every claim opens the record behind it."
  },
  zh: {
    head: "任务图谱 / 样本",
    count: "5 个 AGENT",
    core: { label: "任务", id: "inspect_project_risk" },
    nodes: [
      { name: "规划器", state: "已分解" },
      { name: "检索", state: "已收集" },
      { name: "执行器", state: "已执行" },
      { name: "现场", state: "已观测" },
      { name: "证据", state: "已封存" }
    ],
    ledgerHead: "执行账本",
    ledgerState: "可追溯",
    rows: [
      ["mission.created", "已核验"],
      ["context.bound", "已核验"],
      ["approval.granted", "已核验"],
      ["action.executed", "已核验"],
      ["artifact.sha256", "已封存"],
      ["result.recorded", "已封存"]
    ],
    hashLabel: "账本哈希",
    hashNote: "只增不改。每一条结论都能打开背后的记录。"
  }
} as const;

export function MissionGraph({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <div className="oa-mg">
      <div className="oa-mg-main">
        <div className="oa-mg-head">
          <span>{t.head}</span>
          <b>{t.count}</b>
        </div>
        <div className="oa-mg-canvas">
          <svg className="oa-mg-links" viewBox="0 0 900 566" preserveAspectRatio="none" aria-hidden="true">
            <path d="M450 283 L150 110 M450 283 L720 92 M450 283 L790 300 M450 283 L640 470 M450 283 L180 460" />
          </svg>

          <div className="oa-mg-core">
            <Sparkles size={16} className="text-oneai-cyan" aria-hidden="true" />
            <strong>{t.core.label}</strong>
            <span>{t.core.id}</span>
          </div>

          {t.nodes.map((node, index) => (
            <div
              key={node.name}
              className={`oa-mg-node oa-mg-node-${index}`}
              data-role={index === t.nodes.length - 1 ? "evidence" : undefined}
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <i />
              <strong>{node.name}</strong>
              <span>{node.state}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="oa-mg-side">
        <div className="oa-mg-side-head">
          <span>{t.ledgerHead}</span>
          <b>{t.ledgerState}</b>
        </div>
        {t.rows.map(([event, state], index) => (
          <div key={event} className="oa-mg-row">
            <span>0{index + 1}</span>
            <b>{event}</b>
            <em>{state}</em>
          </div>
        ))}
        <div className="oa-mg-hash">
          <span>{t.hashLabel}</span>
          <strong>7FC2…9A31</strong>
          <small>{t.hashNote}</small>
        </div>
      </div>
    </div>
  );
}

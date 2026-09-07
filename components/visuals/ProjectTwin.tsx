import type { Locale } from "@/lib/i18n";

/**
 * The project twin instrument: a building whose geometry carries the project's state.
 *
 * The earlier version of this drew a flat front elevation. It read as an abstract
 * lattice rather than a building, and — worse — its geometry said nothing. The cards
 * claimed a delay the picture had no way to show, which is decoration dressed as
 * evidence on a site whose whole argument is the opposite.
 *
 * So this one is axonometric, and every floor is drawn in its actual status. The
 * delayed level is red *in the model*, labelled in place, and carries one marker per
 * evidence record behind that claim. The cards around it confirm what the geometry
 * already says instead of asserting it alone.
 *
 * Axonometric rather than a real 3D scene on purpose: it is the native projection of
 * construction drawings, it needs no library, it stays server-rendered, and the
 * page's one moving focal point belongs to the hero. The interactive twin lives on
 * oneaiconstruction.com, which is where this section sends people.
 */

// A 2:1 dimetric projection — the "engineering axonometric", and the one that
// keeps every floor slab a clean rhombus at any size.
const FOOTPRINT_X = 120;
const FOOTPRINT_Y = 90;
const FLOOR_PITCH = 22;
const SLAB_DEPTH = 7;

function project(x: number, y: number, z: number): [number, number] {
  return [x - y, (x + y) * 0.5 - z];
}

const point = (x: number, y: number, z: number) => project(x, y, z).join(",");

/** The three faces of one floor slab that are visible in this projection. */
function slabFaces(z: number) {
  const W = FOOTPRINT_X;
  const D = FOOTPRINT_Y;
  const under = z - SLAB_DEPTH;
  return {
    top: [point(0, 0, z), point(W, 0, z), point(W, D, z), point(0, D, z)].join(" "),
    left: [point(0, D, z), point(W, D, z), point(W, D, under), point(0, D, under)].join(" "),
    right: [point(W, 0, z), point(W, D, z), point(W, D, under), point(W, 0, under)].join(" ")
  };
}

type FloorStatus = "complete" | "active" | "delayed";

// Bottom to top. The roof is the delayed level, which is what the risk card names.
const FLOORS: FloorStatus[] = ["complete", "complete", "complete", "complete", "complete", "active", "active", "delayed"];
const ROOF_INDEX = FLOORS.length - 1;
const ROOF_Z = ROOF_INDEX * FLOOR_PITCH;

// One marker per record behind the delay claim — four cards, four dots.
const EVIDENCE_POINTS = [
  [0.26, 0.3],
  [0.56, 0.2],
  [0.4, 0.66],
  [0.74, 0.52]
] as const;

const content = {
  en: {
    label: "ONEAI CONSTRUCTION",
    title: "DIGITAL PROJECT STATE",
    sub: "BIM · IFC · SCHEDULE · RISK · EVIDENCE · AGENTS",
    roofTag: "L08 · ROOF ZONE B",
    roofDelta: "+4d",
    legend: [
      { status: "complete" as const, text: "Complete" },
      { status: "active" as const, text: "In progress" },
      { status: "delayed" as const, text: "Delayed" }
    ],
    risk: { label: "RISK SIGNAL", value: "Roof Zone B", state: "P2 / REVIEW", note: "Level 08 · progress 67% · variance +4d" },
    forecast: { label: "P50 / P90 FORECAST", value: "+4.9d / +6.4d", state: "UNCALIBRATED", note: "Indicative only — insufficient activity history." },
    evidence: { label: "EVIDENCE GRAPH", value: "4 records", state: "TRACEABLE", note: "Marked on Level 08. Every claim opens its record." },
    footerLeft: "REAL-WORLD INTELLIGENCE",
    footerRight: "SEE → UNDERSTAND → PREDICT → ACT"
  },
  zh: {
    label: "ONEAI CONSTRUCTION",
    title: "项目数字状态",
    sub: "BIM · IFC · 进度 · 风险 · 证据 · AGENT",
    roofTag: "L08 · 屋面 B 区",
    roofDelta: "+4 天",
    legend: [
      { status: "complete" as const, text: "已完成" },
      { status: "active" as const, text: "进行中" },
      { status: "delayed" as const, text: "已延期" }
    ],
    risk: { label: "风险信号", value: "屋面 B 区", state: "P2 / 待复核", note: "第 08 层 · 进度 67% · 偏差 +4 天" },
    forecast: { label: "P50 / P90 预测", value: "+4.9 天 / +6.4 天", state: "未校准", note: "仅供参考——活动历史不足以校准。" },
    evidence: { label: "证据图谱", value: "4 条记录", state: "可追溯", note: "标注在第 08 层。每条结论都能打开原始记录。" },
    footerLeft: "真实世界智能",
    footerRight: "看见 → 理解 → 预测 → 行动"
  }
} as const;

export function ProjectTwin({ locale }: { locale: Locale }) {
  const t = content[locale];
  const roofFaces = slabFaces(ROOF_Z);
  const [roofTagX, roofTagY] = project(FOOTPRINT_X, 0, ROOF_Z);

  return (
    <div className="oa-twin">
      <div className="oa-twin-plane" aria-hidden="true" />

      <svg className="oa-tw" viewBox="-108 -190 232 316" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {/* The ground the stack is seated on, so the building has somewhere to stand. */}
        <polygon
          className="oa-tw-ground"
          points={[
            point(-34, -34, -14),
            point(FOOTPRINT_X + 34, -34, -14),
            point(FOOTPRINT_X + 34, FOOTPRINT_Y + 34, -14),
            point(-34, FOOTPRINT_Y + 34, -14)
          ].join(" ")}
        />

        {FLOORS.map((status, index) => {
          const faces = slabFaces(index * FLOOR_PITCH);
          return (
            <g key={index} className="oa-tw-slab" data-status={status}>
              <polygon className="oa-tw-face-left" points={faces.left} />
              <polygon className="oa-tw-face-right" points={faces.right} />
              <polygon className="oa-tw-face-top" points={faces.top} />
            </g>
          );
        })}

        {/* The 4D read: one plane sweeping up through the stack, floor by floor. */}
        <polygon className="oa-tw-scan" points={slabFaces(0).top} />

        {/* Redrawn last so the delayed roof reads above the sweep, never under it. */}
        <g className="oa-tw-slab oa-tw-roof" data-status="delayed">
          <polygon className="oa-tw-face-left" points={roofFaces.left} />
          <polygon className="oa-tw-face-right" points={roofFaces.right} />
          <polygon className="oa-tw-face-top" points={roofFaces.top} />
        </g>

        {EVIDENCE_POINTS.map(([u, v], index) => {
          const [cx, cy] = project(u * FOOTPRINT_X, v * FOOTPRINT_Y, ROOF_Z);
          return <circle key={index} className="oa-tw-evidence" cx={cx} cy={cy} r={2.4} />;
        })}

        {/* The label the risk card repeats — put on the geometry, not beside it. */}
        <line className="oa-tw-leader" x1={roofTagX} y1={roofTagY} x2={roofTagX + 26} y2={roofTagY - 16} />
        <text className="oa-tw-tag" x={roofTagX + 30} y={roofTagY - 17}>{t.roofTag}</text>
        <text className="oa-tw-tag-delta" x={roofTagX + 30} y={roofTagY - 9}>{t.roofDelta}</text>
      </svg>

      <div className="oa-twin-title">
        <span>{t.label}</span>
        <strong>{t.title}</strong>
        <small>{t.sub}</small>
      </div>

      <div className="oa-twin-legend">
        {t.legend.map((item) => (
          <span key={item.text} data-status={item.status}>
            <i />
            {item.text}
          </span>
        ))}
      </div>

      {(["risk", "forecast", "evidence"] as const).map((key) => {
        const card = t[key];
        return (
          <div key={key} className={`oa-twin-card ${key}`} data-state={key === "forecast" ? "uncalibrated" : undefined}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <em>{card.state}</em>
            <small>{card.note}</small>
          </div>
        );
      })}

      <div className="oa-twin-footer">
        <span>{t.footerLeft}</span>
        <b>{t.footerRight}</b>
      </div>
    </div>
  );
}

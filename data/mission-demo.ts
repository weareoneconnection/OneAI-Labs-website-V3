import type { Locale } from "@/lib/i18n";

export type MissionDemoStageKey = "goal" | "plan" | "approval" | "execution" | "verification" | "evidence";
export type MissionDemoSceneKey = "software-engineering" | "enterprise-operations" | "construction-intelligence";
type Bi = Record<Locale, string>;

export type MissionDemoStage = {
  key: MissionDemoStageKey;
  label: Bi;
  summary: Bi;
  detail: Bi;
  state: Bi;
};

export type MissionDemoScene = {
  key: MissionDemoSceneKey;
  label: Bi;
  description: Bi;
  stages: MissionDemoStage[];
};

const bi = (en: string, zh: string): Bi => ({ en, zh });
const stage = (key: MissionDemoStageKey, label: Bi, summary: Bi, detail: Bi, state: Bi): MissionDemoStage => ({ key, label, summary, detail, state });

export const missionDemoScenes: MissionDemoScene[] = [
  {
    key: "software-engineering",
    label: bi("Software Engineering", "软件工程"),
    description: bi("Review a proposed change without giving the public demo access to a repository or deployment.", "审查一个待提交的代码变更；公开 Demo 不接触仓库，也不触发部署。"),
    stages: [
      stage("goal", bi("Goal", "目标"), bi("Assess a proposed dependency upgrade.", "评估一次依赖升级。"), bi("The request is scoped to compatibility, test impact and a written recommendation.", "目标范围限定为兼容性、测试影响和书面建议。"), bi("Scoped", "已限定")),
      stage("plan", bi("Plan", "计划"), bi("Inspect the diff, identify affected tests, then compare risk.", "检查差异、识别受影响测试，再比较风险。"), bi("The plan names the evidence required before anyone can call the change safe.", "计划写明在认定变更安全前必须获得哪些证据。"), bi("Prepared", "已准备")),
      stage("approval", bi("Approval", "审批"), bi("A human reviewer approves read-only analysis only.", "人工审核者只批准只读分析。"), bi("No merge, release, credential or external write permission is present in this public scenario.", "这个公开场景没有合并、发布、凭证或外部写入权限。"), bi("Human gate", "人工门禁")),
      stage("execution", bi("Execution", "执行"), bi("Run simulated checks against a redacted change set.", "对脱敏变更集运行模拟检查。"), bi("The interface shows the action contract; it does not execute a command, access a repository or mutate a system.", "界面展示动作契约，但不会执行命令、访问仓库或修改系统。"), bi("Read-only", "只读")),
      stage("verification", bi("Independent Verification", "独立验证"), bi("Compare the stated checks with the evidence contract.", "将声明的检查与证据契约进行比对。"), bi("A separate verifier would check the supplied artifacts; this public card is an explanatory simulation, not a signed receipt.", "独立 Verifier 会检查提交的产物；本卡片是解释性模拟，不是签名回执。"), bi("Illustrative", "示意")),
      stage("evidence", bi("Evidence", "证据"), bi("Return a review record with assumptions and next action.", "返回包含假设与下一步的评审记录。"), bi("Evidence shown here is a static, redacted example. It is not a customer result, benchmark or production metric.", "这里的证据是静态脱敏示例，不是客户结果、性能基准或生产指标。"), bi("Simulated", "模拟数据"))
    ]
  },
  {
    key: "enterprise-operations",
    label: bi("Enterprise Operations", "企业运营"),
    description: bi("Route an internal policy question through reviewable steps without taking action in an external system.", "把一个内部政策问题经过可审查步骤处理，但不在外部系统执行动作。"),
    stages: [
      stage("goal", bi("Goal", "目标"), bi("Draft a response to a supplier onboarding exception.", "起草一份供应商准入例外的回复。"), bi("The accountable owner, source policy and escalation threshold are named before planning.", "在规划前先标记责任人、政策来源和升级阈值。"), bi("Owner named", "已指定负责人")),
      stage("plan", bi("Plan", "计划"), bi("Gather policy references, classify the exception and prepare options.", "收集政策引用、分类例外并准备选项。"), bi("The plan separates retrieval and recommendation from any approval or system change.", "计划将检索、建议与审批或系统变更分开。"), bi("Awaiting review", "等待审核")),
      stage("approval", bi("Approval", "审批"), bi("A policy owner reviews the proposed response.", "政策负责人审核拟定回复。"), bi("Approval authorizes a draft response only; it does not authorize a vendor record change or outbound message.", "审批只授权回复草稿，不授权修改供应商记录或发送外部消息。"), bi("Approval required", "需要审批")),
      stage("execution", bi("Execution", "执行"), bi("Prepare a redacted response package for the owner.", "为负责人准备脱敏回复包。"), bi("The public demo stops at a prepared artifact. No email, procurement or CRM operation is performed.", "公开 Demo 停在产出准备好的产物；不会执行邮件、采购或 CRM 操作。"), bi("Prepared only", "仅准备")),
      stage("verification", bi("Independent Verification", "独立验证"), bi("Check citations, policy version and missing approvals.", "核对引用、政策版本和缺失审批。"), bi("The verifier checks completeness against the stated contract; it does not decide policy on behalf of the owner.", "Verifier 按既定契约检查完整性，不代替负责人做政策决定。"), bi("Contract check", "契约检查")),
      stage("evidence", bi("Evidence", "证据"), bi("Record the decision path and unresolved questions.", "记录决策路径与未决问题。"), bi("The record includes a simulated receipt shape and redaction note, not a live enterprise audit record.", "记录展示模拟回执结构与脱敏说明，不是实时企业审计记录。"), bi("Simulated", "模拟数据"))
    ]
  },
  {
    key: "construction-intelligence",
    label: bi("Construction Intelligence", "建筑智能"),
    description: bi("Triage a project document issue with evidence boundaries; do not change a live schedule or site record.", "在证据边界内分流一个项目文档问题；不修改真实进度计划或现场记录。"),
    stages: [
      stage("goal", bi("Goal", "目标"), bi("Flag a possible RFI / NCR follow-up from a project packet.", "从项目资料包中标记潜在 RFI / NCR 跟进事项。"), bi("The goal is to identify missing information and an accountable next step, not to certify site conditions.", "目标是识别缺失信息与责任明确的下一步，不是认证现场状态。"), bi("Evidence bounded", "证据有边界")),
      stage("plan", bi("Plan", "计划"), bi("Map the document references, dates, owner and required response.", "整理文档引用、日期、负责人和所需回复。"), bi("The plan marks what is observed, what is inferred and what still needs a human site check.", "计划区分已观察事实、推断内容，以及仍需人工现场核查的部分。"), bi("Mapped", "已整理")),
      stage("approval", bi("Approval", "审批"), bi("A project owner approves a review package.", "项目负责人批准评审包。"), bi("Approval is for issuing a review task; it is not approval to close an NCR, change a schedule or instruct a contractor.", "审批只用于发起评审任务，不代表关闭 NCR、修改计划或指示承包商。"), bi("Owner gate", "负责人门禁")),
      stage("execution", bi("Execution", "执行"), bi("Generate a redacted issue summary and checklist.", "生成脱敏问题摘要与检查清单。"), bi("The demo creates no site instruction, procurement action, schedule update or external communication.", "Demo 不生成现场指令、采购动作、进度更新或外部沟通。"), bi("No side effect", "无副作用")),
      stage("verification", bi("Independent Verification", "独立验证"), bi("Check each conclusion against a cited document fragment.", "将每个结论与引用的文档片段核对。"), bi("A real verification receipt would require the source packet and project authority; this screen only explains the boundary.", "真实验证回执需要源资料包与项目权限；本界面只解释边界。"), bi("Illustrative", "示意")),
      stage("evidence", bi("Evidence", "证据"), bi("Hand the owner a review packet with provenance notes.", "向负责人交付带来源说明的评审包。"), bi("This is a static simulated record with no project identifiers, customer claim or field measurement.", "这是没有项目标识、客户成果或现场测量的静态模拟记录。"), bi("Simulated", "模拟数据"))
    ]
  }
];

export const missionDemoSource: Bi = bi(
  "Public demo data · static redacted simulation · no production credentials · no external side effects",
  "公开 Demo 数据 · 静态脱敏模拟 · 不含生产凭证 · 不执行外部副作用"
);

import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export const theOneFacts: Record<Locale, {
  eyebrow: string;
  headline: string;
  position: string;
  summary: string;
  stats: Array<{ value: string; label: string }>;
  snapshotNote: string;
}> = {
  en: {
    eyebrow: "TheOne · Official product",
    headline: "Beyond answers. Into action.",
    position: "A governed AI operating system that gets to know how you work.",
    summary: "TheOne brings coding, research, documents, voice, goals and automations into one workspace. It learns only from verified outcomes, and every improvement still passes controlled release gates.",
    stats: [
      { value: "10", label: "product areas" },
      { value: "93", label: "built-in skills" },
      { value: "22", label: "automation templates" },
      { value: "6", label: "delivery channels" },
      { value: "3", label: "coding engine paths" }
    ],
    snapshotNote: "Product-code snapshot verified 29 October 2026. Engine and channel availability depends on workspace configuration."
  },
  zh: {
    eyebrow: "TheOne · 正式产品",
    headline: "不止回答，开始行动。",
    position: "一个越用越懂你的受治理 AI 操作系统。",
    summary: "TheOne 把编程、调研、文档、语音、目标和自动化放进同一个工作空间。它只从经过验证的结果中学习，任何改进仍需通过受控发布门禁。",
    stats: [
      { value: "10", label: "项产品能力" },
      { value: "93", label: "个内置技能" },
      { value: "22", label: "个自动化模板" },
      { value: "6", label: "种推送渠道" },
      { value: "3", label: "条编程引擎路径" }
    ],
    snapshotNote: "数据按 2026 年 10 月 29 日产品代码核验；引擎与渠道的实际可用性取决于工作空间配置。"
  }
};

export const theOneCapabilities: Array<{
  key: string;
  path: string;
  title: Localized;
  description: Localized;
}> = [
  { key: "coding", path: "/product/coding", title: { en: "Coding", zh: "编程" }, description: { en: "From repository analysis to a tested, reviewable change.", zh: "从分析代码库，到交付经过检查、可审查的改动。" } },
  { key: "voice", path: "/product/voice", title: { en: "Voice", zh: "语音" }, description: { en: "Talk naturally while approvals stay visible on screen.", zh: "自然交流，同时让重要审批继续留在屏幕上。" } },
  { key: "research", path: "/features/research-writing", title: { en: "Research & writing", zh: "调研与写作" }, description: { en: "Sourced briefs, comparisons and finished writing.", zh: "带来源的速览、对比和可以直接使用的成稿。" } },
  { key: "documents", path: "/features/documents-design", title: { en: "Documents & design", zh: "文档与设计" }, description: { en: "Real Word, PDF, PowerPoint, SVG and prototype deliverables.", zh: "交付真正的 Word、PDF、PowerPoint、SVG 和原型。" } },
  { key: "goals", path: "/features/goals-automations", title: { en: "Goals & automations", zh: "目标与自动化" }, description: { en: "Scheduled and event-driven work that keeps moving.", zh: "按时间或事件持续运行，把结果主动推送给你。" } },
  { key: "memory", path: "/features/memory", title: { en: "Memory", zh: "记忆" }, description: { en: "Preferences, facts and lessons you can inspect and edit.", zh: "记住偏好、事实与经验，并让你随时查看和修改。" } },
  { key: "skills", path: "/features/skills", title: { en: "Skill library", zh: "技能库" }, description: { en: "93 built-in ways of doing real work well.", zh: "93 个内置技能，覆盖工程、写作、设计、业务与治理。" } },
  { key: "integrations", path: "/features/integrations", title: { en: "Integrations & API", zh: "连接与开放接口" }, description: { en: "Governed runs from your tools, agents and systems.", zh: "让工具、智能体和业务系统通过同一治理入口协作。" } },
  { key: "markets", path: "/features/markets", title: { en: "Market lab", zh: "市场实验室" }, description: { en: "Research, risk and simulation — never live brokerage.", zh: "研究、风控与模拟交易，绝不连接券商或发送真实订单。" } },
  { key: "evolution", path: "/features/evolution", title: { en: "Governed evolution", zh: "受控进化" }, description: { en: "Failures become candidates, then evaluation, canary and rollback.", zh: "从失败生成候选改进，再经过评测、金丝雀与回滚门禁。" } }
];

export const theOneSystemRoles: Array<{ name: string; role: Localized }> = [
  { name: "TheOne", role: { en: "Governs intent, coordination, authority, proof and memory.", zh: "治理意图、协同、权限、证据与记忆。" } },
  { name: "OneAI", role: { en: "Provides intelligence access and model routing.", zh: "提供智能接入与模型路由。" } },
  { name: "OneMission", role: { en: "Keeps missions and task state durable.", zh: "持久保存 Mission 与任务运行状态。" } },
  { name: "OneClaw", role: { en: "Executes approved tools and computer actions.", zh: "执行经过批准的工具与计算机动作。" } },
  { name: "OneField", role: { en: "Supplies scoped context and preserves shared evidence.", zh: "提供限定范围的上下文并保存共享证据。" } },
  { name: "OneForge", role: { en: "Evaluates, promotes and rolls back capability releases.", zh: "评测、晋级并回滚能力发布。" } }
];

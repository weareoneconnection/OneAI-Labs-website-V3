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
/** Legacy V5 inventory retained for consumers that need the fuller Agent OS map. */
export type Bi = { en: string; zh: string };
const l = (en: string, zh: string): Bi => ({ en, zh });

export const theOne = {
  category: l("The AI operating system that learns you and evolves itself", "越用越懂你、会自我进化的 AI 操作系统"),
  source: l(
    "Product inventory checked against the official TheOne website on 29 October 2026. These are product counts, not performance benchmarks or customer outcomes.",
    "产品库存已于 2026 年 10 月 29 日对照 TheOne 官方网站核验。这些是产品数量，不是性能基准或客户成果。"
  ),
  headline: [l("Beyond answers.", "不止回答。"), l("Into action.", "开始行动。")],
  promise: l(
    "Say what you need, and TheOne gets it done — code, research, documents, scheduled runs, long-running goals. It asks before it acts, and shows the proof when it’s done.",
    "你说要什么，TheOne 把它做完：写代码、做调研、出文档、按时运行、长期推进。动手前先问你，完成后拿出证据。",
  ),
  facts: [
    { value: "10", label: l("capabilities", "项能力") },
    { value: "93", label: l("built-in skills", "个内置技能") },
    { value: "22", label: l("automation templates", "个自动化模板") },
    { value: "6", label: l("delivery channels", "个推送渠道") },
    { value: "3", label: l("coding engines", "种编程引擎") },
  ],
  capabilities: [
    { slug: "coding", title: l("Coding", "编程"), text: l("Changes your code, and proves it works", "改你的代码，并证明它能用") },
    { slug: "voice", title: l("Voice", "语音"), text: l("Talk it through, hands free", "开口说，不用打字") },
    { slug: "research-writing", title: l("Research and writing", "调研与写作"), text: l("Reads widely, cites its sources, writes it up", "广泛查阅，附上来源，写成成稿") },
    { slug: "documents-design", title: l("Documents and design", "文档与设计"), text: l("Real files and real designs, not just text", "交给你真正的文件和设计") },
    { slug: "goals-automations", title: l("Goals and automations", "目标与自动化"), text: l("Keeps working after you close the tab", "你关掉页面，它还在推进") },
    { slug: "memory", title: l("Memory", "记忆"), text: l("Remembers what matters, and shows you what it remembers", "记住重要的事，也让你看到它记住了什么") },
    { slug: "skills", title: l("Skill library", "技能库"), text: l("93 built-in skills, picked for the task", "93 个内置技能，按任务自动选用") },
    { slug: "integrations", title: l("Integrations and API", "连接与开放接口"), text: l("Results where you work; a gateway for your agents", "结果送到你常用的地方，也向你的智能体开放") },
    { slug: "markets", title: l("Markets lab", "市场实验室"), text: l("Research, risk and paper trading — never real orders", "研究、风控和模拟交易，绝不真实下单") },
    { slug: "evolution", title: l("Self-evolution", "自我进化"), text: l("Learns from its failures, under rules it cannot change", "从失败中变强，但改不了规则") },
  ],
  loop: [
    { title: l("Understand", "理解"), text: l("Turns what you ask into a plan within your workspace’s rules.", "把你的要求变成符合规则的计划。") },
    { title: l("Act", "行动"), text: l("Uses the right skill, model and tools; risky steps wait for you.", "选用合适的技能、模型和工具；有风险的步骤先等你批准。") },
    { title: l("Verify", "验证"), text: l("Checks the result independently before calling it done.", "结果先经过独立核对，才算完成。") },
    { title: l("Learn", "学习"), text: l("Keeps what worked — your preferences, facts and lessons.", "记住有效的做法：你的偏好、事实和经验。") },
    { title: l("Evolve", "进化"), text: l("Proposes improvements, tests them, and ships only what is proven.", "提出改进、经过评测，证明有效才上线。") },
  ],
  ecosystem: [
    { name: "OneAI Core", role: l("The models: access, routing and cost control behind every answer.", "模型：每个回答背后的模型接入、路由与成本控制。"), href: "/core" },
    { name: "OneClaw", role: l("Execution: the runtime that edits code, runs checks and acts on systems.", "执行：改代码、跑检查、操作系统的运行环境。"), href: "/agent-os" },
    { name: "OneMission", role: l("Durable work: long tasks that survive restarts, with approvals and retries.", "持久任务：长任务能扛住重启，带审批与重试。"), href: "/mission" },
    { name: "OneField", role: l("Shared context and evidence, scoped to each workspace.", "按空间隔离的共享上下文与证据。"), href: "/field" },
    { name: "OneForge", role: l("How a new capability is evaluated, approved and released — or rolled back.", "新能力如何评测、审批、发布或回滚。"), href: "/forge" },
  ],
} as const;

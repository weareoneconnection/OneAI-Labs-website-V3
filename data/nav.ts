import type { Locale } from "@/lib/i18n";

/**
 * Five entries, because a reader can hold five things and cannot hold ten.
 *
 * The previous navigation listed every surface at equal weight — Core, Forge,
 * Agent OS, Studio, Video, Products, Use Cases, Developers, Pricing, Company —
 * which told a first-time visitor that we have a lot of things rather than that
 * we have one platform. Grouping is the whole point: the top level is what kind
 * of question you are here with, and the panel answers it.
 *
 * Pricing sits under Platform rather than at the top level. Core is a self-serve
 * commercial product, so hiding its price would read as "contact sales" and cost
 * more in developer trust than the brand gains — but it does not belong beside
 * FROM MODELS TO MISSIONS either.
 */

export type NavLink = {
  label: Record<Locale, string>;
  href: string;
  /** Shown under the label inside a panel. Panels have room to explain; the bar does not. */
  hint?: Record<Locale, string>;
  /** Groups links inside a panel under a small heading. */
  section?: Record<Locale, string>;
};

export type NavEntry = {
  label: Record<Locale, string>;
  /** A destination of its own. Entries with items render as a panel instead. */
  href?: string;
  items?: NavLink[];
};

export const navEntries: NavEntry[] = [
  {
    label: { en: "Platform", zh: "平台" },
    items: [
      {
        label: { en: "OneAI Core", zh: "OneAI Core" },
        href: "/core",
        hint: { en: "Model access, routing and commercial control", zh: "模型接入、路由与商业控制" }
      },
      {
        label: { en: "OneForge", zh: "OneForge" },
        href: "/forge",
        hint: { en: "The governed capability lifecycle", zh: "受治理的能力生命周期" }
      },
      {
        // The nav label the page now uses too. The /agent-os URL is unchanged:
        // renaming it needs a redirect and a check that nothing external says
        // "Agent OS" first.
        label: { en: "Agent Systems", zh: "Agent 系统" },
        href: "/agent-os",
        hint: { en: "TheOne, OneClaw and OneField — plan, execute, prove", zh: "TheOne、OneClaw 与 OneField——规划、执行、留证" }
      },
      {
        label: { en: "Studio", zh: "Studio" },
        href: "/studio",
        hint: { en: "The workspace for structured generation", zh: "结构化生成工作台" }
      },
      {
        label: { en: "Pricing", zh: "定价" },
        href: "/pricing",
        hint: { en: "Plans and limits for OneAI Core", zh: "OneAI Core 的套餐与额度" }
      }
    ]
  },
  {
    label: { en: "Products", zh: "产品" },
    items: [
      {
        section: { en: "Built world", zh: "建成环境" },
        label: { en: "OneAI Construction", zh: "OneAI Construction" },
        href: "/construction",
        hint: { en: "Project, schedule, risk and evidence intelligence", zh: "项目、进度、风险与证据智能" }
      },
      {
        section: { en: "Creative", zh: "创意" },
        label: { en: "OneVideo Studio", zh: "OneVideo Studio" },
        href: "/video",
        hint: { en: "Script to finished episode as a governed pipeline", zh: "从剧本到成片的受治理流水线" }
      },
      {
        section: { en: "Everything", zh: "全部" },
        label: { en: "All products", zh: "全部产品" },
        href: "/products",
        hint: { en: "Shipping products and what is still in Labs", zh: "已发布产品，以及仍在 Labs 的部分" }
      }
    ]
  },
  { label: { en: "Industries", zh: "行业" }, href: "/industries" },
  { label: { en: "Developers", zh: "开发者" }, href: "/developers" },
  {
    label: { en: "Company", zh: "公司" },
    items: [
      {
        label: { en: "About OneAI Labs", zh: "关于 OneAI Labs" },
        href: "/company",
        hint: { en: "What we build and how we operate", zh: "我们做什么，以及怎么做事" }
      },
      {
        label: { en: "Contact", zh: "联系我们" },
        href: "/contact",
        hint: { en: "Enterprise demos and partnerships", zh: "企业演示与合作" }
      }
    ]
  }
];

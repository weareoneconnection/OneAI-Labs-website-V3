import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { BarChart3, BookOpenCheck, Radar, ShieldAlert } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { VerticalDetail, type VerticalDetailContent } from "@/components/sections/VerticalDetail";
import { pageMetadata, type PageParams } from "@/lib/seo";

const PRODUCT_URL = "https://oneaitradingbot.vercel.app/";

const meta = {
  en: {
    title: "OneAI Trading OS · AI Market Research and Risk Tools",
    description: "Market briefs, risk radar, strategy review and trading journal workflows. Built for research and discipline — not financial advice."
  },
  zh: {
    title: "OneAI Trading OS · AI 市场研究与风险工具",
    description: "市场简报、风险雷达、策略复盘和交易日志工作流。面向研究与纪律，不构成任何投资建议。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneAI Trading OS",
      title: "AI market research, risk analysis and trading discipline tools",
      description: "OneAI Trading OS is designed for market research, risk awareness, strategy review and trading journal workflows. It does not provide financial advice or guaranteed trading returns."
    },
    features: [
      { title: "Market Brief", description: "AI-generated market summaries for research and situational awareness.", icon: BookOpenCheck },
      { title: "Risk Radar", description: "Identify risk themes, volatility conditions and market context.", icon: Radar },
      { title: "Strategy Review", description: "Review trade ideas and research logic with structured AI assistance.", icon: BarChart3 },
      { title: "Risk Guardrails", description: "Tools for discipline, journaling and risk review. Not investment advice.", icon: ShieldAlert }
    ],
    detail: {
      workflow: {
        eyebrow: "How it works",
        heading: "A daily research loop, not a signal feed.",
        steps: [
          { label: "Scan", text: "Pull market state, volatility conditions and the themes moving your watchlist into one brief." },
          { label: "Frame", text: "Turn a trade idea into a structured thesis: setup, invalidation, risk context and sizing notes." },
          { label: "Review", text: "Run the thesis against risk guardrails and journal it before any decision is made." },
          { label: "Learn", text: "Close the loop after the trade: outcome, discipline check and lessons feed the next scan." }
        ]
      },
      audience: {
        eyebrow: "Who it is for",
        heading: "Built for traders who treat process as the edge.",
        items: [
          { title: "Independent traders", description: "Replace scattered notes and tabs with one research brief and a disciplined journal." },
          { title: "Trading communities", description: "Give members a shared research and review format instead of unstructured signal chat." },
          { title: "Research-driven teams", description: "Standardize how ideas are framed, challenged and reviewed before capital is committed." }
        ]
      },
      cta: {
        heading: "See the Trading OS cockpit live.",
        body: "The dry-run cockpit shows scan, decision, guardrail and journal state in one operating layer — no account or deposit involved.",
        openLabel: "Open Trading OS",
        href: PRODUCT_URL,
        demoLabel: "Request Demo"
      },
      disclaimer: "OneAI Trading OS is a research, journaling and discipline tool. It does not provide investment advice, does not execute discretionary decisions for you, and no output constitutes a promise of returns. Trading involves risk of loss."
    } satisfies VerticalDetailContent
  },
  zh: {
    hero: {
      eyebrow: "OneAI Trading OS",
      title: "AI 市场研究、风险分析与交易纪律工具",
      description: "OneAI Trading OS 面向市场研究、风险认知、策略复盘和交易日志工作流。不提供投资建议，也不承诺任何交易收益。"
    },
    features: [
      { title: "市场简报", description: "AI 生成的市场摘要，用于研究和态势感知。", icon: BookOpenCheck },
      { title: "风险雷达", description: "识别风险主题、波动状况和市场环境。", icon: Radar },
      { title: "策略复盘", description: "用结构化 AI 协助复盘交易想法和研究逻辑。", icon: BarChart3 },
      { title: "风险护栏", description: "纪律、日志和风险复查工具。不构成投资建议。", icon: ShieldAlert }
    ],
    detail: {
      workflow: {
        eyebrow: "如何运作",
        heading: "一个每日研究闭环，而不是喊单信号流。",
        steps: [
          { label: "扫描", text: "把市场状态、波动状况和影响自选清单的主题汇成一份简报。" },
          { label: "立论", text: "把交易想法变成结构化论点：形态、失效位、风险背景和仓位备注。" },
          { label: "复查", text: "在做任何决定之前，用风险护栏检验论点并写入日志。" },
          { label: "复盘", text: "交易结束后闭环：结果、纪律检查和教训回流到下一次扫描。" }
        ]
      },
      audience: {
        eyebrow: "适合谁",
        heading: "为把流程当作优势的交易者而建。",
        items: [
          { title: "独立交易者", description: "用一份研究简报和一本有纪律的日志，替代散落各处的笔记和标签页。" },
          { title: "交易社群", description: "给成员一套共同的研究和复盘格式，而不是无结构的信号聊天。" },
          { title: "研究驱动的团队", description: "在投入资金之前，统一想法的立论、质疑和复查方式。" }
        ]
      },
      cta: {
        heading: "在线体验 Trading OS 驾驶舱。",
        body: "试运行驾驶舱在一个操作层里展示扫描、决策、护栏和日志状态——不涉及任何账户或入金。",
        openLabel: "打开 Trading OS",
        href: PRODUCT_URL,
        demoLabel: "预约演示"
      },
      disclaimer: "OneAI Trading OS 是研究、日志和纪律工具。它不提供投资建议，不代替你做出交易决策，任何输出都不构成收益承诺。交易存在亏损风险。"
    } satisfies VerticalDetailContent
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/trading", meta);
}

export default async function TradingPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />
      <section className="site-shell py-16 sm:py-20">
        <div className="m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {t.features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </section>
      <VerticalDetail locale={locale} content={t.detail} />
      <FinalCTASection locale={locale} />
    </>
  );
}

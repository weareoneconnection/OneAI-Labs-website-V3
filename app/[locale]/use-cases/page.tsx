import { PageHero } from "@/components/sections/PageHero";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Use Cases · Ship Commercial AI Products Faster",
    description: "Use OneAI Core, Agent OS, OneAI Bot and OneClaw to build product-grade AI features, structured task APIs and vertical operating systems."
  },
  zh: {
    title: "应用场景 · 更快发布商业 AI 产品",
    description: "用 OneAI Core、Agent OS、OneAI Bot 和 OneClaw 构建产品级 AI 功能、结构化任务 API 和垂直操作系统。"
  }
};

const hero = {
  en: {
    eyebrow: "Use Cases",
    title: "Build commercial AI products, bots and workflows faster",
    description: "Use OneAI Core, Agent OS, OneAI Bot and OneClaw to build product-grade AI features, structured task APIs and vertical operating systems."
  },
  zh: {
    eyebrow: "应用场景",
    title: "更快构建商业 AI 产品、机器人和工作流",
    description: "用 OneAI Core、Agent OS、OneAI Bot 和 OneClaw 构建产品级 AI 功能、结构化任务 API 和垂直操作系统。"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/use-cases", meta);
}

export default async function UseCasesPage({ params }: PageParams) {
  const { locale } = await params;
  const t = hero[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <UseCasesSection locale={locale} />
      <DemoSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

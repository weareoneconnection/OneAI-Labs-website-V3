import { PageHero } from "@/components/sections/PageHero";
import { ProductHierarchy } from "@/components/sections/ProductHierarchy";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Products · The OneAI Platform and Ecosystem",
    description: "One platform of six governed systems — Core, Forge, TheOne, OneMission, OneClaw and OneField — plus applied businesses and Labs products built on the same stack."
  },
  zh: {
    title: "产品 · OneAI 平台与生态",
    description: "一个由六个受治理系统组成的平台——Core、Forge、TheOne、OneMission、OneClaw 与 OneField，以及建立在同一技术栈上的应用业务与 Labs 产品。"
  }
};

const hero = {
  en: {
    eyebrow: "Products",
    title: "One platform. Durable work. Applied businesses.",
    description: "Core, Forge, TheOne, OneMission, OneClaw and OneField separate intelligence, capability lifecycle, cognition, work state, execution and shared evidence."
  },
  zh: {
    eyebrow: "产品",
    title: "一个平台，持久工作，以及落地业务。",
    description: "Core、Forge、TheOne、OneMission、OneClaw 与 OneField 分离智能、能力生命周期、认知、工作状态、执行和共享证据。"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/products", meta);
}

export default async function ProductsPage({ params }: PageParams) {
  const { locale } = await params;
  const t = hero[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} />
      <ProductHierarchy locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

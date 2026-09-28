import { PageHero } from "@/components/sections/PageHero";
import { ProductHierarchy } from "@/components/sections/ProductHierarchy";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Products · The OneAI Platform and Ecosystem",
    description: "One platform of seven governed systems — Core, Forge, TheOne, OneMission, OneClaw, OneField and Independent Verifier — plus applied businesses and Labs products built on the same stack."
  },
  zh: {
    title: "产品 · OneAI 平台与生态",
    description: "一个由七个受治理系统组成的平台——Core、Forge、TheOne、OneMission、OneClaw、OneField 与 Independent Verifier，以及建立在同一技术栈上的应用业务与 Labs 产品。"
  }
};

const hero = {
  en: {
    eyebrow: "Products",
    title: "One platform. Durable work. Applied businesses.",
    description: "Core, Forge, TheOne, OneMission, OneClaw, OneField and Independent Verifier separate intelligence, capability lifecycle, cognition, work state, execution, shared evidence and verification."
  },
  zh: {
    eyebrow: "产品",
    title: "一个平台，持久工作，以及落地业务。",
    description: "Core、Forge、TheOne、OneMission、OneClaw、OneField 与 Independent Verifier 分离智能、能力生命周期、认知、工作状态、执行、共享证据和独立验证。"
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

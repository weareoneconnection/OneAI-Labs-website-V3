import { PageHero } from "@/components/sections/PageHero";
import { ProductHierarchy } from "@/components/sections/ProductHierarchy";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Products · The OneAI Platform and Ecosystem",
    description: "One platform of five governed systems — Core, Forge, TheOne, OneClaw and OneField. Two applied businesses built on it. Everything else runs on the same stack, listed under Labs with the stage its evidence supports."
  },
  zh: {
    title: "产品 · OneAI 平台与生态",
    description: "一个由五个受治理系统组成的平台——Core、Forge、TheOne、OneClaw 与 OneField。在它之上，是两门落地生意。其余的跑在同一套技术栈上，列在 Labs 之下，并各自标注证据支持的阶段。"
  }
};

const hero = {
  en: {
    eyebrow: "Products",
    title: "One platform. Two applied businesses. A lot of Labs.",
    description: "Role and maturity are different questions. Core, Forge, TheOne, OneClaw and OneField are the five systems this company is built on — whatever stage badge each currently carries."
  },
  zh: {
    eyebrow: "产品",
    title: "一个平台，两门落地生意，剩下的都在 Labs。",
    description: "角色和成熟度是两个不同的问题。Core、Forge、TheOne、OneClaw 与 OneField 是这家公司赖以建立的五个系统——不论它们各自当前的阶段徽章是什么。"
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

import { PageHero } from "@/components/sections/PageHero";
import { ProductMatrixSection } from "@/components/sections/ProductMatrixSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Products · The OneAI Product Ecosystem",
    description: "A growing family of AI products and vertical operating systems built on OneAI Core: OneAI Bot, OneClaw, OneVideo Studio, TheOne, Trading OS, Construction OS and more."
  },
  zh: {
    title: "产品 · OneAI 产品生态",
    description: "构建在 OneAI Core 之上、持续成长的 AI 产品与垂直操作系统家族：OneAI Bot、OneClaw、OneVideo Studio、TheOne、Trading OS、Construction OS 等。"
  }
};

const hero = {
  en: {
    eyebrow: "Products",
    title: "The OneAI Labs product ecosystem",
    description: "A growing family of AI products and vertical operating systems built on OneAI Core, Agent OS, OneAI Bot and OneClaw."
  },
  zh: {
    eyebrow: "产品",
    title: "OneAI Labs 产品生态",
    description: "构建在 OneAI Core、Agent OS、OneAI Bot 和 OneClaw 之上、持续成长的 AI 产品与垂直操作系统家族。"
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
      <ProductMatrixSection locale={locale} />
      <UseCasesSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

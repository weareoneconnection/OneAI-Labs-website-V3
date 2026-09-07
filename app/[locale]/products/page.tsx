import { PageHero } from "@/components/sections/PageHero";
import { ProductHierarchy } from "@/components/sections/ProductHierarchy";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Products · The OneAI Product Ecosystem",
    description: "Four products carry the company — OneAI Core, OneForge, OneAI Construction and OneVideo Studio. Everything else runs on the same stack and is listed under Labs, with the stage its evidence supports."
  },
  zh: {
    title: "产品 · OneAI 产品生态",
    description: "四个产品支撑起这家公司——OneAI Core、OneForge、OneAI Construction 和 OneVideo Studio。其余的跑在同一套技术栈上，列在 Labs 之下，并各自标注证据支持的阶段。"
  }
};

const hero = {
  en: {
    eyebrow: "Products",
    title: "Four products, and everything else.",
    description: "A company can have eleven products. Its site should not give them eleven equal claims on your attention."
  },
  zh: {
    eyebrow: "产品",
    title: "四个产品，以及其余的。",
    description: "一家公司可以有十一个产品。但它的网站不应该让这十一个平分你的注意力。"
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

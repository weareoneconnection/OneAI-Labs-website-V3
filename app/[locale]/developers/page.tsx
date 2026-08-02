import { PageHero } from "@/components/sections/PageHero";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Developers · Build on the OneAI Commercial API",
    description: "Use /v1/generate for structured task intelligence, /v1/chat/completions for model gateway calls, and /v1/models for catalog discovery."
  },
  zh: {
    title: "开发者 · 基于 OneAI 商业 API 构建",
    description: "用 /v1/generate 获得结构化任务智能，用 /v1/chat/completions 调用模型网关，用 /v1/models 发现模型目录。"
  }
};

const hero = {
  en: {
    eyebrow: "Developers",
    title: "Build on the OneAI commercial API",
    description: "Use /v1/generate for structured task intelligence, /v1/chat/completions for model gateway calls, and /v1/models for catalog discovery.",
    ctaLabel: "Read Docs"
  },
  zh: {
    eyebrow: "开发者",
    title: "基于 OneAI 商业 API 构建",
    description: "用 /v1/generate 获得结构化任务智能，用 /v1/chat/completions 调用模型网关，用 /v1/models 发现模型目录。",
    ctaLabel: "查看文档"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/developers", meta);
}

export default async function DevelopersPage({ params }: PageParams) {
  const { locale } = await params;
  const t = hero[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} description={t.description} ctaHref={site.docsUrl} ctaLabel={t.ctaLabel} />
      <DeveloperSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

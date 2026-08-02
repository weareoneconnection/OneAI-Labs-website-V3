import { PageHero } from "@/components/sections/PageHero";
import { CompanyProfileSection } from "@/components/sections/CompanyProfileSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Official Company Profile",
    description: `${site.legalName} (${site.registrationNo}) is the incorporated company behind OneAI Labs, OneAI Core and the OneAI product ecosystem.`
  },
  zh: {
    title: "官方公司档案",
    description: `${site.legalName}（${site.registrationNo}）是 OneAI Labs、OneAI Core 与 OneAI 产品生态背后的注册公司。`
  }
};

const hero = {
  en: {
    eyebrow: "Company",
    title: "Official Company Profile",
    description: `${site.legalName} is the incorporated company behind OneAI Labs, OneAI Core and the OneAI product ecosystem.`,
    ctaLabel: "Contact Official Email"
  },
  zh: {
    eyebrow: "公司",
    title: "官方公司档案",
    description: `${site.legalName} 是 OneAI Labs、OneAI Core 与 OneAI 产品生态背后的注册公司。`,
    ctaLabel: "联系官方邮箱"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/company", meta);
}

export default async function CompanyPage({ params }: PageParams) {
  const { locale } = await params;
  const t = hero[locale];

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        ctaHref={`mailto:${site.email}`}
        ctaLabel={t.ctaLabel}
      />
      <CompanyProfileSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

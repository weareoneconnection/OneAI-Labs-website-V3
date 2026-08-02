import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Contact · Talk to OneAI Labs",
    description: "Tell us what you want to build with OneAI Core, Agent OS, OneVideo Studio or the OneAI product ecosystem. Request a demo or API access."
  },
  zh: {
    title: "联系我们 · 与 OneAI Labs 对话",
    description: "告诉我们你想用 OneAI Core、Agent OS、OneVideo Studio 或 OneAI 产品生态构建什么。预约演示或申请 API 权限。"
  }
};

const hero = {
  en: {
    eyebrow: "Contact",
    title: "Talk to OneAI Labs",
    description: "Tell us what you want to build with OneAI Core, Agent OS or the OneAI product ecosystem.",
    ctaLabel: "Email OneAI Labs"
  },
  zh: {
    eyebrow: "联系我们",
    title: "与 OneAI Labs 对话",
    description: "告诉我们你想用 OneAI Core、Agent OS 或 OneAI 产品生态构建什么。",
    ctaLabel: "邮件联系 OneAI Labs"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/contact", meta);
}

export default async function ContactPage({ params }: PageParams) {
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
      <section className="site-shell-narrow py-16 sm:py-20">
        <ContactForm locale={locale} />
      </section>
    </>
  );
}

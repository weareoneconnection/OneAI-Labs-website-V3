import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Contact · Talk to OneAI Labs",
    description: "Tell us the problem you are trying to solve. Engagements start with an assessment, and product access starts today."
  },
  zh: {
    title: "联系我们 · 与 OneAI Labs 对话",
    description: "告诉我们你想解决的问题。合作从一次评估开始，产品则今天就能开通。"
  }
};

const hero = {
  en: {
    eyebrow: "Contact",
    title: "Talk to OneAI Labs",
    description: "Describe the task you want handled and where you are today. We will tell you whether we are the right people for it.",
    ctaLabel: "Email OneAI Labs"
  },
  zh: {
    eyebrow: "联系我们",
    title: "与 OneAI Labs 对话",
    description: "描述你想解决的任务，以及现在到了哪一步。我们会告诉你我们是不是合适的人。",
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

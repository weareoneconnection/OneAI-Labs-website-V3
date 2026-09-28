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

const pilotHero = {
  en: {
    eyebrow: "30-day pilot assessment",
    title: "Start with one accountable workflow.",
    description: "Tell us the workflow, owner, systems and cost of failure. We will assess feasibility before proposing a governed pilot.",
    ctaLabel: "Email OneAI Labs"
  },
  zh: {
    eyebrow: "30 天试点评估",
    title: "从一个责任明确的流程开始。",
    description: "告诉我们流程、负责人、涉及系统和失败成本。我们会先评估可行性，再提出受治理的试点方案。",
    ctaLabel: "邮件联系 OneAI Labs"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/contact", meta);
}

export default async function ContactPage({ params, searchParams }: PageParams & { searchParams: Promise<{ intent?: string }> }) {
  const { locale } = await params;
  const { intent } = await searchParams;
  const normalizedIntent = intent === "pilot" ? "pilot" : "general";
  const t = normalizedIntent === "pilot" ? pilotHero[locale] : hero[locale];

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
        <ContactForm locale={locale} initialIntent={normalizedIntent} />
      </section>
    </>
  );
}

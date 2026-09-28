import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Careers",
    description: "Current hiring status and how to express interest in future roles at OneAI Labs."
  },
  zh: {
    title: "加入我们",
    description: "查看 OneAI Labs 当前招聘状态，以及如何表达对未来岗位的兴趣。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "Careers",
      title: "No open roles are published today.",
      description: "We are keeping this page honest rather than presenting a permanent hiring funnel. When a role is funded, scoped and open, it will be listed here.",
      cta: "Email an introduction"
    },
    heading: "What we value before a role exists",
    body: "OneAI Labs builds governed AI infrastructure and applied systems. Future roles are likely to require production judgment across software, agents, security, verification or an applied domain — not just familiarity with model APIs.",
    items: [
      "Evidence over claims: show what ran, failed, changed and was verified.",
      "Authority before capability: define what a system may do before making it more powerful.",
      "Reversible execution: production changes need an owner, a record and a rollback path.",
      "Clear writing: architecture and operating boundaries should be understandable outside the team."
    ],
    note: "You may send a concise introduction and relevant work. This is not an application to a current vacancy, and we cannot promise a response or future role.",
    company: "Read about the company"
  },
  zh: {
    hero: {
      eyebrow: "加入我们",
      title: "目前没有公开招聘岗位。",
      description: "我们选择如实展示状态，而不是长期挂着一条并不存在的招聘漏斗。当岗位已有预算、范围明确并正式开放时，会在这里发布。",
      cta: "发送个人介绍"
    },
    heading: "岗位出现之前，我们看重什么",
    body: "OneAI Labs 构建受治理的 AI 基础设施和应用系统。未来岗位更可能要求软件、Agent、安全、验证或具体行业中的生产判断力，而不只是会调用模型 API。",
    items: [
      "证据高于宣称：展示系统跑过什么、失败过什么、改了什么、如何验证。",
      "权限先于能力：在增强系统能力前，先定义它被允许做什么。",
      "执行必须可回退：生产变更要有负责人、记录和回滚路径。",
      "清晰写作：架构和运行边界应当让团队之外的人也能读懂。"
    ],
    note: "你可以发送简短介绍和相关作品。这不等于申请一个当前空缺岗位，我们也无法承诺回复或未来职位。",
    company: "了解公司"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/careers", meta);
}

export default async function CareersPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={`mailto:${site.email}?subject=OneAI%20Labs%20career%20introduction`}
        ctaLabel={t.hero.cta}
      />
      <section className="site-shell-narrow section-y">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-9">
          <ShieldCheck className="h-7 w-7 text-oneai-cyan" />
          <h2 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{t.heading}</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">{t.body}</p>
          <ul className="mt-7 grid gap-3">
            {t.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-oneai-bg/60 p-4 text-sm leading-6 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-oneai-gold" /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-oneai-gold/20 bg-oneai-gold/[0.06] p-5 text-sm leading-6 text-amber-100/80">
            {t.note}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${site.email}?subject=OneAI%20Labs%20career%20introduction`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-oneai-gold">
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <Link href={localePath(locale, "/company")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan/50">
              {t.company} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

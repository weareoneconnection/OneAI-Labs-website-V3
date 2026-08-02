import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const LAST_UPDATED = "17 July 2026";
const LAST_UPDATED_ZH = "2026 年 7 月 17 日";

const meta = {
  en: {
    title: "Terms of Use",
    description: `Terms governing the use of oneai.network, operated by ${site.legalName}.`
  },
  zh: {
    title: "使用条款",
    description: `由 ${site.legalName} 运营的 oneai.network 网站使用条款。`
  }
};

type Section = { heading: string; paragraphs: string[] };

const content: Record<"en" | "zh", { hero: { title: string; description: string }; updated: string; sections: Section[] }> = {
  en: {
    hero: {
      title: "Terms of Use",
      description: `These terms govern your use of this website, operated by ${site.legalName}.`
    },
    updated: `Last updated: ${LAST_UPDATED}`,
    sections: [
      {
        heading: "1. Acceptance",
        paragraphs: [
          `By accessing oneai.network you agree to these terms. The website is operated by ${site.legalName} (registration no. ${site.registrationNo}), incorporated in ${site.jurisdiction}.`
        ]
      },
      {
        heading: "2. Website content",
        paragraphs: [
          "Content on this website is provided for general information about OneAI Labs and its products. We work to keep it accurate and current, but we make no warranty that it is complete, error-free or up to date, and we may change it at any time without notice."
        ]
      },
      {
        heading: "3. Products and separate terms",
        paragraphs: [
          "OneAI products — including OneAI Core, OneAI Agent OS, OneVideo Studio, OneAI Bot and the vertical operating systems — are separate services that run on their own domains and are governed by their own terms, pricing and policies. Nothing on this website constitutes an offer that overrides those product terms."
        ]
      },
      {
        heading: "4. Not professional advice",
        paragraphs: [
          "Nothing on this website is financial, investment, legal, construction-engineering or other professional advice. In particular, OneAI Trading OS is a research, journaling and discipline tool: it does not provide investment advice, does not execute discretionary trading decisions for you, and past or simulated outputs do not guarantee returns. You are solely responsible for decisions you make based on any content or product output."
        ]
      },
      {
        heading: "5. Intellectual property",
        paragraphs: [
          "The OneAI Labs name, logos, product names, website design and content are owned by or licensed to us. You may not copy, reproduce or use them for commercial purposes without our written permission, except as allowed by law."
        ]
      },
      {
        heading: "6. Acceptable use",
        paragraphs: [
          "You agree not to misuse the website — including attempting unauthorized access, scraping at disruptive volume, interfering with its operation, or using it for unlawful purposes."
        ]
      },
      {
        heading: "7. External links",
        paragraphs: [
          "The website links to external sites and platforms (including product deployments, Telegram and social platforms). We are not responsible for their content or practices."
        ]
      },
      {
        heading: "8. Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential loss arising from your use of, or inability to use, this website or the information on it."
        ]
      },
      {
        heading: "9. Governing law",
        paragraphs: [
          "These terms are governed by the laws of Malaysia, and disputes are subject to the jurisdiction of the Malaysian courts."
        ]
      },
      {
        heading: "10. Contact",
        paragraphs: [`Questions about these terms: ${site.email}.`]
      }
    ]
  },
  zh: {
    hero: {
      title: "使用条款",
      description: `本条款约束你对本网站的使用，网站由 ${site.legalName} 运营。`
    },
    updated: `最近更新：${LAST_UPDATED_ZH}`,
    sections: [
      {
        heading: "一、接受条款",
        paragraphs: [
          `访问 oneai.network 即表示你同意本条款。本网站由 ${site.legalName}（注册编号 ${site.registrationNo}）运营，公司注册于马来西亚。`
        ]
      },
      {
        heading: "二、网站内容",
        paragraphs: [
          "本网站内容仅用于对 OneAI Labs 及其产品的一般性介绍。我们努力保持内容准确和最新，但不保证其完整、无误或即时更新，并可能随时修改而不另行通知。"
        ]
      },
      {
        heading: "三、产品与独立条款",
        paragraphs: [
          "OneAI 各产品——包括 OneAI Core、OneAI Agent OS、OneVideo Studio、OneAI Bot 和各垂直操作系统——是运行在各自域名上的独立服务，受其各自的条款、定价和政策约束。本网站的任何内容都不构成覆盖那些产品条款的要约。"
        ]
      },
      {
        heading: "四、不构成专业建议",
        paragraphs: [
          "本网站的任何内容均不构成金融、投资、法律、建筑工程或其他专业建议。特别地，OneAI Trading OS 是研究、日志和纪律工具：它不提供投资建议，不代替你做出交易决策，历史或模拟输出不构成任何收益承诺。基于任何内容或产品输出做出的决定，责任由你自行承担。"
        ]
      },
      {
        heading: "五、知识产权",
        paragraphs: [
          "OneAI Labs 名称、标识、产品名称、网站设计和内容归我们所有或经授权使用。除法律允许外，未经我们书面许可，不得复制、转载或用于商业用途。"
        ]
      },
      {
        heading: "六、合理使用",
        paragraphs: [
          "你同意不滥用本网站——包括尝试未授权访问、以干扰性规模抓取、妨碍网站运行，或将其用于非法目的。"
        ]
      },
      {
        heading: "七、外部链接",
        paragraphs: [
          "本网站链接至外部站点和平台（包括产品部署、Telegram 和社交平台）。我们不对其内容或做法负责。"
        ]
      },
      {
        heading: "八、责任限制",
        paragraphs: [
          "在法律允许的最大范围内，对于因使用或无法使用本网站及其信息而产生的间接性、附带性或后果性损失，我们不承担责任。"
        ]
      },
      {
        heading: "九、适用法律",
        paragraphs: [
          "本条款受马来西亚法律管辖，争议由马来西亚法院管辖。"
        ]
      },
      {
        heading: "十、联系方式",
        paragraphs: [`关于本条款的问题：${site.email}。`]
      }
    ]
  }
};

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/terms", meta);
}

export default async function TermsPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={locale === "zh" ? "法律" : "Legal"}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={`mailto:${site.email}`}
        ctaLabel={locale === "zh" ? "条款问题联系我们" : "Contact us about these terms"}
      />
      <section className="site-shell-narrow py-16 sm:py-20">
        <p className="text-sm text-slate-500">{t.updated}</p>
        <div className="mt-8 space-y-10">
          {t.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-7 text-slate-400">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

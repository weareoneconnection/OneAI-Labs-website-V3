import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const LAST_UPDATED = "17 July 2026";
const LAST_UPDATED_ZH = "2026 年 7 月 17 日";

const meta = {
  en: {
    title: "Privacy Policy",
    description: `How ${site.legalName} collects, uses and protects personal data on oneai.network, in line with the Malaysian Personal Data Protection Act 2010.`
  },
  zh: {
    title: "隐私政策",
    description: `${site.legalName} 如何在 oneai.network 上收集、使用和保护个人数据，遵循马来西亚《2010 年个人数据保护法》。`
  }
};

type Section = { heading: string; paragraphs: string[]; bullets?: string[] };

const content: Record<"en" | "zh", { hero: { title: string; description: string }; updated: string; sections: Section[] }> = {
  en: {
    hero: {
      title: "Privacy Policy",
      description: `This policy explains how ${site.legalName} handles personal data collected through this website.`
    },
    updated: `Last updated: ${LAST_UPDATED}`,
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          `This website (oneai.network) is operated by ${site.legalName} (registration no. ${site.registrationNo}), a private company limited by shares incorporated in ${site.jurisdiction}. For any privacy matter, contact us at ${site.email}.`
        ]
      },
      {
        heading: "2. What we collect",
        paragraphs: ["We collect personal data in two ways:"],
        bullets: [
          `Contact form — when you submit a request, we receive the name, email address, company or project name, product interest and message you provide. Form submissions are processed by Formspree, Inc. on our behalf.`,
          "Analytics — we use Google Analytics to understand how the site is used. It collects usage data such as pages visited, approximate location derived from IP address, device and browser information, using cookies and similar technologies.",
          "Hosting logs — our hosting provider may record standard server logs (IP address, request time, user agent) for security and operations."
        ]
      },
      {
        heading: "3. How we use personal data",
        paragraphs: ["We use the data described above to:"],
        bullets: [
          "Respond to your inquiry and follow up on demo, access or partnership requests.",
          "Understand site usage and improve our content and products.",
          "Maintain the security and reliability of the website."
        ]
      },
      {
        heading: "4. Sharing",
        paragraphs: [
          "We do not sell personal data. We share it only with the service providers named above (Formspree for form processing, Google for analytics, our hosting provider for serving the site), each acting under their own terms and safeguards, and where required by law."
        ]
      },
      {
        heading: "5. Retention",
        paragraphs: [
          "We keep contact form submissions for as long as needed to handle your request and any follow-up business relationship. Analytics data is retained according to our Google Analytics settings."
        ]
      },
      {
        heading: "6. Your rights",
        paragraphs: [
          `Under the Malaysian Personal Data Protection Act 2010 (PDPA), you may request access to or correction of your personal data, and you may withdraw consent to further processing. To exercise these rights, email ${site.email}. We will respond within a reasonable period.`
        ]
      },
      {
        heading: "7. Third-party products and links",
        paragraphs: [
          "OneAI products (such as OneAI Core, OneVideo Studio and OneAI Bot) run on their own domains and may have their own privacy terms. This policy covers only this website. External links are provided for convenience; we are not responsible for the privacy practices of external sites."
        ]
      },
      {
        heading: "8. Changes",
        paragraphs: [
          "We may update this policy from time to time. The date above reflects the latest revision. Material changes will be posted on this page."
        ]
      }
    ]
  },
  zh: {
    hero: {
      title: "隐私政策",
      description: `本政策说明 ${site.legalName} 如何处理通过本网站收集的个人数据。`
    },
    updated: `最近更新：${LAST_UPDATED_ZH}`,
    sections: [
      {
        heading: "一、我们是谁",
        paragraphs: [
          `本网站（oneai.network）由 ${site.legalName}（注册编号 ${site.registrationNo}）运营，该公司为在${site.jurisdiction === "Malaysia" ? "马来西亚" : site.jurisdiction}注册的股份制私人有限公司。任何隐私相关事宜，请联系 ${site.email}。`
        ]
      },
      {
        heading: "二、我们收集什么",
        paragraphs: ["我们通过两种方式收集个人数据："],
        bullets: [
          "联系表单——当你提交需求时，我们会收到你填写的姓名、邮箱、公司或项目名称、感兴趣的产品和需求描述。表单提交由 Formspree, Inc. 代为处理。",
          "网站分析——我们使用 Google Analytics 了解网站的使用情况。它通过 Cookie 及类似技术收集使用数据，如访问的页面、基于 IP 推断的大致位置、设备和浏览器信息。",
          "托管日志——我们的托管服务商可能出于安全和运维目的记录标准服务器日志（IP 地址、请求时间、User Agent）。"
        ]
      },
      {
        heading: "三、我们如何使用这些数据",
        paragraphs: ["我们将上述数据用于："],
        bullets: [
          "回复你的咨询，跟进演示、使用权限或合作请求。",
          "了解网站使用情况，改进内容和产品。",
          "维护网站的安全与稳定。"
        ]
      },
      {
        heading: "四、共享",
        paragraphs: [
          "我们不出售个人数据。数据仅与上述服务提供方共享（Formspree 处理表单、Google 提供分析、托管服务商提供网站服务），各方依其自身条款和保护措施行事；法律要求时除外。"
        ]
      },
      {
        heading: "五、保留期限",
        paragraphs: [
          "联系表单数据的保留时间以处理你的请求及后续业务往来所需为限。分析数据按照我们的 Google Analytics 设置保留。"
        ]
      },
      {
        heading: "六、你的权利",
        paragraphs: [
          `依据马来西亚《2010 年个人数据保护法》（PDPA），你有权请求访问或更正你的个人数据，也可以撤回对后续处理的同意。行使这些权利请发邮件至 ${site.email}，我们会在合理期限内回复。`
        ]
      },
      {
        heading: "七、第三方产品与链接",
        paragraphs: [
          "OneAI 各产品（如 OneAI Core、OneVideo Studio、OneAI Bot）运行在各自的域名上，可能有各自的隐私条款。本政策仅覆盖本网站。外部链接仅为方便提供，我们不对外部网站的隐私实践负责。"
        ]
      },
      {
        heading: "八、政策变更",
        paragraphs: [
          "我们可能不时更新本政策，页面顶部的日期为最新修订日期。重大变更会在本页面公布。"
        ]
      }
    ]
  }
};

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/privacy", meta);
}

export default async function PrivacyPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={locale === "zh" ? "法律" : "Legal"}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={`mailto:${site.email}`}
        ctaLabel={locale === "zh" ? "隐私问题联系我们" : "Contact us about privacy"}
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
              {section.bullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7 text-slate-400">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowUpRight, Database, FileText, Gauge, ShieldCheck, ShieldQuestion, UserCheck } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: {
    title: "Trust Center · Security, Governance and Compliance",
    description: "What OneAI Labs actually has in place today for security, AI governance, data handling, reliability and compliance — stated plainly, including what is not yet certified."
  },
  zh: {
    title: "Trust Center · 安全、治理与合规",
    description: "OneAI Labs 在安全、AI 治理、数据处理、可靠性与合规方面目前真正具备的东西——直接说清楚，包括尚未认证的部分。"
  }
};

const groups = [
  {
    key: "security",
    icon: ShieldCheck,
    items: [
      { en: "Cloud access uses workload identity (OIDC/STS/managed identity) rather than static, long-lived credentials.", zh: "云端访问使用工作负载身份（OIDC/STS/托管身份），而不是静态的长期凭证。" },
      { en: "API keys are scoped per customer and per environment, and can be issued, rotated or revoked independently.", zh: "API 密钥按客户和环境分别限定范围，可以独立签发、轮换或撤销。" },
      { en: "Approval tokens are held in memory only and cleared on reload — never persisted to disk.", zh: "审批令牌仅驻留内存，刷新即清除——从不落盘。" },
      { en: "Enterprise SSO, fine-grained RBAC and policy-as-code are on the roadmap and not yet generally available.", zh: "企业级 SSO、细粒度 RBAC 与策略即代码仍在路线图上，尚未正式提供。" }
    ]
  },
  {
    key: "governance",
    icon: UserCheck,
    items: [
      { en: "A production release requires independent evaluation against an immutable baseline before it can promote.", zh: "生产发布必须先通过针对不可变基线的独立评测，才能晋级。" },
      { en: "Dual-principal approval is an invariant, not a setting: the requester can never approve their own promotion.", zh: "双主体审批是不变量，不是可配置项：申请人永远无法批准自己的晋级。" },
      { en: "Releases move through shadow and staged canary traffic before full production, with health-aware rollback.", zh: "发布会先经过 Shadow 和分阶段 Canary 流量，再进入完整生产，并具备健康感知的回滚能力。" },
      { en: "Every run produces an append-only audit record — see real figures on the Evidence page.", zh: "每一次运行都会生成只增不改的审计记录——真实数字见 Evidence 页面。" }
    ]
  },
  {
    key: "data",
    icon: Database,
    items: [
      { en: "Tenant-scoped data isolation is enforced at the database layer, not only in application logic.", zh: "租户级数据隔离在数据库层强制执行，而不只是依赖应用层逻辑。" },
      { en: "Website contact-form data is processed under our published Privacy Policy, in line with Malaysia's PDPA.", zh: "网站联系表单数据依据我们公开的隐私政策处理，遵循马来西亚《个人数据保护法》（PDPA）。" },
      { en: "Retention, access and deletion rights for personal data are detailed in the Privacy Policy, not summarized here.", zh: "个人数据的保留、访问与删除权利，详见隐私政策，本页不重复展开。" }
    ]
  },
  {
    key: "reliability",
    icon: Gauge,
    items: [
      { en: "Rollback is a proven, exercised capability — see the real rollback count on the Evidence page, not a promise.", zh: "回滚是一项被实测验证的能力——真实回滚次数见 Evidence 页面，不是一句承诺。" },
      { en: "High-availability and disaster-recovery code exists; a 30-day observed SLO has not yet been accepted as evidence.", zh: "高可用与灾难恢复相关代码已存在；30 天的实测 SLO 观测尚未被接受为验收证据。" },
      { en: "A public status page is planned and not yet live — we would rather have none than one that isn't backed by real monitoring.", zh: "公开状态页在计划中，目前尚未上线——比起一个没有真实监控支撑的状态页，我们宁可先不做。" }
    ]
  },
  {
    key: "legal",
    icon: FileText,
    items: [
      { en: `${site.legalName} (registration no. ${site.registrationNo}), incorporated in ${site.jurisdiction} on ${site.incorporatedOn}.`, zh: `${site.legalName}（注册编号 ${site.registrationNo}），${site.incorporatedOn}在${site.jurisdiction === "Malaysia" ? "马来西亚" : site.jurisdiction}注册成立。` },
      { en: "Privacy Policy and Terms of Use are published and linked in the site footer.", zh: "隐私政策与使用条款已公开发布，链接在网站页脚。" },
      { en: `Legal and security questions: ${site.email}.`, zh: `法务与安全相关问题：${site.email}。` }
    ]
  },
  {
    key: "compliance",
    icon: ShieldQuestion,
    items: [
      { en: "SOC 2: not currently certified.", zh: "SOC 2：目前未认证。" },
      { en: "ISO 27001: not currently certified.", zh: "ISO 27001：目前未认证。" },
      { en: "Formal certification has not been pursued yet. The underlying practices — audit trails, approval gates, tenant isolation, reversibility — are built into the product today; the paperwork is not.", zh: "目前尚未启动正式认证流程。审计留痕、审批门禁、租户隔离、可回退性这些底层实践今天就已经内建在产品里；缺的是认证文书，不是能力本身。" }
    ]
  }
] as const;

const content = {
  en: {
    hero: {
      eyebrow: "Trust Center",
      title: "What we actually have in place, stated plainly.",
      description: "OneAI Labs is built on the principle that evidence beats claims. This page applies that same standard to ourselves — including the parts that aren't done yet.",
      ctaLabel: "See the evidence"
    },
    headings: {
      security: "Security",
      governance: "AI Governance",
      data: "Data",
      reliability: "Reliability",
      legal: "Legal",
      compliance: "Compliance"
    },
    evidenceLink: "See real audit figures on the Evidence page",
    contactLink: "Report a security issue"
  },
  zh: {
    hero: {
      eyebrow: "Trust Center",
      title: "我们真正具备的东西，直接说清楚。",
      description: "OneAI Labs 建立在“证据胜过声称”这条原则上。这个页面把同样的标准用在我们自己身上——包括那些还没做完的部分。",
      ctaLabel: "查看证据"
    },
    headings: {
      security: "安全",
      governance: "AI 治理",
      data: "数据",
      reliability: "可靠性",
      legal: "法务",
      compliance: "合规"
    },
    evidenceLink: "在 Evidence 页面查看真实审计数字",
    contactLink: "报告安全问题"
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/trust", meta);
}

export default async function TrustPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={localePath(locale, "/evidence")}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="grid gap-4 md:grid-cols-2">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.key} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-oneai-bg text-oneai-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{t.headings[group.key as keyof typeof t.headings]}</h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.en} className="text-sm leading-6 text-slate-400">
                        {locale === "zh" ? item.zh : item.en}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={localePath(locale, "/evidence")} className="inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200">
              {t.evidenceLink} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-oneai-cyan transition hover:text-cyan-200">
              {t.contactLink} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <FinalCTASection locale={locale} />
    </>
  );
}

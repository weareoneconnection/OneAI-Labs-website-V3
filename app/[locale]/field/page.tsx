import { BadgeCheck, Database, FileLock2, Layers3, RefreshCcw } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { VerticalDetail, type VerticalDetailContent } from "@/components/sections/VerticalDetail";
import { site } from "@/lib/constants";
import { pageMetadata, type PageParams } from "@/lib/seo";

const meta = {
  en: { title: "OneField · Trusted Shared Reality Layer", description: "OneField provides tenant-scoped evidence, consent, context and verifier-linked records across the OneAI operating platform." },
  zh: { title: "OneField · 可信共享现实层", description: "OneField 为 OneAI 运行平台提供租户隔离的证据、授权、上下文与 Verifier 关联记录。" }
};

const content = {
  en: {
    hero: { eyebrow: "OneField", title: "A shared reality every agent can verify.", description: "OneField preserves cross-system evidence and scoped context without confusing memory with permission or current mission state." },
    features: [
      { title: "Tenant Isolation", description: "Core records carry tenant identity and are constrained by database-level policy.", icon: FileLock2 },
      { title: "Consent Receipts", description: "Purpose, principal and consent are recorded before sensitive context is reused.", icon: BadgeCheck },
      { title: "Scoped Context", description: "Agents receive the smallest context pack needed for the current task.", icon: Layers3 },
      { title: "Evidence Reconciliation", description: "Delivery attempts, acknowledgements and verifier links make missing facts visible.", icon: RefreshCcw }
    ],
    detail: {
      workflow: { eyebrow: "Shared reality", heading: "From settled outcome to reusable context.", steps: [
        { label: "Receive", text: "Signed, tenant-bound receipts arrive from trusted One systems through authenticated ingestion." },
        { label: "Classify", text: "Evidence is associated with tenant, principal, purpose, consent and verification state." },
        { label: "Review", text: "Operators can inspect evidence, delivery state and verifier relationships without exposing secrets." },
        { label: "Return", text: "A scoped context pack gives TheOne only the facts relevant to the next decision." }
      ]},
      audience: { eyebrow: "Boundary", heading: "Shared evidence, not the live task scheduler.", items: [
        { title: "OneMission owns current work", description: "Task readiness, leases, retries and completion remain operational truth in OneMission." },
        { title: "Verifier owns the decision", description: "OneField stores and relates receipts; it does not self-certify an outcome." },
        { title: "TheOne consumes context", description: "Memory can inform a decision, but cannot grant authority to execute it." }
      ]},
      cta: { heading: "Inspect the shared reality layer.", body: "Open OneField to review the current evidence and context surface.", openLabel: "Open OneField", href: site.oneFieldUrl, demoLabel: "Request Demo" }
    } satisfies VerticalDetailContent
  },
  zh: {
    hero: { eyebrow: "OneField", title: "每个 Agent 都能验证的共享现实。", description: "OneField 保存跨系统证据与限定范围的上下文，同时保持记忆、权限和当前 Mission 状态彼此分离。" },
    features: [
      { title: "租户隔离", description: "核心记录携带租户身份，并由数据库级策略约束。", icon: FileLock2 },
      { title: "授权回执", description: "敏感上下文复用前，记录用途、主体与授权。", icon: BadgeCheck },
      { title: "限定上下文", description: "Agent 只获得当前任务所需的最小上下文包。", icon: Layers3 },
      { title: "证据对账", description: "投递尝试、确认与 Verifier 关联让缺失事实可见。", icon: RefreshCcw }
    ],
    detail: {
      workflow: { eyebrow: "共享现实", heading: "从已结算结果到可复用上下文。", steps: [
        { label: "接收", text: "经过签名并绑定租户的回执，通过认证入口从可信 One 系统进入。" },
        { label: "分类", text: "证据关联租户、主体、用途、授权与验证状态。" },
        { label: "审核", text: "运营者可以检查证据、投递状态和 Verifier 关系，而不暴露密钥。" },
        { label: "返回", text: "限定范围的 context pack 只把下一次决策相关事实交给 TheOne。" }
      ]},
      audience: { eyebrow: "职责边界", heading: "它负责共享证据，不负责实时任务调度。", items: [
        { title: "OneMission 拥有当前工作", description: "任务就绪、租约、重试与完成状态仍以 OneMission 为准。" },
        { title: "Verifier 拥有验证决定", description: "OneField 保存并关联回执，但不会自行证明结果。" },
        { title: "TheOne 消费上下文", description: "记忆可以辅助决策，但不能因此授予执行权限。" }
      ]},
      cta: { heading: "查看共享现实层。", body: "打开 OneField，检查当前证据与上下文界面。", openLabel: "打开 OneField", href: site.oneFieldUrl, demoLabel: "预约演示" }
    } satisfies VerticalDetailContent
  }
} as const;

export async function generateMetadata({ params }: PageParams) { const { locale } = await params; return pageMetadata(locale, "/field", meta); }
export default async function FieldPage({ params }: PageParams) { const { locale } = await params; const t = content[locale]; return <><PageHero {...t.hero} /><section className="site-shell py-16 sm:py-20"><div className="m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">{t.features.map((item) => <FeatureCard key={item.title} {...item} />)}</div><div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.04] p-5 text-sm leading-6 text-slate-300"><Database className="h-5 w-5 shrink-0 text-emerald-200" /><span>Evidence → Consent → Verification link → Context pack → Reconciliation</span></div></section><VerticalDetail locale={locale} content={t.detail} /><FinalCTASection locale={locale} /></>; }

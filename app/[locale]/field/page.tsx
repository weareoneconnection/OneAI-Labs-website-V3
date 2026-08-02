import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { BadgeCheck, Database, Fingerprint, UserRoundCheck } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { VerticalDetail, type VerticalDetailContent } from "@/components/sections/VerticalDetail";
import { pageMetadata, type PageParams } from "@/lib/seo";

const PRODUCT_URL = "https://onefield.vercel.app/";

const meta = {
  en: {
    title: "OneField · Proof of Contribution and Reputation",
    description: "OneField records contribution, verifies completed work and builds reputation profiles for AI-native collaboration systems."
  },
  zh: {
    title: "OneField · 贡献证明与声誉体系",
    description: "OneField 记录贡献、验证完成的工作，为 AI 原生协作系统构建声誉档案。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneField",
      title: "Proof of Contribution and reputation",
      description: "OneField records contribution, verifies work and builds reputation profiles for AI-native collaboration systems."
    },
    features: [
      { title: "Contribution Records", description: "Record who contributed what across tasks and projects.", icon: Database },
      { title: "Work Verification", description: "Verify completed work and turn outputs into contribution events.", icon: BadgeCheck },
      { title: "Reputation Profile", description: "Build profiles based on verified contribution and completed actions.", icon: UserRoundCheck },
      { title: "Identity Layer", description: "Connect contribution records to future identity, badge or access systems.", icon: Fingerprint }
    ],
    detail: {
      workflow: {
        eyebrow: "How it works",
        heading: "From completed work to portable reputation.",
        steps: [
          { label: "Contribute", text: "Work happens in missions, tasks and community projects across the ecosystem." },
          { label: "Record", text: "Each completed piece of work becomes a contribution event tied to a person." },
          { label: "Verify", text: "Outputs are checked and confirmed, so the record reflects real completed work." },
          { label: "Build", text: "Verified events accumulate into a reputation profile that can gate roles, badges and access." }
        ]
      },
      audience: {
        eyebrow: "Who it is for",
        heading: "For ecosystems where trust has to be earned, not claimed.",
        items: [
          { title: "Community builders", description: "Reward consistent contributors with standing that is backed by verified work." },
          { title: "DAO and network operators", description: "Base roles and access on contribution history instead of self-description." },
          { title: "Collaboration platforms", description: "Plug a proof-of-contribution layer into task systems like OneMission." }
        ]
      },
      cta: {
        heading: "See OneField live.",
        body: "Open the working preview and see how contribution records turn into verifiable reputation.",
        openLabel: "Open OneField",
        href: PRODUCT_URL,
        demoLabel: "Request Demo"
      }
    } satisfies VerticalDetailContent
  },
  zh: {
    hero: {
      eyebrow: "OneField",
      title: "贡献证明与声誉体系",
      description: "OneField 记录贡献、验证工作，为 AI 原生协作系统构建声誉档案。"
    },
    features: [
      { title: "贡献记录", description: "记录谁在哪些任务和项目中贡献了什么。", icon: Database },
      { title: "工作验证", description: "验证完成的工作，把产出变成贡献事件。", icon: BadgeCheck },
      { title: "声誉档案", description: "基于经过验证的贡献和已完成的行动构建档案。", icon: UserRoundCheck },
      { title: "身份层", description: "把贡献记录接入未来的身份、徽章或权限系统。", icon: Fingerprint }
    ],
    detail: {
      workflow: {
        eyebrow: "如何运作",
        heading: "从完成的工作，到可携带的声誉。",
        steps: [
          { label: "贡献", text: "工作发生在生态里的任务书、任务和社区项目中。" },
          { label: "记录", text: "每一份完成的工作都成为归属到个人的贡献事件。" },
          { label: "验证", text: "产出经过检查和确认，让记录反映真实完成的工作。" },
          { label: "积累", text: "验证过的事件累积成声誉档案，可用于角色、徽章和权限的门槛。" }
        ]
      },
      audience: {
        eyebrow: "适合谁",
        heading: "为信任必须靠挣、而不是靠说的生态而建。",
        items: [
          { title: "社区建设者", description: "用经过验证的工作为持续贡献者背书，给他们应得的地位。" },
          { title: "DAO 与网络运营者", description: "让角色和权限基于贡献历史，而不是自我介绍。" },
          { title: "协作平台", description: "把贡献证明层接入 OneMission 这样的任务系统。" }
        ]
      },
      cta: {
        heading: "在线体验 OneField。",
        body: "打开可用预览，看看贡献记录如何变成可验证的声誉。",
        openLabel: "打开 OneField",
        href: PRODUCT_URL,
        demoLabel: "预约演示"
      }
    } satisfies VerticalDetailContent
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/field", meta);
}

export default async function FieldPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} description={t.hero.description} />
      <section className="site-shell py-16 sm:py-20">
        <div className="m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {t.features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </section>
      <VerticalDetail locale={locale} content={t.detail} />
      <FinalCTASection locale={locale} />
    </>
  );
}

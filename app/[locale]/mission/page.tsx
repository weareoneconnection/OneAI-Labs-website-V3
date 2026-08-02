import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { GitBranch, ListTodo, Target, Users } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { VerticalDetail, type VerticalDetailContent } from "@/components/sections/VerticalDetail";
import { pageMetadata, type PageParams } from "@/lib/seo";

const PRODUCT_URL = "https://one-mission.vercel.app/";

const meta = {
  en: {
    title: "OneMission · Mission and Task Coordination",
    description: "OneMission turns goals into missions, missions into tasks, and tasks into coordinated execution across teams and communities."
  },
  zh: {
    title: "OneMission · 任务与协作编排",
    description: "OneMission 把目标变成任务书、任务书变成任务、任务变成跨团队与社区的协同执行。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneMission",
      title: "Mission and task coordination",
      description: "OneMission turns goals into missions, missions into tasks, and tasks into coordinated execution."
    },
    features: [
      { title: "Mission Board", description: "Create missions and organize goals into clear work streams.", icon: Target },
      { title: "Task Breakdown", description: "Use AI to break goals into tasks, steps and execution plans.", icon: ListTodo },
      { title: "Coordination", description: "Coordinate contributors, small teams and community workflows.", icon: Users },
      { title: "Execution Pipeline", description: "Connect missions to OneAI Agent OS and OneClaw execution flows.", icon: GitBranch }
    ],
    detail: {
      workflow: {
        eyebrow: "How it works",
        heading: "Goal in. Coordinated execution out.",
        steps: [
          { label: "Declare", text: "State the goal as a mission: what done looks like, by when, and who cares." },
          { label: "Break down", text: "AI decomposes the mission into tasks, steps and owners you can adjust." },
          { label: "Coordinate", text: "Contributors claim tasks; progress and blockers stay visible on the board." },
          { label: "Execute", text: "Tasks route into Agent OS and OneClaw flows, and completions report back to the mission." }
        ]
      },
      audience: {
        eyebrow: "Who it is for",
        heading: "For groups where work outgrows the group chat.",
        items: [
          { title: "Community operators", description: "Turn community energy into claimable tasks instead of scrolling announcements." },
          { title: "Small teams", description: "Run projects as missions with AI-assisted breakdown, without heavyweight PM tooling." },
          { title: "Campaign organizers", description: "Coordinate launches, events and growth pushes across many contributors." }
        ]
      },
      cta: {
        heading: "See OneMission live.",
        body: "Open the working preview and walk a goal through mission, breakdown and coordinated execution.",
        openLabel: "Open OneMission",
        href: PRODUCT_URL,
        demoLabel: "Request Demo"
      }
    } satisfies VerticalDetailContent
  },
  zh: {
    hero: {
      eyebrow: "OneMission",
      title: "任务与协作编排",
      description: "OneMission 把目标变成任务书、任务书变成任务、任务变成协同执行。"
    },
    features: [
      { title: "任务看板", description: "创建任务书，把目标组织成清晰的工作流。", icon: Target },
      { title: "任务拆解", description: "用 AI 把目标拆解成任务、步骤和执行计划。", icon: ListTodo },
      { title: "协作编排", description: "协调贡献者、小团队和社区工作流。", icon: Users },
      { title: "执行管线", description: "把任务书接入 OneAI Agent OS 和 OneClaw 执行流。", icon: GitBranch }
    ],
    detail: {
      workflow: {
        eyebrow: "如何运作",
        heading: "输入目标，输出协同执行。",
        steps: [
          { label: "立项", text: "把目标写成任务书：完成的标准是什么、什么时候完成、谁在乎结果。" },
          { label: "拆解", text: "AI 把任务书分解为任务、步骤和负责人，你可以随时调整。" },
          { label: "协同", text: "贡献者认领任务，进度和阻塞在看板上始终可见。" },
          { label: "执行", text: "任务流入 Agent OS 和 OneClaw 执行流，完成结果回报到任务书。" }
        ]
      },
      audience: {
        eyebrow: "适合谁",
        heading: "当工作量超出群聊承载力时。",
        items: [
          { title: "社区运营者", description: "把社区热情变成可认领的任务，而不是刷不完的公告。" },
          { title: "小团队", description: "用 AI 辅助拆解把项目当任务书来跑，不需要笨重的项目管理工具。" },
          { title: "活动组织者", description: "跨多位贡献者协调发布、活动和增长冲刺。" }
        ]
      },
      cta: {
        heading: "在线体验 OneMission。",
        body: "打开可用预览，跟着一个目标走完立项、拆解和协同执行的全过程。",
        openLabel: "打开 OneMission",
        href: PRODUCT_URL,
        demoLabel: "预约演示"
      }
    } satisfies VerticalDetailContent
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/mission", meta);
}

export default async function MissionPage({ params }: PageParams) {
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

import { Eye, FileText, GitBranch, KeyRound, ShieldCheck, UserRoundCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SolutionDetail, type SolutionContent } from "@/components/sections/SolutionDetail";
import { MissionGraph } from "@/components/visuals/MissionGraph";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

/**
 * AI agent development, sold as an assessment rather than as delivery.
 *
 * We do not yet have the capacity to promise throughput, so this page offers the
 * one thing we can honestly offer today: a scoped look at whether the thing you
 * want is worth building, ending in a verdict that is allowed to be no. Everything
 * it shows — the mission graph, the ledger — is the standard we would hold the work
 * to, not a claim about work already delivered for someone else.
 */

const meta = {
  en: {
    title: "AI Agent Development",
    description: "Assessment-first AI agent engagements: we scope what you want an agent to do, tell you whether it is worth building, and only then talk about a pilot."
  },
  zh: {
    title: "AI 智能体开发",
    description: "以评估开始的 AI 智能体合作：先厘清你想让智能体做什么，给出值不值得做的结论，可行才谈试点。"
  }
};

const hero = {
  en: {
    eyebrow: "Engagement · Assessment first",
    title: "You want an agent that does the work, not one that answers questions.",
    description: "Most AI pilots stop at a chat box. The hard part is what happens after the answer — the permission to act, the record of what was done, and the ability to undo it.",
    ctaLabel: "Describe your scenario"
  },
  zh: {
    eyebrow: "合作方式 · 评估先行",
    title: "你要的是能干活的智能体，不是能答题的。",
    description: "大多数 AI 试点停在一个对话框。难的是答案之后的部分——它凭什么可以动手、动了什么有没有记录、以及能不能撤回。",
    ctaLabel: "说说你的场景"
  }
} as const;

const content: Record<"en" | "zh", SolutionContent> = {
  en: {
    symptomsEyebrow: "What usually brings people here",
    symptomsHeading: "The demo worked. Production did not.",
    symptomsBody: "These are the failures we hear about most often. If two or more sound familiar, the problem is usually the operating layer around the model, not the model.",
    symptoms: [
      "The pilot impressed everyone and then nobody could put it in front of a customer.",
      "It gives a confident answer and nobody can tell where the answer came from.",
      "It cannot take an action, so a human still re-types everything into the real system.",
      "Nobody will sign off on letting it act, because there is no approval step to sign.",
      "It worked in one team's hands and broke the moment anyone else used it.",
      "When it got something wrong, there was no way to see what it had done."
    ],
    stanceEyebrow: "How we approach it",
    stanceHeading: "An agent is an accountable actor, not a smarter prompt.",
    stanceBody: "The interesting engineering is not getting a model to answer. It is deciding what the agent is allowed to do, proving what it did, and being able to reverse it.",
    stance: [
      { title: "Permission before capability", text: "What the agent may touch is designed first. A capable agent with undefined authority is a liability, not an asset.", icon: ShieldCheck },
      { title: "Every action leaves a record", text: "Actions are written to an append-only ledger. Months later, someone who was not there can still reconstruct what happened.", icon: Eye },
      { title: "Reversible by design", text: "If a step can change the real world, there is a defined way to undo it — decided at design time, not during the incident.", icon: GitBranch }
    ],
    sampleEyebrow: "What an engagement produces",
    sampleHeading: "A mission with named agents, and a ledger that survives audit.",
    sampleBody: "This is the shape of the artefact, not a customer's project. It is the standard we would hold the work to, so you can judge that standard before anyone discusses scope.",
    sampleCaption: "Illustrative sample from the OneAI agent stack. It is not a delivered customer engagement, and we do not present it as one.",
    processEyebrow: "How it starts",
    processHeading: "We assess before we agree to build.",
    processBody: "The first outcome is a verdict, not a proposal. Sometimes the verdict is that an agent is the wrong tool, and saying so early is worth more to you than a scoped project that should not exist.",
    steps: [
      { label: "Describe the scenario", text: "What decision or task you want handled, who is accountable for it today, and what system it has to touch." },
      { label: "Feasibility assessment", text: "We look at the data, the permissions, the integration surface and the failure cost. This is where most of the thinking happens." },
      { label: "A verdict you can act on", text: "Viable, viable with conditions, or not worth building. You get the reasoning either way, and you own it." },
      { label: "A pilot, only if viable", text: "Scope, boundaries and success criteria agreed in writing before any build starts." }
    ],
    deliveryEyebrow: "Who does the work",
    deliveryHeading: `Founder-led, which is why we run ${site.concurrentEngagements} at a time.`,
    deliveryBody: `Engagements are led by the founder directly rather than handed to an account team, so the person who designed this stack is the person on your project. That is a real constraint, and we would rather state it than queue you behind something.`,
    delivery: [
      { title: "One principal, start to finish", text: "The same person runs the assessment, the design and the build. Nothing is re-explained to a delivery team that was not in the room.", icon: UserRoundCheck },
      { title: "Permissions designed first", text: "You get the authority model in writing — what the agent may touch, what needs approval, and what it may never do.", icon: KeyRound },
      { title: "The agent, and its ledger", text: "Not just a working agent: the audit configuration, the rollback path and the integration that puts it inside your system.", icon: ShieldCheck },
      { title: "Handover, not dependency", text: "Documentation and a walkthrough so your team can run it. If you would rather we kept operating it, that is a separate agreement, agreed up front.", icon: FileText }
    ],
    limitsTitle: "What we are not saying",
    limits: [
      `${site.concurrentEngagements} engagements at a time is a real ceiling, not a scarcity tactic. If they are all running, we will tell you when rather than take a deposit.`,
      "We have no customer case studies to show you yet. Everything on this page is our own system and our own standard, labelled as such.",
      "If the honest answer is that you do not need an agent, that is the answer you will get — even though it is the smaller engagement."
    ],
    ctaHeading: "Tell us what you want an agent to be responsible for.",
    ctaBody: "The more concrete the scenario, the more useful the assessment. A real task with a real owner beats a category.",
    ctaPrimary: "Start an assessment",
    ctaSecondary: "See the platform underneath",
    ctaSecondaryHref: "/products"
  },
  zh: {
    symptomsEyebrow: "通常是什么把人带到这一页",
    symptomsHeading: "Demo 很惊艳，上生产就不行了。",
    symptomsBody: "下面这些是我们听到最多的失败。如果有两条以上眼熟，问题通常不在模型本身，而在模型外面那一层。",
    symptoms: [
      "试点让所有人眼前一亮，然后没有人敢把它放到客户面前。",
      "它给出一个很笃定的答案，但没人说得清这个答案是哪来的。",
      "它没法执行动作，所以人还是要把结果重新敲进真正的系统里。",
      "没人愿意签字让它动手——因为根本没有一个可以签的审批环节。",
      "在一个团队手里跑得好好的，换个人用就崩了。",
      "出错之后，没有任何办法追溯它到底做过什么。"
    ],
    stanceEyebrow: "我们怎么看这件事",
    stanceHeading: "智能体是一个要担责的行动者，不是一个更聪明的提示词。",
    stanceBody: "真正难的工程不是让模型答出来。是决定它被允许做什么、证明它做了什么、以及出事之后能不能撤回。",
    stance: [
      { title: "先定权限，再谈能力", text: "先设计它能碰什么。一个能力很强但权限边界不清的智能体，是负债不是资产。", icon: ShieldCheck },
      { title: "每一个动作都留痕", text: "动作写入只增不改的账本。几个月后，当时不在场的人也能还原发生过什么。", icon: Eye },
      { title: "可回退是设计出来的", text: "凡是会改变真实世界的步骤，都有明确的撤回路径——在设计阶段定好，而不是出事时现想。", icon: GitBranch }
    ],
    sampleEyebrow: "一次合作会产出什么",
    sampleHeading: "一个有具名 Agent 的任务，和一份经得起审计的账本。",
    sampleBody: "这是交付物的形态，不是某个客户的项目。它代表我们会把工作做到什么标准——你可以先判断这个标准，再谈范围。",
    sampleCaption: "取自 OneAI Agent 技术栈的示意样本。它不是一次已交付的客户合作，我们也不会拿它冒充。",
    processEyebrow: "怎么开始",
    processHeading: "我们先评估，再决定要不要做。",
    processBody: "第一个产出是一个结论，不是一份方案。有时候结论是「智能体不是对的工具」——早点说出来，比给你一个本不该存在的项目更有价值。",
    steps: [
      { label: "说清场景", text: "你想让它处理什么决策或任务、今天这件事谁负责、它必须接进哪个系统。" },
      { label: "可行性评估", text: "我们看数据、权限、集成面和出错代价。大部分思考发生在这一步。" },
      { label: "一个能据以行动的结论", text: "可行、有条件可行，或者不值得做。无论哪种，推理过程都给你，而且归你。" },
      { label: "可行才谈试点", text: "范围、边界和验收标准都白纸黑字写清楚，再开始动工。" }
    ],
    deliveryEyebrow: "谁来做这件事",
    deliveryHeading: `创始人亲自带，所以同期只做 ${site.concurrentEngagements} 个。`,
    deliveryBody: `项目由创始人直接负责，不转交客户经理——设计这套系统的人，就是坐在你项目上的人。这是一个真实的产能上限，我们宁可说清楚，也不想让你排在别的项目后面。`,
    delivery: [
      { title: "一个人负责到底", text: "评估、设计、施工是同一个人。不会有任何东西需要向一个当时不在场的交付团队重新解释一遍。", icon: UserRoundCheck },
      { title: "权限先设计出来", text: "你会拿到白纸黑字的权限模型：智能体能碰什么、什么必须审批、什么永远不许做。", icon: KeyRound },
      { title: "交付的不只是智能体", text: "还包括审计配置、回滚路径，以及把它接进你现有系统的那部分集成。", icon: ShieldCheck },
      { title: "交接，而不是依赖", text: "给文档和一次完整讲解，让你的团队自己能跑。如果你更希望由我们继续运维，那是另一份约定，事先谈清楚。", icon: FileText }
    ],
    limitsTitle: "我们没有在说什么",
    limits: [
      `同期 ${site.concurrentEngagements} 个是真实的上限，不是饥饿营销。如果都占满了，我们会告诉你大概什么时候能排上，而不是先收一笔定金。`,
      "我们目前还没有可展示的客户案例。本页所有内容都是我们自己的系统和自己的标准，并如实标注。",
      "如果诚实的结论是你并不需要一个智能体，你会得到的就是这个结论——哪怕那是一单更小的生意。"
    ],
    ctaHeading: "告诉我们，你想让智能体对什么负责。",
    ctaBody: "场景越具体，评估越有用。一个有明确负责人的真实任务，胜过一个笼统的品类。",
    ctaPrimary: "发起一次评估",
    ctaSecondary: "了解底层平台",
    ctaSecondaryHref: "/products"
  }
};

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/solutions/agents", meta);
}

export default async function AgentsSolutionPage({ params }: PageParams) {
  const { locale } = await params;
  const h = hero[locale];

  return (
    <>
      <PageHero
        eyebrow={h.eyebrow}
        title={h.title}
        description={h.description}
        ctaHref={localePath(locale, "/contact")}
        ctaLabel={h.ctaLabel}
      />
      <SolutionDetail locale={locale} content={content[locale]} sample={<MissionGraph locale={locale} />} />
      <FinalCTASection locale={locale} />
    </>
  );
}

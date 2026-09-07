import { FileText, GaugeCircle, RotateCcw, ScrollText, ShieldCheck, UserRoundCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SolutionDetail, type SolutionContent } from "@/components/sections/SolutionDetail";
import { ForgeControlRoom } from "@/components/visuals/ForgeControlRoom";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";

/**
 * Enterprise model training, sold as an assessment.
 *
 * The sample deliverable here is unusually strong and costs us nothing new: the
 * OneForge run already on the homepage is a real training engagement artefact, and
 * it is one where the candidate lost to the baseline and was rejected. Leading a
 * sales page with our own failed run is the whole argument — a vendor who only ever
 * shows wins has not shown you their gate.
 */

const meta = {
  en: {
    title: "Enterprise AI Training",
    description: "Assessment-first model training: we look at your data and your baseline, tell you whether fine-tuning will actually beat it, and show the evaluation that decides."
  },
  zh: {
    title: "企业 AI 训练",
    description: "以评估开始的模型训练：先看你的数据和基线，判断微调到底能不能赢过它，并把做出这个判断的评测过程给你看。"
  }
};

const hero = {
  en: {
    eyebrow: "Engagement · Assessment first",
    title: "Training a model is easy. Knowing whether it got better is the work.",
    description: "Anyone can finish a fine-tuning job and show you a loss curve. The question that matters is whether the result beats what you already run — and whether you would be allowed to ship it if it did not.",
    ctaLabel: "Assess your use case"
  },
  zh: {
    eyebrow: "合作方式 · 评估先行",
    title: "把模型训出来不难，判断它到底有没有变好才是活儿。",
    description: "谁都能跑完一次微调，然后给你看一条漂亮的 loss 曲线。真正要紧的问题是：结果有没有赢过你现在在用的东西——以及如果没赢，你会不会被拦住不让上线。",
    ctaLabel: "评估你的场景"
  }
} as const;

const content: Record<"en" | "zh", SolutionContent> = {
  en: {
    symptomsEyebrow: "What usually brings people here",
    symptomsHeading: "A fine-tune that finished is not a capability that improved.",
    symptomsBody: "These are the situations we are asked about most. Several of them are reasons not to train at all, which is a legitimate outcome of an assessment.",
    symptoms: [
      "You have domain data and no idea whether it is enough to be worth training on.",
      "A vendor delivered a fine-tuned model and no evidence that it beats the base model.",
      "Prompting mostly works, and you cannot tell whether training would add anything.",
      "You need the model to stay inside your own environment for compliance reasons.",
      "Someone shipped a new version and nobody can say what changed or how to go back.",
      "You need to explain to a reviewer why this model version is in production."
    ],
    stanceEyebrow: "How we approach it",
    stanceHeading: "The evaluation decides. Not the training run.",
    stanceBody: "We treat a candidate model as guilty until it beats the baseline on evidence. Most of the value of an engagement is in the gate, not in the GPU time.",
    stance: [
      { title: "A baseline before anything", text: "If there is no measured baseline, there is nothing to improve on and no way to prove you did. That comes first, every time.", icon: ScrollText },
      { title: "A gate that can reject", text: "A candidate that loses to production does not ship. That has to be true before training starts, or it will not be true afterwards.", icon: ShieldCheck },
      { title: "Every version reversible", text: "Model versions are artefacts with lineage. Going back to the previous one is a decision, not an incident.", icon: RotateCcw }
    ],
    sampleEyebrow: "What an engagement produces",
    sampleHeading: "One of our own runs — the one where the gate said no.",
    sampleBody: "The candidate scored 0.5667 against a 0.6167 production baseline. It was rejected, production never changed, and the whole run is sealed in the audit ledger. This is the deliverable: not a model, but a defensible decision about a model.",
    sampleCaption: "An archived run from OneForge's own control plane, on our own model. It is our standard demonstrated on ourselves, not a customer result.",
    processEyebrow: "How it starts",
    processHeading: "We tell you whether to train before we offer to train.",
    processBody: "An assessment can conclude that your data is too thin, that retrieval would serve you better, or that prompting is already at the ceiling of what the task needs. Those are useful answers and they are cheaper than finding out later.",
    steps: [
      { label: "Describe the task", text: "What the model has to do, who checks its output today, and what an error actually costs you." },
      { label: "Data and baseline review", text: "How much usable data exists, how it is labelled, and what the current approach already scores. No baseline, no verdict." },
      { label: "A verdict you can act on", text: "Train, do not train, or do something else first. With the reasoning, so your own team can check it." },
      { label: "A pilot, only if viable", text: "Evaluation criteria and the release gate agreed in writing before any GPU is allocated." }
    ],
    deliveryEyebrow: "Who does the work",
    deliveryHeading: `Founder-led, which is why we run ${site.concurrentEngagements} at a time.`,
    deliveryBody: `Engagements are led by the founder directly rather than handed to an account team, so the person who built this evaluation stack is the person running yours. That is a real constraint, and we would rather state it than queue you behind something.`,
    delivery: [
      { title: "One principal, start to finish", text: "The same person reviews the data, sets the evaluation and reads the result. Nothing is re-explained to a delivery team that was not in the room.", icon: UserRoundCheck },
      { title: "A baseline you can check", text: "You get the measured baseline and the evaluation set before training starts, so the verdict afterwards is not ours to argue.", icon: GaugeCircle },
      { title: "The artefact, and its gate", text: "Not just weights: the lineage, the release gate configuration, the rollback path and the audit record of the run.", icon: ShieldCheck },
      { title: "Handover, not dependency", text: "Documentation and a walkthrough so your team can retrain and re-evaluate. Continued operation by us is a separate agreement, agreed up front.", icon: FileText }
    ],
    limitsTitle: "What we are not saying",
    limits: [
      `${site.concurrentEngagements} engagements at a time is a real ceiling, not a scarcity tactic. If they are all running, we will tell you when rather than take a deposit.`,
      "The run shown above is our own model, not a customer's. We have no customer training case studies to show you yet, and will not imply otherwise.",
      "If the assessment says prompting or retrieval is the right answer, that is the answer you will get — even though it is the smaller engagement."
    ],
    ctaHeading: "Tell us what the model has to get right.",
    ctaBody: "Bring the task and, if you have it, whatever you use to judge the output today. That is what makes an assessment worth doing.",
    ctaPrimary: "Start an assessment",
    ctaSecondary: "See OneForge",
    ctaSecondaryHref: "/forge"
  },
  zh: {
    symptomsEyebrow: "通常是什么把人带到这一页",
    symptomsHeading: "跑完一次微调，不等于能力真的变好了。",
    symptomsBody: "下面是我们被问得最多的情况。其中好几种，评估的结论恰恰是「不要训」——这也是一个正当的结果。",
    symptoms: [
      "手里有行业数据，但不知道够不够、值不值得拿去训。",
      "供应商交付了一个微调模型，却拿不出它赢过基座模型的证据。",
      "提示词基本够用，判断不了训练到底还能不能带来增量。",
      "出于合规要求，模型必须留在自己的环境里。",
      "有人上线了新版本，但没人说得清改了什么、怎么退回去。",
      "需要向审查方解释：为什么现在生产环境跑的是这个版本。"
    ],
    stanceEyebrow: "我们怎么看这件事",
    stanceHeading: "做决定的是评测，不是那次训练。",
    stanceBody: "在拿出证据赢过基线之前，候选模型一律推定为不合格。一次合作的价值大部分在门禁上，不在 GPU 时长上。",
    stance: [
      { title: "先有基线，再谈其他", text: "没有实测基线，就没有可改进的对象，也没有办法证明你改进了。这一步永远排在最前面。", icon: ScrollText },
      { title: "一道真的会驳回的门禁", text: "输给生产版本的候选模型不许上线。这件事必须在训练开始之前就成立，否则事后不会成立。", icon: ShieldCheck },
      { title: "每个版本都可回退", text: "模型版本是有血缘的制品。退回上一版是一个决定，而不是一场事故。", icon: RotateCcw }
    ],
    sampleEyebrow: "一次合作会产出什么",
    sampleHeading: "我们自己的一次运行——门禁说不的那一次。",
    sampleBody: "候选得分 0.5667，生产基线 0.6167。候选被驳回，线上版本自始至终没有改变，整次运行封存在审计账本里。这才是交付物：不是一个模型，而是一个关于模型的、站得住的决定。",
    sampleCaption: "取自 OneForge 自身控制平面的归档运行，用的是我们自己的模型。这是我们把标准用在自己身上的证明，不是客户成果。",
    processEyebrow: "怎么开始",
    processHeading: "在提出替你训练之前，我们先告诉你该不该训。",
    processBody: "评估的结论可能是数据太薄、可能是检索比训练更合适、也可能是提示词已经触到这个任务的天花板。这些都是有用的答案，而且比事后才发现便宜得多。",
    steps: [
      { label: "说清任务", text: "模型要做什么、今天谁在检查它的输出、一次出错的实际代价是多少。" },
      { label: "数据与基线复核", text: "有多少可用数据、标注情况如何、现在这套做法实测得分是多少。没有基线，就没有结论。" },
      { label: "一个能据以行动的结论", text: "训、不训，或者先做别的。附上推理过程，让你自己的团队可以复核。" },
      { label: "可行才谈试点", text: "评测标准和发布门禁白纸黑字写清楚，然后才分配 GPU。" }
    ],
    deliveryEyebrow: "谁来做这件事",
    deliveryHeading: `创始人亲自带，所以同期只做 ${site.concurrentEngagements} 个。`,
    deliveryBody: `项目由创始人直接负责，不转交客户经理——搭出这套评测体系的人，就是跑你这一次的人。这是一个真实的产能上限，我们宁可说清楚，也不想让你排在别的项目后面。`,
    delivery: [
      { title: "一个人负责到底", text: "看数据、定评测、读结果是同一个人。不会有任何东西需要向一个当时不在场的交付团队重新解释一遍。", icon: UserRoundCheck },
      { title: "基线你自己能核", text: "训练开始之前，实测基线和评测集就交给你——这样事后的结论不是我们说了算。", icon: GaugeCircle },
      { title: "交付的不只是权重", text: "还包括血缘、发布门禁配置、回滚路径，以及这次运行的完整审计记录。", icon: ShieldCheck },
      { title: "交接，而不是依赖", text: "给文档和一次完整讲解，让你的团队自己能重训、能复评。由我们继续运维是另一份约定，事先谈清楚。", icon: FileText }
    ],
    limitsTitle: "我们没有在说什么",
    limits: [
      `同期 ${site.concurrentEngagements} 个是真实的上限，不是饥饿营销。如果都占满了，我们会告诉你大概什么时候能排上，而不是先收一笔定金。`,
      "上面那次运行用的是我们自己的模型，不是客户的。我们目前没有客户训练案例可展示，也不会做任何暗示。",
      "如果评估的结论是提示词或检索才是对的答案，你得到的就是这个答案——哪怕那是一单更小的生意。"
    ],
    ctaHeading: "告诉我们，模型必须把什么做对。",
    ctaBody: "把任务带来；如果有的话，也把你今天用来判断输出好坏的东西带来。这才是让评估值得做的前提。",
    ctaPrimary: "发起一次评估",
    ctaSecondary: "了解 OneForge",
    ctaSecondaryHref: "/forge"
  }
};

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/solutions/training", meta);
}

export default async function TrainingSolutionPage({ params }: PageParams) {
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
      <SolutionDetail locale={locale} content={content[locale]} sample={<ForgeControlRoom locale={locale} />} />
      <FinalCTASection locale={locale} />
    </>
  );
}

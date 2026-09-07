import Link from "next/link";
import { ArrowRight, Boxes, Bot, Cpu, Plug } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * Four lanes, in the visitor's words, immediately under the hero.
 *
 * Everything else on this page answers "who is OneAI Labs". Nothing answered "what
 * can you do for me", so a reader arriving with a business problem — I need an agent
 * for my operations, I have data and want a model trained on it — found only
 * infrastructure vocabulary and could not locate themselves.
 *
 * Each lane carries its availability, using the same grammar products.ts already
 * uses for product maturity. Two of these are buyable today and two are a
 * conversation, and a visitor should be able to see which is which before clicking
 * rather than after. Advertising engagements we cannot yet staff, with no marker,
 * would trade this site's one real asset — that it does not overclaim — for leads.
 */

type Availability = "live" | "assessment";

const content = {
  en: {
    eyebrow: "Where do you start",
    heading: "Four ways in, depending on what you arrived with.",
    availability: { live: "Available today", assessment: "Assessment first" } as Record<Availability, string>,
    lanes: [
      {
        title: "I want AI inside my own product",
        text: "Model access, routing, cost guards and usage tracking behind one commercial API. Self-serve, with keys you can create now.",
        action: "Open OneAI Core",
        href: "/core",
        availability: "live" as Availability,
        icon: Plug
      },
      {
        title: "I work in construction or media",
        text: "A product built for the industry already, rather than a platform you have to assemble into one.",
        action: "See the industries",
        href: "/industries",
        availability: "live" as Availability,
        icon: Boxes
      },
      {
        title: "I need an AI agent for my operations",
        text: "Something that can act, not just answer — with permission, an audit record and a way to undo it.",
        action: "Describe your scenario",
        href: "/solutions/agents",
        availability: "assessment" as Availability,
        icon: Bot
      },
      {
        title: "I want a model trained on my data",
        text: "We assess whether training will actually beat what you run today, and show you the evaluation that decides.",
        action: "Assess your use case",
        href: "/solutions/training",
        availability: "assessment" as Availability,
        icon: Cpu
      }
    ]
  },
  zh: {
    eyebrow: "你从哪里开始",
    heading: "四条通道，取决于你是带着什么问题来的。",
    availability: { live: "今天即可使用", assessment: "评估先行" } as Record<Availability, string>,
    lanes: [
      {
        title: "我想把 AI 装进自己的产品",
        text: "模型接入、路由、成本护栏和用量追踪，收在同一个商业 API 之下。自助开通，密钥现在就能创建。",
        action: "打开 OneAI Core",
        href: "/core",
        availability: "live" as Availability,
        icon: Plug
      },
      {
        title: "我在建筑或影视行业",
        text: "已经为这个行业做好的产品，而不是一个需要你自己拼装成方案的平台。",
        action: "查看行业方案",
        href: "/industries",
        availability: "live" as Availability,
        icon: Boxes
      },
      {
        title: "我的业务需要一个 AI 智能体",
        text: "要能动手的，不只是能答题的——带权限、有审计记录、并且撤得回来。",
        action: "说说你的场景",
        href: "/solutions/agents",
        availability: "assessment" as Availability,
        icon: Bot
      },
      {
        title: "我想用自己的数据训练模型",
        text: "我们先评估训练到底能不能赢过你今天在用的东西，并把做出这个判断的评测过程给你看。",
        action: "评估你的场景",
        href: "/solutions/training",
        availability: "assessment" as Availability,
        icon: Cpu
      }
    ]
  }
} as const;

export function EntryLanes({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-b border-white/10 bg-white/[0.02]">
      <div className="site-shell-wide py-14 lg:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <p className="max-w-xl text-sm leading-6 text-slate-400">{t.heading}</p>
        </div>

        <div className="mt-9 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {t.lanes.map((lane) => {
            const Icon = lane.icon;
            const live = lane.availability === "live";
            return (
              <Link
                key={lane.href}
                href={localePath(locale, lane.href)}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-oneai-cyan/50 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-oneai-cyan" aria-hidden="true" />
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      live
                        ? "border-oneai-cyan/30 bg-oneai-cyan/10 text-oneai-cyan"
                        : "border-oneai-gold/30 bg-oneai-gold/10 text-oneai-gold"
                    }`}
                  >
                    {t.availability[lane.availability]}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{lane.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{lane.text}</p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-white">
                  {lane.action} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

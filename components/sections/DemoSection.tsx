import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Eye, Layers3, LineChart, Workflow, type LucideIcon } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

type Demo = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  cta: string;
  external: boolean;
  image: string | null;
};

const content: Record<Locale, {
  eyebrow: string;
  heading: string;
  body: string;
  preview: string;
  altSuffix: string;
  chat: { q: string; a1: string; a2: string };
  demos: Demo[];
}> = {
  en: {
    eyebrow: "Demo",
    heading: "See OneAI in action",
    body: "Explore product previews from OneAI Core, OneAI Bot, OneClaw and industry AI systems built to turn AI infrastructure into real products, workflows and applications.",
    preview: "Preview",
    altSuffix: "live product screenshot",
    chat: {
      q: "Summarize today's usage and top customers.",
      a1: "3,214 requests · $12.40 est. cost · Top: Acme (41%)",
      a2: "Suggested action: raise Acme's rate limit →"
    },
    demos: [
      {
        title: "OneAI Core Console",
        description: "API keys, customers, requests, usage, cost, routing policy and operator controls.",
        icon: CheckCircle2,
        href: site.appUrl,
        cta: "Open Core",
        external: true,
        image: "/images/demos/core.jpg"
      },
      {
        title: "OneAI Bot Interface",
        description: "A conversational interface for Core-powered task input, structured output and action suggestions.",
        icon: Bot,
        href: "https://t.me/WAOCOneAIBot",
        cta: "Open Bot",
        external: true,
        image: null
      },
      {
        title: "TheOne Execution OS",
        description: "The orchestration shell for moving from one intent into one operating execution layer.",
        icon: Layers3,
        href: site.theOneUrl,
        cta: "Open TheOne",
        external: true,
        image: "/images/demos/theone.jpg"
      },
      {
        title: "OneAI Mirror",
        description: "A public civilization mirror that turns one belief into a shareable world outcome.",
        icon: Eye,
        href: site.mirrorUrl,
        cta: "Open Mirror",
        external: true,
        image: "/images/demos/mirror.jpg"
      },
      {
        title: "OneClaw Execution Flow",
        description: "Turns Core task outputs into execution workflows, reports and API actions.",
        icon: Workflow,
        href: "/products",
        cta: "See where OneClaw fits",
        external: false,
        image: "/images/demos/studio.jpg"
      },
      {
        title: "Industry OS Preview",
        description: "Trading, construction, mission and field products built from the same Core foundation.",
        icon: LineChart,
        href: "/products",
        cta: "Explore Products",
        external: false,
        image: "/images/demos/trading.jpg"
      }
    ]
  },
  zh: {
    eyebrow: "演示",
    heading: "看 OneAI 实际运行",
    body: "探索来自 OneAI Core、OneAI Bot、OneClaw 和行业 AI 系统的产品预览——它们把 AI 基础设施变成真实的产品、工作流和应用。",
    preview: "预览",
    altSuffix: "线上产品截图",
    chat: {
      q: "汇总今天的用量和头部客户。",
      a1: "3,214 次请求 · 预估成本 $12.40 · 头部客户：Acme（41%）",
      a2: "建议操作：上调 Acme 的速率限额 →"
    },
    demos: [
      {
        title: "OneAI Core 控制台",
        description: "API 密钥、客户、请求、用量、成本、路由策略和运营者控制。",
        icon: CheckCircle2,
        href: site.appUrl,
        cta: "打开 Core",
        external: true,
        image: "/images/demos/core.jpg"
      },
      {
        title: "OneAI Bot 界面",
        description: "对话式界面：Core 驱动的任务输入、结构化输出和操作建议。",
        icon: Bot,
        href: "https://t.me/WAOCOneAIBot",
        cta: "打开 Bot",
        external: true,
        image: null
      },
      {
        title: "TheOne 执行 OS",
        description: "从一个意图走向一个运行中执行层的编排壳层。",
        icon: Layers3,
        href: site.theOneUrl,
        cta: "打开 TheOne",
        external: true,
        image: "/images/demos/theone.jpg"
      },
      {
        title: "OneAI Mirror",
        description: "面向大众的文明镜像，把一个信念变成可分享的世界结果。",
        icon: Eye,
        href: site.mirrorUrl,
        cta: "打开 Mirror",
        external: true,
        image: "/images/demos/mirror.jpg"
      },
      {
        title: "OneClaw 执行流",
        description: "把 Core 任务输出变成执行工作流、报告和 API 动作。",
        icon: Workflow,
        href: "/products",
        cta: "了解 OneClaw 的位置",
        external: false,
        image: "/images/demos/studio.jpg"
      },
      {
        title: "行业 OS 预览",
        description: "交易、建筑、任务和声誉产品，构建在同一套 Core 地基之上。",
        icon: LineChart,
        href: "/products",
        cta: "探索产品",
        external: false,
        image: "/images/demos/trading.jpg"
      }
    ]
  }
};

export function DemoSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="max-w-3xl">
          <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
            {t.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            {t.heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            {t.body}
          </p>
        </div>

        <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {t.demos.map((demo) => {
            const Icon = demo.icon;

            const cardContent = (
              <div className="group min-w-0 rounded-3xl border border-white/10 bg-oneai-bg/80 p-5 shadow-glow transition hover:-translate-y-1 hover:border-oneai-cyan/40 hover:bg-white/[0.04] sm:min-h-60 md:rounded-[2rem]">
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-oneai-gold" />
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400 transition group-hover:text-oneai-cyan">
                    {t.preview}
                  </span>
                </div>

                {demo.image ? (
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={demo.image}
                      alt={`${demo.title} — ${t.altSuffix}`}
                      width={1280}
                      height={800}
                      sizes="(min-width: 1536px) 15vw, (min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] w-full flex-col justify-end gap-2 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-oneai-bg p-3">
                    <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs text-slate-300">
                      {t.chat.q}
                    </div>
                    <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-oneai-blue/30 px-3 py-2 text-xs text-slate-200">
                      {t.chat.a1}
                    </div>
                    <div className="max-w-[70%] self-end rounded-2xl rounded-br-sm bg-oneai-blue/30 px-3 py-2 text-xs text-slate-200">
                      {t.chat.a2}
                    </div>
                  </div>
                )}

                <h3 className="mt-6 break-words text-lg font-semibold text-white">
                  {demo.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {demo.description}
                </p>

                <div className="mt-5 inline-flex items-center text-sm font-semibold text-oneai-cyan">
                  {demo.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            );

            if (demo.external) {
              return (
                <a
                  key={demo.title}
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link key={demo.title} href={localePath(locale, demo.href)}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  Captions,
  Clapperboard,
  Layers,
  Repeat2,
  RotateCcw,
  Send,
  Wand2,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { ProductMatrixSection } from "@/components/sections/ProductMatrixSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { site } from "@/lib/constants";
import { localePath } from "@/lib/i18n";
import { pageMetadata, type PageParams } from "@/lib/seo";
import { episodeCovers, featuredEpisode } from "@/data/videoShowcase";

const meta = {
  en: {
    title: "OneVideo Studio · AI Short-Drama Operating System",
    description: "OneVideo Studio turns one sentence into a scripted, natively voiced and publishable short drama. Drama beat engine, 10 genre engines, sequel mode and one-click publishing."
  },
  zh: {
    title: "OneVideo Studio · AI 短剧操作系统",
    description: "OneVideo Studio 把一句话变成有剧本、有原声配音、可直接发布的短剧。剧情节拍引擎、10 个题材引擎、续集模式和一键发布。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneVideo Studio",
      title: "The AI short-drama operating system",
      description: "From one idea to a publishable hit. OneVideo Studio writes the script, structures the shots, performs the dialogue and delivers a finished episode ready for the feed.",
      ctaLabel: "Open OneVideo Studio"
    },
    intro: {
      eyebrow: "Short-Drama Production",
      heading: "One sentence in. A finished episode out.",
      body: "Short drama is a production problem before it is a creative one. Casting, shooting, dubbing and editing turn every episode into a project. OneVideo Studio collapses that pipeline into a single generation pass, so a creator can test a story idea the same day they have it.",
      open: "Open OneVideo Studio",
      requestAccess: "Request Access",
      panelLabel: "Episode Pipeline",
      panelHeading: "A real episode, generated end-to-end",
      badge: "Made with OneVideo",
      videoFallback: "Your browser does not support embedded video.",
      coverAlt: (index: number) => `Short-drama episode cover ${index + 1}, generated with OneVideo Studio`,
      beats: ["Hook", "Conflict", "Twist", "Cliffhanger"],
      stats: [
        { value: "~15 min", label: "From premise to finished episode" },
        { value: "12 shots", label: "In a typical 60-second episode" },
        { value: "10", label: "Genre engines with specialized screenwriters" }
      ]
    },
    capabilities: {
      eyebrow: "Capabilities",
      heading: "Built for stories that have to land in 60 seconds.",
      body: "Generic video models produce clips. OneVideo Studio produces episodes — structured, voiced, captioned and serialized for the platforms they ship to.",
      items: [
        { title: "Drama Beat Engine", description: "Every episode is structured around hook, conflict, twist and cliffhanger, so the story holds attention instead of drifting.", icon: Wand2 },
        { title: "Native-Voice Engine", description: "Characters perform their lines with realistic lip-sync, not a narrator reading over silent footage.", icon: AudioLines },
        { title: "Sequel Mode", description: "Continue a story across episodes with a consistent cast, wardrobe and voice profile.", icon: Clapperboard },
        { title: "Multi-Act Merge", description: "Combine several projects into a single serialized film for longer-form releases.", icon: Layers },
        { title: "Per-Shot Regeneration", description: "Re-render an individual shot without rebuilding the whole episode around it.", icon: RotateCcw },
        { title: "Smart Dialogue Captions", description: "Word-level transcription verified against the approved script, ready for silent-autoplay feeds.", icon: Captions }
      ],
      genresLabel: "10 Genre Engines",
      genresBody: "Each genre runs its own specialized AI screenwriter, so pacing, tone and beat placement match what the format actually rewards.",
      genres: ["Romance", "Suspense", "Sci-Fi", "Horror", "Comedy", "Healing", "Commercial", "Fashion", "Emotional", "Underdog"]
    },
    workflow: {
      eyebrow: "Workflow",
      heading: "Premise to published, without a crew.",
      steps: [
        { label: "Premise", text: "Start from a single line of story intent." },
        { label: "Screenplay", text: "Review and approve the AI-written script and shot structure." },
        { label: "Generate", text: "Render a natively voiced film with performance and lip-sync." },
        { label: "Extend", text: "Continue with sequel mode or merge acts into a longer cut." },
        { label: "Publish", text: "Export to Douyin, TikTok and YouTube in one click." }
      ]
    },
    fit: {
      eyebrow: "Where it fits",
      heading: "OneVideo is a vertical OS on the OneAI stack.",
      body: "OneAI Core provides the commercial operating layer — routing, cost guards and usage tracking. OneVideo Studio applies that stack to one industry: turning story intent into finished, publishable short drama at feed speed.",
      exploreCore: "Explore OneAI Core",
      seeProducts: "See all products",
      coreLabel: "OneAI Core",
      coreText: "Provider routing, cost guards, usage and billing-ready operations.",
      videoLabel: "OneVideo Studio",
      videoText: "Script, shots, native voice, captions and serialized episodes.",
      platformsLabel: "Douyin · TikTok · YouTube",
      platformsText: "One-click publishing with analytics wired back to the episode."
    }
  },
  zh: {
    hero: {
      eyebrow: "OneVideo Studio",
      title: "AI 短剧操作系统",
      description: "从一个想法到一部爆款。OneVideo Studio 负责写剧本、排分镜、演台词，交付一集可以直接进入信息流的成片。",
      ctaLabel: "打开 OneVideo Studio"
    },
    intro: {
      eyebrow: "短剧生产",
      heading: "输入一句话，输出一集成片。",
      body: "短剧首先是个生产问题，其次才是创作问题。选角、拍摄、配音、剪辑让每一集都变成一个工程。OneVideo Studio 把整条流水线折叠成一次生成——创作者当天有想法，当天就能验证。",
      open: "打开 OneVideo Studio",
      requestAccess: "申请使用",
      panelLabel: "剧集流水线",
      panelHeading: "端到端生成的真实剧集",
      badge: "OneVideo 出品",
      videoFallback: "您的浏览器不支持嵌入视频。",
      coverAlt: (index: number) => `OneVideo Studio 生成的短剧剧集封面 ${index + 1}`,
      beats: ["钩子", "冲突", "反转", "悬念"],
      stats: [
        { value: "约 15 分钟", label: "从故事前提到成片" },
        { value: "12 个分镜", label: "一集典型的 60 秒剧集" },
        { value: "10", label: "配备专属编剧的题材引擎" }
      ]
    },
    capabilities: {
      eyebrow: "核心能力",
      heading: "为必须在 60 秒内抓住人的故事而建。",
      body: "通用视频模型产出的是片段，OneVideo Studio 产出的是剧集——有结构、有配音、有字幕、可连载，为目标平台量身定制。",
      items: [
        { title: "剧情节拍引擎", description: "每一集都围绕钩子、冲突、反转、悬念展开，故事始终抓着注意力，不会散掉。", icon: Wand2 },
        { title: "原声演出引擎", description: "角色亲口说台词并精准对口型，而不是旁白盖在无声画面上。", icon: AudioLines },
        { title: "续集模式", description: "跨集延续故事，演员、服装和声线保持一致。", icon: Clapperboard },
        { title: "多幕合并", description: "把多个项目合并成一部连载成片，支持更长的发布形态。", icon: Layers },
        { title: "单镜头重生成", description: "重渲染某一个镜头，不需要围绕它重建整集。", icon: RotateCcw },
        { title: "智能台词字幕", description: "逐词转写并与定稿剧本校验，适配静音自动播放的信息流。", icon: Captions }
      ],
      genresLabel: "10 个题材引擎",
      genresBody: "每个题材都由专属 AI 编剧驱动，节奏、基调和节拍安排都对准这个题材真正吃香的打法。",
      genres: ["恋爱", "悬疑", "科幻", "恐怖", "喜剧", "治愈", "商业", "时尚", "情感", "逆袭"]
    },
    workflow: {
      eyebrow: "工作流",
      heading: "从前提到发布，不需要剧组。",
      steps: [
        { label: "前提", text: "从一句话的故事意图开始。" },
        { label: "剧本", text: "审阅并确认 AI 写好的剧本和分镜结构。" },
        { label: "生成", text: "渲染一部有原声演出和口型同步的成片。" },
        { label: "延展", text: "用续集模式继续，或把多幕合并成更长的剪辑。" },
        { label: "发布", text: "一键导出到抖音、TikTok 和 YouTube。" }
      ]
    },
    fit: {
      eyebrow: "所处位置",
      heading: "OneVideo 是 OneAI 技术栈上的垂直 OS。",
      body: "OneAI Core 提供商业运营层——路由、成本护栏和用量追踪。OneVideo Studio 把这套技术栈应用到一个行业：以信息流的速度，把故事意图变成可发布的短剧成片。",
      exploreCore: "了解 OneAI Core",
      seeProducts: "查看全部产品",
      coreLabel: "OneAI Core",
      coreText: "供应商路由、成本护栏、用量和可计费的运营。",
      videoLabel: "OneVideo Studio",
      videoText: "剧本、分镜、原声、字幕和连载剧集。",
      platformsLabel: "抖音 · TikTok · YouTube",
      platformsText: "一键发布，数据分析回流到每一集。"
    }
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/video", meta);
}

export default async function VideoPage({ params }: PageParams) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        ctaHref={site.videoUrl}
        ctaLabel={t.hero.ctaLabel}
      />

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
                {t.intro.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {t.intro.heading}
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                {t.intro.body}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-oneai-gold sm:w-auto"
                >
                  {t.intro.open}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href={localePath(locale, "/contact")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
                >
                  {t.intro.requestAccess}
                </Link>
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-oneai-blue/10 sm:p-5 md:rounded-[2rem]">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-5 md:rounded-[1.5rem]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oneai-gold sm:tracking-[0.25em]">
                      {t.intro.panelLabel}
                    </p>
                    <h3 className="mt-2 break-words text-xl font-semibold text-white">
                      {t.intro.panelHeading}
                    </h3>
                  </div>

                  <div className="w-fit rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-3 py-1 text-xs font-medium text-oneai-cyan">
                    {t.intro.badge}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={featuredEpisode.poster}
                    src={featuredEpisode.videoSrc}
                    className="aspect-video w-full rounded-xl border border-white/10 bg-black object-cover"
                  >
                    {t.intro.videoFallback}
                  </video>

                  <div className="mt-4 m-carousel gap-2 md:grid sm:grid-cols-4">
                    {t.intro.beats.map((beat) => (
                      <span
                        key={beat}
                        className="rounded-full bg-white/10 px-3 py-2 text-center text-xs text-slate-300"
                      >
                        {beat}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {episodeCovers.map((cover, index) => (
                      <Image
                        key={cover}
                        src={cover}
                        alt={t.intro.coverAlt(index)}
                        width={720}
                        height={1280}
                        sizes="(min-width: 1024px) 10vw, 18vw"
                        className="aspect-[9/16] w-full rounded-lg border border-white/10 object-cover"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 m-carousel gap-3 md:grid sm:grid-cols-3">
                  {t.intro.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-lg font-semibold text-oneai-gold">{stat.value}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
              {t.capabilities.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.capabilities.heading}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.capabilities.body}
            </p>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {t.capabilities.items.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-oneai-gold/30 bg-oneai-gold/10">
                    <Icon className="h-5 w-5 text-oneai-gold" />
                  </div>

                  <h3 className="mt-5 break-words text-lg font-semibold text-white">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-8 md:rounded-[2rem]">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:tracking-[0.3em]">
              {t.capabilities.genresLabel}
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
              {t.capabilities.genresBody}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.capabilities.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="site-shell-wide section-y">
          <div className="max-w-3xl">
            <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {t.workflow.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.workflow.heading}
            </h2>
          </div>

          <div className="mt-12 m-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-5">
            {t.workflow.steps.map((step, index) => (
              <div
                key={step.label}
                className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:rounded-[1.5rem]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 text-sm font-semibold text-oneai-cyan">
                  {index + 1}
                </div>

                <h3 className="mt-5 break-words text-lg font-semibold text-white">
                  {step.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="site-shell-wide section-y">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">
                {t.fit.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {t.fit.heading}
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                {t.fit.body}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={localePath(locale, "/core")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
                >
                  {t.fit.exploreCore}
                </Link>

                <Link
                  href={localePath(locale, "/products")}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
                >
                  {t.fit.seeProducts}
                </Link>
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-5 sm:p-6 md:rounded-[2rem]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-cyan sm:tracking-[0.25em]">
                    {t.fit.coreLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {t.fit.coreText}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Repeat2 className="h-5 w-5 text-oneai-cyan" />
                </div>

                <div className="rounded-2xl border border-oneai-gold/20 bg-oneai-gold/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-gold sm:tracking-[0.25em]">
                    {t.fit.videoLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    {t.fit.videoText}
                  </p>
                </div>

                <div className="flex justify-center">
                  <Send className="h-5 w-5 text-oneai-cyan" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oneai-cyan sm:tracking-[0.25em]">
                    {t.fit.platformsLabel}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {t.fit.platformsText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductMatrixSection locale={locale} />
      <FinalCTASection locale={locale} />
    </>
  );
}

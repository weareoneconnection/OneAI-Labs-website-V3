import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AudioLines, Clapperboard, Send, Wand2 } from "lucide-react";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { episodeCovers } from "@/data/videoShowcase";

const content = {
  en: {
    eyebrow: "OneVideo Studio",
    heading: "From one sentence to a publishable short drama.",
    body: "OneVideo Studio is the AI short-drama operating system in the OneAI ecosystem. Write one line of premise, approve the screenplay, and get a voiced, shot-structured episode ready to publish.",
    explore: "Explore OneVideo",
    open: "Open OneVideo Studio",
    panelLabel: "Episode Pipeline",
    panelHeading: "Real episodes, generated end-to-end",
    badge: "~15 min",
    premise: "“A courier discovers the package he is delivering is addressed to himself.”",
    beats: ["Hook", "Conflict", "Twist", "Cliffhanger"],
    coverAlt: (index: number) => `Short-drama episode cover ${index + 1}, generated with OneVideo Studio`,
    features: [
      { title: "Drama Beat Engine", description: "Structure every episode around hook, conflict, twist and cliffhanger.", icon: Wand2 },
      { title: "Native-Voice Engine", description: "Characters speak and lip-sync in performance, not robotic narration.", icon: AudioLines },
      { title: "Sequel Mode", description: "Continue the story with a consistent cast, wardrobe and voice profile.", icon: Clapperboard },
      { title: "One-Click Publishing", description: "Export straight to Douyin, TikTok and YouTube with analytics attached.", icon: Send }
    ]
  },
  zh: {
    eyebrow: "OneVideo Studio",
    heading: "一句话，变成一部可发布的短剧。",
    body: "OneVideo Studio 是 OneAI 生态中的 AI 短剧操作系统。写一句故事前提，确认剧本，就能得到一集有配音、有分镜、可直接发布的短剧。",
    explore: "了解 OneVideo",
    open: "打开 OneVideo Studio",
    panelLabel: "剧集流水线",
    panelHeading: "端到端生成的真实剧集",
    badge: "约 15 分钟",
    premise: "「快递员发现自己派送的包裹，收件人竟然是自己。」",
    beats: ["钩子", "冲突", "反转", "悬念"],
    coverAlt: (index: number) => `OneVideo Studio 生成的短剧剧集封面 ${index + 1}`,
    features: [
      { title: "剧情节拍引擎", description: "每一集都按钩子、冲突、反转、悬念的结构展开。", icon: Wand2 },
      { title: "原声演出引擎", description: "角色开口说台词并精准对口型，不是机械旁白。", icon: AudioLines },
      { title: "续集模式", description: "延续故事时保持演员、服装和声线一致。", icon: Clapperboard },
      { title: "一键发布", description: "直接导出到抖音、TikTok 和 YouTube，并附带数据分析。", icon: Send }
    ]
  }
} as const;

export function OneVideoSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="border-y border-white/10">
      <div className="site-shell section-y">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-gold sm:text-sm sm:tracking-[0.3em]">
              {t.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {t.heading}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {t.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localePath(locale, "/video")}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-oneai-gold sm:w-auto"
              >
                {t.explore}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={site.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-oneai-cyan hover:text-oneai-cyan sm:w-auto"
              >
                {t.open}
              </a>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-oneai-blue/10 sm:p-5 md:rounded-[2rem]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4 sm:p-5 md:rounded-[1.5rem]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oneai-gold sm:tracking-[0.25em]">
                    {t.panelLabel}
                  </p>
                  <h3 className="mt-2 break-words text-xl font-semibold text-white">
                    {t.panelHeading}
                  </h3>
                </div>

                <div className="w-fit rounded-full border border-oneai-cyan/30 bg-oneai-cyan/10 px-3 py-1 text-xs font-medium text-oneai-cyan">
                  {t.badge}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-oneai-blue/20 to-oneai-gold/10 p-4">
                  <p className="text-sm text-slate-300">{t.premise}</p>

                  <div className="mt-4 m-carousel gap-2 md:grid sm:grid-cols-4">
                    {t.beats.map((beat) => (
                      <span
                        key={beat}
                        className="rounded-full bg-white/10 px-3 py-2 text-center text-xs text-slate-300"
                      >
                        {beat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-5 gap-2">
                  {episodeCovers.map((cover, index) => (
                    <Image
                      key={cover}
                      src={cover}
                      alt={t.coverAlt(index)}
                      width={720}
                      height={1280}
                      sizes="(min-width: 1024px) 10vw, 18vw"
                      className="aspect-[9/16] w-full rounded-lg border border-white/10 object-cover"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 m-carousel gap-3 md:grid sm:grid-cols-2">
                {t.features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <Icon className="h-5 w-5 text-oneai-gold" />
                      <h4 className="mt-3 text-sm font-semibold text-white">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

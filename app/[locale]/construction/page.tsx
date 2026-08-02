import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ClipboardList, FileText, HardHat, ReceiptText } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { VerticalDetail, type VerticalDetailContent } from "@/components/sections/VerticalDetail";
import { pageMetadata, type PageParams } from "@/lib/seo";

const PRODUCT_URL = "https://on-ai-construction-os.vercel.app/";

const meta = {
  en: {
    title: "OneAI Construction OS · Project, Cost and Contract Intelligence",
    description: "AI for project reports, contract summaries, BOQ/BQ support, RFI/VO/claims and site records — built for construction teams."
  },
  zh: {
    title: "OneAI Construction OS · 项目、成本与合同智能",
    description: "面向建筑团队的 AI：项目报告、合同摘要、BOQ/BQ 支持、RFI/VO/索赔与现场记录。"
  }
};

const content = {
  en: {
    hero: {
      eyebrow: "OneAI Construction OS",
      title: "AI for project, cost, contract and site intelligence",
      description: "OneAI Construction OS helps construction teams work with project reports, contract summaries, BOQ/BQ support, RFI/VO/claims and site records."
    },
    features: [
      { title: "Project Reports", description: "Generate daily reports, weekly summaries and progress notes faster.", icon: ClipboardList },
      { title: "Contract Summaries", description: "Summarize contract terms, obligations and key risks for review.", icon: FileText },
      { title: "BOQ / BQ Support", description: "Assist with quantity, cost and project document workflows.", icon: ReceiptText },
      { title: "Site Intelligence", description: "Support site records, photos, RFI, VO and claim document drafting.", icon: HardHat }
    ],
    detail: {
      workflow: {
        eyebrow: "How it works",
        heading: "From site record to submission-ready document.",
        steps: [
          { label: "Capture", text: "Feed in site notes, photos, meeting minutes or a contract document." },
          { label: "Structure", text: "The OS turns raw input into the right document skeleton: daily report, summary, RFI or claim draft." },
          { label: "Review", text: "Engineers and QS review, correct and approve — the AI drafts, people decide." },
          { label: "Submit", text: "Export a clean, consistent document ready for the consultant, client or record file." }
        ]
      },
      audience: {
        eyebrow: "Who it is for",
        heading: "Built for the people who carry the paperwork load.",
        items: [
          { title: "Contractors & site teams", description: "Cut hours from daily and weekly reporting so site staff stay on site, not on paperwork." },
          { title: "Quantity surveyors", description: "Speed up BOQ/BQ work, contract term reviews and the paper trail behind VO and claims." },
          { title: "Project managers", description: "Keep progress records, RFIs and correspondence consistent across projects and teams." }
        ]
      },
      cta: {
        heading: "See Construction OS live.",
        body: "Explore the working preview and see how project, cost, contract and site workflows come together on one Core-powered stack.",
        openLabel: "Open Construction OS",
        href: PRODUCT_URL,
        demoLabel: "Request Demo"
      },
      disclaimer: "Outputs are drafts to support professional review. They do not replace the judgment of qualified engineers, quantity surveyors or legal advisers."
    } satisfies VerticalDetailContent
  },
  zh: {
    hero: {
      eyebrow: "OneAI Construction OS",
      title: "面向项目、成本、合同与现场的 AI 智能",
      description: "OneAI Construction OS 帮助建筑团队处理项目报告、合同摘要、BOQ/BQ 支持、RFI/VO/索赔和现场记录。"
    },
    features: [
      { title: "项目报告", description: "更快生成日报、周报和进度纪要。", icon: ClipboardList },
      { title: "合同摘要", description: "总结合同条款、义务和关键风险，便于审阅。", icon: FileText },
      { title: "BOQ / BQ 支持", description: "协助工程量、成本和项目文档工作流。", icon: ReceiptText },
      { title: "现场智能", description: "支持现场记录、照片、RFI、VO 和索赔文件起草。", icon: HardHat }
    ],
    detail: {
      workflow: {
        eyebrow: "如何运作",
        heading: "从现场记录到可提交的文件。",
        steps: [
          { label: "采集", text: "输入现场笔记、照片、会议纪要或一份合同文件。" },
          { label: "成稿", text: "系统把原始输入变成正确的文档骨架：日报、摘要、RFI 或索赔草稿。" },
          { label: "审核", text: "工程师和 QS 审阅、修正、批准——AI 起草，人来决定。" },
          { label: "提交", text: "导出一份干净、格式一致的文件，直接交给顾问、业主或归档。" }
        ]
      },
      audience: {
        eyebrow: "适合谁",
        heading: "为扛着文书工作量的人而建。",
        items: [
          { title: "承包商与现场团队", description: "把日报周报的时间省下来，让现场人员留在现场，而不是埋在文书里。" },
          { title: "工料测量师（QS）", description: "加速 BOQ/BQ 工作、合同条款审阅，以及 VO 和索赔背后的书面链条。" },
          { title: "项目经理", description: "让进度记录、RFI 和往来函件在多个项目和团队之间保持一致。" }
        ]
      },
      cta: {
        heading: "在线体验 Construction OS。",
        body: "打开可用预览，看看项目、成本、合同和现场工作流如何跑在同一套 Core 驱动的技术栈上。",
        openLabel: "打开 Construction OS",
        href: PRODUCT_URL,
        demoLabel: "预约演示"
      },
      disclaimer: "输出为辅助专业审阅的草稿，不能替代合格工程师、工料测量师或法律顾问的判断。"
    } satisfies VerticalDetailContent
  }
} as const;

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return pageMetadata(locale, "/construction", meta);
}

export default async function ConstructionPage({ params }: PageParams) {
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

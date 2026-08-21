import { products } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Product matrix",
    heading: "The OneAI Labs ecosystem, powered by OneAI Core.",
    body: "Each product is a proof of the same company architecture: Core handles gateway, task intelligence, routing, policy and usage; Agent OS turns that foundation into user-facing workflows.",
    poweredByLabel: "Powered by",
    shippingTitle: "Shipping",
    shippingNote: "Own domain, usable today. Beta means no SLA commitment yet.",
    labsTitle: "Labs",
    labsNote: "Early explorations on the same stack. Preview means exactly that — not a commitment, not a product you should depend on yet.",
    honesty: "Every label above is assigned by evidence, not ambition. Nothing is marked beyond what it can demonstrate."
  },
  zh: {
    eyebrow: "产品矩阵",
    heading: "由 OneAI Core 驱动的 OneAI Labs 生态。",
    body: "每一款产品都是同一套公司架构的证明：Core 负责网关、任务智能、路由、策略和用量；Agent OS 把这层地基变成面向用户的工作流。",
    poweredByLabel: "技术底座",
    shippingTitle: "已交付",
    shippingNote: "有自有域名、当下可用。Beta 表示尚未做出 SLA 承诺。",
    labsTitle: "实验室",
    labsNote: "同一技术栈上的早期探索。Preview 就是字面意思——不是承诺，也还不是你应该依赖的产品。",
    honesty: "以上每个标签都由证据决定，而非由期望决定。没有任何一项被标注到超出它能证明的程度。"
  }
} as const;

export function ProductMatrixSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  const all = products[locale];
  // Split by what each product can actually demonstrate. Mixing a governed control
  // plane in with weekend explorations makes the reader discount both.
  const shipping = all.filter((product) => product.stage !== "Preview");
  const labs = all.filter((product) => product.stage === "Preview");

  const grid = (items: typeof all) => (
    <div className="mt-8 m-carousel gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
      {items.map((product) => (
        <ProductCard key={product.name} {...product} poweredByLabel={t.poweredByLabel} />
      ))}
    </div>
  );

  const groupHeading = (title: string, note: string) => (
    <div className="max-w-3xl">
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{note}</p>
    </div>
  );

  return (
    <section id="product-matrix" className="scroll-mt-20 border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="max-w-4xl">
          <p className="font-mono-accent text-[0.7rem] font-medium uppercase tracking-[0.22em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>

        <div className="mt-12">
          {groupHeading(t.shippingTitle, t.shippingNote)}
          {grid(shipping)}
        </div>

        {labs.length ? (
          <div className="mt-14 border-t border-white/10 pt-12">
            {groupHeading(t.labsTitle, t.labsNote)}
            {grid(labs)}
          </div>
        ) : null}

        <p className="mt-10 text-xs leading-6 text-slate-500">{t.honesty}</p>
      </div>
    </section>
  );
}

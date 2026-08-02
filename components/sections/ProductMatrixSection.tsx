import { products } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Product matrix",
    heading: "The OneAI Labs ecosystem, powered by OneAI Core.",
    body: "Each product is a proof of the same company architecture: Core handles gateway, task intelligence, routing, policy and usage; Agent OS turns that foundation into user-facing workflows.",
    poweredByLabel: "Powered by"
  },
  zh: {
    eyebrow: "产品矩阵",
    heading: "由 OneAI Core 驱动的 OneAI Labs 生态。",
    body: "每一款产品都是同一套公司架构的证明：Core 负责网关、任务智能、路由、策略和用量；Agent OS 把这层地基变成面向用户的工作流。",
    poweredByLabel: "技术底座"
  }
} as const;

export function ProductMatrixSection({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section id="product-matrix" className="scroll-mt-20 border-y border-white/10 bg-white/[0.025]">
      <div className="site-shell-wide section-y">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-oneai-cyan sm:text-sm sm:tracking-[0.3em]">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{t.heading}</h2>
          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">{t.body}</p>
        </div>
        <div className="mt-12 m-carousel gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {products[locale].map((product) => (
            <ProductCard key={product.name} {...product} poweredByLabel={t.poweredByLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}

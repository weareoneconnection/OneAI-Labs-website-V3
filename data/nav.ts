import type { Locale } from "@/lib/i18n";

export const navItems: { label: Record<Locale, string>; href: string }[] = [
  { label: { en: "Core", zh: "Core" }, href: "/core" },
  { label: { en: "Forge", zh: "Forge" }, href: "/forge" },
  { label: { en: "Agent OS", zh: "Agent OS" }, href: "/agent-os" },
  { label: { en: "Studio", zh: "Studio" }, href: "/studio" },
  { label: { en: "Video", zh: "短剧" }, href: "/video" },
  { label: { en: "Products", zh: "产品" }, href: "/products" },
  { label: { en: "Use Cases", zh: "应用场景" }, href: "/use-cases" },
  { label: { en: "Developers", zh: "开发者" }, href: "/developers" },
  { label: { en: "Pricing", zh: "定价" }, href: "/pricing" },
  { label: { en: "Company", zh: "公司" }, href: "/company" }
];

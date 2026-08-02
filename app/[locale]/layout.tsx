import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const rootDescription: Record<Locale, string> = {
  en: "ONEAI LABS SDN. BHD. builds an integrated AI operating platform spanning model access, capability development, agent coordination, governed execution, persistent memory and industry applications.",
  zh: "ONEAI LABS SDN. BHD. 构建一体化 AI 运行平台，覆盖模型接入、能力开发、Agent 协同、受治理执行、长期记忆与行业应用。"
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return {
    title: {
      default: locale === "zh" ? "OneAI Labs | 面向真实世界的 AI 运行平台" : "OneAI Labs | AI Operating Platform for the Real World",
      template: "%s | OneAI Labs"
    },
    description: rootDescription[locale],
    keywords: ["OneAI Labs", "Commercial AI", "AI SaaS", "AI Agent OS", "OneAI Core", "TheOne", "Execution OS", "OneForge", "TheOne", "OneClaw", "OneField", "AI operating platform", "AI capability lifecycle", "enterprise AI", "AI agents", "OneVideo Studio", "Construction AI"],
    metadataBase: new URL(site.url),
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
    alternates: {
      canonical: locale === "zh" ? "/zh" : "/",
      languages: { en: "/", "zh-CN": "/zh" }
    },
    openGraph: {
      title: "OneAI Labs",
      description: locale === "zh" ? "面向真实世界的 AI 运行平台" : "AI Operating Platform for the Real World",
      url: locale === "zh" ? `${site.url}/zh` : site.url,
      siteName: "OneAI Labs",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "OneAI Labs",
      description: locale === "zh" ? "面向真实世界的 AI 运行平台" : "AI Operating Platform for the Real World"
    }
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  description: "Integrated AI operating platform for model access, capability development, agent coordination, governed execution, persistent memory and real-world applications.",
  foundingDate: "2026-05-18",
  identifier: site.registrationNo,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.jurisdiction
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.email,
    url: `${site.url}/contact`
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={htmlLang(locale)} className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}

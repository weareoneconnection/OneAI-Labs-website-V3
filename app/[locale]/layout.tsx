import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import { htmlLang, isLocale, localePath, locales, type Locale } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

// A monospace accent for eyebrows, labels and figures. On an infrastructure product
// these read as instrument output rather than marketing copy — which is the point.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-mono"
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const rootDescription: Record<Locale, string> = {
  en: "ONEAI LABS SDN. BHD. builds a governed AI operating platform spanning model access, durable missions, real-world execution, independent verification and shared evidence.",
  zh: "ONEAI LABS SDN. BHD. 构建受治理 AI 运行平台，覆盖模型接入、持久 Mission、真实执行、独立验证与共享证据。"
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const socialImage = `${site.url}${localePath(locale, "/opengraph-image")}`;

  return {
    title: {
      default: locale === "zh" ? "OneAI Labs | 面向真实工作的可治理 AI 运行平台" : "OneAI Labs | Governed AI Operating Platform for Real Work",
      template: "%s | OneAI Labs"
    },
    description: rootDescription[locale],
    keywords: ["OneAI Labs", "Governed AI", "AI SaaS", "AI Agent Systems", "OneAI Core", "OneForge", "TheOne", "OneMission", "OneClaw", "OneField", "AI operating platform", "durable missions", "independent verification", "enterprise AI", "AI agents", "OneVideo Studio", "Construction AI"],
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
      description: locale === "zh" ? "面向真实工作的可治理 AI 运行平台" : "Governed AI Operating Platform for Real Work",
      url: locale === "zh" ? `${site.url}/zh` : site.url,
      siteName: "OneAI Labs",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: site.name }]
    },
    twitter: {
      card: "summary_large_image",
      title: "OneAI Labs",
      description: locale === "zh" ? "面向真实工作的可治理 AI 运行平台" : "Governed AI Operating Platform for Real Work",
      images: [socialImage]
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
  description: "Governed AI operating platform for model access, durable missions, real-world execution, independent verification and shared evidence.",
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  publisher: { "@type": "Organization", name: site.name, url: site.url },
  inLanguage: ["en", "zh-CN"]
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
    <html lang={htmlLang(locale)} className={`${inter.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}

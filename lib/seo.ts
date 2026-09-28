import type { Metadata } from "next";
import { site } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

type LocalizedMeta = {
  title: string;
  description: string;
};

export function pageMetadata(
  locale: Locale,
  path: string,
  meta: Record<Locale, LocalizedMeta>
): Metadata {
  const { title, description } = meta[locale];
  const canonical = localePath(locale, path);
  const socialImage = `${site.url}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: localePath("en", path),
        "zh-CN": localePath("zh", path)
      }
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: `${site.url}${canonical}`,
      siteName: site.name,
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: site.name }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [socialImage]
    }
  };
}

export type PageParams = { params: Promise<{ locale: Locale }> };

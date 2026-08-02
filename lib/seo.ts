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
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description
    }
  };
}

export type PageParams = { params: Promise<{ locale: Locale }> };

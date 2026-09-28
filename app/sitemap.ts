import type { MetadataRoute } from "next";
import { site } from "@/lib/constants";
import { localePath, locales } from "@/lib/i18n";

const routes = [
  "/",
  "/platform",
  "/core",
  "/forge",
  "/agent-os",
  "/theone",
  "/studio",
  "/video",
  "/products",
  "/evidence",
  "/trust",
  "/industries",
  "/solutions/agents",
  "/solutions/training",
  "/developers",
  "/pricing",
  "/company",
  "/contact",
  "/trading",
  "/construction",
  "/mission",
  "/field",
  "/privacy",
  "/terms"
];

const CONTENT_UPDATED_AT = new Date("2026-09-28T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}${localePath(locale, route) === "/" ? "" : localePath(locale, route)}`,
      lastModified: CONTENT_UPDATED_AT,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${site.url}${localePath("en", route) === "/" ? "" : localePath("en", route)}`,
          "zh-CN": `${site.url}${localePath("zh", route)}`
        }
      }
    }))
  );
}

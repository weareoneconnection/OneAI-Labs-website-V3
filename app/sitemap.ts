import type { MetadataRoute } from "next";
import { site } from "@/lib/constants";
import { localePath, locales } from "@/lib/i18n";

const routes = [
  "/",
  "/core",
  "/forge",
  "/agent-os",
  "/studio",
  "/video",
  "/products",
  "/use-cases",
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

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}${localePath(locale, route) === "/" ? "" : localePath(locale, route)}`,
      lastModified: new Date(),
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

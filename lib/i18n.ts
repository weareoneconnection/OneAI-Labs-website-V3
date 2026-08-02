export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Path helpers: English lives at "/", Chinese under "/zh".
export function localePath(locale: Locale, path: string): string {
  return locale === defaultLocale ? path || "/" : `/zh${path === "/" ? "" : path}` || "/zh";
}

export function htmlLang(locale: Locale): string {
  return locale === "zh" ? "zh-CN" : "en";
}

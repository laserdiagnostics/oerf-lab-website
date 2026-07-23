export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];
export type Bilingual<T> = Record<Locale, T>;

export function localize<T>(value: Bilingual<T>, locale: Locale): T {
  return value[locale];
}

export function normalizeLocale(locale?: string): Locale {
  return locale === "zh" ? "zh" : "en";
}

export function htmlLang(locale: Locale): "en" | "zh-CN" {
  return locale === "zh" ? "zh-CN" : "en";
}

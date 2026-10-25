import type { Lang } from "@/lib/content";

export const languageTags: Record<Lang, string> = {
  vi: "vi",
  zh: "zh-CN",
  en: "en",
};

export function languageFromPath(pathname: string): Lang {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "vi";
}

/** Preserve the page, query and fragment when switching languages. */
export function localizedPath(lang: Lang, path = "/"): string {
  const unprefixed = path.replace(/^\/(zh|en)(?=\/|[?#]|$)/, "") || "/";
  if (unprefixed.startsWith("/huong-dan") && lang !== "vi") {
    return `/${lang}/products`;
  }
  const prefix = lang === "vi" ? "" : `/${lang}`;
  return prefix
    ? `${prefix}${unprefixed === "/" ? "" : unprefixed}`
    : unprefixed;
}

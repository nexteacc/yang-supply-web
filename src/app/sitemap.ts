import type { MetadataRoute } from "next";
import { SITE_URL, pagePaths, type PageKey } from "@/lib/seo";
import { localizedPath } from "@/lib/i18n";
import type { Lang } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(pagePaths) as PageKey[];
  const languages: Lang[] = ["vi", "zh", "en"];
  const priorities: Record<PageKey, number> = {
    home: 1,
    products: 0.9,
    cooperation: 0.8,
    contact: 0.8,
  };

  return languages.flatMap((lang) =>
    pages.map((page) => {
      const path = pagePaths[page] || "/";
      const viUrl = `${SITE_URL}${localizedPath("vi", path)}`;
      return {
        url: `${SITE_URL}${localizedPath(lang, path)}`,
        changeFrequency: "weekly" as const,
        priority: priorities[page] * (lang === "vi" ? 1 : 0.9),
        alternates: {
          languages: {
            "vi-VN": viUrl,
            "zh-Hans": `${SITE_URL}${localizedPath("zh", path)}`,
            en: `${SITE_URL}${localizedPath("en", path)}`,
            "x-default": viUrl,
          },
        },
      };
    }),
  );
}

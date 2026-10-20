import type { MetadataRoute } from "next";
import { SITE_URL, pagePaths, type PageKey } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: PageKey[] = ["home", "products", "cooperation", "contact"];
  const now = new Date();

  const priorities: Record<PageKey, number> = {
    home: 1.0,
    products: 0.9,
    cooperation: 0.8,
    contact: 0.8,
  };

  const viEntries: MetadataRoute.Sitemap = pages.map((page) => {
    const sub = pagePaths[page];
    const viUrl = `${SITE_URL}${sub || "/"}`;
    const zhUrl = `${SITE_URL}/zh${sub}`;

    return {
      url: viUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: priorities[page],
      alternates: {
        languages: {
          "vi-VN": viUrl,
          "zh-Hans": zhUrl,
          "x-default": viUrl,
        },
      },
    };
  });

  const zhEntries: MetadataRoute.Sitemap = pages.map((page) => {
    const sub = pagePaths[page];
    const viUrl = `${SITE_URL}${sub || "/"}`;
    const zhUrl = `${SITE_URL}/zh${sub}`;

    return {
      url: zhUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: priorities[page] * 0.9,
      alternates: {
        languages: {
          "vi-VN": viUrl,
          "zh-Hans": zhUrl,
          "x-default": viUrl,
        },
      },
    };
  });

  return [...viEntries, ...zhEntries];
}

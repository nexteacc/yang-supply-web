import type { MetadataRoute } from "next";
import { guideList } from "@/lib/guides";
import { marketList, type PageKey } from "@/lib/markets";
import { languageAlternates, SITE_URL } from "@/lib/seo";

const pages: PageKey[] = ["home", "products", "cooperation", "contact"];

const priorities: Record<PageKey, number> = {
  home: 1,
  products: 0.9,
  cooperation: 0.8,
  contact: 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const mainEntries: MetadataRoute.Sitemap = marketList.flatMap((market) =>
    pages.flatMap((page) => {
      const path = market.pages[page];
      if (!path) return [];
      return [
        {
          url: `${SITE_URL}${path}`,
          changeFrequency: "weekly" as const,
          priority:
            Math.round(priorities[page] * (market.id === "vi" ? 100 : 90)) /
            100,
          alternates: {
            languages: languageAlternates(page),
          },
        },
      ];
    }),
  );

  const guideEntries: MetadataRoute.Sitemap = guideList.map((guide) => ({
    url: `${SITE_URL}${guide.href}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...mainEntries, ...guideEntries];
}

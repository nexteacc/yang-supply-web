import type { Metadata } from "next";
import { guides, type GuideSlug } from "@/lib/guides";
import {
  marketList,
  markets,
  type MarketId,
  type PageKey,
} from "@/lib/markets";

export const SITE_URL = "https://www.yangsupply.com";

export function pageTitle(marketId: MarketId, page: PageKey): string {
  const meta = markets[marketId].meta[page];
  if (!meta) return "YANG SUPPLY";
  return meta.absolute ? meta.title : `${meta.title} · YANG SUPPLY`;
}

export function languageAlternates(page: PageKey): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const market of marketList) {
    const path = market.pages[page];
    if (!path) continue;
    languages[market.hreflang] = `${SITE_URL}${path}`;
  }
  const zhPath = markets.zh.pages[page];
  if (zhPath) languages["x-default"] = `${SITE_URL}${zhPath}`;
  return languages;
}

export function buildMetadata(marketId: MarketId, page: PageKey): Metadata {
  const market = markets[marketId];
  const meta = market.meta[page];
  if (!meta) {
    return {};
  }
  const title = pageTitle(marketId, page);
  const path = market.pages[page] ?? market.pages.home;
  const currentUrl = `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description: meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: currentUrl,
      languages: languageAlternates(page),
    },
    openGraph: {
      title,
      description: meta.description,
      url: currentUrl,
      siteName: "YANG SUPPLY",
      locale: market.ogLocale,
      alternateLocale: marketList
        .map((item) => item.ogLocale)
        .filter((locale) => locale !== market.ogLocale),
      type: "website",
      images: [
        {
          url: `${SITE_URL}/products/sticker-dinh-da-co-lon-hop-qua.jpg`,
          width: 800,
          height: 800,
          alt: "YANG SUPPLY DIY Materials",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
      images: [`${SITE_URL}/products/sticker-dinh-da-co-lon-hop-qua.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildGuideMetadata(slug: GuideSlug): Metadata {
  const guide = guides[slug];
  const fullTitle = `${guide.title} · YANG SUPPLY`;
  const currentUrl = `${SITE_URL}${guide.href}`;
  const ogImageUrl = `${SITE_URL}${guide.heroImage.src}`;

  return {
    title: { absolute: fullTitle },
    description: guide.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title: fullTitle,
      description: guide.description,
      url: currentUrl,
      siteName: "YANG SUPPLY",
      locale: "vi_VN",
      type: "article",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images: [
        {
          url: ogImageUrl,
          width: guide.heroImage.width,
          height: guide.heroImage.height,
          alt: guide.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: guide.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

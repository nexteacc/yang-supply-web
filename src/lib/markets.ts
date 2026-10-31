/**
 * One record per market. Add /en-gb, /en-ca, /ms or /th by appending a record
 * here (prefix, slugs, hreflang, hero, meta, contact method, terms). Prefixed
 * markets are routed by `src/app/[market]`; the Vietnamese site stays at the
 * root because its slugs differ.
 *
 * `copyLang` selects shared product copy (names, colours, alt text).
 * Page prose lives in `dictionary` under that same key and must follow `terms`.
 * Chinese is a brand front: `terms` is null, and the cooperation slug is omitted.
 */

export type MarketId = "vi" | "zh" | "en-us";

export type CopyLang = "vi" | "zh" | "en";

export type PageKey = "home" | "products" | "cooperation" | "contact";

export type PageMeta = {
  title: string;
  description: string;
  /** Use the title verbatim, without the shared " · YANG SUPPLY" suffix. */
  absolute?: boolean;
};

export type MarketTerms = {
  /** Short commercial summary for JSON-LD and the matching llms.txt section. */
  serviceName: string;
  serviceDescription: string;
};

export type Market = {
  id: MarketId;
  /** URL prefix. Empty for the root Vietnamese site. Example: "/en-gb". */
  prefix: string;
  hreflang: string;
  /** `html lang` value. */
  htmlLang: string;
  ogLocale: string;
  copyLang: CopyLang;
  /** Language switcher label. */
  switchLabel: string;
  switchName: string;
  /** How buyers get in touch on this market. */
  contact: "zalo" | "email";
  /** Product size system. Inch markets hide metric callout photos. */
  units: "metric" | "in";
  /** Wholesale terms are published. False for the Chinese brand front. */
  commerce: boolean;
  slugs: {
    products: string;
    cooperation?: string;
    contact: string;
  };
  pages: {
    home: string;
    products: string;
    cooperation: string | null;
    contact: string;
  };
  hero: { title: [string, string]; lead: string };
  meta: Partial<Record<PageKey, PageMeta>>;
  terms: MarketTerms | null;
  schema: {
    orgDescription: string;
    areaServed?: { name: string; code: string };
    /** Keep the existing Zalo number on markets that still publish it. */
    telephone: boolean;
    availableLanguage: string[];
  };
};

const pageKeys: PageKey[] = ["home", "products", "cooperation", "contact"];

function defineMarket(
  market: Omit<Market, "pages"> & { pages?: Market["pages"] },
): Market {
  const { prefix, slugs } = market;
  const path = (slug?: string) =>
    slug ? `${prefix}/${slug}`.replace(/\/{2,}/g, "/") : null;
  return {
    ...market,
    pages: {
      home: prefix || "/",
      products: path(slugs.products)!,
      cooperation: path(slugs.cooperation),
      contact: path(slugs.contact)!,
    },
  };
}

export const markets: Record<MarketId, Market> = {
  vi: defineMarket({
    id: "vi",
    prefix: "",
    hreflang: "vi-VN",
    htmlLang: "vi",
    ogLocale: "vi_VN",
    copyLang: "vi",
    switchLabel: "Tiếng Việt",
    switchName: "Tiếng Việt",
    contact: "zalo",
    units: "metric",
    commerce: true,
    slugs: {
      products: "san-pham",
      cooperation: "hop-tac",
      contact: "lien-he",
    },
    hero: {
      title: ["Nguyên liệu DIY từ Trung Quốc", "Giao hàng Việt Nam"],
      lead: "Yang Supply là công ty chuỗi cung ứng nguyên liệu DIY tại Trung Quốc, chuyên bán sỉ cho xưởng thủ công, cửa hàng và trường học tại Việt Nam.",
    },
    meta: {
      home: {
        title: "Nguyên liệu & phụ kiện handmade giá sỉ",
        description:
          "Nguồn sỉ nguyên liệu làm đồ thủ công và phụ kiện DIY từ xưởng Trung Quốc giao đến Việt Nam. Chuyên cung cấp cho xưởng handmade, cửa hàng và trường học.",
      },
      products: {
        title: "Phụ kiện handmade giá sỉ: cánh hoa acrylic, sticker đính đá, charm Ý",
        description:
          "Danh mục sỉ cánh hoa acrylic lily, sticker đính đá, khung bình hoa acrylic, sao biển resin và charm Ý. Xem hình ảnh mẫu thực tế và liên hệ nhận báo giá.",
      },
      cooperation: {
        title: "Cách đặt hàng sỉ nguyên liệu DIY và quy trình hợp tác",
        description:
          "Cọc 80%. Trả 20% khi nhận hàng nếu chúng tôi vận chuyển; nếu dùng đơn vị vận chuyển riêng, trả đủ trước khi bàn giao. Phí vận chuyển báo riêng.",
      },
      contact: {
        title: "Liên hệ báo giá sỉ nguyên liệu DIY qua Zalo",
        description:
          "Kênh liên hệ báo giá sỉ trực tiếp qua Zalo 0986245780. Hỗ trợ tư vấn bằng tiếng Việt, tiếng Trung và tiếng Anh.",
      },
    },
    terms: {
      serviceName: "Cung cấp sỉ nguyên liệu DIY từ Trung Quốc về Việt Nam",
      serviceDescription:
        "Báo giá theo quy cách và số lượng, đặt cọc 80%, từ Trung Quốc về Việt Nam, thanh toán 20% còn lại khi nhận hàng nếu chúng tôi vận chuyển; nếu bạn dùng đơn vị vận chuyển riêng, thanh toán đủ 20% còn lại trước khi chúng tôi bàn giao hàng cho đơn vị đó. Với đơn do chúng tôi vận chuyển, bù hàng hư hỏng khi báo kèm ảnh trong 1 ngày sau khi nhận.",
    },
    schema: {
      orgDescription:
        "Công ty chuỗi cung ứng nguyên liệu DIY tại Trung Quốc, bán sỉ cho xưởng thủ công, cửa hàng và trường học tại Việt Nam.",
      areaServed: { name: "Vietnam", code: "VN" },
      telephone: true,
      availableLanguage: ["vi", "zh", "en"],
    },
  }),
  zh: defineMarket({
    id: "zh",
    prefix: "/zh",
    hreflang: "zh-Hans",
    htmlLang: "zh-Hans",
    ogLocale: "zh_CN",
    copyLang: "zh",
    switchLabel: "中文",
    switchName: "中文",
    contact: "email",
    units: "metric",
    commerce: false,
    slugs: {
      products: "products",
      contact: "contact",
    },
    hero: {
      title: ["中国 DIY 手作材料", "发往全球"],
      lead: "Yang Supply 从中国向全球供应 DIY 手作材料，服务手作工坊、咖啡馆、门店和学校。",
    },
    meta: {
      home: {
        title: "中国 DIY 手作材料批发 · 发往全球 · YANG SUPPLY",
        description:
          "YANG SUPPLY 批发亚克力花瓣、水钻贴纸、亚克力插花花瓶框、树脂海星和意大利 Charm 手链，供应各国手作工坊、咖啡馆、门店和学校，从中国发货。",
        absolute: true,
      },
      products: {
        title: "亚克力花瓣、水钻贴纸、意大利 Charm 产品目录",
        description:
          "百合亚克力花片、多规格水钻贴纸、插花花瓶框、彩色树脂海星及意大利 Charm 样品一览。实拍图展示。",
      },
      contact: {
        title: "联系",
        description:
          "通过邮件联系 YANG SUPPLY。",
      },
    },
    terms: null,
    schema: {
      orgDescription:
        "Yang Supply 从中国向全球供应 DIY 手作材料，服务手作工坊、咖啡馆、门店和学校。",
      telephone: false,
      availableLanguage: ["zh", "en", "vi"],
    },
  }),
  "en-us": defineMarket({
    id: "en-us",
    prefix: "/en-us",
    hreflang: "en-US",
    htmlLang: "en-US",
    ogLocale: "en_US",
    copyLang: "en",
    switchLabel: "English",
    switchName: "English",
    contact: "email",
    units: "in",
    commerce: true,
    slugs: {
      products: "products",
      cooperation: "cooperation",
      contact: "contact",
    },
    hero: {
      title: ["Wholesale Italian Charms", "& Rhinestone Stickers"],
      lead: "Yang Supply is a DIY craft supply chain company based in China, selling our own product lines wholesale to US businesses.",
    },
    meta: {
      home: {
        title: "Italian Charms & Rhinestone Stickers Wholesale | Yang Supply",
        description:
          "Wholesale craft supplies from China: Italian charms, rhinestone stickers, acrylic flowers. Get a quote.",
        absolute: true,
      },
      products: {
        title: "Acrylic Petals, Rhinestone Stickers & Italian Charms",
        description:
          "Acrylic petals, rhinestone stickers, acrylic flower vase frames, resin starfish and Italian charm bracelets. Sizes are in inches. Email us for a quote.",
      },
      cooperation: {
        title: "How to Order Wholesale Craft Supplies",
        description:
          "Learn how to request a wholesale quote, arrange shipping and pay for your craft supplies order. Product and shipping costs are quoted separately.",
      },
      contact: {
        title: "Contact Yang Supply for a Wholesale Quote",
        description:
          "Email Yang Supply for wholesale inquiries from US boutiques, gift shops, charm bars, DIY workshops and retail stores.",
      },
    },
    terms: {
      serviceName:
        "Wholesale craft supplies from China to the United States",
      serviceDescription:
        "Wholesale DIY craft materials for US boutiques, gift shops, charm bars, DIY workshops and retail stores. Minimum order amount $500 per order; 100% payment before shipment by PayPal, SWIFT or USDT/USDC; product and shipping quoted separately.",
    },
    schema: {
      orgDescription:
        "Yang Supply is a China-based DIY craft supply chain company that wholesales Italian charm bracelets, acrylic flower vase frames, rhinestone stickers, acrylic petals and resin starfish to US businesses.",
      areaServed: { name: "United States", code: "US" },
      telephone: false,
      availableLanguage: ["en"],
    },
  }),
};

/** Switcher order: 中文 / Tiếng Việt / English. */
export const switcherOrder: MarketId[] = ["zh", "vi", "en-us"];

export const marketList: Market[] = (
  Object.keys(markets) as MarketId[]
).map((id) => markets[id]);

export function marketById(id: string): Market | undefined {
  if (id === "vi" || id === "zh" || id === "en-us") return markets[id];
  return undefined;
}

export function marketFromPrefixParam(param: string): Market | undefined {
  return marketList.find((market) => market.prefix === `/${param}`);
}

export function pagePath(market: Market, page: PageKey): string | null {
  return market.pages[page];
}

export function navPages(market: Market): { key: PageKey; href: string }[] {
  return pageKeys.flatMap((key) => {
    const href = market.pages[key];
    return href ? [{ key, href }] : [];
  });
}

const logicalSlug: Record<string, PageKey> = {
  "/": "home",
  "/products": "products",
  "/san-pham": "products",
  "/cooperation": "cooperation",
  "/hop-tac": "cooperation",
  "/contact": "contact",
  "/lien-he": "contact",
};

const prefixes = ["/en-us", "/zh", "/en"];

export function pageKeyFromPath(pathname: string): PageKey {
  let rest = pathname || "/";
  for (const prefix of prefixes) {
    if (rest === prefix) {
      rest = "/";
      break;
    }
    if (rest.startsWith(`${prefix}/`)) {
      rest = rest.slice(prefix.length) || "/";
      break;
    }
  }
  return logicalSlug[rest] ?? "home";
}

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
      lead: "Yang Supply là nhà cung cấp nguyên liệu DIY. Chúng tôi bán các dòng của mình cho xưởng thủ công, cửa hàng và trường học tại Việt Nam: báo giá sản phẩm, phí vận chuyển tính riêng, và chịu trách nhiệm về chất lượng.",
    },
    meta: {
      home: {
        title: "Nguyên liệu DIY, handmade giá sỉ từ Trung Quốc",
        description:
          "Nguồn sỉ nguyên liệu làm đồ thủ công và phụ kiện DIY từ xưởng Trung Quốc giao đến Việt Nam. Chuyên cung cấp cho xưởng handmade, cửa hàng và trường học.",
      },
      products: {
        title: "Cánh hoa acrylic, sticker đính đá, charm Ý giá sỉ",
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
        "Báo giá theo quy cách và số lượng, đặt cọc 80%, từ Trung Quốc về Việt Nam, thanh toán 20% còn lại khi nhận hàng nếu chúng tôi vận chuyển; nếu bạn dùng đơn vị vận chuyển riêng, thanh toán đủ 20% còn lại trước khi chúng tôi bàn giao hàng cho đơn vị đó. Bù hàng nếu bể vỡ trong vận chuyển (báo kèm ảnh trong 1 ngày sau khi nhận).",
    },
    schema: {
      orgDescription:
        "Nhà cung cấp nguyên liệu DIY từ Trung Quốc cho xưởng thủ công, cửa hàng và trường học tại Việt Nam.",
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
    contact: "zalo",
    units: "metric",
    commerce: false,
    slugs: {
      products: "products",
      contact: "contact",
    },
    hero: {
      title: ["中国 DIY 手作材料", "发往全球"],
      lead: "Yang Supply 是 DIY 手作材料批发供应商，把自有系列卖给各国的手作工坊、咖啡馆、门店和学校，从中国发货。",
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
        title: "联系 YANG SUPPLY",
        description:
          "通过 Zalo（0986245780）或邮件联系 YANG SUPPLY。",
      },
    },
    terms: null,
    schema: {
      orgDescription:
        "Yang Supply 是 DIY 手作材料批发供应商，把自有系列卖给各国的手作工坊、咖啡馆、门店和学校，从中国发货。",
      telephone: true,
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
      lead: "Yang Supply is a wholesale craft supplier of Italian charms, rhinestone stickers, acrylic flowers and resin starfish for studios, retail stores and schools in the US. We handle shipping and US customs clearance from China.",
    },
    meta: {
      home: {
        title: "Italian Charms & Rhinestone Stickers Wholesale | Yang Supply",
        description:
          "Wholesale craft supplies from China: Italian charms, rhinestone stickers, acrylic flowers. We handle shipping and US customs clearance. Get a quote.",
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
          "How to order wholesale craft supplies from China. 80% deposit, 20% balance. Seven-day quotes, shipping choices and full payment terms for US buyers.",
      },
      contact: {
        title: "Contact Yang Supply for a Wholesale Quote",
        description:
          "Email Yang Supply for wholesale inquiries. We supply studios, retail stores and schools in the US and handle shipping and US customs clearance from China.",
      },
    },
    terms: {
      serviceName:
        "Wholesale craft supplies from China to the United States",
      serviceDescription:
        "Wholesale Italian charms, rhinestone stickers, acrylic flowers and resin starfish for studios, retail stores and schools in the United States. Product price and shipping are quoted separately. Pay an 80% deposit on the order total by international SWIFT bank transfer or USDT/USDC. If we arrange shipping, the remaining 20% is paid on delivery. If you use your own freight forwarder, the remaining 20% is paid in full before we hand the goods over to that forwarder. The order total is the product price plus our shipping when we arrange shipping, and the product price only when you use your own freight forwarder. We handle US customs clearance when we arrange shipping from China.",
    },
    schema: {
      orgDescription:
        "Yang Supply is a wholesale craft supplier of Italian charms, rhinestone stickers, acrylic flowers and resin starfish for studios, retail stores and schools in the US. We handle shipping and US customs clearance from China.",
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

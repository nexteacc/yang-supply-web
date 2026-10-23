import type { Metadata } from "next";
import type { Lang } from "@/lib/content";
import { localizedPath } from "@/lib/i18n";

export const SITE_URL = "https://www.yangsupply.com";

export const pagePaths = {
  home: "",
  products: "/products",
  cooperation: "/cooperation",
  contact: "/contact",
} as const;

export type PageKey = keyof typeof pagePaths;

export const pageMeta = {
  home: {
    en: {
      title: "Wholesale DIY Craft Materials from China to Vietnam",
      description:
        "Yang Supply supplies DIY craft materials to workshops, shops and schools in Vietnam. Explore our product range and contact us for a wholesale quote.",
    },
    zh: {
      title: "中国 DIY 手作材料批发 · 越南直发源头供应商",
      description:
        "中国至越南手作材料源头批发。为越南手作工坊、零售店铺及培训机构供应优质 DIY 配件与系列材料，联系获取批量报价。",
    },
    vi: {
      title: "Nguyên liệu DIY, handmade giá sỉ từ Trung Quốc",
      description:
        "Nguồn sỉ nguyên liệu làm đồ thủ công và phụ kiện DIY từ xưởng Trung Quốc giao đến Việt Nam. Chuyên cung cấp cho xưởng handmade, cửa hàng và trường học.",
    },
  },
  products: {
    en: {
      title: "Acrylic Petals, Rhinestone Stickers & Italian Charms",
      description:
        "Explore our acrylic petals, rhinestone stickers, acrylic flower vase frames, resin starfish and Italian charm bracelets. Contact us for specifications and quotes.",
    },
    zh: {
      title: "亚克力花瓣、水钻贴纸、意大利 Charm 批发产品目录",
      description:
        "百合亚克力花片、多规格水钻贴纸、插花花瓶框、彩色树脂海星及意大利 Charm 现货样品一览。实拍图展示，按需询价发货。",
    },
    vi: {
      title: "Cánh hoa acrylic, sticker đính đá, charm Ý giá sỉ",
      description:
        "Danh mục sỉ cánh hoa acrylic lily, sticker đính đá, khung bình hoa acrylic, sao biển resin và charm Ý. Xem hình ảnh mẫu thực tế và liên hệ nhận báo giá.",
    },
  },
  cooperation: {
    en: {
      title: "How to Order Wholesale DIY Materials",
      description:
        "80% deposit. Balance: 20% on receipt with our shipping, or before handover to your freight forwarder. Shipping quoted separately. Order from Yang Supply.",
    },
    zh: {
      title: "DIY 材料跨境批发下单与合作流程",
      description:
        "DIY 材料批发下单流程：确认规格数量、报价、80% 定金。由我们运输时到货付 20% 尾款；自找货代时交货给货代前付清尾款。运费另报。",
    },
    vi: {
      title: "Cách đặt hàng sỉ nguyên liệu DIY và quy trình hợp tác",
      description:
        "Cọc 80%. Trả 20% khi nhận hàng nếu chúng tôi vận chuyển; nếu dùng đơn vị vận chuyển riêng, trả đủ trước khi bàn giao. Phí vận chuyển báo riêng.",
    },
  },
  contact: {
    en: {
      title: "Contact Yang Supply for Wholesale Quotes",
      description:
        "Contact Yang Supply on Zalo for DIY materials quotes and order enquiries. We serve Vietnam and support English, Vietnamese and Chinese enquiries.",
    },
    zh: {
      title: "联系我们获取批发报价 · Zalo 咨询",
      description:
        "直接联系销售代表获取最新批发报价。通过 Zalo（0986245780）咨询，支持中文、越南语和英语。",
    },
    vi: {
      title: "Liên hệ báo giá sỉ nguyên liệu DIY qua Zalo",
      description:
        "Kênh liên hệ báo giá sỉ trực tiếp qua Zalo 0986245780. Hỗ trợ tư vấn bằng tiếng Việt, tiếng Trung và tiếng Anh.",
    },
  },
} as const;

export function buildMetadata(lang: Lang, page: PageKey): Metadata {
  const { title, description } = pageMeta[page][lang];
  const fullTitle = `${title} · YANG SUPPLY`;
  const subPath = pagePaths[page];
  const viUrl = `${SITE_URL}${subPath || "/"}`;
  const zhUrl = `${SITE_URL}/zh${subPath}`;
  const enUrl = `${SITE_URL}/en${subPath}`;
  const currentUrl = `${SITE_URL}${localizedPath(lang, subPath || "/")}`;

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: currentUrl,
      languages: {
        "vi-VN": viUrl,
        "zh-Hans": zhUrl,
        en: enUrl,
        "x-default": viUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: currentUrl,
      siteName: "YANG SUPPLY",
      locale: { zh: "zh_CN", vi: "vi_VN", en: "en_US" }[lang],
      alternateLocale: ["zh_CN", "vi_VN", "en_US"].filter(
        (locale) => locale !== { zh: "zh_CN", vi: "vi_VN", en: "en_US" }[lang],
      ),
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
      title: fullTitle,
      description,
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

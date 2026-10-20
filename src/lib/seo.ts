import type { Metadata } from "next";
import type { Lang } from "@/lib/content";

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
    zh: {
      title: "DIY 材料跨境批发下单与合作流程",
      description:
        "跨境批发采购直销流程说明：规格数量确认、正式报价、80% 定金排产、国际物流发货、收货后付 20% 尾款。到货破损核实补发。",
    },
    vi: {
      title: "Cách đặt hàng sỉ nguyên liệu DIY và quy trình hợp tác",
      description:
        "Quy trình đặt hàng sỉ rõ ràng: tư vấn quy cách, chốt số lượng, báo giá, đặt cọc 80%, vận chuyển và thanh toán 20% khi nhận hàng. Cam kết bù hàng nếu bể vỡ.",
    },
  },
  contact: {
    zh: {
      title: "联系我们获取批发报价 · Zalo 与邮件咨询",
      description:
        "直接联系销售代表获取最新批发报价。支持 Zalo（0986245780）及专属邮箱洽谈，提供中越双语无障碍沟通。",
    },
    vi: {
      title: "Liên hệ báo giá sỉ nguyên liệu DIY qua Zalo và Email",
      description:
        "Kênh liên hệ báo giá sỉ trực tiếp qua Zalo 0986245780 hoặc email đại diện. Hỗ trợ tư vấn bằng tiếng Việt và tiếng Trung nhanh chóng.",
    },
  },
} as const;

export function buildMetadata(lang: Lang, page: PageKey): Metadata {
  const { title, description } = pageMeta[page][lang];
  const fullTitle = `${title} · YANG SUPPLY`;
  const subPath = pagePaths[page];
  const viUrl = `${SITE_URL}${subPath || "/"}`;
  const zhUrl = `${SITE_URL}/zh${subPath}`;
  const currentUrl = lang === "zh" ? zhUrl : viUrl;

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: currentUrl,
      languages: {
        "vi-VN": viUrl,
        "zh-Hans": zhUrl,
        "x-default": viUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: currentUrl,
      siteName: "YANG SUPPLY",
      locale: lang === "zh" ? "zh_CN" : "vi_VN",
      alternateLocale: lang === "zh" ? ["vi_VN"] : ["zh_CN"],
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

/** Lightweight sync script without triggering page reloads. */
export const langBoot = `(function(){try{var s=localStorage.getItem("yang-lang");var p=window.location.pathname;var isZh=p==="/zh"||p.indexOf("/zh/")===0;var lang=isZh?"zh":(s==="zh"||s==="vi"?s:"vi");document.documentElement.lang=isZh?"zh-CN":"vi";document.documentElement.dataset.lang=isZh?"zh":"vi";}catch(e){}})();`;

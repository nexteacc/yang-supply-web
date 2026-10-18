import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { Lang } from "@/lib/content";
import { blockSearchIndexing, previewRobots } from "@/lib/preview-indexing";

export async function requestLang(): Promise<Lang> {
  const jar = await cookies();
  const value = jar.get("yang-lang")?.value;
  return value === "zh" || value === "vi" ? value : "vi";
}

export const pageMeta = {
  home: {
    zh: {
      title: "中国 DIY 材料，发往越南",
      description:
        "DIY 材料供应商。自有系列从中国发往越南的手作工坊、店铺和学校。联系询价。订金 70%，货到 30%。质量由我们负责。",
    },
    vi: {
      title: "Nguyên liệu DIY từ Trung Quốc. Giao hàng Việt Nam",
      description:
        "Nhà cung cấp nguyên liệu DIY. Các dòng của chúng tôi gửi từ Trung Quốc tới xưởng thủ công, cửa hàng và trường học tại Việt Nam. Liên hệ để hỏi giá. Cọc 70%, nhận hàng 30%. Chất lượng do chúng tôi chịu trách nhiệm.",
    },
  },
  products: {
    zh: {
      title: "产品",
      description:
        "DIY 材料供应商的自有系列：亚克力花瓣、水钻贴纸、插花花瓶框、树脂海星、意大利 Charm 手链。站内不标价，联系询价。",
    },
    vi: {
      title: "Sản phẩm",
      description:
        "Dòng sản phẩm của nhà cung cấp nguyên liệu DIY: cánh hoa acrylic, sticker đính đá, khung bình hoa acrylic, sao biển resin và vòng tay charm Ý. Không niêm yết giá; liên hệ để hỏi giá.",
    },
  },
  cooperation: {
    zh: {
      title: "合作",
      description:
        "DIY 材料供应商的直销流程：询价、确认规格与数量、到手报价、订金 70%、发往越南、货到付 30%。质量由我们负责。",
    },
    vi: {
      title: "Hợp tác",
      description:
        "Quy trình bán thẳng của nhà cung cấp nguyên liệu DIY: hỏi giá, xác nhận quy cách và số lượng, báo giá trọn gói, cọc 70%, gửi về Việt Nam, thanh toán 30% khi nhận hàng. Chất lượng do chúng tôi chịu trách nhiệm.",
    },
  },
  contact: {
    zh: {
      title: "联系",
      description:
        "联系 DIY 材料供应商 Yang Supply。Zalo 0986245780。an.yangsupply@agentmail.to、minh.yangsupply@agentmail.to、linh.yangsupply@agentmail.to。中国深圳。",
    },
    vi: {
      title: "Liên hệ",
      description:
        "Liên hệ nhà cung cấp nguyên liệu DIY Yang Supply. Zalo 0986245780. an.yangsupply@agentmail.to, minh.yangsupply@agentmail.to, linh.yangsupply@agentmail.to. Thâm Quyến, Trung Quốc.",
    },
  },
} as const;

export type PageKey = keyof typeof pageMeta;

export function buildMetadata(lang: Lang, page: PageKey): Metadata {
  const { title, description } = pageMeta[page][lang];
  const fullTitle = `${title} · YANG SUPPLY`;
  return {
    // absolute: the root page shares a segment with the root layout, so title.template does not apply there.
    title: { absolute: fullTitle },
    description,
    // PREVIEW ONLY — remove with src/lib/preview-indexing.ts at official launch.
    ...(blockSearchIndexing ? { robots: previewRobots } : {}),
    openGraph: {
      title: fullTitle,
      description,
      siteName: "YANG SUPPLY",
      locale: lang === "zh" ? "zh_CN" : "vi_VN",
      alternateLocale: lang === "zh" ? ["vi_VN"] : ["zh_CN"],
      type: "website",
    },
  };
}

/** Runs before hydration so a saved Chinese preference does not paint Vietnamese. */
export const langBoot = `(function(){try{var k="yang-lang";var s=localStorage.getItem(k);var c="";var p=document.cookie?document.cookie.split("; "):[];for(var i=0;i<p.length;i++){if(p[i].indexOf(k+"=")===0)c=p[i].slice(k.length+1);}var lang=s==="zh"||s==="vi"?s:(c==="zh"||c==="vi"?c:"vi");if((s!=="zh"&&s!=="vi")&&(c==="zh"||c==="vi"))localStorage.setItem(k,c);document.documentElement.lang=lang==="zh"?"zh-CN":"vi";var server=document.documentElement.getAttribute("data-lang")||"vi";if((s==="zh"||s==="vi")&&s!==server){document.cookie=k+"="+s+";path=/;max-age=31536000;SameSite=Lax";document.documentElement.classList.add("lang-boot");location.replace(location.pathname+location.search+location.hash);}}catch(e){}})();`;

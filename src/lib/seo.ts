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
      title: "中国 DIY 手作材料批发",
      description: "DIY 材料供应商，从中国发往越南的手作工坊、店铺和学校。联系询价。",
    },
    vi: {
      title: "Nguyên liệu DIY, handmade giá sỉ từ Trung Quốc",
      description:
        "Nhà cung cấp nguyên liệu DIY từ Trung Quốc cho xưởng thủ công, cửa hàng và trường học tại Việt Nam. Liên hệ để nhận báo giá.",
    },
  },
  products: {
    zh: {
      title: "亚克力花瓣、水钻贴纸、意大利 Charm 批发",
      description: "DIY 材料供应商，从中国发往越南的手作工坊、店铺和学校。看自有系列，联系询价。",
    },
    vi: {
      title: "Cánh hoa acrylic, sticker đính đá, charm Ý giá sỉ",
      description:
        "Nhà cung cấp nguyên liệu DIY từ Trung Quốc cho xưởng thủ công, cửa hàng và trường học tại Việt Nam. Xem các dòng và liên hệ báo giá.",
    },
  },
  cooperation: {
    zh: {
      title: "DIY 材料批发下单流程",
      description: "DIY 材料供应商，从中国发往越南的手作工坊、店铺和学校。联系询价后确认规格与数量。",
    },
    vi: {
      title: "Cách đặt hàng sỉ nguyên liệu DIY",
      description:
        "Nhà cung cấp nguyên liệu DIY từ Trung Quốc cho xưởng thủ công, cửa hàng và trường học tại Việt Nam. Liên hệ để nhận báo giá trước khi đặt.",
    },
  },
  contact: {
    zh: {
      title: "DIY 材料批发询价",
      description: "DIY 材料供应商，从中国发往越南的手作工坊、店铺和学校。通过 Zalo 或邮件联系询价。",
    },
    vi: {
      title: "Liên hệ báo giá sỉ nguyên liệu DIY",
      description:
        "Nhà cung cấp nguyên liệu DIY từ Trung Quốc cho xưởng thủ công, cửa hàng và trường học tại Việt Nam. Liên hệ Zalo hoặc email để báo giá.",
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

import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { Lang } from "@/lib/content";
import { blockSearchIndexing, previewRobots } from "@/lib/preview-indexing";

export async function requestLang(): Promise<Lang> {
  const jar = await cookies();
  const value = jar.get("yang-lang")?.value;
  return value === "zh" || value === "vi" ? value : "vi";
}

export const descriptions = {
  home: {
    zh: "中国采购代理：代购、代付，并安排从中国运到越南。",
    vi: "Đại lý thu mua Trung Quốc: tìm nguồn, thanh toán hộ và giao hàng về Việt Nam.",
  },
  products: {
    zh: "亚克力花瓣、水钻贴纸、插花花瓶框、树脂海星、意大利 Charm 手链。站内不标价。",
    vi: "Cánh hoa acrylic, sticker đính đá, khung bình hoa acrylic, sao biển resin và vòng tay charm Ý. Không niêm yết giá.",
  },
  cooperation: {
    zh: "发图或链接、比价、报价、定金、交付。手续费约 5%。越南银行转账，定金 90%，货到 10%。",
    vi: "Gửi ảnh hoặc liên kết, so giá, báo giá, đặt cọc, giao hàng. Phí khoảng 5%. Chuyển khoản ngân hàng Việt Nam, cọc 90%, nhận hàng 10%.",
  },
  contact: {
    zh: "Zalo 0986245780。an.yangsupply@agentmail.to、minh.yangsupply@agentmail.to、linh.yangsupply@agentmail.to。中国深圳。",
    vi: "Zalo 0986245780. an.yangsupply@agentmail.to, minh.yangsupply@agentmail.to, linh.yangsupply@agentmail.to. Thâm Quyến, Trung Quốc.",
  },
} as const;

export function buildMetadata(
  lang: Lang,
  page: keyof typeof descriptions,
  title?: string,
): Metadata {
  const description = descriptions[page][lang];
  const ogTitle = title ? `${title} · YANG SUPPLY` : "YANG SUPPLY";
  return {
    ...(title ? { title } : {}),
    description,
    // PREVIEW ONLY — remove with src/lib/preview-indexing.ts at official launch.
    ...(blockSearchIndexing ? { robots: previewRobots } : {}),
    openGraph: {
      title: ogTitle,
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

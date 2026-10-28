export type GuideSlug =
  | "nguyen-lieu-handmade-cho-workshop"
  | "vong-tay-charm-y";

export type GuideImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Maximum rendered CSS width in px to prevent upscaling smaller catalogue assets. */
  maxCssWidth?: number;
  /** Source provenance kept for auditability. */
  sourceNote: string;
};

export type GuideMeta = {
  slug: GuideSlug;
  href: `/huong-dan/${GuideSlug}`;
  kicker: string;
  title: string;
  shortTitle: {
    vi: string;
    zh: string;
    en: string;
  };
  description: string;
  lead: string;
  datePublished: string;
  dateModified: string;
  /** Chinese summary required by PR acceptance criteria. */
  zhSummary: string;
  heroImage: GuideImage;
};

export const guides: Record<GuideSlug, GuideMeta> = {
  "nguyen-lieu-handmade-cho-workshop": {
    slug: "nguyen-lieu-handmade-cho-workshop",
    href: "/huong-dan/nguyen-lieu-handmade-cho-workshop",
    kicker: "05",
    title: "Nguyên liệu handmade cho workshop: hướng dẫn chọn và đặt sỉ",
    shortTitle: {
      vi: "Hướng dẫn nguyên liệu DIY",
      zh: "DIY 材料指南",
      en: "DIY Materials Guide",
    },
    description:
      "Cách chọn nguyên liệu DIY thực tế theo thành phẩm buổi học, công thức ước tính số lượng kèm tỷ lệ dự phòng, cách chốt màu và gửi thông tin hỏi giá sỉ từ Trung Quốc về Việt Nam.",
    lead: "Khi chuẩn bị nguyên liệu cho buổi workshop thủ công, lớp học kỹ năng hoặc quầy trải nghiệm tại cửa hàng, việc chọn đúng dòng vật liệu và tính đủ số lượng theo đầu người giúp buổi học diễn ra gọn gàng, dễ kiểm soát chi phí. Bài viết này tổng hợp cách chọn 5 dòng nguyên liệu Yang Supply đang cung cấp trực tiếp từ Trung Quốc về Việt Nam và các thông tin cần chuẩn bị trước khi hỏi giá sỉ.",
    datePublished: "2026-10-25",
    dateModified: "2026-10-25",
    zhSummary:
      "面向越南手作工坊、培训课程及门店体验活动的采购指南：1）按活动成品匹配我们实际供应的五类材料（亚克力花瓣、水钻贴纸、亚克力插花花瓶框、树脂海星、意大利 Charm 手链）；2）提供“参与人数 × 单人份用量 ×（1 + 备损比例）”的估算公式与示例表格（明确标注示例数字不等于真实用量承诺）；3）说明混款混色规则（起订量按每款每色分别计算）；4）列出询价所需五项信息（产品系列、规格颜色、数量、活动日期、收货地址）及 80/20 付款、运费另报、由我们运输的订单收货 1 天内破损拍照补发等现行条款，不承诺未经确认的交期。",
    heroImage: {
      src: "/products/canh-hoa-acrylic-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      alt: "Mẫu cánh hoa acrylic nhiều màu dùng cho thủ công và học liệu",
      caption:
        "Mẫu cánh hoa acrylic hình lily (45×40mm, 9 màu).",
      sourceNote: "public/products/canh-hoa-acrylic-nhieu-mau.jpg (existing asset)",
    },
  },
  "vong-tay-charm-y": {
    slug: "vong-tay-charm-y",
    href: "/huong-dan/vong-tay-charm-y",
    kicker: "06",
    title: "Vòng tay charm Ý: hướng dẫn chọn mẫu và đặt sỉ",
    shortTitle: {
      vi: "Hướng dẫn vòng tay charm Ý",
      zh: "Charm 手链指南",
      en: "Charm Bracelet Guide",
    },
    description:
      "Cấu tạo ngoại quan vòng tay charm Ý dạng mắt xích, đối chiếu mẫu trơn, mẫu họa tiết và mắt có mặt treo; gợi ý chọn phối màu, tham khảo mẫu Giáng Sinh và cách gửi mẫu hỏi giá sỉ.",
    lead: "Vòng tay charm Ý (Italian charm bracelet) là dòng vòng ghép từ các mắt xích chữ nhật, cho phép cửa hàng phụ kiện hoặc bàn workshop tự chọn tổ hợp màu sắc và họa tiết theo từng đợt bán. Hướng dẫn dưới đây giúp bạn phân biệt các dạng mắt charm phổ biến, tham khảo một số bố cục phối mẫu theo chủ đề và nắm rõ những thông số cần xác nhận trước khi đặt sỉ.",
    datePublished: "2026-10-25",
    dateModified: "2026-10-25",
    zhSummary:
      "面向越南饰品店主与手作工坊的意大利 Charm 选款与批发采购指南：1）拆解模块手链的外观组成，通过小图对照素链、图案手链与带吊坠模块（严格限制目录小图渲染尺寸，不宣称未经实测的跨批次通用兼容性，不包含拆装教程）；2）说明如何选择主色和图案并发送样图询价；3）设置圣诞主题选款章节，展示散件与成品实拍以及带 1–31 定位编号的选款总览图（说明编号仅用于本图询价定位，非标准 SKU 且不作库存保证）；4）列出采购前需核对的链节尺寸、连接方式、材质与单款单色起订量（配带尺子参照的单颗细节图，说明仅供直观参考，不延伸未经确认的材质等级、耐水或防过敏承诺）。",
    heroImage: {
      src: "/products/vong-tay-charm-y.jpg",
      width: 1600,
      height: 1600,
      alt: "Vòng tay charm Ý ghép hoàn chỉnh nhiều họa tiết",
      caption:
        "Mẫu vòng tay charm Ý ghép hoàn chỉnh từ các mắt xích tráng men và kim loại.",
      sourceNote: "public/products/vong-tay-charm-y.jpg (existing asset)",
    },
  },
};

export const guideList: GuideMeta[] = [
  guides["nguyen-lieu-handmade-cho-workshop"],
  guides["vong-tay-charm-y"],
];

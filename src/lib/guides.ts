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
    heroImage: {
      src: "/products/canh-hoa-acrylic-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      alt: "Mẫu cánh hoa acrylic nhiều màu dùng cho thủ công và học liệu",
      caption:
        "Mẫu cánh hoa acrylic hình lily.",
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

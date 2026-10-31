import { markets, navPages, type MarketId, type PageKey } from "@/lib/markets";

export type Lang = "zh" | "vi" | "en";

export const seriesIds = [
  "petals",
  "stickers",
  "vase",
  "starfish",
  "charm",
] as const;
export type SeriesId = (typeof seriesIds)[number];

export const contacts = {
  zalo: "0986245780",
  zaloUrl: "https://zalo.me/0986245780",
  emails: [
    "max.yangsupply@agentmail.to",
    "leo.yangsupply@agentmail.to",
    "ella.yangsupply@agentmail.to",
  ],
} as const;

export type ProductPhoto = {
  src: string;
  width: number;
  height: number;
  zh: string;
  vi: string;
  en: string;
  /** Keep a low-resolution sample at its own pixel size. */
  small?: boolean;
  /** Taller than wide; keep the full frame instead of cropping. */
  portrait?: boolean;
  label?: Record<Lang, string>;
  /**
   * Visible colour name, or a short non-colour description already in the alt.
   * Shown under the main photo and under that thumbnail. Petals, vase, and
   * starfish only — stickers and charm leave this unset.
   */
  colour?: Record<Lang, string>;
  /** This photo is one available single colour and may be selected from the list. */
  swatch?: boolean;
  /** Printed metric callouts. Hidden on inch markets. */
  metricDiagram?: boolean;
};

export const colourAvailableLabel = {
  en: "Available colors:",
  vi: "Màu có sẵn:",
  zh: "可选颜色：",
} as const;

/** In the 9-colour petal spec, with no photograph. Listed as text, not a swatch. */
export const petalYellow = { vi: "vàng", zh: "黄色", en: "yellow" } as const;

export const productImage: Record<SeriesId, ProductPhoto[]> = {
  petals: [
    {
      src: "/products/canh-hoa-acrylic-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "亚克力花瓣多色样品",
      vi: "Mẫu cánh hoa acrylic nhiều màu",
      en: "Assorted acrylic petal samples",
      colour: { vi: "Nhiều màu", zh: "多色", en: "Assorted colors" },
    },
    {
      src: "/products/kich-thuoc-canh-hoa-acrylic.jpg",
      width: 1000,
      height: 1000,
      zh: "亚克力花瓣尺寸样品",
      vi: "Mẫu kích thước cánh hoa acrylic",
      en: "Acrylic petal dimensions",
      colour: { vi: "Kích thước", zh: "尺寸", en: "Dimensions" },
      metricDiagram: true,
    },
    {
      src: "/products/canh-hoa-acrylic-hong.jpg",
      width: 1495,
      height: 1495,
      zh: "粉色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu hồng",
      en: "Pink acrylic lily petals",
      colour: { vi: "hồng", zh: "粉色", en: "pink" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-hong-anh-dao.jpg",
      width: 1600,
      height: 1600,
      zh: "樱花粉亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu hồng anh đào",
      en: "Cherry blossom pink acrylic lily petals",
      colour: { vi: "hồng anh đào", zh: "樱花粉", en: "cherry blossom pink" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-do.jpg",
      width: 1600,
      height: 1600,
      zh: "红色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu đỏ",
      en: "Red acrylic lily petals",
      colour: { vi: "đỏ", zh: "红色", en: "red" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-tim.jpg",
      width: 1600,
      height: 1600,
      zh: "紫色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu tím",
      en: "Purple acrylic lily petals",
      colour: { vi: "tím", zh: "紫色", en: "purple" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-xanh-duong.jpg",
      width: 1600,
      height: 1600,
      zh: "蓝色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu xanh dương",
      en: "Blue acrylic lily petals",
      colour: { vi: "xanh dương", zh: "蓝色", en: "blue" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-xanh-la.jpg",
      width: 1600,
      height: 1600,
      zh: "绿色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu xanh lá",
      en: "Green acrylic lily petals",
      colour: { vi: "xanh lá", zh: "绿色", en: "green" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-trong-suot.jpg",
      width: 1600,
      height: 1600,
      zh: "透明亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily trong suốt",
      en: "Clear acrylic lily petals",
      colour: { vi: "trong suốt", zh: "透明", en: "clear" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-trang.jpg",
      width: 1600,
      height: 1600,
      zh: "白色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu trắng",
      en: "White acrylic lily petals",
      colour: { vi: "trắng", zh: "白色", en: "white" },
      swatch: true,
    },
  ],
  stickers: [
    {
      src: "/products/sticker-dinh-da-co-lon.jpg",
      width: 1600,
      height: 1600,
      zh: "大张水钻贴纸，爱心、星星、花朵、圆钻多款",
      vi: "Sticker đính đá cỡ lớn nhiều hình dạng",
      en: "Large rhinestone sticker sheets in heart, star, flower and round designs",
      label: { zh: "大张", vi: "Cỡ lớn", en: "Large sheet" },
    },
    {
      src: "/products/sticker-dinh-da-co-lon-hop-qua.jpg",
      width: 800,
      height: 800,
      zh: "大张水钻贴纸，贴在礼盒上",
      vi: "Sticker đính đá cỡ lớn trên hộp quà",
      en: "Large rhinestone stickers on a gift box",
      label: { zh: "大张", vi: "Cỡ lớn", en: "Large sheet" },
    },
    {
      src: "/products/sticker-dinh-da-co-lon-trai-tim-88.jpg",
      width: 1600,
      height: 1600,
      zh: "多色爱心水钻贴纸整张，88 颗，三种尺寸",
      vi: "Tấm sticker đính đá hình trái tim nhiều màu, 88 viên, ba cỡ",
      en: "Assorted heart rhinestone sticker sheet with 88 pieces in three sizes",
      label: { zh: "大张", vi: "Cỡ lớn", en: "Large sheet" },
    },
    {
      src: "/products/sticker-dinh-da-trai-tim.jpg",
      width: 1600,
      height: 1600,
      zh: "小张水钻贴纸，彩色爱心",
      vi: "Sticker đính đá cỡ nhỏ hình trái tim nhiều màu",
      en: "Small rhinestone sticker sheet with colorful hearts",
      label: { zh: "小张", vi: "Cỡ nhỏ", en: "Small sheet" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-hoa-mai-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "小张彩色梅花水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình hoa mai nhiều màu",
      en: "Small rhinestone sticker sheet with colorful plum blossoms",
      label: { zh: "小张", vi: "Cỡ nhỏ", en: "Small sheet" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-ngoi-sao-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "小张彩色星星水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình ngôi sao nhiều màu",
      en: "Small rhinestone sticker sheet with colorful stars",
      label: { zh: "小张", vi: "Cỡ nhỏ", en: "Small sheet" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-trai-tim-hong-trang.jpg",
      width: 1600,
      height: 1600,
      zh: "小张粉白爱心水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình trái tim màu hồng và trắng",
      en: "Small rhinestone sticker sheet with pink and white hearts",
      label: { zh: "小张", vi: "Cỡ nhỏ", en: "Small sheet" },
    },
  ],
  vase: [
    {
      src: "/products/khung-binh-hoa-acrylic-trong-suot.jpg",
      width: 1307,
      height: 1307,
      zh: "透明亚克力插花花瓶框，插着粉色小菊花",
      vi: "Khung bình hoa acrylic trong suốt, cắm hoa cúc hồng",
      en: "Clear acrylic flower vase frame with pink daisies",
      colour: { vi: "trong suốt", zh: "透明", en: "clear" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-hong.jpg",
      width: 1600,
      height: 1600,
      zh: "粉色亚克力插花花瓶框",
      vi: "Khung bình hoa acrylic màu hồng",
      en: "Pink acrylic flower vase frame",
      colour: { vi: "hồng", zh: "粉色", en: "pink" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-trong-suot-2.jpg",
      width: 1600,
      height: 1600,
      zh: "透明亚克力插花花瓶框（空框）",
      vi: "Khung bình hoa acrylic trong suốt, để trống",
      en: "Empty clear acrylic flower vase frame",
      colour: { vi: "trong suốt", zh: "透明", en: "clear" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-xam.jpg",
      width: 1600,
      height: 1600,
      zh: "灰色亚克力插花花瓶框（空框）",
      vi: "Khung bình hoa acrylic màu xám, để trống",
      en: "Empty gray acrylic flower vase frame",
      colour: { vi: "xám", zh: "灰色", en: "gray" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-xanh-da-troi.jpg",
      width: 1600,
      height: 1600,
      zh: "天蓝色亚克力插花花瓶框（空框）",
      vi: "Khung bình hoa acrylic màu xanh da trời, để trống",
      en: "Empty sky blue acrylic flower vase frame",
      colour: { vi: "xanh da trời", zh: "天蓝色", en: "sky blue" },
      swatch: true,
    },
  ],
  starfish: [
    {
      src: "/products/sao-bien-resin-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "树脂海星多色样品",
      vi: "Mẫu sao biển resin nhiều màu",
      en: "Assorted resin starfish samples",
      colour: { vi: "Nhiều màu", zh: "多色", en: "Assorted colors" },
    },
    {
      src: "/products/sao-bien-resin-nhieu-mau-2.jpg",
      width: 1600,
      height: 1600,
      zh: "七只多色树脂海星",
      vi: "Bảy sao biển resin nhiều màu",
      en: "Seven resin starfish in assorted colors",
      colour: { vi: "Nhiều màu", zh: "多色", en: "Assorted colors" },
    },
    {
      src: "/products/sao-bien-resin-trang.jpg",
      width: 1220,
      height: 1220,
      zh: "白色树脂海星",
      vi: "Sao biển resin màu trắng",
      en: "White resin starfish",
      colour: { vi: "trắng", zh: "白色", en: "white" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-mau-nga.jpg",
      width: 1222,
      height: 1222,
      zh: "象牙色树脂海星",
      vi: "Sao biển resin màu ngà",
      en: "Ivory resin starfish",
      colour: { vi: "ngà", zh: "象牙色", en: "ivory" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-hong.jpg",
      width: 1285,
      height: 1285,
      zh: "粉色树脂海星",
      vi: "Sao biển resin màu hồng",
      en: "Pink resin starfish",
      colour: { vi: "hồng", zh: "粉色", en: "pink" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-tim-nhat.jpg",
      width: 1157,
      height: 1157,
      zh: "浅紫色树脂海星",
      vi: "Sao biển resin màu tím nhạt",
      en: "Light purple resin starfish",
      colour: { vi: "tím nhạt", zh: "浅紫色", en: "light purple" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-xanh-nhat.jpg",
      width: 1090,
      height: 1090,
      zh: "浅蓝色树脂海星",
      vi: "Sao biển resin màu xanh nhạt",
      en: "Light blue resin starfish",
      colour: { vi: "xanh nhạt", zh: "浅蓝色", en: "light blue" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-xanh-navy.jpg",
      width: 1177,
      height: 1177,
      zh: "深蓝色树脂海星",
      vi: "Sao biển resin màu xanh navy",
      en: "Navy blue resin starfish",
      colour: { vi: "xanh navy", zh: "深蓝色", en: "navy blue" },
      swatch: true,
    },
  ],
  charm: [
    {
      src: "/products/vong-tay-charm-y.jpg",
      width: 1600,
      height: 1600,
      zh: "意大利 Charm 手链成品",
      vi: "Vòng tay charm Ý",
      en: "Assembled Italian charm bracelet",
    },
    {
      src: "/products/charm-y-men-nhieu-hinh.jpg",
      width: 1280,
      height: 1280,
      zh: "多款图案珐琅意大利 Charm",
      vi: "Charm Ý tráng men nhiều hình",
      en: "Italian enamel charms in assorted designs",
    },
    {
      src: "/products/charm-y-trai-tim-dinh-da.jpg",
      width: 1280,
      height: 1280,
      zh: "爱心镶钻意大利 Charm",
      vi: "Charm Ý trái tim đính đá",
      en: "Heart Italian charm with gem embellishments",
    },
    {
      src: "/products/charm-y-giang-sinh.jpg",
      width: 1200,
      height: 1200,
      zh: "圣诞主题意大利 Charm",
      vi: "Charm Ý chủ đề Giáng Sinh",
      en: "Christmas Italian charms",
    },
    {
      src: "/products/vong-tay-charm-y-giang-sinh.jpg",
      width: 1200,
      height: 1200,
      zh: "圣诞主题意大利 Charm 手链",
      vi: "Vòng tay charm Ý chủ đề Giáng Sinh",
      en: "Christmas Italian charm bracelet",
    },
    {
      src: "/products/charm-y-giang-sinh-2.jpg",
      width: 1200,
      height: 1200,
      zh: "多款圣诞主题意大利 Charm",
      vi: "Charm Ý chủ đề Giáng Sinh nhiều mẫu",
      en: "Assorted Christmas Italian charms",
    },
    {
      src: "/products/vong-tay-charm-y-giang-sinh-cay-thong.jpg",
      width: 1300,
      height: 1300,
      zh: "圣诞树与圣诞袜吊坠意大利 Charm 手链成品",
      vi: "Vòng tay charm Ý Giáng Sinh phối mặt cây thông và tất",
      en: "Christmas Italian charm bracelet with tree and stocking pendants",
    },
    {
      src: "/products/charm-y-da-zircon.jpg",
      width: 1200,
      height: 1200,
      zh: "锆石意大利 Charm",
      vi: "Charm Ý đính đá zircon",
      en: "Italian charms with zircon stones",
    },
    {
      src: "/products/charm-y-da-zircon-2.jpg",
      width: 1600,
      height: 1600,
      zh: "多款锆石意大利 Charm",
      vi: "Charm Ý đính đá zircon nhiều mẫu",
      en: "Assorted Italian charms with zircon stones",
    },
  ],
};

export type SeriesSpec = { label: string; value: string };

export const series: {
  id: SeriesId;
  zh: { name: string; summary: string; detail: string; specs: SeriesSpec[] };
  vi: { name: string; summary: string; detail: string; specs: SeriesSpec[] };
  en: { name: string; summary: string; detail: string; specs: SeriesSpec[] };
}[] = [
  {
    id: "petals",
    en: {
      name: "Acrylic Petals",
      summary: "Lily-shaped petals in 9 colors.",
      detail: "Transparent petals for crafts and classes.",
      specs: [
        {
          label: "Shape",
          value: "Transparent lily petal",
        },
        {
          label: "Size",
          value: "1.8 × 1.6 in",
        },
        {
          label: "Colors",
          value:
            "9 colors: red, pink, cherry blossom pink, purple, blue, green, yellow, clear and white",
        },
        {
          label: "Supply unit",
          value: "By the pack",
        },
        {
          label: "Use",
          value: "Crafts and classes",
        },
      ],
    },
    zh: {
      name: "亚克力花瓣",
      summary: "百合花瓣形，45×40mm，9 种颜色。",
      detail: "透明花片，用于手作和课程。",
      specs: [
        { label: "造型", value: "透明百合花瓣形" },
        { label: "尺寸", value: "45×40mm" },
        {
          label: "颜色",
          value: "9 种颜色（红、粉、樱花粉、紫、蓝、绿、黄、透明、白）",
        },
        { label: "供应方式", value: "按包供应" },
        { label: "用途", value: "手作与课程" },
      ],
    },
    vi: {
      name: "Cánh hoa acrylic",
      summary: "Hình cánh hoa lily, 9 màu.",
      detail: "Cánh hoa trong, dùng cho thủ công và học liệu.",
      specs: [
        { label: "Kiểu dáng", value: "Hình cánh hoa lily trong" },
        { label: "Kích thước", value: "45×40mm" },
        {
          label: "Màu sắc",
          value:
            "9 màu (đỏ, hồng, hồng anh đào, tím, xanh dương, xanh lá, vàng, trong suốt, trắng)",
        },
        { label: "Đơn vị", value: "Bán theo gói" },
        { label: "Ứng dụng", value: "Thủ công và học liệu" },
      ],
    },
  },
  {
    id: "stickers",
    en: {
      name: "Rhinestone Stickers",
      summary: "Assorted designs, sold by the sheet.",
      detail: "Designs are subject to the samples confirmed when you email us.",
      specs: [
        {
          label: "Size",
          value: "Large sheets: 3 × 5.1 in",
        },
        {
          label: "Designs",
          value:
            "Small sheets: colorful hearts, pink-and-white hearts, colorful plum blossoms, colorful stars. Large sheets: assorted designs, subject to the samples confirmed when you email us",
        },
        {
          label: "Supply unit",
          value: "Per sheet",
        },
      ],
    },
    zh: {
      name: "水钻贴纸",
      summary: "大张 7.5×13cm。多种图案，按张供应。",
      detail: "具体图案以沟通时确认的样品为准。",
      specs: [
        { label: "规格", value: "大张 7.5 × 13 cm" },
        { label: "款式", value: "小张：彩色爱心、粉白爱心、彩色梅花、彩色星星；大张：多种图案（以沟通时确认的样品为准）" },
        { label: "供应方式", value: "按张供应" },
      ],
    },
    vi: {
      name: "Sticker đính đá",
      summary: "Nhiều họa tiết, bán theo tờ.",
      detail: "Họa tiết chốt theo mẫu khi trao đổi.",
      specs: [
        {
          label: "Quy cách",
          value: "Tờ lớn: 7,5 × 13 cm",
        },
        {
          label: "Họa tiết",
          value: "Tờ nhỏ: trái tim nhiều màu, trái tim hồng trắng, hoa mai nhiều màu, ngôi sao nhiều màu; tờ lớn: nhiều họa tiết (chốt theo mẫu khi trao đổi)",
        },
        { label: "Đơn vị", value: "Bán theo tờ" },
      ],
    },
  },
  {
    id: "vase",
    en: {
      name: "Acrylic Flower Vase Frames",
      summary: "For flower arrangements, not for photos.",
      detail:
        "Available in gray, sky blue, pink and clear. Suitable for flower arrangements and in-store displays.",
      specs: [
        {
          label: "Size",
          value: "7.1 × 5.9 in",
        },
        {
          label: "Colors",
          value: "Gray, sky blue, pink and clear",
        },
        {
          label: "Use",
          value: "Flower arrangements and in-store displays; not photo frames",
        },
      ],
    },
    zh: {
      name: "亚克力插花花瓶框",
      summary: "用来插花，不是照片相框。18×15cm。",
      detail: "颜色有灰、天蓝、粉、透明。适合花艺和店内陈列。",
      specs: [
        { label: "尺寸", value: "18×15cm" },
        { label: "颜色", value: "灰、天蓝、粉、透明" },
        { label: "用途", value: "插花与店内陈列（非照片相框）" },
      ],
    },
    vi: {
      name: "Khung bình hoa acrylic",
      summary: "Dùng để cắm hoa, không phải khung ảnh.",
      detail:
        "Màu xám, xanh da trời, hồng và trong suốt. Phù hợp cắm hoa và trưng bày.",
      specs: [
        { label: "Kích thước", value: "18×15cm" },
        { label: "Màu sắc", value: "Xám, xanh da trời, hồng, trong suốt" },
        {
          label: "Công dụng",
          value: "Cắm hoa và trưng bày (không phải khung ảnh)",
        },
      ],
    },
  },
  {
    id: "starfish",
    en: {
      name: "Resin Starfish",
      summary: "Decorative pieces with no holes.",
      detail: "Available in assorted colors.",
      specs: [
        {
          label: "Size",
          value: "Large: 2 in; small: 1 in. No holes.",
        },
        {
          label: "Colors",
          value: "Pink, ivory, light purple, white, light blue and navy blue",
        },
        {
          label: "Use",
          value: "Decoration and display",
        },
      ],
    },
    zh: {
      name: "树脂海星",
      summary: "摆件。大号 5cm，小号 2.6cm，无孔。",
      detail: "多色。",
      specs: [
        { label: "尺寸", value: "大号 5cm，小号 2.6cm（无孔）" },
        { label: "颜色", value: "多色（粉、象牙白、浅紫、白、浅蓝、深蓝）" },
        { label: "用途", value: "摆件与陈列" },
      ],
    },
    vi: {
      name: "Sao biển resin",
      summary: "Đồ trưng bày, không lỗ.",
      detail: "Nhiều màu.",
      specs: [
        { label: "Kích thước", value: "Cỡ lớn 5cm, cỡ nhỏ 2,6cm (không lỗ)" },
        {
          label: "Màu sắc",
          value:
            "Nhiều màu (hồng, màu ngà, tím nhạt, trắng, xanh nhạt, xanh navy)",
        },
        { label: "Công dụng", value: "Đồ trưng bày" },
      ],
    },
  },
  {
    id: "charm",
    en: {
      name: "Italian Charm Bracelets",
      summary: "Modular bracelets assembled from the designs you pick.",
      detail:
        "Selected samples shown. Email your preferred designs for a quote.",
      specs: [
        {
          label: "Type",
          value:
            "Modular bracelets and charms: enamel, zircon and Christmas designs",
        },
        {
          label: "Link width",
          value: "9 mm",
        },
        {
          label: "Quotation",
          value:
            "By selected design",
        },
      ],
    },
    zh: {
      name: "意大利 Charm 手链",
      summary: "模块化手链，有珐琅、锆石和圣诞主题。",
      detail: "本站展示样品，不列完整款式目录。",
      specs: [
        { label: "类型", value: "模块化手链与配件（珐琅、锆石、圣诞主题）" },
        { label: "链节宽度", value: "9mm" },
      ],
    },
    vi: {
      name: "Vòng tay charm Ý",
      summary: "Vòng charm Ý ghép theo mẫu.",
      detail:
        "Hình ảnh chỉ giới thiệu một số mẫu. Gửi mẫu bạn chọn để nhận báo giá.",
      specs: [
        {
          label: "Loại",
          value:
            "Vòng charm Ý ghép theo mẫu (tráng men, đính đá zircon, Giáng Sinh)",
        },
        {
          label: "Chiều rộng mắt",
          value: "9mm",
        },
        {
          label: "Báo giá",
          value: "Theo mẫu bạn chọn",
        },
      ],
    },
  },
];

export type Copy = {
  skip: string;
  menu: string;
  close: string;
  zaloAdd: string;
  emailCta: string;
  inquiry: string;
  nav: { href: string; label: string }[];
  home: {
    title: [string, string];
    lead: string;
    seeProcess: string;
    seeProducts: string;
    noteCaption: string;
    rows: { label: string; value: string; note?: boolean }[];
    valuesTitle: string;
    values: { title: string; body: string }[];
    audienceTitle: string;
    audienceBody: string;
    audience: string[];
    seriesTitle: string;
    seriesLead: string;
    processTitle: string;
    processLead: string;
    steps: string[];
    ctaTitle: string;
    ctaBody: string;
  };
  products: { kicker: string; title: string; lead: string };
  cooperation: {
    kicker: string;
    title: string;
    lead: string;
    steps: { title: string; body: string }[];
    qualityTitle: string;
    qualityFigure: string;
    qualityBody: string;
    notesTitle: string;
    notes: string[];
    /** Heading + paragraph blocks rendered after quotation terms. */
    blocksAfterNotes: { title: string; body: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    zaloRole: string;
    emailRole: string;
    addressLabel: string;
    address: string;
  };
  footer: { line: string; address: string };
  notFound: { title: string; body: string; back: string };
  error: { title: string; body: string; retry: string };
};

function links(
  id: MarketId,
  labels: Record<PageKey, string>,
): { href: string; label: string }[] {
  return navPages(markets[id]).map(({ key, href }) => ({
    href,
    label: labels[key],
  }));
}

export const dictionary: Record<Lang, Copy> = {
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    zaloAdd: "Email us",
    emailCta: "Email us",
    inquiry: "Request a quote",
    nav: links("en-us", {
      home: "Home",
      products: "Products",
      cooperation: "Ordering",
      contact: "Contact",
    }),
    home: {
      title: markets["en-us"].hero.title,
      lead: markets["en-us"].hero.lead,
      seeProcess: "How to Order",
      seeProducts: "View Products",
      noteCaption: "",
      rows: [
        { label: "Minimum per order", value: "$500" },
        { label: "Paid before shipment", value: "100%" },
        { label: "Designs and colors in one order", value: "Mix & match" },
        { label: "From — to", value: "China → United States" },
      ],
      valuesTitle: "",
      values: [],
      audienceTitle: "Who We Supply",
      audienceBody:
        "Boutiques, gift shops, concept stores, online shops, charm bars, DIY workshops, cafés and retail stores in the US.",
      audience: ["Boutiques & gift shops", "Charm bars", "DIY workshops"],
      seriesTitle: "Our Product Range",
      seriesLead: "Five product lines from our range.",
      processTitle: "",
      processLead: "",
      steps: [],
      ctaTitle: "Request a Quote",
      ctaBody:
        "Send us your product specifications and quantities for a quote.",
    },
    products: {
      kicker: "02",
      title: "Products",
      lead: "Five product lines. Dimensions are in inches.",
    },
    cooperation: {
      kicker: "03",
      title: "Ordering",
      lead: "Send your specifications and quantities for a quote. Product and shipping costs are listed separately.",
      steps: [
        { title: "Confirm quote", body: "" },
        { title: "Pay in full", body: "" },
        { title: "Prepare & pack", body: "" },
        { title: "Ship", body: "" },
      ],
      qualityTitle: "Quality",
      qualityFigure: "Our Responsibility",
      qualityBody:
        "We take responsibility for product supply and quality, supported by our long-term factory partners.",
      notesTitle: "Quotation terms",
      notes: [
        "The minimum order amount is $500 per order.",
        "You can mix designs and colors.",
        "Samples are available at your cost.",
        "Quotes are valid for 7 days.",
      ],
      blocksAfterNotes: [
        {
          title: "Payment",
          body: "Pay 100% of the order total before we ship. We accept PayPal, SWIFT bank transfer and USDT/USDC.",
        },
        {
          title: "Lead time",
          body: "Small orders ship in about 3 business days; large or custom orders take about 14 days. Transit time is extra, and shipping time and cost depend on how fast you need the goods.",
        },
      ],
    },
    contact: {
      kicker: "04",
      title: "Contact",
      lead: "Email us for product inquiries and quotes.",
      zaloRole: "Email",
      emailRole: "Email",
      addressLabel: "Ships from",
      address: "China",
    },
    footer: {
      line: "DIY craft supply chain company, shipping from China.",
      address: "",
    },
    notFound: {
      title: "Page Not Found",
      body: "Return to the home page to explore our products or learn how to order.",
      back: "Back to Home",
    },
    error: {
      title: "Page Could Not Load",
      body: "Please try again.",
      retry: "Try Again",
    },
  },
  zh: {
    skip: "跳到内容",
    menu: "菜单",
    close: "关闭",
    zaloAdd: "添加 Zalo",
    emailCta: "发邮件",
    inquiry: "联系",
    nav: links("zh", {
      home: "首页",
      products: "产品",
      cooperation: "合作",
      contact: "联系",
    }),
    home: {
      title: markets.zh.hero.title,
      lead: markets.zh.hero.lead,
      seeProcess: "",
      seeProducts: "查看产品",
      noteCaption: "",
      rows: [
        { label: "发货", value: "中国，发往全球" },
        { label: "角色", value: "DIY 手作材料供应链公司" },
      ],
      valuesTitle: "产品",
      values: [
        {
          title: "自有系列",
          body: "亚克力花瓣、水钻贴纸、亚克力插花花瓶框、树脂海星和意大利 Charm 手链。",
        },
      ],
      audienceTitle: "服务对象",
      audienceBody: "各国的手作工坊、咖啡馆、门店和学校。",
      audience: ["手作工坊", "咖啡馆", "门店", "学校"],
      seriesTitle: "产品一览",
      seriesLead: "五类自有产品。",
      processTitle: "",
      processLead: "",
      steps: [],
      ctaTitle: "联系",
      ctaBody: "可通过邮件联系。",
    },
    products: {
      kicker: "02",
      title: "产品",
      lead: "五类自有产品。",
    },
    cooperation: {
      kicker: "",
      title: "",
      lead: "",
      steps: [],
      qualityTitle: "",
      qualityFigure: "",
      qualityBody: "",
      notesTitle: "",
      notes: [],
      blocksAfterNotes: [],
    },
    contact: {
      kicker: "04",
      title: "联系",
      lead: "可通过邮件联系。",
      zaloRole: "Zalo",
      emailRole: "销售邮件",
      addressLabel: "发货地",
      address: "中国",
    },
    footer: {
      line: "一家 DIY 手作材料供应链公司，从中国发货。",
      address: "",
    },
    notFound: {
      title: "没有这一页",
      body: "回到首页继续看产品或联系方式。",
      back: "回首页",
    },
    error: {
      title: "页面没有载入",
      body: "请再试一次。",
      retry: "重试",
    },
  },
  vi: {
    skip: "Tới nội dung",
    menu: "Menu",
    close: "Đóng",
    zaloAdd: "Thêm Zalo",
    emailCta: "Email",
    inquiry: "Liên hệ để hỏi giá",
    nav: links("vi", {
      home: "Trang chủ",
      products: "Sản phẩm",
      cooperation: "Hợp tác",
      contact: "Liên hệ",
    }),
    home: {
      title: markets.vi.hero.title,
      lead: markets.vi.hero.lead,
      seeProcess: "Quy trình hợp tác",
      seeProducts: "Xem sản phẩm",
      noteCaption: "",
      rows: [
        { label: "Vai trò", value: "Chuỗi cung ứng nguyên liệu handmade" },
        { label: "Chất lượng", value: "Chúng tôi chịu trách nhiệm" },
        { label: "Cọc / thanh toán còn lại", value: "80 / 20" },
        { label: "Trong cùng một đơn", value: "Trộn mẫu & màu" },
      ],
      valuesTitle: "Dịch vụ của chúng tôi",
      values: [
        {
          title: "Chọn hàng và cung cấp",
          body: "Cung cấp nguyên liệu theo quy cách và số lượng bạn cần.",
        },
        {
          title: "Báo giá và vận chuyển",
          body: "Cách báo giá và các lựa chọn vận chuyển có ở [trang Hợp tác](/hop-tac).",
        },
      ],
      audienceTitle: "Khách hàng",
      audienceBody:
        "Dành cho xưởng thủ công, cửa hàng và trường học tại Việt Nam.",
      audience: ["Xưởng DIY", "Cửa hàng", "Trường học"],
      seriesTitle: "Sản phẩm",
      seriesLead: "Năm dòng sản phẩm của chúng tôi.",
      processTitle: "",
      processLead: "",
      steps: [],
      ctaTitle: "Gửi quy cách và số lượng qua Zalo",
      ctaBody: "Liên hệ để nhận báo giá hoặc theo dõi đơn hàng.",
    },
    products: {
      kicker: "02",
      title: "Sản phẩm",
      lead: "Năm dòng sản phẩm.",
    },
    cooperation: {
      kicker: "03",
      title: "Hợp tác",
      lead: "Gửi quy cách và số lượng để nhận báo giá. Tiền hàng và phí vận chuyển được báo riêng.",
      steps: [
        {
          title: "Hỏi giá",
          body: "Cho chúng tôi biết dòng hàng và quy cách bạn cần.",
        },
        {
          title: "Xác nhận quy cách và số lượng",
          body: "Màu, kích thước và số lượng chốt khi trao đổi.",
        },
        {
          title: "Báo giá",
          body: "Báo giá ghi riêng tiền hàng và phí vận chuyển.",
        },
        {
          title: "Đặt hàng (cọc 80%)",
          body: "Sau khi xác nhận đơn, đặt cọc 80% bằng chuyển khoản ngân hàng tại Việt Nam. Tổng giá trị gồm tiền hàng và phí vận chuyển nếu chúng tôi vận chuyển; chỉ gồm tiền hàng nếu bạn dùng đơn vị vận chuyển riêng.",
        },
        {
          title: "Vận chuyển",
          body: "Bạn có thể dùng đơn vị vận chuyển của mình, hoặc để chúng tôi sắp xếp vận chuyển từ Trung Quốc về Việt Nam. Nếu chúng tôi vận chuyển, phí vận chuyển đã gồm thủ tục hải quan và thuế nhập khẩu. Nếu bạn dùng đơn vị vận chuyển riêng, chúng tôi giao hàng cho đơn vị đó là hoàn tất. Thời gian vận chuyển về Việt Nam (đã gồm khoảng 3 ngày làm việc trong nội địa Trung Quốc, chưa gồm thời gian sản xuất): chuyển phát nhanh 4–5 ngày làm việc, tiêu chuẩn 6–7 ngày làm việc, tiết kiệm 9–10 ngày làm việc.",
        },
        {
          title: "Thanh toán 20% còn lại",
          body: "Nếu chúng tôi vận chuyển, thanh toán 20% còn lại khi nhận hàng. Nếu bạn dùng đơn vị vận chuyển riêng, thanh toán đủ 20% còn lại trước khi chúng tôi bàn giao hàng cho đơn vị đó.",
        },
      ],
      qualityTitle: "Chất lượng",
      qualityFigure: "Chúng tôi chịu trách nhiệm",
      qualityBody:
        "Chúng tôi chịu trách nhiệm về nguồn hàng và chất lượng sản phẩm từ các nhà máy đối tác lâu năm.",
      notesTitle: "Lưu ý khi báo giá",
      notes: [
        "Báo giá có hiệu lực 7 ngày.",
        "Có thể trộn màu, trộn mẫu.",
        "Hàng mẫu có tính phí, tùy sản phẩm và từng trường hợp; chúng tôi báo số tiền trước khi gửi mẫu.",
        "Với đơn do chúng tôi vận chuyển: trong vòng 1 ngày sau khi nhận hàng, nếu hàng hư hãy chụp ảnh gửi lại, chúng tôi sẽ gửi bù (không hoàn tiền).",
      ],
      blocksAfterNotes: [],
    },
    contact: {
      kicker: "04",
      title: "Liên hệ",
      lead: "Liên hệ qua Zalo để hỏi giá, đặt hàng hoặc theo dõi đơn hàng.",
      zaloRole: "Zalo",
      emailRole: "Email bán hàng",
      addressLabel: "Gửi hàng từ",
      address: "Trung Quốc",
    },
    footer: {
      line: "Công ty chuỗi cung ứng nguyên liệu DIY.",
      address: "Trung Quốc",
    },
    notFound: {
      title: "Không có trang này",
      body: "Quay về trang chủ để xem sản phẩm hoặc cách hợp tác.",
      back: "Về trang chủ",
    },
    error: {
      title: "Trang chưa tải được",
      body: "Hãy thử lại.",
      retry: "Thử lại",
    },
  },
};

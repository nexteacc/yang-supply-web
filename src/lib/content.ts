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
    "an.yangsupply@agentmail.to",
    "minh.yangsupply@agentmail.to",
    "linh.yangsupply@agentmail.to",
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
};

export const colourAvailableLabel = {
  en: "Available colours:",
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
      colour: { vi: "Nhiều màu", zh: "多色", en: "Assorted colours" },
    },
    {
      src: "/products/kich-thuoc-canh-hoa-acrylic.jpg",
      width: 1000,
      height: 1000,
      zh: "亚克力花瓣尺寸样品",
      vi: "Mẫu kích thước cánh hoa acrylic",
      en: "Acrylic petal dimensions",
      colour: { vi: "Kích thước", zh: "尺寸", en: "Dimensions" },
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
      vi: "Sticker đính đá cỡ nhỏ hình tim màu",
      en: "Small rhinestone sticker sheet with colourful hearts",
      label: { zh: "小张", vi: "Cỡ nhỏ", en: "Small sheet" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-hoa-mai-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "小张彩色梅花圆钻水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình hoa mai và hạt tròn nhiều màu",
      en: "Small rhinestone sticker sheet with colourful plum blossoms and round gems",
      label: { zh: "小张", vi: "Cỡ nhỏ", en: "Small sheet" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-ngoi-sao-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "小张彩色星星圆钻水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình ngôi sao và hạt tròn nhiều màu",
      en: "Small rhinestone sticker sheet with colourful stars and round gems",
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
      en: "Empty grey acrylic flower vase frame",
      colour: { vi: "xám", zh: "灰色", en: "grey" },
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
      colour: { vi: "Nhiều màu", zh: "多色", en: "Assorted colours" },
    },
    {
      src: "/products/sao-bien-resin-nhieu-mau-2.jpg",
      width: 1600,
      height: 1600,
      zh: "七只多色树脂海星",
      vi: "Bảy sao biển resin nhiều màu",
      en: "Seven resin starfish in assorted colours",
      colour: { vi: "Nhiều màu", zh: "多色", en: "Assorted colours" },
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
      summary: "Lily-shaped petals, 45 × 40 mm, in 9 colours.",
      detail: "Transparent petals for crafts and classes.",
      specs: [
        {
          label: "Shape",
          value: "Transparent lily petal",
        },
        {
          label: "Size",
          value: "45 × 40 mm",
        },
        {
          label: "Colours",
          value:
            "9 colours: red, pink, cherry blossom pink, purple, blue, green, yellow, clear and white",
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
        { label: "用途", value: "手作与课程" },
      ],
    },
    vi: {
      name: "Cánh hoa acrylic",
      summary: "Hình cánh hoa lily, 45×40mm, 9 màu.",
      detail: "Cánh hoa trong, dùng cho thủ công và học liệu.",
      specs: [
        { label: "Kiểu dáng", value: "Hình cánh hoa lily trong" },
        { label: "Kích thước", value: "45×40mm" },
        {
          label: "Màu sắc",
          value:
            "9 màu (đỏ, hồng, hồng anh đào, tím, xanh dương, xanh lá, vàng, trong suốt, trắng)",
        },
        { label: "Ứng dụng", value: "Thủ công và học liệu" },
      ],
    },
  },
  {
    id: "stickers",
    en: {
      name: "Rhinestone Stickers",
      summary:
        "Large sheets: 7.5 × 13 cm. Small-sheet dimensions are not listed. Assorted designs, supplied by the sheet.",
      detail: "Designs are subject to the samples confirmed when you enquire.",
      specs: [
        {
          label: "Size",
          value:
            "Large sheets: 7.5 × 13 cm; small-sheet dimensions are not listed",
        },
        {
          label: "Designs",
          value:
            "Assorted designs, subject to the samples confirmed when you enquire",
        },
        {
          label: "Supply unit",
          value: "Per sheet",
        },
      ],
    },
    zh: {
      name: "水钻贴纸",
      summary: "大张 7.5×13cm，小张不标尺寸。多种图案，按张供应。",
      detail: "具体图案以沟通时确认的样品为准。",
      specs: [
        { label: "规格", value: "大张 7.5×13cm；小张不标尺寸" },
        { label: "款式", value: "多种图案（以沟通时确认的样品为准）" },
        { label: "供应方式", value: "按张供应" },
      ],
    },
    vi: {
      name: "Sticker đính đá",
      summary:
        "Tờ lớn 7,5×13cm; tờ nhỏ không ghi kích thước. Nhiều họa tiết, bán theo tờ.",
      detail: "Họa tiết chốt theo mẫu khi trao đổi.",
      specs: [
        {
          label: "Quy cách",
          value: "Tờ lớn 7,5×13cm; tờ nhỏ không ghi kích thước",
        },
        {
          label: "Họa tiết",
          value: "Nhiều họa tiết (chốt theo mẫu khi trao đổi)",
        },
        { label: "Đơn vị", value: "Bán theo tờ" },
      ],
    },
  },
  {
    id: "vase",
    en: {
      name: "Acrylic Flower Vase Frames",
      summary: "For flower arrangements. 18 × 15 cm.",
      detail:
        "Available in grey, sky blue, pink and clear. Suitable for flower arrangements and in-store displays.",
      specs: [
        {
          label: "Size",
          value: "18 × 15 cm",
        },
        {
          label: "Colours",
          value: "Grey, sky blue, pink and clear",
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
      summary: "Dùng để cắm hoa, không phải khung ảnh. 18×15cm.",
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
      summary: "Decorative pieces with no holes. Large: 5 cm; small: 2.6 cm.",
      detail: "Available in assorted colours.",
      specs: [
        {
          label: "Size",
          value: "Large: 5 cm; small: 2.6 cm. No holes.",
        },
        {
          label: "Colours",
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
      summary: "Đồ trưng bày. Cỡ lớn 5cm, cỡ nhỏ 2,6cm, không lỗ.",
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
      summary:
        "Modular bracelets, quoted individually according to your selected designs.",
      detail:
        "A full design catalogue is not listed on this website. Send the designs you would like for a quote.",
      specs: [
        {
          label: "Type",
          value:
            "Modular bracelets and charms: enamel, zircon and Christmas designs",
        },
        {
          label: "Quotation",
          value:
            "Quoted individually by selected design; send your preferred designs to enquire",
        },
      ],
    },
    zh: {
      name: "意大利 Charm 手链",
      summary: "模块化手链，按所选款式单独报价。",
      detail: "本站不列款式目录。把想要的图案发来即可询价。",
      specs: [
        { label: "类型", value: "模块化手链与配件（珐琅、锆石、圣诞主题）" },
        { label: "报价方式", value: "按所选款式单独报价（发图案询价）" },
      ],
    },
    vi: {
      name: "Vòng tay charm Ý",
      summary: "Vòng charm Ý ghép theo mẫu, báo giá theo mẫu bạn chọn.",
      detail:
        "Website không đăng bảng danh mục. Gửi họa tiết bạn muốn để hỏi giá.",
      specs: [
        {
          label: "Loại",
          value:
            "Vòng charm Ý ghép theo mẫu (tráng men, đính đá zircon, Giáng Sinh)",
        },
        {
          label: "Báo giá",
          value: "Báo giá riêng theo mẫu chọn (gửi họa tiết để hỏi giá)",
        },
      ],
    },
  },
];

export type Copy = {
  skip: string;
  menu: string;
  close: string;
  copied: string;
  copy: string;
  zaloAdd: string;
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
    payTitle: string;
    payFigure: string;
    payBody: string;
    notesTitle: string;
    notes: string[];
    faqTitle: string;
    faq: { q: string; a: string }[];
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

export const dictionary: Record<Lang, Copy> = {
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    zaloAdd: "Add on Zalo",
    inquiry: "Get a Quote",
    nav: [
      { href: "/en", label: "Home" },
      { href: "/en/products", label: "Products" },
      { href: "/en/cooperation", label: "Ordering" },
      { href: "/en/contact", label: "Contact" },
    ],
    home: {
      title: ["DIY Materials from China", "Delivered to Vietnam"],
      lead: "Yang Supply is a DIY materials supplier. We sell our product range to craft workshops, shops and schools in Vietnam. We quote product unit prices with shipping charged separately, and take responsibility for product quality.",
      seeProcess: "How to Order",
      seeProducts: "View Products",
      noteCaption: "Quoted per order. Contact us for a quote.",
      rows: [
        { label: "From — to", value: "China → Vietnam" },
        { label: "Our role", value: "DIY materials supplier" },
        { label: "Deposit / on receipt", value: "80 / 20", note: true },
        { label: "Product quality", value: "Our responsibility" },
      ],
      valuesTitle: "What We Provide",
      values: [
        {
          title: "Product supply",
          body: "We supply the product lines, specifications and quantities you need.",
        },
        {
          title: "Quotes and shipping",
          body: "We quote product unit prices with shipping charged separately. You can use your own freight forwarder, or we can arrange shipping from China to Vietnam.",
        },
        {
          title: "Quality commitment",
          body: "We take responsibility for product quality. Our long-term factory partners support our supply and quality.",
        },
      ],
      audienceTitle: "Who We Supply",
      audienceBody: "We supply craft workshops, shops and schools in Vietnam.",
      audience: ["Craft workshops", "Shops", "Schools"],
      seriesTitle: "Our Product Range",
      seriesLead: "Five product lines from our range.",
      processTitle: "Ordering",
      processLead:
        "Once specifications and quantities are confirmed, we quote product unit prices. You can then decide whether to place an order.",
      steps: [
        "Enquire",
        "Confirm specifications and quantities",
        "Receive a quote",
        "Place your order with an 80% deposit",
        "Shipping",
        "Pay the remaining 20%",
      ],
      ctaTitle: "Send Your Specifications and Quantities on Zalo",
      ctaBody: "Use this number for enquiries, quotes and order updates.",
    },
    products: {
      kicker: "02",
      title: "Products",
      lead: "Five product lines from our range. Prices are not listed on this website. Contact us for a quote.",
    },
    cooperation: {
      kicker: "03",
      title: "Ordering",
      lead: "We sell our product range directly. Once specifications and quantities are confirmed, we quote product unit prices with shipping charged separately. We take responsibility for product quality.",
      steps: [
        {
          title: "Enquire",
          body: "Tell us which product line and specifications you need.",
        },
        {
          title: "Confirm Specifications and Quantities",
          body: "Colours, sizes and quantities are confirmed when we discuss your order.",
        },
        {
          title: "Receive a Quote",
          body: "We quote product unit prices with shipping charged separately. Prices are not listed on this website.",
        },
        {
          title: "Place Your Order",
          body: "Once confirmed, pay by local bank transfer in Vietnam. An 80% deposit of the order total is required, with the remaining 20% payable on receipt if we arrange shipping, or before handover to your freight forwarder if you arrange shipping.",
        },
        {
          title: "Shipping",
          body: "You can use your own freight forwarder, or we can arrange shipping from China to Vietnam. When we arrange shipping, the shipping charge includes customs clearance and import duties. If you use your own freight forwarder, our delivery obligation is fulfilled when we hand the goods over to your forwarder.",
        },
        {
          title: "Pay the Balance",
          body: "If we arrange shipping, pay the remaining 20% on receipt of the goods. If you use your own freight forwarder, pay the remaining 20% before we hand the goods over to your forwarder.",
        },
      ],
      qualityTitle: "Quality",
      qualityFigure: "Our Responsibility",
      qualityBody:
        "We take responsibility for product supply and quality, supported by our long-term factory partners.",
      payTitle: "Payment",
      payFigure: "80 / 20",
      payBody:
        "Pay by local bank transfer in Vietnam: 80% of the order total as a deposit. Pay the remaining 20% on receipt if we arrange shipping, or before handover to your freight forwarder if you arrange shipping. If we arrange shipping, the order total includes the goods and shipping charges. If you use your own freight forwarder, it covers the goods only.",
      notesTitle: "Quotation Terms",
      notes: [
        "Quotes are valid for 7 days.",
        "You can mix colours and designs. Minimum order quantities apply separately to each design and each colour.",
        "Samples are charged at the unit price in the relevant quote.",
        "For orders shipped by us, report any damage with photos within one day of receiving the goods. Damaged products will be replaced, not refunded.",
      ],
      faqTitle: "FAQs",
      faq: [
        {
          q: "Does shipping include customs clearance and import duties?",
          a: "Yes. When we arrange shipping, the shipping charge includes customs clearance and import duties.",
        },
        {
          q: "Can I use my own freight forwarder?",
          a: "Yes. Our delivery obligation is fulfilled when we hand the goods over to your freight forwarder.",
        },
        {
          q: "How much is the deposit?",
          a: "80% of the order total, with the remaining 20% payable on receipt if we arrange shipping, or before handover to your freight forwarder if you arrange shipping. If we arrange shipping, the order total includes the goods and shipping charges. If you use your own freight forwarder, it covers the goods only.",
        },
      ],
    },
    contact: {
      kicker: "04",
      title: "Contact",
      lead: "Add us on Zalo for enquiries, quotes and order updates. You can contact us in English.",
      zaloRole: "Zalo",
      emailRole: "Sales Email",
      addressLabel: "Location",
      address: "Shenzhen, China",
    },
    footer: { line: "DIY materials supplier.", address: "Shenzhen, China" },
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
    copied: "已复制",
    copy: "复制",
    zaloAdd: "添加 Zalo",
    inquiry: "联系询价",
    nav: [
      { href: "/zh", label: "首页" },
      { href: "/zh/products", label: "产品" },
      { href: "/zh/cooperation", label: "合作" },
      { href: "/zh/contact", label: "联系" },
    ],
    home: {
      title: ["中国 DIY 材料", "发往越南"],
      lead: "Yang Supply 是 DIY 材料供应商。我们把自有系列卖给越南的手作工坊、店铺和学校：报产品单价，运费另计，质量由我们负责。",
      seeProcess: "合作流程",
      seeProducts: "看产品",
      noteCaption: "按单报价，联系询价。",
      rows: [
        { label: "出发 — 送达", value: "中国 → 越南" },
        { label: "角色", value: "DIY 材料供应商" },
        { label: "定金 / 货到", value: "80 / 20", note: true },
        { label: "质量", value: "我们负责" },
      ],
      valuesTitle: "三件事",
      values: [
        { title: "选品供货", body: "按您要的系列、规格和数量供货。" },
        {
          title: "报价与运输",
          body: "报产品单价，运费另计。可以用您自己的货代，也可以由我们安排从中国运到越南。",
        },
        {
          title: "质量约定",
          body: "质量由我们负责。长期合作的工厂支撑供货和品质。",
        },
      ],
      audienceTitle: "给谁供货",
      audienceBody: "面向越南的手作工坊、店铺和学校。",
      audience: ["手作工坊", "店铺", "学校"],
      seriesTitle: "产品一览",
      seriesLead: "五组自有系列。",
      processTitle: "合作步骤",
      processLead: "确认规格和数量后，报产品单价，再决定是否下单。",
      steps: [
        "询价",
        "确认规格与数量",
        "报价",
        "下单（定金 80%）",
        "运输",
        "支付 20% 尾款",
      ],
      ctaTitle: "把规格和数量发到 Zalo",
      ctaBody: "询价、报价和跟单，加这一个号。",
    },
    products: {
      kicker: "02",
      title: "产品",
      lead: "五组自有系列。价格不在站内公布，联系询价。",
    },
    cooperation: {
      kicker: "03",
      title: "合作",
      lead: "直销自有系列。确认规格和数量后报产品单价，运费另计。质量由我们负责。",
      steps: [
        {
          title: "询价",
          body: "告诉我们要哪一系列、什么规格。",
        },
        {
          title: "确认规格与数量",
          body: "颜色、尺寸和数量以沟通时确认为准。",
        },
        {
          title: "报价",
          body: "报产品单价，运费另计。网站不标价。",
        },
        {
          title: "下单（定金 80%）",
          body: "确认后，用越南当地银行转账。定金为订单总额的 80%。由我们安排运输时，到货付清剩余 20%；使用您自己的货代时，交货给您的货代前付清剩余 20%。",
        },
        {
          title: "运输",
          body: "可以用您自己的货代，也可以由我们安排从中国运到越南。由我们安排运输时，运费已含清关和关税。使用您自己的货代时，我们把货交给您的货代即完成交付。",
        },
        {
          title: "支付 20% 尾款",
          body: "由我们安排运输时，到货付清剩余 20%；使用您自己的货代时，交货给您的货代前付清剩余 20%。",
        },
      ],
      qualityTitle: "质量",
      qualityFigure: "我们负责",
      qualityBody: "供货和品质由我们负责。长期合作的工厂支撑供应和品质。",
      payTitle: "付款",
      payFigure: "80 / 20",
      payBody:
        "越南当地银行转账。定金为订单总额的 80%。由我们安排运输时，到货付清剩余 20%；使用您自己的货代时，交货给您的货代前付清剩余 20%。由我们运输时总额含货价和运费，自找货代时只算货价。",
      notesTitle: "报价时一并说明",
      notes: [
        "报价有效期 7 天。",
        "可以混色、混款。起订量按每一款、每一色分别计算。",
        "样品收费，按当次报价的单价。",
        "由我们运输的订单，收货后1天内拍照反馈，破损产品补发，不退款。",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          q: "运费含清关和关税吗？",
          a: "含。由我们安排运输时，运费已含清关和关税。",
        },
        {
          q: "可以用自己的货代吗？",
          a: "可以。我们把货交给您的货代即完成交付。",
        },
        {
          q: "定金是多少？",
          a: "订单总额的 80%。由我们安排运输时，到货付清剩余 20%；使用您自己的货代时，交货给您的货代前付清剩余 20%。由我们运输时总额含货价和运费，自找货代时只算货价。",
        },
      ],
    },
    contact: {
      kicker: "04",
      title: "联系",
      lead: "合作、报价和跟单请加 Zalo。",
      zaloRole: "Zalo",
      emailRole: "销售邮件",
      addressLabel: "地址",
      address: "中国深圳",
    },
    footer: {
      line: "DIY 材料供应商。",
      address: "中国深圳",
    },
    notFound: {
      title: "没有这一页",
      body: "回到首页继续看产品或合作方式。",
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
    copied: "Đã chép",
    copy: "Chép",
    zaloAdd: "Thêm Zalo",
    inquiry: "Liên hệ để hỏi giá",
    nav: [
      { href: "/", label: "Trang chủ" },
      { href: "/products", label: "Sản phẩm" },
      { href: "/cooperation", label: "Hợp tác" },
      { href: "/contact", label: "Liên hệ" },
    ],
    home: {
      title: ["Nguyên liệu DIY từ Trung Quốc", "Giao hàng Việt Nam"],
      lead: "Yang Supply là nhà cung cấp nguyên liệu DIY. Chúng tôi bán các dòng của mình cho xưởng thủ công, cửa hàng và trường học tại Việt Nam: báo giá sản phẩm, phí vận chuyển tính riêng, và chịu trách nhiệm về chất lượng.",
      seeProcess: "Quy trình hợp tác",
      seeProducts: "Xem sản phẩm",
      noteCaption: "Báo giá. Liên hệ để hỏi giá.",
      rows: [
        { label: "Đi — Đến", value: "Trung Quốc → Việt Nam" },
        { label: "Vai trò", value: "Nhà cung cấp nguyên liệu DIY" },
        { label: "Cọc / nhận hàng", value: "80 / 20", note: true },
        { label: "Chất lượng", value: "Chúng tôi chịu trách nhiệm" },
      ],
      valuesTitle: "Ba việc",
      values: [
        {
          title: "Chọn hàng và cung cấp",
          body: "Cung cấp theo dòng, quy cách và số lượng bạn cần.",
        },
        {
          title: "Báo giá và vận chuyển",
          body: "Báo giá sản phẩm; phí vận chuyển tính riêng. Bạn có thể dùng đơn vị vận chuyển của mình, hoặc để chúng tôi sắp xếp vận chuyển từ Trung Quốc về Việt Nam.",
        },
        {
          title: "Cam kết chất lượng",
          body: "Chất lượng do chúng tôi chịu trách nhiệm. Nhà máy hợp tác lâu dài hỗ trợ nguồn hàng và chất lượng.",
        },
      ],
      audienceTitle: "Phục vụ ai",
      audienceBody:
        "Dành cho xưởng thủ công, cửa hàng và trường học tại Việt Nam.",
      audience: ["Xưởng DIY", "Cửa hàng", "Trường học"],
      seriesTitle: "Sản phẩm",
      seriesLead: "Năm dòng sản phẩm của chúng tôi.",
      processTitle: "Các bước hợp tác",
      processLead:
        "Sau khi chốt quy cách và số lượng, nhận báo giá sản phẩm, rồi mới quyết định đặt.",
      steps: [
        "Hỏi giá",
        "Xác nhận quy cách và số lượng",
        "Báo giá",
        "Đặt hàng (cọc 80%)",
        "Vận chuyển",
        "Thanh toán 20% còn lại",
      ],
      ctaTitle: "Gửi quy cách và số lượng qua Zalo",
      ctaBody: "Hỏi giá, báo giá và theo đơn — thêm số này.",
    },
    products: {
      kicker: "02",
      title: "Sản phẩm",
      lead: "Năm dòng sản phẩm của chúng tôi. Giá không đăng trên website; liên hệ để nhận báo giá.",
    },
    cooperation: {
      kicker: "03",
      title: "Hợp tác",
      lead: "Bán thẳng các dòng của chúng tôi. Sau khi chốt quy cách và số lượng, chúng tôi báo giá sản phẩm; phí vận chuyển tính riêng. Chất lượng do chúng tôi chịu trách nhiệm.",
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
          body: "Báo giá sản phẩm; phí vận chuyển tính riêng. Website không niêm yết giá.",
        },
        {
          title: "Đặt hàng (cọc 80%)",
          body: "Sau khi chốt, chuyển khoản ngân hàng tại Việt Nam. Cọc 80% tổng giá trị đơn hàng. Nếu chúng tôi vận chuyển, thanh toán 20% còn lại khi nhận hàng; nếu bạn dùng đơn vị vận chuyển riêng, thanh toán đủ 20% còn lại trước khi chúng tôi bàn giao hàng cho đơn vị đó.",
        },
        {
          title: "Vận chuyển",
          body: "Bạn có thể dùng đơn vị vận chuyển của mình, hoặc để chúng tôi sắp xếp vận chuyển từ Trung Quốc về Việt Nam. Nếu chúng tôi vận chuyển, phí vận chuyển đã gồm thủ tục hải quan và thuế nhập khẩu. Nếu bạn dùng đơn vị vận chuyển riêng, chúng tôi giao hàng cho đơn vị đó là hoàn tất.",
        },
        {
          title: "Thanh toán 20% còn lại",
          body: "Nếu chúng tôi vận chuyển, thanh toán 20% còn lại khi nhận hàng. Nếu bạn dùng đơn vị vận chuyển riêng, thanh toán đủ 20% còn lại trước khi chúng tôi bàn giao hàng cho đơn vị đó.",
        },
      ],
      qualityTitle: "Chất lượng",
      qualityFigure: "Do chúng tôi",
      qualityBody:
        "Nguồn hàng và chất lượng do chúng tôi chịu trách nhiệm. Nhà máy hợp tác lâu dài hỗ trợ việc cung cấp và chất lượng.",
      payTitle: "Thanh toán",
      payFigure: "80 / 20",
      payBody:
        "Chuyển khoản ngân hàng tại Việt Nam. Cọc 80% tổng giá trị đơn hàng. Nếu chúng tôi vận chuyển, thanh toán 20% còn lại khi nhận hàng; nếu bạn dùng đơn vị vận chuyển riêng, thanh toán đủ 20% còn lại trước khi chúng tôi bàn giao hàng cho đơn vị đó. Tổng giá trị gồm tiền hàng và phí vận chuyển nếu chúng tôi vận chuyển; chỉ tiền hàng nếu bạn dùng đơn vị vận chuyển riêng.",
      notesTitle: "Lưu ý khi báo giá",
      notes: [
        "Báo giá có hiệu lực 7 ngày.",
        "Có thể trộn màu, trộn mẫu. Mức tối thiểu tính theo từng mẫu và từng màu.",
        "Mẫu có tính phí, theo đơn giá của lần báo giá đó.",
        "Với đơn do chúng tôi vận chuyển: trong vòng 1 ngày sau khi nhận hàng, nếu hàng hư hãy chụp ảnh gửi lại, chúng tôi sẽ gửi bù (không hoàn tiền).",
      ],
      faqTitle: "Câu hỏi thường gặp",
      faq: [
        {
          q: "Phí vận chuyển đã bao gồm thông quan và thuế nhập khẩu chưa?",
          a: "Có. Nếu chúng tôi vận chuyển, phí vận chuyển đã gồm thủ tục hải quan và thuế nhập khẩu.",
        },
        {
          q: "Tôi có thể dùng đơn vị vận chuyển riêng không?",
          a: "Có. Chúng tôi giao hàng cho đơn vị vận chuyển của bạn là hoàn tất.",
        },
        {
          q: "Đặt cọc bao nhiêu phần trăm?",
          a: "80% tổng giá trị đơn, 20% còn lại thanh toán khi nhận hàng nếu chúng tôi vận chuyển; nếu bạn dùng đơn vị vận chuyển riêng, thanh toán đủ 20% còn lại trước khi chúng tôi bàn giao hàng cho đơn vị đó. Tổng giá trị gồm tiền hàng và phí vận chuyển nếu chúng tôi vận chuyển; chỉ tiền hàng nếu bạn dùng đơn vị vận chuyển riêng.",
        },
      ],
    },
    contact: {
      kicker: "04",
      title: "Liên hệ",
      lead: "Muốn hợp tác, báo giá hoặc theo dõi đơn, hãy thêm Zalo.",
      zaloRole: "Zalo",
      emailRole: "Email bán hàng",
      addressLabel: "Địa chỉ",
      address: "Thâm Quyến, Trung Quốc",
    },
    footer: {
      line: "Nhà cung cấp nguyên liệu DIY.",
      address: "Thâm Quyến, Trung Quốc",
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

export type Lang = "zh" | "vi";

export const seriesIds = ["petals", "stickers", "vase", "starfish", "charm"] as const;
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
  /** Keep a low-resolution sample at its own pixel size. */
  small?: boolean;
  /** Taller than wide; keep the full frame instead of cropping. */
  portrait?: boolean;
  label?: { zh: string; vi: string };
  /**
   * Visible colour name, or a short non-colour description already in the alt.
   * Shown under the main photo and under that thumbnail. Petals, vase, and
   * starfish only — stickers and charm leave this unset.
   */
  colour?: { vi: string; zh: string };
  /** This photo is one available single colour and may be selected from the list. */
  swatch?: boolean;
};

export const colourAvailableLabel = {
  vi: "Màu có sẵn:",
  zh: "可选颜色：",
} as const;

/** In the 9-colour petal spec, with no photograph. Listed as text, not a swatch. */
export const petalYellow = { vi: "vàng", zh: "黄色" } as const;

export const productImage: Record<SeriesId, ProductPhoto[]> = {
  petals: [
    {
      src: "/products/canh-hoa-acrylic-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "亚克力花瓣多色样品",
      vi: "Mẫu cánh hoa acrylic nhiều màu",
      colour: { vi: "Nhiều màu", zh: "多色" },
    },
    {
      src: "/products/kich-thuoc-canh-hoa-acrylic.jpg",
      width: 1000,
      height: 1000,
      zh: "亚克力花瓣尺寸样品",
      vi: "Mẫu kích thước cánh hoa acrylic",
      colour: { vi: "Kích thước", zh: "尺寸" },
    },
    {
      src: "/products/canh-hoa-acrylic-hong.jpg",
      width: 1495,
      height: 1495,
      zh: "粉色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu hồng",
      colour: { vi: "hồng", zh: "粉色" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-hong-anh-dao.jpg",
      width: 1600,
      height: 1600,
      zh: "樱花粉亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu hồng anh đào",
      colour: { vi: "hồng anh đào", zh: "樱花粉" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-do.jpg",
      width: 1600,
      height: 1600,
      zh: "红色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu đỏ",
      colour: { vi: "đỏ", zh: "红色" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-tim.jpg",
      width: 1600,
      height: 1600,
      zh: "紫色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu tím",
      colour: { vi: "tím", zh: "紫色" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-xanh-duong.jpg",
      width: 1600,
      height: 1600,
      zh: "蓝色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu xanh dương",
      colour: { vi: "xanh dương", zh: "蓝色" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-xanh-la.jpg",
      width: 1600,
      height: 1600,
      zh: "绿色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu xanh lá",
      colour: { vi: "xanh lá", zh: "绿色" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-trong-suot.jpg",
      width: 1600,
      height: 1600,
      zh: "透明亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily trong suốt",
      colour: { vi: "trong suốt", zh: "透明" },
      swatch: true,
    },
    {
      src: "/products/canh-hoa-acrylic-trang.jpg",
      width: 1600,
      height: 1600,
      zh: "白色亚克力百合花瓣",
      vi: "Cánh hoa acrylic hình hoa lily màu trắng",
      colour: { vi: "trắng", zh: "白色" },
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
      label: { zh: "大张", vi: "Cỡ lớn" },
    },
    {
      src: "/products/sticker-dinh-da-co-lon-hop-qua.jpg",
      width: 800,
      height: 800,
      zh: "大张水钻贴纸，贴在礼盒上",
      vi: "Sticker đính đá cỡ lớn trên hộp quà",
      label: { zh: "大张", vi: "Cỡ lớn" },
    },
    {
      src: "/products/sticker-dinh-da-co-lon-trai-tim-88.jpg",
      width: 1600,
      height: 1600,
      zh: "多色爱心水钻贴纸整张，88 颗，三种尺寸",
      vi: "Tấm sticker đính đá hình trái tim nhiều màu, 88 viên, ba cỡ",
      label: { zh: "大张", vi: "Cỡ lớn" },
    },
    {
      src: "/products/sticker-dinh-da-trai-tim.jpg",
      width: 1600,
      height: 1600,
      zh: "小张水钻贴纸，彩色爱心",
      vi: "Sticker đính đá cỡ nhỏ hình tim màu",
      label: { zh: "小张", vi: "Cỡ nhỏ" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-hoa-mai-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "小张彩色梅花圆钻水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình hoa mai và hạt tròn nhiều màu",
      label: { zh: "小张", vi: "Cỡ nhỏ" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-ngoi-sao-nhieu-mau.jpg",
      width: 1600,
      height: 1600,
      zh: "小张彩色星星圆钻水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình ngôi sao và hạt tròn nhiều màu",
      label: { zh: "小张", vi: "Cỡ nhỏ" },
    },
    {
      src: "/products/sticker-dinh-da-co-nho-trai-tim-hong-trang.jpg",
      width: 1600,
      height: 1600,
      zh: "小张粉白爱心水钻贴纸",
      vi: "Sticker đính đá cỡ nhỏ hình trái tim màu hồng và trắng",
      label: { zh: "小张", vi: "Cỡ nhỏ" },
    },
  ],
  vase: [
    {
      src: "/products/khung-binh-hoa-acrylic-trong-suot.jpg",
      width: 1307,
      height: 1307,
      zh: "透明亚克力插花花瓶框，插着粉色小菊花",
      vi: "Khung bình hoa acrylic trong suốt, cắm hoa cúc hồng",
      colour: { vi: "trong suốt", zh: "透明" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-hong.jpg",
      width: 1600,
      height: 1600,
      zh: "粉色亚克力插花花瓶框",
      vi: "Khung bình hoa acrylic màu hồng",
      colour: { vi: "hồng", zh: "粉色" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-trong-suot-2.jpg",
      width: 1600,
      height: 1600,
      zh: "透明亚克力花瓶相框（空框）",
      vi: "Khung bình hoa acrylic trong suốt, để trống",
      colour: { vi: "trong suốt", zh: "透明" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-xam.jpg",
      width: 1600,
      height: 1600,
      zh: "灰色亚克力花瓶相框（空框）",
      vi: "Khung bình hoa acrylic màu xám, để trống",
      colour: { vi: "xám", zh: "灰色" },
      swatch: true,
    },
    {
      src: "/products/khung-binh-hoa-acrylic-xanh-da-troi.jpg",
      width: 1600,
      height: 1600,
      zh: "天蓝色亚克力花瓶相框（空框）",
      vi: "Khung bình hoa acrylic màu xanh da trời, để trống",
      colour: { vi: "xanh da trời", zh: "天蓝色" },
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
      colour: { vi: "Nhiều màu", zh: "多色" },
    },
    {
      src: "/products/sao-bien-resin-nhieu-mau-2.jpg",
      width: 1600,
      height: 1600,
      zh: "七只多色树脂海星",
      vi: "Bảy sao biển resin nhiều màu",
      colour: { vi: "Nhiều màu", zh: "多色" },
    },
    {
      src: "/products/sao-bien-resin-trang.jpg",
      width: 1220,
      height: 1220,
      zh: "白色树脂海星",
      vi: "Sao biển resin màu trắng",
      colour: { vi: "trắng", zh: "白色" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-mau-nga.jpg",
      width: 1222,
      height: 1222,
      zh: "象牙色树脂海星",
      vi: "Sao biển resin màu ngà",
      colour: { vi: "ngà", zh: "象牙色" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-hong.jpg",
      width: 1285,
      height: 1285,
      zh: "粉色树脂海星",
      vi: "Sao biển resin màu hồng",
      colour: { vi: "hồng", zh: "粉色" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-tim-nhat.jpg",
      width: 1157,
      height: 1157,
      zh: "浅紫色树脂海星",
      vi: "Sao biển resin màu tím nhạt",
      colour: { vi: "tím nhạt", zh: "浅紫色" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-xanh-nhat.jpg",
      width: 1090,
      height: 1090,
      zh: "浅蓝色树脂海星",
      vi: "Sao biển resin màu xanh nhạt",
      colour: { vi: "xanh nhạt", zh: "浅蓝色" },
      swatch: true,
    },
    {
      src: "/products/sao-bien-resin-xanh-navy.jpg",
      width: 1177,
      height: 1177,
      zh: "深蓝色树脂海星",
      vi: "Sao biển resin màu xanh navy",
      colour: { vi: "xanh navy", zh: "深蓝色" },
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
    },
    {
      src: "/products/charm-y-men-nhieu-hinh.jpg",
      width: 1280,
      height: 1280,
      zh: "多款图案珐琅意大利 Charm",
      vi: "Charm Ý tráng men nhiều hình",
    },
    {
      src: "/products/charm-y-trai-tim-dinh-da.jpg",
      width: 1280,
      height: 1280,
      zh: "爱心镶钻意大利 Charm",
      vi: "Charm Ý trái tim đính đá",
    },
    {
      src: "/products/charm-y-giang-sinh.jpg",
      width: 1200,
      height: 1200,
      zh: "圣诞主题意大利 Charm",
      vi: "Charm Ý chủ đề Giáng Sinh",
    },
    {
      src: "/products/vong-tay-charm-y-giang-sinh.jpg",
      width: 1200,
      height: 1200,
      zh: "圣诞主题意大利 Charm 手链",
      vi: "Vòng tay charm Ý chủ đề Giáng Sinh",
    },
    {
      src: "/products/charm-y-giang-sinh-2.jpg",
      width: 1200,
      height: 1200,
      zh: "多款圣诞主题意大利 Charm",
      vi: "Charm Ý chủ đề Giáng Sinh nhiều mẫu",
    },
    {
      src: "/products/charm-y-da-zircon.jpg",
      width: 1200,
      height: 1200,
      zh: "锆石意大利 Charm",
      vi: "Charm Ý đính đá zircon",
    },
    {
      src: "/products/charm-y-da-zircon-2.jpg",
      width: 1600,
      height: 1600,
      zh: "多款锆石意大利 Charm",
      vi: "Charm Ý đính đá zircon nhiều mẫu",
    },
  ],
};

export const series: {
  id: SeriesId;
  zh: { name: string; summary: string; detail: string };
  vi: { name: string; summary: string; detail: string };
}[] = [
  {
    id: "petals",
    zh: {
      name: "亚克力花瓣",
      summary: "百合花瓣形，45×40mm，9 种颜色。",
      detail: "透明花片，用于手作和课程。",
    },
    vi: {
      name: "Cánh hoa acrylic",
      summary: "Hình cánh hoa lily, 45×40mm, 9 màu.",
      detail: "Cánh hoa trong, dùng cho thủ công và học liệu.",
    },
  },
  {
    id: "stickers",
    zh: {
      name: "水钻贴纸",
      summary: "大张 7.5×13cm，小张不标尺寸。多种图案，按张供应。",
      detail: "具体图案以沟通时确认的样品为准。",
    },
    vi: {
      name: "Sticker đính đá",
      summary: "Tờ lớn 7,5×13cm; tờ nhỏ không ghi kích thước. Nhiều họa tiết, bán theo tờ.",
      detail: "Họa tiết chốt theo mẫu khi trao đổi.",
    },
  },
  {
    id: "vase",
    zh: {
      name: "亚克力插花花瓶框",
      summary: "用来插花，不是照片相框。18×15cm。",
      detail: "颜色有灰、天蓝、粉、透明。适合花艺和店内陈列。",
    },
    vi: {
      name: "Khung bình hoa acrylic",
      summary: "Dùng để cắm hoa, không phải khung ảnh. 18×15cm.",
      detail: "Màu xám, xanh da trời, hồng và trong suốt. Phù hợp cắm hoa và trưng bày.",
    },
  },
  {
    id: "starfish",
    zh: {
      name: "树脂海星",
      summary: "摆件。大号 5cm，小号 2.6cm，无孔。",
      detail: "多色。",
    },
    vi: {
      name: "Sao biển resin",
      summary: "Đồ trưng bày. Cỡ lớn 5cm, cỡ nhỏ 2,6cm, không lỗ.",
      detail: "Nhiều màu.",
    },
  },
  {
    id: "charm",
    zh: {
      name: "意大利 Charm 手链",
      summary: "模块化手链，按所选款式单独报价。",
      detail: "本站不列款式目录。把想要的图案发来即可询价。",
    },
    vi: {
      name: "Vòng tay charm Ý",
      summary: "Vòng charm Ý ghép theo mẫu, báo giá theo mẫu bạn chọn.",
      detail: "Website không đăng bảng danh mục. Gửi họa tiết bạn muốn để hỏi giá.",
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
  zh: {
    skip: "跳到内容",
    menu: "菜单",
    close: "关闭",
    copied: "已复制",
    copy: "复制",
    zaloAdd: "添加 Zalo",
    inquiry: "联系询价",
    nav: [
      { href: "/", label: "首页" },
      { href: "/products", label: "产品" },
      { href: "/cooperation", label: "合作" },
      { href: "/contact", label: "联系" },
    ],
    home: {
      title: ["中国 DIY 材料", "发往越南"],
      lead: "Yang Supply 是 DIY 材料供应商。我们把自有系列卖给越南的手作工坊、店铺和学校：报产品单价，运费另计，质量由我们负责。",
      seeProcess: "合作流程",
      seeProducts: "看产品",
      noteCaption: "报价，联系询价。",
      rows: [
        { label: "出发 — 送达", value: "中国 → 越南" },
        { label: "角色", value: "DIY 材料供应商" },
        { label: "定金 / 货到", value: "80 / 20", note: true },
        { label: "质量", value: "我们负责" },
      ],
      valuesTitle: "三件事",
      values: [
        { title: "选品供货", body: "按您要的系列、规格和数量供货。" },
        { title: "报价与运输", body: "报产品单价，运费另计。可以用您自己的货代，也可以由我们安排从中国运到越南。" },
        { title: "质量约定", body: "质量由我们负责。长期合作的工厂支撑供货和品质。" },
      ],
      audienceTitle: "给谁供货",
      audienceBody: "面向越南的手作工坊、店铺和学校。",
      audience: ["手作工坊", "店铺", "学校"],
      seriesTitle: "产品一览",
      seriesLead: "五组自有系列。",
      processTitle: "合作步骤",
      processLead: "确认规格和数量后，报产品单价，再决定是否下单。",
      steps: ["询价", "确认规格与数量", "报价", "下单（订金 80%）", "运输", "货到付 20%"],
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
          title: "下单（订金 80%）",
          body: "确认后，用越南当地银行转账支付 80% 订金。",
        },
        {
          title: "运输",
          body: "可以用您自己的货代，也可以由我们安排从中国运到越南。",
        },
        {
          title: "货到付 20%",
          body: "货到后付清剩余 20%。",
        },
      ],
      qualityTitle: "质量",
      qualityFigure: "我们负责",
      qualityBody: "供货和品质由我们负责。长期合作的工厂支撑供应和品质。",
      payTitle: "付款",
      payFigure: "80 / 20",
      payBody: "越南当地银行转账。下单支付 80% 订金，货到付清剩余 20%。",
      notesTitle: "报价时一并说明",
      notes: [
        "报价有效期 7 天。",
        "可以混色、混款。起订量按每一款、每一色分别计算。",
        "样品收费，按当次报价的单价。",
        "收货后拍照反馈。破损产品补发，不退款。",
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
      audienceBody: "Dành cho xưởng thủ công, cửa hàng và trường học tại Việt Nam.",
      audience: ["Xưởng DIY", "Cửa hàng", "Trường học"],
      seriesTitle: "Sản phẩm",
      seriesLead: "Năm dòng sản phẩm của chúng tôi.",
      processTitle: "Các bước hợp tác",
      processLead: "Sau khi chốt quy cách và số lượng, nhận báo giá sản phẩm, rồi mới quyết định đặt.",
      steps: [
        "Hỏi giá",
        "Xác nhận quy cách và số lượng",
        "Báo giá",
        "Đặt hàng (cọc 80%)",
        "Vận chuyển",
        "Thanh toán 20% khi nhận hàng",
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
          body: "Sau khi chốt, chuyển khoản ngân hàng tại Việt Nam, đặt cọc 80%.",
        },
        {
          title: "Vận chuyển",
          body: "Bạn có thể dùng đơn vị vận chuyển của mình, hoặc để chúng tôi sắp xếp vận chuyển từ Trung Quốc về Việt Nam.",
        },
        {
          title: "Thanh toán 20% khi nhận hàng",
          body: "Khi nhận hàng, thanh toán 20% còn lại.",
        },
      ],
      qualityTitle: "Chất lượng",
      qualityFigure: "Do chúng tôi",
      qualityBody:
        "Nguồn hàng và chất lượng do chúng tôi chịu trách nhiệm. Nhà máy hợp tác lâu dài hỗ trợ việc cung cấp và chất lượng.",
      payTitle: "Thanh toán",
      payFigure: "80 / 20",
      payBody:
        "Chuyển khoản ngân hàng tại Việt Nam. Khi đặt hàng trả 80%, khi nhận hàng trả nốt 20%.",
      notesTitle: "Lưu ý khi báo giá",
      notes: [
        "Báo giá có hiệu lực 7 ngày.",
        "Có thể trộn màu, trộn mẫu. Mức tối thiểu tính theo từng mẫu và từng màu.",
        "Mẫu có tính phí, theo đơn giá của lần báo giá đó.",
        "Sau khi nhận hàng, nếu hàng hư hãy chụp ảnh gửi lại, chúng tôi sẽ gửi bù (không hoàn tiền).",
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

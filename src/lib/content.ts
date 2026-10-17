export type Lang = "zh" | "vi";

export const seriesIds = ["petals", "stickers", "vase", "starfish", "charm"] as const;
export type SeriesId = (typeof seriesIds)[number];

export const contacts = {
  zalo: "0986245780",
  zaloUrl: "https://zalo.me/0986245780",
  emails: [
    { name: "An", email: "an.yangsupply@agentmail.to" },
    { name: "Minh", email: "minh.yangsupply@agentmail.to" },
    { name: "Linh", email: "linh.yangsupply@agentmail.to" },
  ],
} as const;

export type ProductPhoto = {
  src: string;
  width: number;
  height: number;
  zh: string;
  vi: string;
  /** Charm samples are low-resolution and must not be scaled up. */
  small?: boolean;
  /** Taller than wide; keep the full frame instead of cropping. */
  portrait?: boolean;
  label?: { zh: string; vi: string };
};

export const productImage: Record<SeriesId, ProductPhoto[]> = {
  petals: [
    {
      src: "/products/petals-group.jpg",
      width: 800,
      height: 800,
      zh: "亚克力花瓣多色样品",
      vi: "Mẫu cánh hoa acrylic nhiều màu",
    },
    {
      src: "/products/petal-size.jpg",
      width: 1000,
      height: 1000,
      zh: "亚克力花瓣尺寸样品",
      vi: "Mẫu kích thước cánh hoa acrylic",
    },
  ],
  stickers: [
    {
      src: "/products/rhinestone-large-1.jpg",
      width: 800,
      height: 800,
      zh: "大张水钻贴纸，贴在瓶身和杯垫上",
      vi: "Sticker đính đá cỡ lớn trên chai và lót ly",
      label: { zh: "大张", vi: "Cỡ lớn" },
    },
    {
      src: "/products/rhinestone-large-2.jpg",
      width: 800,
      height: 800,
      zh: "大张水钻贴纸，贴在礼盒上",
      vi: "Sticker đính đá cỡ lớn trên hộp quà",
      label: { zh: "大张", vi: "Cỡ lớn" },
    },
    {
      src: "/products/rhinestone-small-heart.jpg",
      width: 1280,
      height: 1280,
      zh: "小张水钻贴纸，彩色爱心",
      vi: "Sticker đính đá cỡ nhỏ hình tim màu",
      label: { zh: "小张", vi: "Cỡ nhỏ" },
    },
  ],
  vase: [
    {
      src: "/products/vase-frame-main.jpg",
      width: 800,
      height: 800,
      zh: "亚克力插花花瓶框样品",
      vi: "Mẫu khung bình hoa acrylic",
    },
    {
      src: "/products/vase-frame-pink.jpg",
      width: 800,
      height: 800,
      zh: "粉色亚克力插花花瓶框，框内插花",
      vi: "Khung bình hoa acrylic màu hồng, có hoa cắm trong khung",
    },
  ],
  starfish: [
    {
      src: "/products/starfish-group.jpg",
      width: 800,
      height: 800,
      zh: "树脂海星多色样品",
      vi: "Mẫu sao biển resin nhiều màu",
    },
    {
      src: "/products/starfish-real.jpg",
      width: 828,
      height: 1472,
      portrait: true,
      zh: "树脂海星佩戴示例",
      vi: "Sao biển resin khi đeo",
    },
  ],
  charm: [
    {
      src: "/products/charm-hearts-words-1.jpg",
      width: 309,
      height: 286,
      small: true,
      zh: "意大利 Charm 手链样品",
      vi: "Mẫu vòng tay charm Ý",
    },
    {
      src: "/products/charm-hearts-words-3.jpg",
      width: 321,
      height: 286,
      small: true,
      zh: "意大利 Charm 手链样品",
      vi: "Mẫu vòng tay charm Ý",
    },
    {
      src: "/products/charm-general-1.jpg",
      width: 221,
      height: 189,
      small: true,
      zh: "意大利 Charm 手链样品",
      vi: "Mẫu vòng tay charm Ý",
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
    rows: { label: string; value: string }[];
    routeFrom: string;
    routeTo: string;
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
    feeTitle: string;
    feeFigure: string;
    feeBody: string;
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
    inquiry: "更多产品可咨询",
    nav: [
      { href: "/", label: "首页" },
      { href: "/products", label: "产品" },
      { href: "/cooperation", label: "合作" },
      { href: "/contact", label: "联系" },
    ],
    home: {
      title: ["中国采购。", "越南收货。"],
      lead: "Yang Supply 做采购代理，不做零售。您把产品图片或链接发来，我们在中国找货源、比价、代付给供应商，再安排运到越南。",
      seeProcess: "合作流程",
      seeProducts: "看产品",
      noteCaption: "运费另计，不在站内列价。",
      rows: [
        { label: "出发", value: "中国" },
        { label: "送达", value: "越南" },
        { label: "角色", value: "采购代理" },
        { label: "手续费", value: "约 5%" },
        { label: "付款", value: "定金 90%，货到 10%" },
      ],
      routeFrom: "中国",
      routeTo: "越南",
      valuesTitle: "三件事",
      values: [
        { title: "找货源", body: "按图片或链接，在中国比对供应商。" },
        { title: "代付款", body: "报价确认后，我们向供应商付款。" },
        { title: "安排运输", body: "从中国运到越南。运费写入当次报价。" },
      ],
      audienceTitle: "给谁供货",
      audienceBody: "面向在越南做手作体验、课程或创意零售的团队。",
      audience: ["手作工作室", "咖啡馆", "零售店", "学校与教培"],
      seriesTitle: "产品一览",
      seriesLead: "五组样品。其他中国商品也可以代采。",
      processTitle: "合作五步",
      processLead: "先报价，再决定是否下单。手续费约 5%，运费另计。",
      steps: ["发送图片或链接", "比对价格", "出具报价", "支付定金", "安排交付"],
      ctaTitle: "把图片或链接发到 Zalo",
      ctaBody: "合作、报价、跟单，加这一个号。",
    },
    products: {
      kicker: "02",
      title: "产品",
      lead: "五组手作材料。价格不在站内公布，以当次报价为准。",
    },
    cooperation: {
      kicker: "03",
      title: "合作",
      lead: "您发来图片或链接。我们找货源、比价、报价。确认后再付定金。",
      steps: [
        {
          title: "发送图片或链接",
          body: "把产品照片，或中国商品链接，发给我们。",
        },
        {
          title: "比对价格",
          body: "我们在中国找货源，并比较价格。",
        },
        {
          title: "出具报价",
          body: "报价含产品金额和约 5% 手续费。运费另计，不列在本站。",
        },
        {
          title: "支付定金",
          body: "确认后，用越南当地银行转账支付 90% 定金。",
        },
        {
          title: "安排交付",
          body: "货到后付清剩余 10%。",
        },
      ],
      feeTitle: "手续费",
      feeFigure: "≈ 5%",
      feeBody:
        "约为产品金额的 5%，不含运费。普通商品按此计算；特殊品类在报价里另行说明。代采不设最低金额。",
      payTitle: "付款",
      payFigure: "90 / 10",
      payBody: "越南当地银行转账。下单支付 90% 定金，货到付清剩余 10%。",
      notesTitle: "报价时一并说明",
      notes: [
        "报价有效期 7 天。",
        "可以混色、混款。起订量按每一款、每一色分别计算。",
        "样品按实际货价购买。数量少时，运费占比会更高。",
        "收货后 1 天内拍照反馈。破损产品可退款或补发。",
        "除页面上的系列外，其他中国商品也可以代采。",
      ],
    },
    contact: {
      kicker: "04",
      title: "联系",
      lead: "合作、报价和跟单请加 Zalo。销售邮件由 An、Minh、Linh 处理。",
      zaloRole: "Zalo",
      emailRole: "销售邮件",
      addressLabel: "地址",
      address: "中国深圳",
    },
    footer: {
      line: "采购代理，不是零售商。",
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
    inquiry: "Cần thêm sản phẩm, hãy hỏi chúng tôi",
    nav: [
      { href: "/", label: "Trang chủ" },
      { href: "/products", label: "Sản phẩm" },
      { href: "/cooperation", label: "Hợp tác" },
      { href: "/contact", label: "Liên hệ" },
    ],
    home: {
      title: ["Thu mua tại Trung Quốc.", "Giao hàng tại Việt Nam."],
      lead: "Yang Supply là đại lý thu mua, không phải cửa hàng bán lẻ. Bạn gửi ảnh hoặc liên kết; chúng tôi tìm nguồn ở Trung Quốc, so giá, thanh toán hộ cho nhà cung cấp, rồi sắp xếp chuyển hàng về Việt Nam.",
      seeProcess: "Quy trình hợp tác",
      seeProducts: "Xem sản phẩm",
      noteCaption: "Cước tính riêng, không niêm yết trên website.",
      rows: [
        { label: "Đi", value: "Trung Quốc" },
        { label: "Đến", value: "Việt Nam" },
        { label: "Vai trò", value: "Đại lý thu mua" },
        { label: "Phí", value: "Khoảng 5%" },
        { label: "Trả", value: "Cọc 90%, nhận hàng 10%" },
      ],
      routeFrom: "Trung Quốc",
      routeTo: "Việt Nam",
      valuesTitle: "Ba việc",
      values: [
        {
          title: "Tìm nguồn",
          body: "Đối chiếu nhà cung cấp tại Trung Quốc theo ảnh hoặc liên kết.",
        },
        {
          title: "Thanh toán hộ",
          body: "Sau khi chốt báo giá, chúng tôi trả tiền cho nhà cung cấp.",
        },
        {
          title: "Vận chuyển",
          body: "Từ Trung Quốc về Việt Nam. Cước ghi trong báo giá lần đó.",
        },
      ],
      audienceTitle: "Phục vụ ai",
      audienceBody:
        "Dành cho đơn vị tại Việt Nam có trải nghiệm thủ công, lớp học hoặc bán lẻ sáng tạo.",
      audience: ["Xưởng DIY", "Quán cà phê", "Cửa hàng bán lẻ", "Trường học"],
      seriesTitle: "Sản phẩm",
      seriesLead: "Năm nhóm mẫu. Hàng Trung Quốc khác cũng có thể đặt mua hộ.",
      processTitle: "Năm bước hợp tác",
      processLead: "Báo giá trước, rồi mới quyết định đặt. Phí khoảng 5%, cước tính riêng.",
      steps: [
        "Gửi ảnh hoặc liên kết",
        "So sánh giá",
        "Báo giá",
        "Đặt cọc",
        "Giao hàng",
      ],
      ctaTitle: "Gửi ảnh hoặc liên kết qua Zalo",
      ctaBody: "Hợp tác, báo giá và theo đơn — thêm số này.",
    },
    products: {
      kicker: "02",
      title: "Sản phẩm",
      lead: "Năm nhóm vật liệu thủ công. Giá không đăng trên website, lấy theo báo giá từng lần.",
    },
    cooperation: {
      kicker: "03",
      title: "Hợp tác",
      lead: "Bạn gửi ảnh hoặc liên kết. Chúng tôi tìm nguồn, so giá và báo giá. Đặt cọc sau khi đã chốt.",
      steps: [
        {
          title: "Gửi ảnh hoặc liên kết",
          body: "Gửi ảnh sản phẩm hoặc liên kết hàng Trung Quốc.",
        },
        {
          title: "So sánh giá",
          body: "Chúng tôi tìm nguồn tại Trung Quốc và so giá.",
        },
        {
          title: "Báo giá",
          body: "Báo giá gồm tiền hàng và phí dịch vụ khoảng 5%. Cước vận chuyển tính riêng, không đăng trên website.",
        },
        {
          title: "Đặt cọc",
          body: "Sau khi chốt, chuyển khoản ngân hàng tại Việt Nam, đặt cọc 90%.",
        },
        {
          title: "Giao hàng",
          body: "Khi nhận hàng, thanh toán 10% còn lại.",
        },
      ],
      feeTitle: "Phí dịch vụ",
      feeFigure: "≈ 5%",
      feeBody:
        "Khoảng 5% giá trị hàng, chưa gồm cước vận chuyển. Hàng thông thường tính theo mức này; nhóm đặc biệt được ghi riêng khi báo giá. Đặt mua hộ không có mức giá trị tối thiểu.",
      payTitle: "Thanh toán",
      payFigure: "90 / 10",
      payBody:
        "Chuyển khoản ngân hàng tại Việt Nam. Khi đặt hàng trả 90%, khi nhận hàng trả nốt 10%.",
      notesTitle: "Lưu ý khi báo giá",
      notes: [
        "Báo giá có hiệu lực 7 ngày.",
        "Có thể trộn màu, trộn mẫu. Mức tối thiểu tính theo từng mẫu và từng màu.",
        "Mua mẫu theo đúng giá hàng. Lô nhỏ thì tiền cước chiếm tỷ lệ cao hơn.",
        "Trong vòng 1 ngày sau khi nhận hàng, nếu hàng hư hãy chụp ảnh gửi lại để được hoàn tiền hoặc gửi bù.",
        "Ngoài các dòng trên trang, hàng hóa khác từ Trung Quốc cũng có thể nhờ mua hộ.",
      ],
    },
    contact: {
      kicker: "04",
      title: "Liên hệ",
      lead: "Muốn hợp tác, báo giá hoặc theo dõi đơn, hãy thêm Zalo. Email bán hàng do An, Minh và Linh phụ trách.",
      zaloRole: "Zalo",
      emailRole: "Email bán hàng",
      addressLabel: "Địa chỉ",
      address: "Thâm Quyến, Trung Quốc",
    },
    footer: {
      line: "Đại lý thu mua, không phải nhà bán lẻ.",
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

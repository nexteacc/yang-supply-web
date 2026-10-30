# YANG SUPPLY

越南语站面向越南手作工坊、店铺和学校。中文站是品牌页，介绍从中国发往全球的自有系列。英文站面向美国，路径为 `/en-us`。

页面：首页、产品、合作、联系。右上角可在中文 / Tiếng Việt / English 之间切换，选择会记在这台浏览器里。

站内不标价格，不放运费表，不放意大利 Charm 款式目录，也没有询价表单。需要报价请联系。合作页说明直销流程：询价、确认规格与数量、报价、下单定金 80%、运输、由我们运输时到货付 20%，自找货代时交货给货代前付清 20%。质量由我们负责。样品收费。由我们运输的订单，收货后 1 天内拍照反馈，破损补发，不退款。

站点已正式开启搜索引擎收录（默认允许爬虫索引，站点地图位于 `/sitemap.xml`）。

## 本地预览

需要 Node.js 20 或更新版本。

```bash
npm install
npm run dev
```

开发服务器默认由 Next.js 打开 3000 端口。若端口被占用，可以改用：

```bash
npx next dev --turbopack -p 43123
```

然后打开终端里显示的本地地址。

生产构建：

```bash
npm run build
npm start
```

`npm start` 默认端口同样是 3000，可用 `npx next start -p 43123` 改端口。

## 之后再部署

正式站点为 https://www.yangsupply.com，由 Vercel 托管。改动通过独立分支与 PR 预览，合并 main 后按部署配置上线。如需自行部署，在一台能运行 Node.js 的服务器上执行 `npm install`、`npm run build`、`npm start`，把进程托管在你自己的域名后面即可。

构建是静态页面加 Node 服务，不需要数据库，也不需要环境变量。

## 产品图

实拍放在 `public/products/`，由 `src/lib/content.ts` 的 `productImage` 接到页面上，并用 `next/image` 输出 WebP / AVIF。

意大利 Charm 的三张样品分辨率较低，页面上按原图像素宽度显示，不会拉大。

## 联系方式

- Zalo：0986245780
- max.yangsupply@agentmail.to
- leo.yangsupply@agentmail.to
- ella.yangsupply@agentmail.to
- 地址：中国

## 语言与英文内容

- 越南语使用 `/`、`/san-pham`、`/hop-tac`、`/lien-he`。旧路径 `/products`、`/cooperation`、`/contact` 永久跳转到新路径。
- 中文使用 `/zh` 前缀（首页、产品、联系）。`/zh/cooperation` 跳转到 `/zh/contact`。中文站只展示产品和既有联系方式。
- 英文使用 `/en-us` 前缀，面向美国。旧路径 `/en` 跳转到 `/en-us`。咨询走站内已有邮箱；付款为 80% 定金和 20% 尾款，国际 SWIFT 或 USDT/USDC；尺寸用英寸。
- 直接销售产品系列使用 “our product range / our product lines”；不暗示自有工厂或意大利原产。
- 三种语言共用页面与图片。市场配置（路径、hero、meta、联系方式、条款）在 `src/lib/markets.ts`。产品规格在 `src/lib/content.ts`。
- 首次响应的文档语言由 middleware 传给服务端布局。hreflang 为 vi-VN、zh-Hans、en-US，x-default 指向中文。

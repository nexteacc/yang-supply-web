# YANG SUPPLY

面向越南买家的中越双语 B2B 站点。Yang Supply 是中国采购代理：代购、代付，并安排运到越南。不是零售站。

页面：首页、产品、合作、联系。右上角可在中文 / Tiếng Việt 之间切换，选择会记在这台浏览器里。

站内不标价格，不放运费表，不放优惠券，不放意大利 Charm 款式目录，也没有询价表单。合作页只说明流程、约 5% 手续费，以及越南银行转账（定金 90%，货到再付 10%）。

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

这个仓库没有部署到任何托管平台。需要上线时，在一台能运行 Node.js 的服务器上执行 `npm install`、`npm run build`、`npm start`，把进程托管在你自己的域名后面即可。

构建是静态页面加 Node 服务，不需要数据库，也不需要环境变量。

## 产品图

实拍放在 `public/products/`，由 `src/lib/content.ts` 的 `productImage` 接到页面上，并用 `next/image` 输出 WebP / AVIF。

意大利 Charm 的三张样品分辨率较低，页面上按原图像素宽度显示，不会拉大。

## 联系方式

- Zalo：0986245780
- an.yangsupply@agentmail.to
- minh.yangsupply@agentmail.to
- linh.yangsupply@agentmail.to
- 地址：中国深圳

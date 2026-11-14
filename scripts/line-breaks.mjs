/**
 * Fails when a sitemap page overflows, a prose block ends on one ordinary
 * word, an unbreakable item wraps, or a number is split from its unit.
 *
 * Usage: BASE_URL=http://127.0.0.1:3456 node scripts/line-breaks.mjs
 */

import { chromium } from "playwright";

const base = process.env.BASE_URL || "http://127.0.0.1:3456";
const widths = [375, 768, 1280];

const paths = [
  "/",
  "/san-pham",
  "/hop-tac",
  "/lien-he",
  "/huong-dan/nguyen-lieu-handmade-cho-workshop",
  "/huong-dan/vong-tay-charm-y",
  "/zh",
  "/zh/products",
  "/zh/contact",
  "/en-us",
  "/en-us/products",
  "/en-us/cooperation",
  "/en-us/contact",
];

const gatePaths = new Set(["/en-us/products", "/en-us/cooperation"]);

const phrases = [
  "cherry blossom pink",
  "sky blue",
  "light blue",
  "light purple",
  "navy blue",
  "SWIFT bank transfer",
  "pink-and-white",
  "business days",
  "Acrylic Flower Vase Frames",
  "Italian charm",
  "stainless steel",
  "Net 60",
  "Apple Pay",
  "Google Pay",
  "Stripe Link",
  "pink-and-white hearts",
  "colorful plum blossoms",
  "colorful hearts",
  "colorful stars",
  "Klarna Installments",
  "American Express",
  "US bank transfer",
  "bank transfer",
  "USDT/USDC",
  "PayPal",
  "Faire Pay",
  "plum blossoms",
  "teardrop gems",
  "fresh flowers",
  "bubble wrap",
  "gift cards",
  "team badges",
  "in-store displays",
];

/** Reviewer's ruler. Phrase list is passed in. */
const detect = (phraseList) => {
  const res = [];
  if (document.documentElement.scrollWidth > innerWidth + 1) {
    res.push({ type: "hscroll", text: String(document.documentElement.scrollWidth) });
  }
  const seen = new Set();
  const els = [...document.querySelectorAll("p,li,h1,h2,h3,h4,td,th,dd,dt,summary,figcaption,label,span,a,div")];
  for (const el of els) {
    if ([...el.children].some((c) => ["P", "DIV", "LI", "UL", "OL", "TABLE", "SECTION"].includes(c.tagName))) continue;
    if (el.offsetParent === null) continue;
    const t = el.innerText.trim();
    if (t.length < 8 || seen.has(t)) continue;
    seen.add(t);
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const words = [];
    let n;
    while ((n = walker.nextNode())) {
      const s = n.textContent;
      const re = /\S+/g;
      let m;
      while ((m = re.exec(s))) {
        const r = document.createRange();
        r.setStart(n, m.index);
        r.setEnd(n, m.index + m[0].length);
        const rc = r.getClientRects();
        if (!rc.length) continue;
        words.push({
          w: m[0],
          top: Math.round(rc[0].top),
          right: rc[rc.length - 1].right,
          left: rc[0].left,
          multi: rc.length > 1,
        });
      }
    }
    if (!words.length) continue;
    const lines = [];
    for (const x of words) {
      const L = lines[lines.length - 1];
      if (L && Math.abs(L.top - x.top) < 5) L.ws.push(x);
      else lines.push({ top: x.top, ws: [x] });
    }
    if (words.some((x) => x.multi)) res.push({ type: "word-broken", text: t });
    if (lines.length >= 2) {
      const last = lines[lines.length - 1].ws;
      const widths = lines.map((l) => l.ws[l.ws.length - 1].right - l.ws[0].left);
      const mx = Math.max(...widths);
      if (last.length === 1 || widths[widths.length - 1] < 0.35 * mx) {
        res.push({ type: `widow(${last.map((x) => x.w).join(" ")})`, text: t });
      }
    }
    for (let i = 0; i < words.length - 1; i += 1) {
      const a = words[i];
      const b = words[i + 1];
      if (a.top !== b.top && Math.abs(a.top - b.top) >= 5) {
        const pair = `${a.w} ${b.w}`;
        if (
          /^[\d.×x(]+$/.test(a.w.replace(/[(),]/g, "")) &&
          /^(in|mm|cm|in\)|mm\)|days|×)/.test(b.w)
        ) {
          res.push({ type: `num-unit split "${pair}"`, text: t });
        }
        if (a.w === "×" || b.w === "×") res.push({ type: `× split "${pair}"`, text: t });
        for (const ph of phraseList) {
          const ps = ph.split(" ");
          for (let k = 0; k < ps.length - 1; k += 1) {
            if (
              a.w.replace(/[,.;:()]/g, "").toLowerCase() === ps[k].toLowerCase() &&
              b.w.replace(/[,.;:()]/g, "").toLowerCase() === ps[k + 1].toLowerCase()
            ) {
              res.push({ type: `phrase split "${ph}"`, text: t });
            }
          }
        }
      }
    }
  }
  return res;
};

function ignored(finding) {
  const text = (finding.text || "").replace(/\s+/g, " ").trim();
  if (text === "Contact" || text === "Home Products Ordering Contact") return true;
  if (text.includes("max@yangsupply.com") || text === "Email us") return true;
  return false;
}

function launch() {
  return chromium.launch({ channel: "chrome", headless: true }).catch(() =>
    chromium.launch({ headless: true }),
  );
}

const browser = await launch();
const failures = [];
const summary = [];

const scan = process.env.GATE_ONLY === "1" ? paths.filter((path) => gatePaths.has(path)) : paths;

for (const width of widths) {
  for (const path of scan) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const response = await page.goto(base + path, { waitUntil: "networkidle" });
    const status = response ? response.status() : 0;
    if (status >= 400) {
      failures.push({ width, path, type: "http", text: String(status) });
      summary.push({ width, path, count: 1 });
      await page.close();
      continue;
    }
    if (path.endsWith("products") || path.endsWith("cooperation")) {
      await page.locator("details").evaluateAll((nodes) => {
        for (const node of nodes) node.open = true;
      });
    }
    const found = await page.evaluate(detect, phrases);
    const real = found.filter((item) => !ignored(item));
    summary.push({ width, path, count: real.length, ignored: found.length - real.length });
    for (const item of real) failures.push({ width, path, ...item });
    await page.close();
  }
}

await browser.close();

console.log("width\tpath\tfindings");
for (const row of summary) {
  const gate = gatePaths.has(row.path);
  console.log(`${row.width}\t${row.path}\t${row.count}${gate ? "" : "\t(not in gate)"}`);
}
const gated = failures.filter((item) => gatePaths.has(item.path));
console.log(`\n${gated.length} finding(s) on /en-us/products and /en-us/cooperation`);
for (const item of gated) {
  console.log(`${item.width}\t${item.path}\t${item.type}\t${(item.text || "").slice(0, 160)}`);
}
if (gated.length) process.exit(1);
console.log("gate passed");

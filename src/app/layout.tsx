import type { Metadata } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language";
import { blockSearchIndexing, previewRobots } from "@/lib/preview-indexing";
import { descriptions, langBoot, requestLang } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const viet = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-viet",
  display: "swap",
});

const cjk = Noto_Sans_SC({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-cjk",
  display: "swap",
  preload: false,
  fallback: ["PingFang SC", "Microsoft YaHei", "sans-serif"],
});

const cjkDisplay = Noto_Serif_SC({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600"],
  variable: "--font-cjk-serif",
  display: "swap",
  preload: false,
  fallback: ["Songti SC", "Noto Serif SC", "serif"],
});

export async function generateMetadata(): Promise<Metadata> {
  const lang = await requestLang();
  const description = descriptions.home[lang];
  return {
    title: {
      default: "YANG SUPPLY",
      template: "%s · YANG SUPPLY",
    },
    description,
    openGraph: {
      title: "YANG SUPPLY",
      description,
      siteName: "YANG SUPPLY",
      locale: lang === "zh" ? "zh_CN" : "vi_VN",
      alternateLocale: lang === "zh" ? ["vi_VN"] : ["zh_CN"],
      type: "website",
    },
    // PREVIEW ONLY — remove with src/lib/preview-indexing.ts at official launch.
    ...(blockSearchIndexing ? { robots: previewRobots } : {}),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await requestLang();

  return (
    <html lang={lang === "zh" ? "zh-CN" : "vi"} data-lang={lang} suppressHydrationWarning>
      <body
        className={`${display.variable} ${viet.variable} ${cjk.variable} ${cjkDisplay.variable} flex min-h-screen flex-col bg-paper text-ink antialiased`}
      >
        <Script id="yang-lang-boot" strategy="beforeInteractive">
          {langBoot}
        </Script>
        <LanguageProvider initialLang={lang}>
          <Header />
          <div id="content" className="flex-1">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

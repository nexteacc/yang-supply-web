import type { Metadata } from "next";
import { Be_Vietnam_Pro, Noto_Sans_SC } from "next/font/google";
import { headers } from "next/headers";
import { languageTags } from "@/lib/i18n";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LanguageProvider } from "@/components/language";
import { OrganizationSchema } from "@/components/schema-org";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const viet = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-viet",
  display: "swap",
});

const cjk = Noto_Sans_SC({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cjk",
  display: "swap",
  preload: false,
  fallback: ["PingFang SC", "Microsoft YaHei", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "YANG SUPPLY",
    template: "%s · YANG SUPPLY",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestedLang = (await headers()).get("x-yang-language");
  const lang =
    requestedLang === "zh" || requestedLang === "en" ? requestedLang : "vi";

  return (
    <html lang={languageTags[lang]} data-lang={lang} suppressHydrationWarning>
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${viet.variable} ${cjk.variable} flex min-h-screen flex-col bg-paper text-ink antialiased`}
      >
        <LanguageProvider>
          <Header />
          <div id="content" className="flex-1 pt-[104px] sm:pt-[72px]">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

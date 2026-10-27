import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep canonical and hreflang links in the initial head for every crawler.
  htmlLimitedBots: /.*/,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [48, 64, 80, 128, 256, 320, 384],
  },
  async redirects() {
    const moved = [
      { source: "/products", destination: "/san-pham" },
      { source: "/cooperation", destination: "/hop-tac" },
      { source: "/contact", destination: "/lien-he" },
      { source: "/en", destination: "/en-us" },
      { source: "/en/:path*", destination: "/en-us/:path*" },
      { source: "/zh/cooperation", destination: "/zh/contact" },
    ];
    return [
      ...moved.map((rule) => ({ ...rule, statusCode: 301 })),
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "yang-supply.vercel.app" }],
        destination: "https://www.yangsupply.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

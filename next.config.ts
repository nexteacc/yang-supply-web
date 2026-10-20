import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep canonical and hreflang links in the initial head for every crawler.
  htmlLimitedBots: /.*/,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [48, 64, 80, 128, 256, 320, 384],
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

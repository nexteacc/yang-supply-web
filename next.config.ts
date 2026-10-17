import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [48, 64, 80, 128, 256, 320, 384],
  },
};

export default nextConfig;

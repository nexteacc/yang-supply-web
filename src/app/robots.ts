import type { MetadataRoute } from "next";
import { blockSearchIndexing } from "@/lib/preview-indexing";

/** PREVIEW ONLY — remove this file at official launch. Switch: src/lib/preview-indexing.ts */
export default function robots(): MetadataRoute.Robots {
  if (blockSearchIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}

import type { Metadata } from "next";

/**
 * PREVIEW ONLY — remove at official launch.
 *
 * The first public URL is a preview, so search engines must not index it.
 * This is the single switch. Default (PREVIEW_NOINDEX unset) is noindex:
 *   - <meta name="robots" content="noindex, nofollow"> via layout + page metadata
 *   - robots.txt Disallow: / via src/app/robots.ts
 *
 * To allow indexing without deleting this switch, set PREVIEW_NOINDEX=false.
 * At official launch, delete this file and src/app/robots.ts, and remove the
 * previewRobots usage in src/app/layout.tsx and src/lib/seo.ts.
 */
export const blockSearchIndexing = process.env.PREVIEW_NOINDEX !== "false";

export const previewRobots: Metadata["robots"] = {
  index: false,
  follow: false,
};

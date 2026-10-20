import type { Metadata } from "next";

/**
 * Production indexing is enabled.
 */
export const blockSearchIndexing = false;

export const previewRobots: Metadata["robots"] = {
  index: true,
  follow: true,
};

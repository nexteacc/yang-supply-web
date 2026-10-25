import type { Metadata } from "next";
import { CharmGuideView } from "@/components/guide-views";
import { GuideArticleSchema } from "@/components/schema-org";
import { buildGuideMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildGuideMetadata("vong-tay-charm-y");
}

export default function CharmGuidePage() {
  return (
    <>
      <GuideArticleSchema slug="vong-tay-charm-y" />
      <CharmGuideView />
    </>
  );
}

import type { Metadata } from "next";
import { WorkshopGuideView } from "@/components/guide-views";
import { GuideArticleSchema } from "@/components/schema-org";
import { buildGuideMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildGuideMetadata("nguyen-lieu-handmade-cho-workshop");
}

export default function WorkshopGuidePage() {
  return (
    <>
      <GuideArticleSchema slug="nguyen-lieu-handmade-cho-workshop" />
      <WorkshopGuideView />
    </>
  );
}

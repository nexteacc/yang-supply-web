import type { Metadata } from "next";
import { CooperationPage } from "@/components/cooperation-page";
import { CooperationPageSchema } from "@/components/schema-org";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("en", "cooperation");
}

export default function Page() {
  return (
    <>
      <CooperationPageSchema lang="en" />
      <CooperationPage />
    </>
  );
}

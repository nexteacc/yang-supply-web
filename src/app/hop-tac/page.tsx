import type { Metadata } from "next";
import { CooperationPage } from "@/components/cooperation-page";
import { CooperationPageSchema } from "@/components/schema-org";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("vi", "cooperation");
}

export default function Page() {
  return (
    <>
      <CooperationPageSchema marketId="vi" />
      <CooperationPage />
    </>
  );
}

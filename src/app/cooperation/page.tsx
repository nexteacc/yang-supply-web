import type { Metadata } from "next";
import { CooperationPage } from "@/components/cooperation-page";
import { buildMetadata, requestLang } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(await requestLang(), "cooperation", "合作 / Hợp tác");
}

export default function Page() {
  return <CooperationPage />;
}

import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { buildMetadata, requestLang } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(await requestLang(), "contact", "联系 / Liên hệ");
}

export default function Page() {
  return <ContactPage />;
}
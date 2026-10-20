import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("vi", "contact");
}

export default function Page() {
  return <ContactPage />;
}

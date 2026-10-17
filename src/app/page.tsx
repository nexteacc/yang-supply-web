import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildMetadata, requestLang } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(await requestLang(), "home");
}

export default function Page() {
  return <HomePage />;
}

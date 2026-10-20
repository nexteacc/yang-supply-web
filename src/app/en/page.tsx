import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("en", "home");
}

export default function Page() {
  return <HomePage />;
}

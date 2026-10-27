import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { marketFromPrefixParam, marketList } from "@/lib/markets";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ market: string }> };

export function generateStaticParams() {
  return marketList
    .filter((market) => market.prefix)
    .map((market) => ({ market: market.prefix.slice(1) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { market } = await params;
  const found = marketFromPrefixParam(market);
  if (!found) return {};
  return buildMetadata(found.id, "home");
}

export default async function Page({ params }: Props) {
  const { market } = await params;
  if (!marketFromPrefixParam(market)) notFound();
  return <HomePage />;
}

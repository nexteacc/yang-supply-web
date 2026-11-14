import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPage } from "@/components/contact-page";
import { CooperationPage } from "@/components/cooperation-page";
import { ProductsPage } from "@/components/products-page";
import { UsOrderingFaq, UsProductFaq } from "@/components/us-faq";
import {
  UsCooperationTables,
  UsProductSpecTable,
} from "@/components/us-wholesale-tables";
import {
  ContactPageSchema,
  CooperationPageSchema,
  ProductsListSchema,
} from "@/components/schema-org";
import {
  marketFromPrefixParam,
  marketList,
  type MarketId,
  type PageKey,
} from "@/lib/markets";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ market: string; page: string }> };

export function generateStaticParams() {
  return marketList
    .filter((market) => market.prefix)
    .flatMap((market) =>
      Object.values(market.slugs)
        .filter((slug): slug is string => Boolean(slug))
        .map((page) => ({ market: market.prefix.slice(1), page })),
    );
}

export const dynamicParams = false;

function resolve(prefix: string, slug: string): { id: MarketId; page: PageKey } | null {
  const market = marketFromPrefixParam(prefix);
  if (!market) return null;
  const match = (
    Object.entries(market.slugs) as [Exclude<PageKey, "home">, string | undefined][]
  ).find(([, value]) => value === slug);
  if (!match?.[1]) return null;
  return { id: market.id, page: match[0] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { market, page } = await params;
  const resolved = resolve(market, page);
  if (!resolved) return {};
  return buildMetadata(resolved.id, resolved.page);
}

export default async function Page({ params }: Props) {
  const { market, page } = await params;
  const resolved = resolve(market, page);
  if (!resolved) notFound();

  if (resolved.page === "products") {
    return (
      <>
        <ProductsListSchema marketId={resolved.id} />
        <ProductsPage
          specTable={resolved.id === "en-us" ? <UsProductSpecTable /> : null}
          faq={resolved.id === "en-us" ? <UsProductFaq /> : null}
        />
      </>
    );
  }
  if (resolved.page === "cooperation") {
    return (
      <>
        <CooperationPageSchema marketId={resolved.id} />
        <CooperationPage
          termsTable={resolved.id === "en-us" ? <UsCooperationTables /> : null}
          faq={resolved.id === "en-us" ? <UsOrderingFaq /> : null}
        />
      </>
    );
  }
  return (
    <>
      <ContactPageSchema marketId={resolved.id} />
      <ContactPage />
    </>
  );
}

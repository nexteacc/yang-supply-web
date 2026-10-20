import type { Metadata } from "next";
import { ProductsPage } from "@/components/products-page";
import { ProductsListSchema } from "@/components/schema-org";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("vi", "products");
}

export default function Page() {
  return (
    <>
      <ProductsListSchema lang="vi" />
      <ProductsPage />
    </>
  );
}

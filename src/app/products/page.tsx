import type { Metadata } from "next";
import { ProductsPage } from "@/components/products-page";
import { buildMetadata, requestLang } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(await requestLang(), "products", "产品 / Sản phẩm");
}

export default function Page() {
  return <ProductsPage />;
}

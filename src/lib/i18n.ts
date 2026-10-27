import type { MarketId } from "@/lib/markets";
import { markets, pageKeyFromPath } from "@/lib/markets";

export function marketFromPathname(pathname: string) {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return markets.zh;
  if (pathname === "/en-us" || pathname.startsWith("/en-us/")) {
    return markets["en-us"];
  }
  return markets.vi;
}

export function languageFromPath(pathname: string): MarketId {
  return marketFromPathname(pathname).id;
}

/** Same page in another market. Preserves a hash or query carried in `path`. */
export function localizedPath(marketId: MarketId, path = "/"): string {
  const hashAt = path.indexOf("#");
  const hash = hashAt >= 0 ? path.slice(hashAt) : "";
  const beforeHash = hashAt >= 0 ? path.slice(0, hashAt) : path;
  const queryAt = beforeHash.indexOf("?");
  const query = queryAt >= 0 ? beforeHash.slice(queryAt) : "";
  const pathname = queryAt >= 0 ? beforeHash.slice(0, queryAt) : beforeHash;
  const market = markets[marketId];

  if (pathname === "/huong-dan" || pathname.startsWith("/huong-dan/")) {
    if (marketId === "vi") return `${pathname}${query}${hash}`;
    return `${market.pages.products}${query}${hash}`;
  }

  const key = pageKeyFromPath(pathname || "/");
  const destination =
    market.pages[key] ??
    (key === "cooperation" ? market.pages.contact : market.pages.home);
  return `${destination}${query}${hash}`;
}

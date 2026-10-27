import { NextResponse, type NextRequest } from "next/server";
import { languageFromPath } from "@/lib/i18n";

const moved: Record<string, string> = {
  "/products": "/san-pham",
  "/cooperation": "/hop-tac",
  "/contact": "/lien-he",
  "/en": "/en-us",
  "/zh/cooperation": "/zh/contact",
};

function redirectTarget(pathname: string): string | null {
  const bare = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (moved[bare]) return moved[bare];
  if (bare.startsWith("/en/") && !bare.startsWith("/en-us")) {
    return `/en-us${bare.slice(3)}`;
  }
  return null;
}

/** Pass the URL locale to the document shell, including the initial HTML response. */
export function middleware(request: NextRequest) {
  const destination = redirectTarget(request.nextUrl.pathname);
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 301);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-yang-language",
    languageFromPath(request.nextUrl.pathname),
  );
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    "/((?!_next|api|icon.svg|favicon.ico|robots.txt|sitemap.xml|llms.txt|products/).*)",
  ],
};

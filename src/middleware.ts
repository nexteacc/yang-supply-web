import { NextResponse, type NextRequest } from "next/server";
import { languageFromPath } from "@/lib/i18n";

/** Pass the URL locale to the document shell, including the initial HTML response. */
export function middleware(request: NextRequest) {
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

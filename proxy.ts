import { NextResponse, type NextRequest } from "next/server";

// English is served unprefixed ("/core"); Chinese under "/zh/core".
// Internally every page lives at /[locale]/..., so unprefixed requests
// are rewritten to /en/... and direct /en/... hits redirect to the
// canonical unprefixed URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Skip Next internals, metadata routes and static assets.
    "/((?!_next|api|images|favicon.ico|icon|opengraph-image|sitemap.xml|robots.txt|.*\\.).*)"
  ]
};

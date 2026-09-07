import { NextResponse, type NextRequest } from "next/server";

// English is served unprefixed ("/core"); Chinese under "/zh/core".
// Internally every page lives at /[locale]/..., so unprefixed requests
// are rewritten to /en/... and direct /en/... hits redirect to the
// canonical unprefixed URL.
// Routes that have been renamed. Old URLs are indexed and linked from outside, so
// they keep working permanently rather than becoming 404s the day the nav changed.
// Keyed on the path without any locale prefix.
const RENAMED: Record<string, string> = {
  "/use-cases": "/industries"
};

/** The renamed target for a path, preserving its locale prefix, or null. */
function renamed(pathname: string): string | null {
  const zh = pathname === "/zh" || pathname.startsWith("/zh/");
  const bare = zh ? pathname.slice(3) || "/" : pathname;
  const target = RENAMED[bare];
  if (!target) return null;
  return zh ? `/zh${target}` : target;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const moved = renamed(pathname);
  if (moved) {
    const url = request.nextUrl.clone();
    url.pathname = moved;
    return NextResponse.redirect(url, 308);
  }

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

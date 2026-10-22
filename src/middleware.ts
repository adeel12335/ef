import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { redirectTarget } from "@/lib/redirects";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const target = redirectTarget(host, request.nextUrl.pathname, request.nextUrl.search);
  if (!target) return NextResponse.next();

  const url = target.startsWith("http")
    ? target
    : new URL(target, request.url);
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};

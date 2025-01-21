import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  const locale = url.pathname.split("/")[1];

  if (!locale || !["en", "ar"].includes(locale)) {
    return NextResponse.redirect(new URL("/en" + url.pathname, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"], // تحديد المسارات التي يتم تطبيق الـ middleware عليها
};

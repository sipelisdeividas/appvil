import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import nextAuthMiddleware from "next-auth/middleware";

let locales = ["lt", "en"];
let defaultLocale = "lt";

function getLocale(request) {
  let headers = { "accept-language": "lt" };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale); // -> 'en'
}

export function middleware(request) {
  // cancel if exception
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }

  // check if auth is required
  if (
    pathname.includes("/dashboard") ||
    pathname.includes("/add-project") ||
    pathname.includes("/edit-project")
  ) {
    // check & handle if logged in
    const nextAuthResponse = nextAuthMiddleware(request);
    if (nextAuthResponse) {
      return nextAuthResponse;
    }
  }

  // Continue if no NextAuth middleware response
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

// export { default } from "next-auth/middleware";
// import { i18nRouter } from "next-i18n-router";
// import i18nConfig from "./i18nConfig";

// export function middleware(request) {
//   return i18nRouter(request, i18nConfig);
// }

// export const config = {
//   matcher: ["/((?!api|static|.*\\..*|_next).*)"],
// };

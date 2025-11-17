import createMiddleware from 'next-intl/middleware';
import {locales, pathnames} from './src/i18n/navigation-config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  pathnames,
  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match root and locale-specific paths
    '/',
    '/(en|ar|sv)/:path*',
    // But exclude files like favicon, api routes, etc
    '/((?!api|_next|favicon|public).*)'
  ]
};
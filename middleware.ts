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
  matcher: ['/', '/(en|ar|sv)/:path*']
};
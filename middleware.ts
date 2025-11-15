import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'ar', 'sv'];

async function getLocaleFromIp(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';

  // In a real-world scenario, you would make a fetch request to an IP geolocation service.
  // Since we can't make external network requests in this environment, we'll simulate the response.
  // const res = await fetch(`http://ip-api.com/json/${ip}?fields=countryCode`);
  // const data = await res.json();
  // const country = data.countryCode;

  // Simulate the API response for testing purposes.
  const country = 'SE'; // Simulate a user from Sweden

  if (country === 'SE') {
    return 'sv';
  } else if (country === 'AE' || country === 'EG' || country === 'SA') { // Example Arabic-speaking countries
    return 'ar';
  } else {
    return 'en';
  }
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = await getLocaleFromIp(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en'
  });

  return nextIntlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|ar|sv)/:path*']
};

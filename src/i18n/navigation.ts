import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ar', 'sv'] as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',

  // If locales use different paths, an object
  // can be used to configure them separately.
  '/about': {
    en: '/about',
    sv: '/om-oss',
    ar: '/حولنا'
  },
  '/portfolio': {
    en: '/portfolio',
    sv: '/portfolio',
    ar: '/المعرض'
  }
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({ locales });
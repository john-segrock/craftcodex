import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ar', 'sv'] as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  '/about': {
    en: '/about',
    sv: '/om-oss',
    ar: '/حولنا'
  },
  '/portfolio': {
    en: '/portfolio',
    sv: '/portfolio',
    ar: '/المعرض'
  },
  '/contact': {
    en: '/contact',
    sv: '/kontakt',
    ar: '/اتصل'
  },
  '/services': {
    en: '/services',
    sv: '/tjänster',
    ar: '/الخدمات'
  },
  '/quote': {
    en: '/quote',
    sv: '/offert',
    ar: '/عرض_السعر'
  },
  '/process': {
    en: '/process',
    sv: '/process',
    ar: '/العملية'
  }
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    pathnames
  });
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ar', 'sv'] as const;

// All locales use the same pathnames
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/portfolio': '/portfolio',
  '/contact': '/contact',
  '/services': '/services',
  '/quote': '/quote',
  '/process': '/process'
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation({
    locales,
    pathnames
  });
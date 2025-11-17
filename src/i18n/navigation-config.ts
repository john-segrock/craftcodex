export const locales = ['en', 'ar', 'sv'] as const;

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/services': '/services',
  '/portfolio': '/portfolio',
  '/portfolio/[slug]': '/portfolio/[slug]',
  '/blog/[slug]': '/blog/[slug]',
  '/process': '/process',
  '/contact': '/contact',
  '/quote': '/contact'
} as const;

// Use the default: `always`
export const localePrefix = undefined;

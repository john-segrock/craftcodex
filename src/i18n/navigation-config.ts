export const locales = ['en', 'ar', 'sv'] as const;

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    sv: '/om-oss',
    ar: '/حولنا'
  },
  '/services': {
    en: '/services',
    sv: '/tjanster',
    ar: '/خدماتنا'
  },
  '/portfolio': {
    en: '/portfolio',
    sv: '/portfolio',
    ar: '/معرض-اععمالنا'
  },
  '/process': {
    en: '/process',
    sv: '/process',
    ar: '/العملية'
  },
  '/contact': {
    en: '/contact',
    sv: '/kontakt',
    ar: '/اتصل-بنا'
  },
  '/quote': '/contact'
} as const;

// Use the default: `always`
export const localePrefix = undefined;

import { getRequestConfig } from 'next-intl/server';
import { locales } from './navigation-config';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid, fallback to 'en' if not
  const validLocales = locales as unknown as string[];
  const currentLocale = (validLocales.includes(locale || '') ? locale : 'en') as string;
  
  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});

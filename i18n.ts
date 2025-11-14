import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = (locale || 'en') as string;
  return {
    locale: currentLocale,
    messages: (await import(`./messages/${currentLocale}.json`)).default
  };
});

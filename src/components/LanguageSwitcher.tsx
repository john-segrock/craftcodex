'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useTransition } from 'react';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      // Get the current path without the locale prefix
      const segments = pathname.split('/').filter(Boolean);

      // Remove the current locale from the path if it exists
      if (['en', 'ar', 'sv'].includes(segments[0])) {
        segments.shift();
      }

      // Build the new path with the new locale
      const newPath = `/${nextLocale}/${segments.join('/')}`;

      // Use window.location to trigger a full page navigation and reload translations
      window.location.href = newPath;
    });
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      disabled={isPending}
      className="bg-transparent text-white disabled:opacity-50"
    >
      <option value="en">English</option>
      <option value="sv">Svenska</option>
      <option value="ar">العربية</option>
    </select>
  );
};

export default LanguageSwitcher;
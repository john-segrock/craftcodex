'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPathname);
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      className="bg-slate-200 dark:bg-gray-500 px-4 py-2 rounded-lg absolute right-5 top-12"
    >
      <option value="en">English</option>
      <option value="sv">Svenska</option>
      <option value="ar">العربية</option>
    </select>
  );
};

export default LanguageSwitcher;

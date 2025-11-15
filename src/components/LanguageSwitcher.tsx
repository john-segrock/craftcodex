'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    // @ts-expect-error -- TypeScript will validate that only known `params`
    // are used in combination with a given `pathname`. Since the two will
    // always match for the current route, we can skip runtime checks.
    router.replace({ pathname, params }, { locale: nextLocale });
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      className="bg-transparent text-white"
    >
      <option value="en">English</option>
      <option value="sv">Svenska</option>
      <option value="ar">العربية</option>
    </select>
  );
};

export default LanguageSwitcher;
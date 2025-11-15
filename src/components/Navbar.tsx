'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Craftcodex
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/">{t('hem')}</Link>
          <Link href="/services">{t('services')}</Link>
          <Link href="/process">{t('process')}</Link>
          <Link href="/portfolio">{t('portfolio')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/contact">{t('contact')}</Link>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Link
            href="/quote"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
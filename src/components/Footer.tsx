'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-white mt-auto p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Craftcodex</h3>
          <p>{t('description')}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
          <ul>
            <li>
              <Link href="/">{t('hem')}</Link>
            </li>
            <li>
              <Link href="/services">{t('services')}</Link>
            </li>
            <li>
              <Link href="/portfolio">{t('portfolio')}</Link>
            </li>
            <li>
              <Link href="/contact">{t('contact')}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{t('connect')}</h3>
          {/* Social media links would go here */}
          <p>info@craftcodex.com</p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} {t('copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
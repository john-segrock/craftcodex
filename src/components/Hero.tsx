'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import './Hero.css';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      <div className="plasma-bg"></div>
      <div className="container mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg md:text-xl mb-8">{t('subtitle')}</p>
        <div className="space-x-4">
          <Link
            href="/quote"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href="/services"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded"
          >
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
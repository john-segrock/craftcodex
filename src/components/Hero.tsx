'use client';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0">
        {/* Plasma animation will go here */}
      </div>
      <div className="container mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg md:text-xl mb-8">{t('subtitle')}</p>
        <div className="space-x-4">
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
            {t('cta_primary')}
          </a>
          <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded">
            {t('cta_secondary')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

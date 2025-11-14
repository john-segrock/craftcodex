'use client';
import { useTranslations } from 'next-intl';

const Cta = () => {
  const t = useTranslations('Cta');

  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
        <p className="text-lg md:text-xl mb-8">{t('subtitle')}</p>
        <a href="#" className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded">
          {t('cta_button')}
        </a>
      </div>
    </section>
  );
};

export default Cta;

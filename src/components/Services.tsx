'use client';
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('Services');

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('service1_title')}</h3>
            <p>{t('service1_description')}</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('service2_title')}</h3>
            <p>{t('service2_description')}</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('service3_title')}</h3>
            <p>{t('service3_description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
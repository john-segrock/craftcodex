'use client';
import { useTranslations } from 'next-intl';

const ServicesPage = () => {
  const t = useTranslations('ServicesPage');

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-12">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t('service1_title')}</h2>
          <p>{t('service1_description')}</p>
        </div>
        <div className="p-8 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t('service2_title')}</h2>
          <p>{t('service2_description')}</p>
        </div>
        <div className="p-8 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t('service3_title')}</h2>
          <p>{t('service3_description')}</p>
        </div>
        <div className="p-8 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t('service4_title')}</h2>
          <p>{t('service4_description')}</p>
        </div>
        <div className="p-8 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t('service5_title')}</h2>
          <p>{t('service5_description')}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

'use client';
import { useTranslations } from 'next-intl';

const Process = () => {
  const t = useTranslations('Process');

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-8 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">{t('step1_title')}</h3>
            <p>{t('step1_description')}</p>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">{t('step2_title')}</h3>
            <p>{t('step2_description')}</p>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">{t('step3_title')}</h3>
            <p>{t('step3_description')}</p>
          </div>
          <div className="p-8 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">4</div>
            <h3 className="text-xl font-bold mb-2">{t('step4_title')}</h3>
            <p>{t('step4_description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

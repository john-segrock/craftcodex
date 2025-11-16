'use client';
import { useTranslations } from 'next-intl';

const Process = () => {
  const t = useTranslations('Process');

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">{t('step1_title')}</h3>
              <p>{t('step1_description')}</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">{t('step2_title')}</h3>
              <p>{t('step2_description')}</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">{t('step3_title')}</h3>
              <p>{t('step3_description')}</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">{t('step4_title')}</h3>
              <p>{t('step4_description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
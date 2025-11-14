'use client';
import { useTranslations } from 'next-intl';

const ValueProposition = () => {
  const t = useTranslations('ValueProposition');

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('card1_title')}</h3>
            <p>{t('card1_description')}</p>
          </div>
          <div className="p-8 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('card2_title')}</h3>
            <p>{t('card2_description')}</p>
          </div>
          <div className="p-8 border rounded-lg">
            <h3 className="text-xl font-bold mb-2">{t('card3_title')}</h3>
            <p>{t('card3_description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

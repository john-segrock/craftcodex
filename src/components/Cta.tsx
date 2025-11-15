'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const Cta = () => {
  const t = useTranslations('Cta');

  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
        <p className="text-lg md:text-xl mb-8">{t('subtitle')}</p>
        <Link
          href="/quote"
          className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded"
        >
          {t('cta_button')}
        </Link>
      </div>
    </section>
  );
};

export default Cta;
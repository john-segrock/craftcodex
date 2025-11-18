'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const Cta = () => {
  const t = useTranslations('Cta');

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-card border border-border rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
            <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto">{t('subtitle')}</p>
            <Link
            href="/quote"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
            {t('cta_button')}
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;

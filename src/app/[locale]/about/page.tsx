import { useTranslations } from 'next-intl';

const AboutPage = () => {
  const t = useTranslations('About');

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-12">{t('title')}</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">{t('intro')}</p>
        <h2 className="text-3xl font-bold mb-4">{t('vision_title')}</h2>
        <p className="mb-8">{t('vision_description')}</p>
        <h2 className="text-3xl font-bold mb-4">{t('process_title')}</h2>
        <p className="mb-8">{t('process_description')}</p>
      </div>
    </div>
  );
};

export default AboutPage;

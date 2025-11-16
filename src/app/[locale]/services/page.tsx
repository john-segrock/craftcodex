
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const services = ['service1', 'service2', 'service3', 'service4', 'service5'];

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="max-w-2xl mx-auto mb-10">{t('intro')}</p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service} className="p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-xl font-semibold mb-2">{t(`${service}.title`)}</h3>
            <p>{t(`${service}.description`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

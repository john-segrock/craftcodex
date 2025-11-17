'use client';
import { useTranslations } from 'next-intl';
import { Code, Bot, Shield, Cloudy } from 'lucide-react';

const Services = () => {
  const t = useTranslations('Services');

  const services = [
    {
      icon: <Code size={40} className="text-primary" />,
      title: t('service1_title'),
      description: t('service1_description'),
      link: '/services#web-development',
    },
    {
      icon: <Bot size={40} className="text-primary" />,
      title: t('service2_title'),
      description: t('service2_description'),
      link: '/services#ai-solutions',
    },
    {
      icon: <Shield size={40} className="text-primary" />,
      title: t('service3_title'),
      description: t('service3_description'),
      link: '/services#cyber-security',
    },
    {
        icon: <Cloudy size={40} className="text-primary" />,
        title: t('service4_title'),
        description: t('service4_description'),
        link: '/services#devops',
      },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a href={service.link} key={index}>
              <div className="bg-background p-8 rounded-lg border border-border h-full flex flex-col items-start hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-secondary flex-grow">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

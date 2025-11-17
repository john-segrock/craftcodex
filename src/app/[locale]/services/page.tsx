'use client';
import { useTranslations } from 'next-intl';
import { Code, Bot, Shield, Cloudy, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const services = [
    {
      icon: <Code size={40} className="text-primary" />,
      title: t('service1.title'),
      description: t('service1.description'),
    },
    {
      icon: <Bot size={40} className="text-primary" />,
      title: t('service2.title'),
      description: t('service2.description'),
    },
    {
      icon: <Shield size={40} className="text-primary" />,
      title: t('service3.title'),
      description: t('service3.description'),
    },
    {
      icon: <Cloudy size={40} className="text-primary" />,
      title: t('service4.title'),
      description: t('service4.description'),
    },
  ];

  const faqs = [
    {
        question: t('faq1_question'),
        answer: t('faq1_answer'),
    },
    {
        question: t('faq2_question'),
        answer: t('faq2_answer'),
    },
    {
        question: t('faq3_question'),
        answer: t('faq3_answer'),
    }
  ]

  return (
    <main className="container mx-auto px-4 py-20 text-foreground">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-6 text-lg text-secondary">{t('intro')}</p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-card p-8 rounded-lg border border-border">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-secondary">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-4xl font-bold tracking-tight">{t('process_title')}</h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">{t('process_subtitle')}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2">{t('process1_title')}</h3>
                <p className="text-secondary">{t('process1_description')}</p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2">{t('process2_title')}</h3>
                <p className="text-secondary">{t('process2_description')}</p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-2">{t('process3_title')}</h3>
                <p className="text-secondary">{t('process3_description')}</p>
            </div>
        </div>
      </div>

      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-12">{t('faq_title')}</h2>
        <div className="space-y-8">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-secondary">{faq.answer}</p>
                </div>
            ))}
        </div>
      </div>

    </main>
  );
}

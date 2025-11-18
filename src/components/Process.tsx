'use client';
import { useTranslations } from 'next-intl';
import { Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

const Process = () => {
  const t = useTranslations('Process');

  const processSteps = [
    {
      icon: <Lightbulb size={40} className="text-primary" />,
      title: t('step1_title'),
      description: t('step1_description'),
    },
    {
      icon: <Code size={40} className="text-primary" />,
      title: t('step2_title'),
      description: t('step2_description'),
    },
    {
      icon: <Rocket size={40} className="text-primary" />,
      title: t('step3_title'),
      description: t('step3_description'),
    },
    {
      icon: <CheckCircle size={40} className="text-primary" />,
      title: t('step4_title'),
      description: t('step4_description'),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

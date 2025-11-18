'use client';
import { useTranslations } from 'next-intl';
import { Gem, Rocket, ShieldCheck } from 'lucide-react';

const ValueProposition = () => {
  const t = useTranslations('ValueProposition');

  const propositions = [
    {
      icon: <Gem size={48} className="text-primary" />,
      title: t('card1_title'),
      description: t('card1_description'),
    },
    {
      icon: <Rocket size={48} className="text-primary" />,
      title: t('card2_title'),
      description: t('card2_description'),
    },
    {
      icon: <ShieldCheck size={48} className="text-primary" />,
      title: t('card3_title'),
      description: t('card3_description'),
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground p-8 rounded-lg border border-border text-center"
            >
              <div className="flex justify-center mb-4">{prop.icon}</div>
              <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
              <p className="text-secondary">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

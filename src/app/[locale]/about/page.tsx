'use client';
import { useTranslations } from 'next-intl';
import Team from '@/components/Team';
import { Gem, Handshake, Code } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('About');

  const principles = [
    {
      icon: <Gem size={40} className="text-primary" />,
      title: t('principle1_title'),
      description: t('principle1_description'),
    },
    {
      icon: <Handshake size={40} className="text-primary" />,
      title: t('principle2_title'),
      description: t('principle2_description'),
    },
    {
      icon: <Code size={40} className="text-primary" />,
      title: t('principle3_title'),
      description: t('principle3_description'),
    },
  ];

  return (
    <main className="container mx-auto px-4 py-20 text-foreground">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-6 text-lg text-secondary">{t('intro')}</p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('vision_title')}</h2>
          <p className="text-lg text-secondary">{t('vision_description')}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('process_title')}</h2>
          <p className="text-lg text-secondary">{t('process_description')}</p>
        </div>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border text-center">
                    <div className="flex justify-center mb-4">{principle.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-secondary">{principle.description}</p>
                </div>
            ))}
        </div>
      </div>

      <div className="mt-20">
        <Team />
      </div>
    </main>
  );
}

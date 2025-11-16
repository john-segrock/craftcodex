
'use client';

import { useTranslations } from 'next-intl';
import Team from '@/components/Team';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main className="container mx-auto px-4 py-20 text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{t('title')}</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">{t('intro')}</p>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('vision_title')}</h2>
            <p className="text-lg leading-8 text-gray-300">{t('vision_description')}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('process_title')}</h2>
            <p className="text-lg leading-8 text-gray-300">{t('process_description')}</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Team />
      </div>
    </main>
  );
}

'use client';
import { useTranslations } from 'next-intl';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const t = useTranslations('BlogDetailPage');

  return (
    <main className="container mx-auto px-4 py-20 text-foreground">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{t('title')} {params.slug}</h1>
        <p className="mt-6 text-lg text-secondary">{t('description')}</p>
      </div>
    </main>
  );
}

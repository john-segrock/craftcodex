'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  const t = useTranslations('PortfolioPage');

  const projects = [
    {
        title: t('project1.title'),
        description: t('project1.description'),
        stack: t('project1.stack').split(','),
        slug: 'project-1'
    },
    {
        title: t('project2.title'),
        description: t('project2.description'),
        stack: t('project2.stack').split(','),
        slug: 'project-2'
    },
    {
        title: t('project3.title'),
        description: t('project3.description'),
        stack: t('project3.stack').split(','),
        slug: 'project-3'
    },
    {
        title: t('project4.title'),
        description: t('project4.description'),
        stack: t('project4.stack').split(','),
        slug: 'project-4'
    }
  ]

  return (
    <main className="container mx-auto px-4 py-20 text-foreground">
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{t('title')}</h1>
            <p className="mt-6 text-lg text-secondary">{t('intro')}</p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <Link href={{ pathname: '/portfolio/[slug]', params: { slug: project.slug } }} key={index}>
                    <div className="bg-card rounded-lg border border-border p-8 h-full flex flex-col group">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-secondary mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center text-primary font-semibold">
                            <span>{t('view_project')}</span>
                            <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </main>
  );
}

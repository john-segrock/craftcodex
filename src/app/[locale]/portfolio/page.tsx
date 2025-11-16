
import { useTranslations } from 'next-intl';

export default function PortfolioPage() {
  const t = useTranslations('PortfolioPage');
  const projects = ['project1', 'project2', 'project3', 'project4'];

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="max-w-2xl mx-auto mb-10">{t('intro')}</p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project} className="p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-xl font-semibold mb-2">{t(`${project}.title`)}</h3>
            <p className="mb-4">{t(`${project}.description`)}</p>
            <div className="flex flex-wrap gap-2">
              {t(`${project}.stack`).split(',').map((tech) => (
                <span key={tech} className="bg-gray-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';
import { useTranslations } from 'next-intl';

const PortfolioPage = () => {
  const t = useTranslations('PortfolioPage');

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-12">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Project 1" className="w-full h-64 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{t('project1_title')}</h3>
            <p className="mb-4">{t('project1_description')}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">Spring Boot</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Project 2" className="w-full h-64 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{t('project2_title')}</h3>
            <p className="mb-4">{t('project2_description')}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">TypeScript</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Project 3" className="w-full h-64 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{t('project3_title')}</h3>
            <p className="mb-4">{t('project3_description')}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">Flutter</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">API Backend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

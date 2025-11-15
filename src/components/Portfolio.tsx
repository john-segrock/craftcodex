'use client';
import { useTranslations } from 'next-intl';

const Portfolio = () => {
  const t = useTranslations('Portfolio');

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items will be mapped here */}
          <div className="border rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Project 1" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('project1_title')}</h3>
              <p>{t('project1_description')}</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Project 2" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('project2_title')}</h3>
              <p>{t('project2_description')}</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300" alt="Project 3" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('project3_title')}</h3>
              <p>{t('project3_description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

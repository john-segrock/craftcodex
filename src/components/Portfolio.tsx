'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Portfolio = () => {
  const t = useTranslations('Portfolio');

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-1428bc38a5b6"
              alt="Project 1"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('project1_title')}</h3>
              <p>{t('project1_description')}</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Project 2"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('project2_title')}</h3>
              <p>{t('project2_description')}</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
              alt="Project 3"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
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
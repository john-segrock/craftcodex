'use client';
import { useTranslations } from 'next-intl';

const Team = () => {
  const t = useTranslations('Team');

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team members will be mapped here */}
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">{t('member1_name')}</h3>
            <p className="text-gray-500">{t('member1_role')}</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">{t('member2_name')}</h3>
            <p className="text-gray-500">{t('member2_role')}</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">{t('member3_name')}</h3>
            <p className="text-gray-500">{t('member3_role')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

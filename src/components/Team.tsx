'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Team = () => {
  const t = useTranslations('Team');

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1557862921-37829c790f19"
              alt="Team Member 1"
              width={150}
              height={150}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{t('member1_name')}</h3>
            <p className="text-gray-400">{t('member1_role')}</p>
          </div>
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e"
              alt="Team Member 2"
              width={150}
              height={150}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{t('member2_name')}</h3>
            <p className="text-gray-400">{t('member2_role')}</p>
          </div>
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
              alt="Team Member 3"
              width={150}
              height={150}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{t('member3_name')}</h3>
            <p className="text-gray-400">{t('member3_role')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
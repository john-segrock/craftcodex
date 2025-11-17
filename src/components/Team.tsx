'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Team = () => {
  const t = useTranslations('Team');

  const teamMembers = [
    {
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19',
      name: t('member1_name'),
      role: t('member1_role'),
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e',
      name: t('member2_name'),
      role: t('member2_role'),
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      name: t('member3_name'),
      role: t('member3_role'),
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">{t('title')}</h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border border-border p-8 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="text-secondary hover:text-primary" /></a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} className="text-secondary hover:text-primary" /></a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} className="text-secondary hover:text-primary" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

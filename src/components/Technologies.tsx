'use client';
import { useTranslations } from 'next-intl';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiAmazon,
} from 'react-icons/si';

const Technologies = () => {
  const t = useTranslations('Technologies');

  const technologies = [
    { icon: <SiNextdotjs size={48} />, name: 'Next.js' },
    { icon: <SiReact size={48} />, name: 'React' },
    { icon: <SiTailwindcss size={48} />, name: 'Tailwind CSS' },
    { icon: <SiTypescript size={48} />, name: 'TypeScript' },
    { icon: <SiNodedotjs size={48} />, name: 'Node.js' },
    { icon: <SiPython size={48} />, name: 'Python' },
    { icon: <SiDocker size={48} />, name: 'Docker' },
    { icon: <SiAmazon size={48} />, name: 'AWS' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg bg-card border border-border">
              {tech.icon}
              <p className="mt-2 text-sm font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const t = useTranslations('Blog');

  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2',
      category: t('post1_category'),
      title: t('post1_title'),
      excerpt: t('post1_excerpt'),
      slug: 'post-1',
    },
    {
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e',
      category: t('post2_category'),
      title: t('post2_title'),
      excerpt: t('post2_excerpt'),
      slug: 'post-2',
    },
    {
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
      category: t('post3_category'),
      title: t('post3_title'),
      excerpt: t('post3_excerpt'),
      slug: 'post-3',
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
          {posts.map((post, index) => (
            <Link href={{ pathname: '/blog/[slug]', params: { slug: post.slug } }} key={index}>
              <div className="bg-background rounded-lg border border-border overflow-hidden group">
                <div className="relative h-64">
                    <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{objectFit: "cover"}}
                    className="transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-6">
                  <p className="text-primary font-semibold text-sm mb-2">{post.category}</p>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-secondary mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-semibold">
                    <span>{t('read_more')}</span>
                    <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

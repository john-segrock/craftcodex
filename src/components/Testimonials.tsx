'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      quote: t('testimonial1_quote'),
      author: t('testimonial1_author'),
      role: t('testimonial1_role'),
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    },
    {
      quote: t('testimonial2_quote'),
      author: t('testimonial2_author'),
      role: t('testimonial2_role'),
      avatar: 'https://images.unsplash.com/photo-1580852300654-03780352d4b4',
    },
    {
      quote: t('testimonial3_quote'),
      author: t('testimonial3_author'),
      role: t('testimonial3_role'),
      avatar: 'https://images.unsplash.com/photo-1600878459436-c613374244a2',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">{t('title')}</h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-card rounded-lg border border-border p-8 text-center max-w-3xl mx-auto">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    style={{objectFit: "cover"}}
                    className="rounded-full"
                  />
                </div>
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold text-lg">{testimonial.author}</h4>
                <p className="text-secondary">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

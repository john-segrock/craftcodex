'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const t = useTranslations('Hero');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;
    let time = 0;

    const noise = (x: number, y: number, t: number) => {
      return Math.sin(x / 300 + t) + Math.cos(y / 150 + t) + Math.sin((x + y) / 400 + t);
    };

    const draw = () => {
      time += 0.003;
      const imageData = ctx.createImageData(width, height);
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const value = noise(x, y, time);
          const color = (value + 3) * 42.5;
          const index = (y * width + x) * 4;
          // Adjusted colors for a purple/violet plasma effect matching the theme
          imageData.data[index] = color * 0.7; // R
          imageData.data[index + 1] = color * 0.5; // G
          imageData.data[index + 2] = color * 1.0 + 60; // B
          imageData.data[index + 3] = 255; // Alpha
        }
      }
      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background text-foreground">
      <div className="plasma-bg">
        <canvas ref={canvasRef} />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href="/services"
            className="bg-card hover:bg-card/80 text-card-foreground font-bold py-3 px-8 rounded-lg border border-border transition-transform transform hover:scale-105"
          >
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

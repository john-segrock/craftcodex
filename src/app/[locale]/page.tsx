import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <Process />
      <Portfolio />
      <Team />
      <Cta />
    </>
  );
}
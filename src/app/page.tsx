import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Partners />
      <Services />
    </div>
  );
}

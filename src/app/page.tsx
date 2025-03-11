import CallToAction from '@/components/sections/CallToAction';
import CaseStudies from '@/components/sections/CaseStudies';
import ContactUs from '@/components/sections/ContactUs';
import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import WorkingProcess from '@/components/sections/WorkingProcess';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Partners />
      <Services />
      <CallToAction />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

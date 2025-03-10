'use client';

import { colors, typography } from '@/styles/typography';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
  const handleConsultation = () => {
    console.log('Book a consultation clicked');
  };

  return (
    <section className="w-full bg-white px-6 py-14 md:px-16 md:py-20 lg:px-20">
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h1 className={`${typography.h1} ${colors.dark} mb-6 inline-block rounded-lg py-2`}>
            Navigating the digital landscape for success
          </h1>
          <p className={`${typography.pLarge} ${colors.dark} mb-10 max-w-xl`}>
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </p>

          <Button
            variant="primary"
            size="large"
            aria-label="Book a consultation"
            onClick={handleConsultation}
            className="font-medium"
          >
            Book a consultation
          </Button>
        </div>

        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative flex h-[515px] w-full max-w-[600px] items-center justify-center">
            {/* Decorative stars */}
            <div className="absolute top-0 right-1/4 z-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0L26.3 13.7L40 20L26.3 26.3L20 40L13.7 26.3L0 20L13.7 13.7L20 0Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="absolute bottom-10 left-0 z-10">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 0L31.6 16.4L48 24L31.6 31.6L24 48L16.4 31.6L0 24L16.4 16.4L24 0Z"
                  fill="black"
                />
              </svg>
            </div>

            {/* Main illustration */}
            <div className="relative z-10 h-[515px] w-[600px]">
              <Image
                src="/logos/Illustration.svg"
                alt="Digital marketing landscape illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

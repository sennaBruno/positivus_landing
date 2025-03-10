'use client';

import { colors, typography } from '@/styles/typography';
import Image from 'next/image';
import Button from '../ui/Button';

const CallToAction = () => {
  const handleProposalClick = () => {
    console.log('Free proposal requested');
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 pt-16 pb-8 md:px-16 lg:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center justify-between rounded-[45px] bg-[#F5F5F5] px-8 py-16 md:px-16 lg:flex-row lg:items-start lg:px-[60px]">
          <div className="z-10 max-w-lg">
            <h2 className={`${typography.h2} mb-4 font-medium`}>Let's make things happen</h2>
            <p className={`${typography.pLarge} ${colors.dark} mb-8`}>
              Contact us today to learn more about how our digital marketing services can help your
              business grow and succeed online.
            </p>
            <Button
              variant="primary"
              size="medium"
              aria-label="Get your free proposal"
              onClick={handleProposalClick}
              onKeyDown={(e) => e.key === 'Enter' && handleProposalClick()}
            >
              Get your free proposal
            </Button>
          </div>

          <div className="relative mt-12 lg:absolute lg:top-1/2 lg:right-[-20px] lg:mt-0 lg:-translate-y-1/2">
            <Image
              src="/Frame 19.svg"
              alt="Abstract illustration"
              width={494}
              height={394}
              className="relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

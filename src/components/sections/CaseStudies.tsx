'use client';

import { caseStudies } from '@/data/caseStudiesData';
import { typography } from '@/styles/typography';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

const CaseStudies = () => {
  const handleLearnMoreClick = (href: string) => {
    console.log(`Navigate to: ${href}`);
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <SectionTitle
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          className="mb-16"
        />

        {/* Case Studies Grid */}
        <div className="rounded-[45px] bg-[#191A23] p-8 md:p-16">
          <div className="grid grid-cols-1  divide-y divide-gray-700 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="py-8 lg:py-6 lg:px-8">
                <div>
                  <h3 className={`${typography.h3} mb-6 text-white`}>{caseStudy.title}</h3>
                  <div className={`${typography.p} mb-8 text-white`}>
                    {caseStudy.description}
                  </div>
                  <button
                    className="text-white hover:underline flex items-center gap-2"
                    onClick={() => handleLearnMoreClick(caseStudy.learnMoreHref)}
                    aria-label={`Learn more about ${caseStudy.description.substring(0, 30)}...`}
                    tabIndex={0}
                  >
                    <span className={`mr-2 ${typography.pLarge} cursor-pointer`}>Learn more</span>
                    <div className="flex h-6 w-6 items-center justify-center cursor-pointer">
                      <Image
                        src="/Icon (2).svg"
                        alt="Arrow icon"
                        width={21}
                        height={20}
                        className="transform transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

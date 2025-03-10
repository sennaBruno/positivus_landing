'use client';

import { colors, typography } from '@/styles/typography';
import Image from 'next/image';

type CaseStudyProps = {
  title: string;
  description: string;
  learnMoreHref: string;
};

const CaseStudies = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      title: '',
      description:
        'For a local restaurant we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
      learnMoreHref: '#restaurant-case',
    },
    {
      title: '',
      description:
        'For a B2B software company we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
      learnMoreHref: '#software-case',
    },
    {
      title: '',
      description:
        'For a national retail chain we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
      learnMoreHref: '#retail-case',
    },
  ];

  const handleLearnMoreClick = (href: string) => {
    console.log(`Navigate to: ${href}`);
  };

  return (
    <section className="w-full bg-white px-6 pt-4 pb-16 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="rounded-xl bg-[#B9FF66] px-6 py-4">
            <h2 className={`${typography.h2} font-medium`}>Case Studies</h2>
          </div>
          <p className={`${typography.pLarge} max-w-3xl ${colors.dark}`}>
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case
            Studies
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="rounded-[45px] bg-[#191A23] p-8 md:p-16">
          <div className="grid grid-cols-1 gap-8 divide-y divide-gray-700 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="py-8 lg:py-6 lg:px-8">
                <div>
                  <h3 className={`${typography.h3} mb-6 text-white`}>{caseStudy.title}</h3>
                  <div className={`${typography.p} mb-8 text-white`}>
                    {caseStudy.description}
                  </div>
                  <button
                    className="group flex items-center text-[#B9FF66] cursor-pointer"
                    onClick={() => handleLearnMoreClick(caseStudy.learnMoreHref)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && handleLearnMoreClick(caseStudy.learnMoreHref)
                    }
                    tabIndex={0}
                    aria-label={`Learn more about case study for ${caseStudy.title}`}
                  >
                    <span className={`mr-2 ${typography.pLarge}`}>Learn more</span>
                    <div className="flex h-6 w-6 items-center justify-center">
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

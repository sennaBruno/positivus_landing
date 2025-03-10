import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full py-14 px-6 md:py-20 md:px-16 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="font-space-grotesk text-[60px] leading-[100%] font-medium mb-6 text-[#191A23]">
            Navigating the digital landscape for success
          </h1>
          <p className="font-space-grotesk text-[20px] font-normal leading-[28px] mb-10 max-w-xl text-[#191A23]">
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </p>
          <Link
            href="/consultation"
            className="inline-block px-8 py-4 bg-[#191A23] text-white font-space-grotesk font-normal text-[20px] leading-[28px] text-center rounded-md hover:bg-gray-800 transition-colors"
            tabIndex={0}
            aria-label="Book a consultation"
          >
            Book a consultation
          </Link>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="relative w-full max-w-[600px] h-[515px] flex items-center justify-center">
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
            <div className="w-[600px] h-[515px] relative z-10">
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

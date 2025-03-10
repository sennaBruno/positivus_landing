import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full py-12 px-6 md:py-16 md:px-16 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#191A23]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-xl text-[#191A23]">
            Our digital marketing agency helps businesses grow and succeed online 
            through a range of services including SEO, PPC, social media marketing, 
            and content creation.
          </p>
          <Link 
            href="/consultation" 
            className="inline-block px-8 py-4 bg-[#191A23] text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            tabIndex={0}
            aria-label="Book a consultation"
          >
            Book a consultation
          </Link>
        </div>
        
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="relative w-[400px] h-[400px] image-container">
            {/* Decorative stars and shapes */}
            <div className="absolute top-0 right-1/4">
              <div className="w-10 h-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0L26.3 13.7L40 20L26.3 26.3L20 40L13.7 26.3L0 20L13.7 13.7L20 0Z" fill="black"/>
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-0">
              <div className="w-12 h-12">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 0L31.6 16.4L48 24L31.6 31.6L24 48L16.4 31.6L0 24L16.4 16.4L24 0Z" fill="black"/>
                </svg>
              </div>
            </div>
            
            <Image
              src="/megaphone.svg"
              alt="Digital marketing illustration"
              width={400}
              height={400}
              className="object-contain z-10"
              priority
            />
            
            {/* Orbital circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[360px] h-[360px] border border-gray-200 rounded-full"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] border border-gray-200 rounded-full"></div>
            </div>
            
            {/* Green circle */}
            <div className="absolute top-1/4 left-1/4">
              <div className="w-4 h-4 bg-[#B9FF66] rounded-full"></div>
            </div>
            
            {/* Social icons */}
            <div className="absolute top-10 right-10">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center image-container">
                <Image 
                  src="/heart-icon.svg" 
                  alt="Heart icon" 
                  width={28} 
                  height={28}
                />
              </div>
            </div>
            
            <div className="absolute top-20 right-32">
              <div className="w-14 h-14 bg-[#B9FF66] rounded-full flex items-center justify-center image-container">
                <Image 
                  src="/share-icon.svg" 
                  alt="Share icon" 
                  width={28} 
                  height={28}
                />
              </div>
            </div>
            
            <div className="absolute bottom-20 right-20">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center image-container">
                <Image 
                  src="/play-icon.svg" 
                  alt="Play icon" 
                  width={28} 
                  height={28}
                />
              </div>
            </div>
            
            <div className="absolute bottom-32 left-20">
              <div className="w-14 h-14 bg-[#B9FF66] rounded-full flex items-center justify-center image-container">
                <Image 
                  src="/location-icon.svg" 
                  alt="Location icon" 
                  width={28} 
                  height={28}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
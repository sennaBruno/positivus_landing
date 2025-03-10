import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full py-14 px-6 md:py-20 md:px-16 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#191A23]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-base md:text-lg mb-10 max-w-xl text-[#191A23]">
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
          <div className="relative w-[450px] h-[450px] image-container">
            {/* Decorative stars */}
            <div className="absolute top-0 right-1/4 z-10">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L26.3 13.7L40 20L26.3 26.3L20 40L13.7 26.3L0 20L13.7 13.7L20 0Z" fill="black"/>
              </svg>
            </div>
            
            <div className="absolute bottom-10 left-0 z-10">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0L31.6 16.4L48 24L31.6 31.6L24 48L16.4 31.6L0 24L16.4 16.4L24 0Z" fill="black"/>
              </svg>
            </div>
            
            {/* Megaphone SVG directly embedded for better control */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <svg width="380" height="380" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M350 120C350 120 250 180 150 180H80C70 180 60 190 60 200V300C60 310 70 320 80 320H150C250 320 350 380 350 380V120Z" fill="#B9FF66" stroke="black" strokeWidth="3"/>
                <path d="M380 80C380 70 370 60 360 60C350 60 340 70 340 80V420C340 430 350 440 360 440C370 440 380 430 380 420V80Z" fill="white" stroke="black" strokeWidth="3"/>
                <ellipse cx="420" cy="100" rx="40" ry="80" transform="rotate(15 420 100)" fill="white" stroke="black" strokeWidth="3"/>
                <ellipse cx="420" cy="400" rx="40" ry="80" transform="rotate(-15 420 400)" fill="white" stroke="black" strokeWidth="3"/>
                <path d="M60 250H150" stroke="black" strokeWidth="3"/>
                <path d="M60 300C60 300 100 350 150 330M60 200C60 200 100 150 150 170" stroke="black" strokeWidth="2" strokeDasharray="5 5"/>
              </svg>
            </div>
            
            {/* Orbital circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[360px] h-[360px] border border-gray-200 rounded-full"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] border border-gray-200 rounded-full"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[480px] h-[480px] border border-gray-200 rounded-full"></div>
            </div>
            
            {/* Green circle */}
            <div className="absolute top-1/4 left-1/4 z-10">
              <div className="w-4 h-4 bg-[#B9FF66] rounded-full"></div>
            </div>
            
            {/* Social icons */}
            <div className="absolute top-12 right-8 z-20">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center image-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93791 22.4518 9.22249 22.4518 8.5C22.4518 7.77751 22.3095 7.06209 22.0329 6.39464C21.7563 5.72718 21.351 5.12076 20.84 4.61Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="absolute top-32 right-36 z-20">
              <div className="w-14 h-14 bg-[#B9FF66] rounded-full flex items-center justify-center image-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.59 13.51L15.42 17.49" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.41 6.51L8.59 10.49" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-24 right-16 z-20">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center image-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-36 left-20 z-20">
              <div className="w-14 h-14 bg-[#B9FF66] rounded-full flex items-center justify-center image-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
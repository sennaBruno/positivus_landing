'use client';

import { testimonials } from '@/data/testimonialsData';
import { colors } from '@/styles/typography';
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className={`w-full ${colors.bgWhite} px-6 py-16 md:px-16 lg:px-20`}>
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <SectionTitle
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          className="mb-16"
        />

        {/* Testimonials Carousel */}
        <div className={`w-full ${colors.bgDark} rounded-3xl p-6 md:p-12 relative`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* Show two testimonials side by side on medium+ screens */}
            <TestimonialCard
              testimonial={testimonials[activeSlide]}
              className="h-full"
            />

            <TestimonialCard
              testimonial={testimonials[(activeSlide + 1) % testimonials.length]}
              className="h-full md:block hidden"
            />
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-12">
            {/* Previous Button */}
            <button
              onClick={handlePrevSlide}
              aria-label="Previous testimonial"
              className="text-white hover:text-[#C6F52E] transition-colors"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${index === activeSlide ? 'bg-[#C6F52E]' : 'bg-white'
                    }`}
                  tabIndex={0}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextSlide}
              aria-label="Next testimonial"
              className="text-white hover:text-[#C6F52E] transition-colors"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
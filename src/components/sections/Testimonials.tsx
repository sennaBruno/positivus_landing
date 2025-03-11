'use client';

import { testimonials } from '@/data/testimonialsData';
import { colors } from '@/styles/typography';
import { useState } from 'react';
import CarouselControls from '../ui/CarouselControls';
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

  // Calculate previous and next indices
  const prevIndex = activeSlide === 0 ? testimonials.length - 1 : activeSlide - 1;
  const nextIndex = (activeSlide + 1) % testimonials.length;

  return (
    <section className={`w-full ${colors.bgWhite} px-6 py-16 md:px-16 lg:px-20 overflow-hidden`}>
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <SectionTitle
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          className="mb-16"
        />

        {/* Testimonials Carousel */}
        <div className={`w-full ${colors.bgDark} rounded-3xl py-14 relative min-h-[480px]`}>
          {/* Carousel Container */}
          <div className="relative h-full overflow-hidden flex justify-center items-center px-4">
            {/* Previous Card (visible on larger screens) */}
            <div className="absolute -left-16 transform -translate-x-4/6  top-0 hidden md:block z-10">
              <TestimonialCard
                testimonial={testimonials[prevIndex]}
                className="h-full "
              />
            </div>

            {/* Active Card */}
            <div className="relative w-full md:w-[60%] max-w-2xl z-20 px-4">
              <TestimonialCard
                testimonial={testimonials[activeSlide]}
                className="h-full"
                active={true}
              />
            </div>

            {/* Next Card (visible on larger screens) */}
            <div className="absolute -right-16 transform translate-x-4/6  top-0 hidden md:block z-10">
              <TestimonialCard
                testimonial={testimonials[nextIndex]}
                className="h-full "
              />
            </div>
          </div>

          {/* Controls */}
          <CarouselControls
            activeSlide={activeSlide}
            totalSlides={testimonials.length}
            onPrevClick={handlePrevSlide}
            onNextClick={handleNextSlide}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
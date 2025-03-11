'use client';

import { Testimonial } from '@/data/testimonialsData';
import { colors } from '@/styles/typography';

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

const TestimonialCard = ({ testimonial, className = '' }: TestimonialCardProps) => {
  return (
    <div className={`relative flex flex-col ${colors.bgDark} rounded-3xl p-8 ${className}`}>
      {/* Quote Content */}
      <div className="mb-8">
        <p className="text-white text-sm md:text-base">
          "{testimonial.content}"
        </p>
      </div>

      {/* Author Info */}
      <div className="mt-auto flex flex-col text-center">
        <h4 className="text-[#C6F52E] font-semibold text-lg">{testimonial.name}</h4>
        <p className="text-white text-sm">
          {testimonial.position} at {testimonial.company}
        </p>
      </div>

      {/* Triangle shape at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-6 h-6 bg-[#191A23] rotate-45"></div>
      </div>
    </div>
  );
};

export default TestimonialCard; 
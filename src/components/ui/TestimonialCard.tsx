'use client';

import { Testimonial } from '@/data/testimonialsData';
import Image from 'next/image';

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
  active?: boolean;
};

const TestimonialCard = ({ testimonial, className = '', active = false }: TestimonialCardProps) => {
  return (
    <div className={`relative flex flex-col ${className} transition-all duration-300`}>
      {/* Bubble Background */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        <Image
          src="/Bubble.svg"
          alt="Speech bubble"
          width={606}
          height={266}
          className="w-full h-auto"
          priority={active}
        />

        {/* Quote Content */}
        <div className="absolute inset-0 flex p-8 md:p-12">
          <div className="flex-grow">
            <p className="text-white text-sm md:text-base leading-relaxed">
              "{testimonial.content}"
            </p>
          </div>

        </div>
      </div>
      {/* Author Info */}
      <div className="mt-8 ml-12">
        <h4 className="text-[#C6F52E] font-semibold text-lg md:text-xl">{testimonial.name}</h4>
        <p className="text-white text-sm">
          {testimonial.position} at {testimonial.company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard; 
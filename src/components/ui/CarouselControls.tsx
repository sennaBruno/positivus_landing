'use client';

import Image from 'next/image';
import React from 'react';

interface CarouselControlsProps {
  activeSlide: number;
  totalSlides: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onDotClick: (index: number) => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  activeSlide,
  totalSlides,
  onPrevClick,
  onNextClick,
  onDotClick,
}) => {
  return (
    <div className="flex justify-center items-center mt-14 gap-8 md:gap-20">
      {/* Previous Button */}
      <button
        onClick={onPrevClick}
        aria-label="Previous item"
        className="text-white hover:text-[#C6F52E] transition-colors z-30 cursor-pointer"
        tabIndex={0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>

      {/* Dots/stars */}
      <div className="flex space-x-4 z-30">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            aria-label={`Go to item ${index + 1}`}
            className="w-6 h-6 flex items-center justify-center transition-colors cursor-pointer"
            tabIndex={0}
          >
            <div className="relative w-[14px] h-[14px]">
              <Image
                src={index === activeSlide ? '/star-active.svg' : '/star-inactive.svg'}
                alt={index === activeSlide ? "Active item" : "Inactive item"}
                width={14}
                height={14}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNextClick}
        aria-label="Next item"
        className="text-white hover:text-[#C6F52E] transition-colors z-30 cursor-pointer"
        tabIndex={0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselControls; 
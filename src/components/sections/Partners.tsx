import React from 'react';
import Image from 'next/image';

const Partners = () => {
  const logoImages = [
    {
      name: 'Amazon',
      src: '/logos/Amazon.svg',
      width: 120,
      height: 36,
    },
    {
      name: 'Dribbble',
      src: '/logos/Dribbble.svg',
      width: 120,
      height: 36,
    },
    {
      name: 'Hubspot',
      src: '/logos/Hubspot.svg',
      width: 120,
      height: 36,
    },
    {
      name: 'Notion',
      src: '/logos/Notion.svg',
      width: 120,
      height: 36,
    },
    {
      name: 'Netflix',
      src: '/logos/Netflix.svg',
      width: 120,
      height: 36,
    },
    {
      name: 'Zoom',
      src: '/logos/Zoom.svg',
      width: 120,
      height: 36,
    },
  ];

  return (
    <section className="w-full pb-16 pt-8 px-6 md:px-16 lg:px-20 bg-white">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 lg:gap-10">
        {logoImages.map(({ name, src, width, height }) => (
          <div
            key={name}
            className="w-28 md:w-auto flex items-center justify-center text-[#191A23]"
          >
            <Image
              src={src}
              alt={`${name} logo`}
              width={width}
              height={height}
              className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;

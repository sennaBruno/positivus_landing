import { logoImages } from '@/data/partnersData';
import { colors } from '@/styles/typography';
import Image from 'next/image';

const Partners = () => {
  return (
    <section className="w-full bg-white px-6 pt-8 pb-16 md:px-16 lg:px-20">
      <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between lg:gap-10">
        {logoImages.map(({ name, src, width, height }) => (
          <div
            key={name}
            className={`flex w-28 items-center justify-center md:w-auto ${colors.dark}`}
          >
            <Image
              src={src}
              alt={`${name} logo`}
              width={width}
              height={height}
              className="opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;

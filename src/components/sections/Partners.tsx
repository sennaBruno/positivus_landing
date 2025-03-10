import Image from 'next/image';

const Partners = () => {
  // Using a stable array of partners that won't change between server and client renders
  const partners = [
    { name: 'Amazon', logo: '/logos/amazon.svg' },
    { name: 'Dribbble', logo: '/logos/dribbble.svg' },
    { name: 'HubSpot', logo: '/logos/hubspot.svg' },
    { name: 'Notion', logo: '/logos/notion.svg' },
    { name: 'Netflix', logo: '/logos/netflix.svg' },
    { name: 'Zoom', logo: '/logos/zoom.svg' },
  ];

  return (
    <section className="w-full pb-16 pt-8 px-6 md:px-16 lg:px-20 bg-white">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 lg:gap-12">
        {partners.map((partner, index) => (
          <div 
            key={`${partner.name}-${index}`} 
            className="w-28 md:w-auto flex items-center justify-center image-container"
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={120}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners; 
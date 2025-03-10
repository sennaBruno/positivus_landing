import React from 'react';
import Image from 'next/image';

const Services = () => {
  const serviceCards = [
    {
      title: 'Search engine optimization',
      icon: '/icons/seo-icon.svg',
      backgroundColor: 'bg-gray-100',
      iconWidth: 200,
      iconHeight: 150,
    },
    {
      title: 'Pay-per-click advertising',
      icon: '/icons/ppc-icon.svg',
      backgroundColor: 'bg-lime-300',
      iconWidth: 200,
      iconHeight: 150,
    },
    {
      title: 'Social Media Marketing',
      icon: '/icons/social-icon.svg',
      backgroundColor: 'bg-gray-900',
      textColor: 'text-white',
      iconWidth: 200,
      iconHeight: 150,
    },
    {
      title: 'Email Marketing',
      icon: '/icons/email-icon.svg',
      backgroundColor: 'bg-gray-100',
      iconWidth: 200,
      iconHeight: 150,
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Services Title */}
        <div className="inline-block mb-6">
          <h2 className="text-3xl md:text-4xl font-bold px-4 py-2 bg-lime-300 rounded-lg">Services</h2>
        </div>
        
        {/* Services Description */}
        <p className="text-lg mb-12 max-w-3xl">
          At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:
        </p>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCards.map((service, index) => (
            <div 
              key={index}
              className={`${service.backgroundColor} ${service.textColor || 'text-black'} rounded-3xl p-8 relative overflow-hidden flex flex-col`}
            >
              <div className="mb-auto">
                <div className="inline-block px-4 py-2 bg-lime-300 text-black rounded-lg mb-8">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <a 
                  href="#" 
                  className="flex items-center gap-2 hover:underline"
                  tabIndex={0}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lime-300 text-black">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Learn more</span>
                </a>
                <div className="relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={service.iconWidth}
                    height={service.iconHeight}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
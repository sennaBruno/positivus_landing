import Image from 'next/image';

const Services = () => {
  const serviceCards = [
    {
      title: 'Search engine optimization',
      icon: '/Illustration (1).svg',
      backgroundColor: 'bg-[#F3F3F3]',
      customStyles: true,
      iconWidth: 221,
      iconHeight: 210,
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
        <div className="flex flex-row align-center mb-24 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold px-4 py-2 bg-lime-300 rounded-lg">Services</h2>
          <p className="text-lg max-w-3xl">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className={`${service.backgroundColor} ${service.textColor || 'text-black'} ${service.customStyles
                ? 'w-[600px] h-[310px] rounded-[45px] p-8 border border-[#191A23] shadow-[0px_5px_0px_0px_#191A23]'
                : 'rounded-3xl p-8'
                } relative overflow-hidden flex`}
            >
              {service.customStyles ? (
                // Custom layout for SEO card matching the image
                <div className="flex justify-between w-full h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <span className="bg-lime-300 text-black text-[30px] font-medium leading-[100%] px-4 py-2 rounded-md inline-block">
                        Search engine
                      </span>
                      <br />
                      <span className="bg-lime-300 text-black text-[30px] font-medium leading-[100%] px-4 py-2 rounded-md inline-block mt-1">
                        optimization
                      </span>
                    </div>

                    <a
                      href="#"
                      className="flex items-center gap-3 hover:underline"
                      tabIndex={0}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
                        <Image
                          src="/Icon.svg"
                          alt="Arrow icon"
                          width={41}
                          height={41}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-black font-medium">Learn more</span>
                    </a>
                  </div>

                  {/* Right side with illustration */}
                  <div className="flex items-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={service.iconWidth}
                      height={service.iconHeight}
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                // Default layout for other cards
                <>
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
                          <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
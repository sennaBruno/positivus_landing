import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const serviceCards = [
    {
      title: 'Search engine optimization',
      imageSrc: '/Illustration (1).svg',
      backgroundColor: 'bg-[#F3F3F3]',
      imageWidth: 221,
      imageHeight: 210,
      isHorizontal: true,
      titleSplit: true,
      hasBorder: true,
      borderColor: 'border-[#191A23]',
      hasShadow: true,
      shadowColor: 'shadow-[0px_5px_0px_0px_#191A23]',
      roundedCorners: 'rounded-[45px]',
      padding: 'p-8',
      learnMoreIcon: '/Icon.svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: 'bg-black',
    },
    {
      title: 'Pay-per-click advertising',
      imageSrc: '/Illustration (2).svg',
      backgroundColor: 'bg-lime-300',
      imageWidth: 221,
      imageHeight: 210,
      isHorizontal: true,
      titleSplit: true,
      hasBorder: true,
      borderColor: 'border-[#191A23]',
      hasShadow: true,
      shadowColor: 'shadow-[0px_5px_0px_0px_#191A23]',
      roundedCorners: 'rounded-[45px]',
      padding: 'p-8',
      titleBackground: 'bg-white',
      learnMoreIcon: '/Icon.svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: 'bg-black',
    },
    {
      title: 'Social Media Marketing',
      imageSrc: '/icons/social-icon.svg',
      backgroundColor: 'bg-gray-900',
      textColor: 'text-white',
      imageWidth: 200,
      imageHeight: 150,
    },
    {
      title: 'Email Marketing',
      imageSrc: '/icons/email-icon.svg',
      backgroundColor: 'bg-gray-100',
      imageWidth: 200,
      imageHeight: 150,
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
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
              backgroundColor={service.backgroundColor}
              textColor={service.textColor}
              imageWidth={service.imageWidth}
              imageHeight={service.imageHeight}
              isHorizontal={service.isHorizontal}
              titleSplit={service.titleSplit}
              hasBorder={service.hasBorder}
              borderColor={service.borderColor}
              hasShadow={service.hasShadow}
              shadowColor={service.shadowColor}
              roundedCorners={service.roundedCorners}
              padding={service.padding}
              titleBackground={service.titleBackground}
              learnMoreIcon={service.learnMoreIcon}
              learnMoreIconSize={service.learnMoreIconSize}
              learnMoreIconBackground={service.learnMoreIconBackground}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
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
      titleBackground: 'bg-white',
      learnMoreIcon: '/Icon.svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: 'bg-black',
    },
    {
      title: 'Social Media Marketing',
      imageSrc: '/Illustration (3).svg',
      backgroundColor: 'bg-[#191A23]',
      textColor: 'text-black',
      imageWidth: 210,
      imageHeight: 210,
      isHorizontal: true,
      titleSplit: true,
      titleBackground: 'bg-white',
      learnMoreIconBackground: 'bg-white',
      learnMoreIcon: '/Icon (1).svg',
      learnMoreIconSize: 41,
      learnMoreTextColor: 'text-white',
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
              titleBackground={service.titleBackground}
              learnMoreIcon={service.learnMoreIcon}
              learnMoreIconSize={service.learnMoreIconSize}
              learnMoreIconBackground={service.learnMoreIconBackground}
              learnMoreTextColor={service.learnMoreTextColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
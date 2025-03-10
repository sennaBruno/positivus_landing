import { colors, typography } from '@/styles/typography';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const serviceCards = [
    {
      title: 'Search engine optimization',
      imageSrc: '/Illustration (1).svg',
      backgroundColor: colors.bgGray,
      imageWidth: 221,
      imageHeight: 210,
      isHorizontal: true,
      titleSplit: true,
      learnMoreIcon: '/Icon.svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: colors.bgDark,
      titleBackground: colors.bgGreen,
    },
    {
      title: 'Pay-per-click advertising',
      imageSrc: '/Illustration (2).svg',
      backgroundColor: colors.bgGreen,
      imageWidth: 221,
      imageHeight: 210,
      isHorizontal: true,
      titleSplit: true,
      titleBackground: colors.bgWhite,
      learnMoreIcon: '/Icon.svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: colors.bgDark,
    },
    {
      title: 'Social Media Marketing',
      imageSrc: '/Illustration (3).svg',
      backgroundColor: colors.bgDark,
      textColor: colors.black,
      imageWidth: 210,
      imageHeight: 210,
      isHorizontal: true,
      titleSplit: true,
      titleBackground: colors.bgWhite,
      learnMoreIconBackground: colors.bgWhite,
      learnMoreIcon: '/Icon (1).svg',
      learnMoreIconSize: 41,
      learnMoreTextColor: colors.white,
    },
    {
      title: 'Email Marketing',
      imageSrc: '/tokyo-sending-messages-from-one-place-to-another.svg',
      backgroundColor: colors.bgGray,
      imageWidth: 210,
      imageHeight: 192,
      isHorizontal: true,
      titleSplit: false,
      titleBackground: colors.bgGreen,
      learnMoreIcon: '/Icon.svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: colors.bgDark,
      imageStyle: { transform: 'rotate(180deg)' },
    },
    {
      title: 'Content Creation',
      imageSrc: '/Illustration (4).svg',
      backgroundColor: colors.bgGreen,
      imageWidth: 210,
      imageHeight: 195,
      isHorizontal: true,
      titleSplit: true,
      titleBackground: colors.bgWhite,
      textColor: colors.dark,
      learnMoreIcon: '/Icon.svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: colors.bgDark,
      learnMoreTextColor: colors.black,
    },
    {
      title: 'Analytics and Tracking',
      imageSrc: '/Illustration (5).svg',
      backgroundColor: colors.bgDark,
      imageWidth: 210,
      imageHeight: 170,
      isHorizontal: true,
      titleSplit: true,
      titleBackground: colors.bgGreen,
      textColor: colors.dark,
      learnMoreIcon: '/Icon (1).svg',
      learnMoreIconSize: 41,
      learnMoreIconBackground: colors.bgWhite,
      learnMoreTextColor: colors.white,
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Services Title */}
        <div className="align-center mb-24 flex flex-row gap-8">
          <h2 className={`${typography.h2} px-4 py-2 ${colors.bgGreen} rounded-lg`}>Services</h2>
          <p className={`${typography.pLarge} max-w-3xl ${colors.dark} align-center`}>
            At our digital marketing agency, we offer a range of services to help businesses grow
            and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
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
              imageStyle={service.imageStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

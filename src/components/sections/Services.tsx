import { serviceCards } from '@/data/servicesData';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Services Title */}
        <SectionTitle
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          className="mb-24"
        />

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

import { colors, typography } from '@/styles/typography';

interface SectionTitleProps {
  title: string;
  description: string;
  className?: string;
}

const SectionTitle = ({ title, description, className = '' }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center gap-8 ${className}`}>
      <div className={`inline-block rounded-xl ${colors.bgGreen} px-6 py-4`}>
        <h2 className={`${typography.h2} font-medium ${colors.dark}`}>{title}</h2>
      </div>
      <p className={`${typography.pLarge} max-w-3xl ${colors.dark} mt-4 md:mt-0`}>
        {description}
      </p>
    </div>
  );
};

export default SectionTitle; 
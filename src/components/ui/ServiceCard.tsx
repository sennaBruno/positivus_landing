import { colors, typography } from '@/styles/typography';
import Image from 'next/image';

export interface ServiceCardProps {
  // Basic content
  title: string;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;

  // Style options
  backgroundColor?: string;
  textColor?: string;
  customStyles?: boolean;
  roundedCorners?: string;
  padding?: string;
  titleBackground?: string;
  imageStyle?: React.CSSProperties;

  // Layout options
  isHorizontal?: boolean;
  titleSplit?: boolean;

  // Border and shadow
  hasBorder?: boolean;
  borderColor?: string;
  hasShadow?: boolean;
  shadowColor?: string;

  // Learn more options
  learnMoreIcon?: string;
  learnMoreIconSize?: number;
  learnMoreIconBackground?: string;
  learnMoreTextColor?: string;
}

const ServiceCard = ({
  // Default values for all props
  title,
  imageSrc,
  imageWidth = 200,
  imageHeight = 150,
  backgroundColor = colors.bgWhite,
  textColor = colors.dark,
  titleBackground = colors.bgGreen,
  isHorizontal = false,
  titleSplit = false,
  learnMoreIcon = '',
  learnMoreIconSize = 24,
  learnMoreIconBackground = colors.bgGreen,
  learnMoreTextColor,
  imageStyle,
}: ServiceCardProps) => {
  // Split title into words if needed
  const titleWords = titleSplit ? title.split(' ') : [title];
  const firstHalf = titleSplit
    ? titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ')
    : title;
  const secondHalf = titleSplit ? titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ') : '';

  // Standard card styles that apply to all cards
  const cardClass = `
    ${backgroundColor} 
    ${textColor} 
    w-[600px] 
    h-[310px] 
    rounded-[45px] 
    p-[50px] 
    border 
    border-dark
    shadow-[0px_5px_0px_0px_#191A23] 
    relative 
    overflow-hidden 
    flex 
    ${isHorizontal ? 'justify-between w-full' : 'flex-col'}
  `;

  return (
    <div className={cardClass.trim()}>
      {isHorizontal ? (
        // Horizontal layout (side by side)
        <div className="flex w-full justify-between">
          {/* Left side with title and learn more */}
          <div className="flex h-full flex-col justify-between">
            <div>
              {titleSplit ? (
                // Split title on two lines
                <>
                  <h3
                    className={`${titleBackground} ${textColor} ${typography.h3} inline-block rounded-md px-4 py-2`}
                  >
                    {firstHalf}
                  </h3>
                  <br />
                  <h3
                    className={`${titleBackground} ${textColor} ${typography.h3} inline-block rounded-md px-4 py-2`}
                  >
                    {secondHalf}
                  </h3>
                </>
              ) : (
                // Single line title
                <h3
                  className={`${titleBackground} ${textColor} ${typography.h3} inline-block rounded-md px-4 py-2`}
                >
                  {title}
                </h3>
              )}
            </div>

            <a
              href="#"
              className="flex items-center gap-3 hover:underline"
              tabIndex={0}
              aria-label={`Learn more about ${title}`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${learnMoreIconBackground}`}
              >
                {learnMoreIcon ? (
                  <Image
                    src={learnMoreIcon}
                    alt="Arrow icon"
                    width={learnMoreIconSize}
                    height={learnMoreIconSize}
                    className="object-contain"
                  />
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1L15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 8H1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className={`${learnMoreTextColor || textColor} ${typography.h4}`}>
                Learn more
              </span>
            </a>
          </div>

          {/* Right side with illustration */}
          <div className="flex items-center">
            <Image
              src={imageSrc}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              className="object-contain"
              style={imageStyle}
            />
          </div>
        </div>
      ) : (
        // Vertical layout (standard card)
        <>
          <div className="mb-auto">
            <div
              className={`inline-block px-4 py-2 ${titleBackground} ${textColor} mb-8 rounded-lg`}
            >
              <h3 className={`${typography.h3}`}>{title}</h3>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <a
              href="#"
              className="flex items-center gap-2 hover:underline"
              tabIndex={0}
              aria-label={`Learn more about ${title}`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${learnMoreIconBackground}`}
              >
                {learnMoreIcon ? (
                  <Image
                    src={learnMoreIcon}
                    alt="Arrow icon"
                    width={learnMoreIconSize}
                    height={learnMoreIconSize}
                    className="object-contain"
                  />
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1L15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 8H1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span className={`${learnMoreTextColor || textColor} ${typography.h4}`}>
                Learn more
              </span>
            </a>
            <div className="relative">
              <Image
                src={imageSrc}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                className="object-contain"
                style={imageStyle}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;

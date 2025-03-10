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
}

const ServiceCard = ({
    // Default values for all props
    title,
    imageSrc,
    imageWidth = 200,
    imageHeight = 150,
    backgroundColor = 'bg-gray-100',
    textColor = 'text-black',
    customStyles = false,
    roundedCorners = 'rounded-3xl',
    padding = 'p-8',
    titleBackground = 'bg-lime-300',
    isHorizontal = false,
    titleSplit = false,
    hasBorder = false,
    borderColor = 'border-[#191A23]',
    hasShadow = false,
    shadowColor = 'shadow-[0px_5px_0px_0px_#191A23]',
    learnMoreIcon = '',
    learnMoreIconSize = 24,
    learnMoreIconBackground = 'bg-lime-300',
}: ServiceCardProps) => {
    // Split title into words if needed
    const titleWords = titleSplit ? title.split(' ') : [title];
    const firstHalf = titleSplit ? titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ') : title;
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
    border-[#191A23] 
    shadow-[0px_5px_0px_0px_#191A23] 
    relative 
    overflow-hidden 
    flex 
    ${isHorizontal ? 'justify-between w-full h-full' : 'flex-col'}
  `;

    return (
        <div className={cardClass.trim()}>
            {isHorizontal ? (
                // Horizontal layout (side by side)
                <div className="flex justify-between w-full h-full">
                    {/* Left side with title and learn more */}
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            {titleSplit ? (
                                // Split title on two lines
                                <>
                                    <span className={`${titleBackground} ${textColor} text-[30px] font-medium leading-[100%] px-4 py-2 rounded-md inline-block`}>
                                        {firstHalf}
                                    </span>
                                    <br />
                                    <span className={`${titleBackground} ${textColor} text-[30px] font-medium leading-[100%] px-4 py-2 rounded-md inline-block mt-1`}>
                                        {secondHalf}
                                    </span>
                                </>
                            ) : (
                                // Single line title
                                <span className={`${titleBackground} ${textColor} text-[30px] font-medium leading-[100%] px-4 py-2 rounded-md inline-block`}>
                                    {title}
                                </span>
                            )}
                        </div>

                        <a
                            href="#"
                            className="flex items-center gap-3 hover:underline"
                            tabIndex={0}
                            aria-label={`Learn more about ${title}`}
                        >
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${learnMoreIconBackground === 'bg-black' ? 'bg-black' : learnMoreIconBackground}`}>
                                {learnMoreIcon ? (
                                    <Image
                                        src={learnMoreIcon}
                                        alt="Arrow icon"
                                        width={learnMoreIconSize}
                                        height={learnMoreIconSize}
                                        className="object-contain"
                                    />
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <span className={textColor + " font-medium"}>Learn more</span>
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
                        />
                    </div>
                </div>
            ) : (
                // Vertical layout (standard card)
                <>
                    <div className="mb-auto">
                        <div className={`inline-block px-4 py-2 ${titleBackground} ${textColor} rounded-lg mb-8`}>
                            <h3 className="text-xl font-semibold">{title}</h3>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <a
                            href="#"
                            className="flex items-center gap-2 hover:underline"
                            tabIndex={0}
                            aria-label={`Learn more about ${title}`}
                        >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${learnMoreIconBackground}`}>
                                {learnMoreIcon ? (
                                    <Image
                                        src={learnMoreIcon}
                                        alt="Arrow icon"
                                        width={learnMoreIconSize}
                                        height={learnMoreIconSize}
                                        className="object-contain"
                                    />
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <span>Learn more</span>
                        </a>
                        <div className="relative">
                            <Image
                                src={imageSrc}
                                alt={title}
                                width={imageWidth}
                                height={imageHeight}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ServiceCard; 
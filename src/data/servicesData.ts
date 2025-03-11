import { colors } from '@/styles/typography';

export interface ServiceCard {
  title: string;
  imageSrc: string;
  backgroundColor: string;
  imageWidth: number;
  imageHeight: number;
  isHorizontal: boolean;
  titleSplit: boolean;
  titleBackground?: string;
  textColor?: string;
  learnMoreIcon: string;
  learnMoreIconSize: number;
  learnMoreIconBackground: string;
  learnMoreTextColor?: string;
  imageStyle?: React.CSSProperties;
}

export const serviceCards: ServiceCard[] = [
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
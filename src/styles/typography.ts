/**
 * Typography utility classes based on Figma design
 * These classes use explicit sizing and styling rather than Tailwind classes
 */

export const typography = {
  // Headings with explicit styling
  h1: 'font-sans font-medium text-[60px] leading-[100%] tracking-[0%]',
  h2: 'font-sans font-medium text-[40px] leading-[100%] tracking-[0%]',
  h3: 'font-sans font-medium text-[30px] leading-[100%] tracking-[0%]',
  h4: 'font-sans font-medium text-[20px] leading-[100%] tracking-[0%]',
  p: 'font-sans font-normal text-[18px] leading-[100%] tracking-[0%]',
  pLarge: 'font-sans font-normal text-[20px] leading-[28px] tracking-[0%]',
};

// Shorthand color classes
export const colors = {
  green: 'text-[#B9FF66]',
  dark: 'text-[#191A23]',
  white: 'text-white',
  black: 'text-black',
  
  bgGreen: 'bg-[#B9FF66]',
  bgDark: 'bg-[#191A23]',
  bgWhite: 'bg-white',
  bgBlack: 'bg-black',
  bgGray: 'bg-[#F3F3F3]',
};

export const combinedStyles = {
  h1Green: `${typography.h1} ${colors.green}`,
  h1Dark: `${typography.h1} ${colors.dark}`,
  h1White: `${typography.h1} ${colors.white}`,
};

export default typography; 
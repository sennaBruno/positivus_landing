/**
 * Typography utility classes based on Figma design
 * These classes use the Tailwind CSS configuration
 */

export const typography = {
  // Headings
  h1: 'font-medium text-heading-1 leading-tight tracking-none',
  h2: 'font-medium text-heading-2 leading-tight tracking-none',
  h3: 'font-medium text-heading-3 leading-tight tracking-none',
  h4: 'font-medium text-heading-4 leading-tight tracking-none',
  
  // Body text
  p: 'font-normal text-body leading-tight tracking-none',
};

// Shorthand color classes
export const colors = {
  green: 'text-green',
  dark: 'text-dark',
  white: 'text-white',
  
  bgGreen: 'bg-green',
  bgDark: 'bg-dark',
  bgWhite: 'bg-white',
};

// Examples of combined styles
export const combinedStyles = {
  h1Green: `${typography.h1} ${colors.green}`,
  h1Dark: `${typography.h1} ${colors.dark}`,
  h1White: `${typography.h1} ${colors.white}`,
  
  // Add more combinations as needed
};

export default typography; 
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#B9FF66',
        secondary: '#000000',
      },
    },
  },
  plugins: [],
  // Increase specificity to overcome Dark Reader
  important: true,
};

export default config;

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
        green: '#B9FF66',
        dark: '#191A23',
        white: '#F3F3F3',
      },
      fontSize: {
        'heading-1': '60px',
        'heading-2': '40px',
        'heading-3': '30px',
        'heading-4': '20px',
        'body': '18px',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
      lineHeight: {
        'tight': '100%',
      },
      letterSpacing: {
        'none': '0%',
      },
    },
  },
  plugins: [],
  important: true,
};

export default config;

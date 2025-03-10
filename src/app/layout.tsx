import Layout from '@/components/layout/Layout';
import { colors } from '@/styles/typography';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Positivus - Digital Marketing Agency',
  description: 'Helping businesses grow and succeed online with our digital marketing services',
  other: {
    'darkreader-lock': 'true',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`light ${spaceGrotesk.variable}`}>
      <body className={`bg-white font-sans antialiased ${colors.dark}`} suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

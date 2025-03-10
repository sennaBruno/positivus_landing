import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';

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
      <body className="font-sans antialiased bg-white text-[#191A23]" suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

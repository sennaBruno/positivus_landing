"use client";

import { colors, typography } from '@/styles/typography';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Button from '../ui/Button';

const Footer = () => {
  const [email, setEmail] = useState('');

  const navItems = [
    { href: '/about', label: 'About us' },
    { href: '/services', label: 'Services' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };


  return (
    <footer className={`${colors.bgDark} mx-auto w-full max-w-7xl px-6 py-16 md:px-16 lg:px-20 overflow-hidden rounded-t-[45px] mt-16`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Positivus Home" tabIndex={0}>
            <Image src="/logos/logo_white.svg" alt="Positivus Logo" width={148} height={24} priority />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${typography.p} ${colors.white} transition-colors hover:text-gray-300`}
                tabIndex={0}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center justify-center rounded-full"
              aria-label="LinkedIn"
              tabIndex={0}
            >
              <Image src="/logos/social_icon_linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
            {/* The SVG are not working, so I'm commenting them out */}
            {/* <Link
              href="https://facebook.com"
              target="_blank"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
              aria-label="Facebook"
              tabIndex={0}
            >
              <Image src="logos/social_icon_facebook.svg" alt="LinkedIn" width={24} height={24} />
            </Link> */}
            <Link
              href="https://twitter.com"
              target="_blank"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
              aria-label="Twitter"
              tabIndex={0}
            >
              <Image src="/logos/social_icon_twitter.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* Middle Section: Contact Info and Newsletter */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <div className="mb-2 inline-block rounded-full bg-[#B9FF66] px-4 py-1 w-fit">
              <span className={`${typography.p} font-medium text-black`}>Contact us:</span>
            </div>

            <p className={`${typography.p} ${colors.white}`}>Email: info@positivus.com</p>
            <p className={`${typography.p} ${colors.white}`}>Phone: 555-567-8901</p>
            <p className={`${typography.p} ${colors.white}`}>
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col items-end">
            <div className="w-full  rounded-[14px] bg-[#292A32] p-6">
              <form onSubmit={handleSubmit} className="flex flex-row gap-3 items-center" suppressHydrationWarning>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 rounded-[8px] border border-gray-700 bg-transparent p-3 text-white focus:border-[#B9FF66] focus:outline-none"
                  required
                  aria-label="Email for newsletter"
                  suppressHydrationWarning
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="whitespace-nowrap py-3 px-4"
                  suppressHydrationWarning
                >
                  Subscribe to news
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom: Copyright and Privacy Policy */}
        <div className="flex flex-col justify-between text-white sm:flex-row sm:items-center">
          <p className={`${typography.p} text-gray-400`}>© 2023 Positivus. All Rights Reserved.</p>
          <Link
            href="/privacy-policy"
            className={`${typography.p} mt-4 text-gray-400 transition-colors hover:text-white sm:mt-0`}
            tabIndex={0}
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
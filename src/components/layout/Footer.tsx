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
    // Newsletter subscription logic would go here
    setEmail('');
  };

  return (
    <footer className={`${colors.bgDark} mx-auto w-full max-w-7xl px-6 py-16 md:px-16 lg:px-20 overflow-hidden`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Logo and Navigation */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center" aria-label="Positivus Home" tabIndex={0}>
              <Image src="/logos/Logo.svg" alt="Positivus Logo" width={148} height={24} priority />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center justify-center rounded-full"
                aria-label="LinkedIn"
                tabIndex={0}
              >
                <Image src="/logos/Social icon in.svg" alt="LinkedIn" width={24} height={24} />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
                aria-label="Facebook"
                tabIndex={0}
              >
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 8.25V5.25C7.5 4.422 8.172 3.75 9 3.75H10.5V0H7.5C5.0145 0 3 2.0145 3 4.5V8.25H0V12H3V24H7.5V12H10.5L12 8.25H7.5Z" fill="#191A23" />
                </svg>
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
                aria-label="Twitter"
                tabIndex={0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" fill="#191A23" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <div className="mb-2 inline-block rounded-full bg-[#B9FF66] px-4 py-1">
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
          <div className="flex flex-col gap-6 lg:items-end">
            <div className="w-full max-w-[400px] rounded-[14px] bg-[#292A32] p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-[8px] border border-gray-700 bg-transparent p-3 text-white focus:border-[#B9FF66] focus:outline-none"
                  required
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full py-3"
                >
                  Subscribe to news
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-gray-700 pt-6 lg:gap-8">
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

        {/* Copyright */}
        <div className="mt-8 flex flex-col justify-between border-t border-gray-700 pt-6 text-white md:flex-row md:items-center">
          <p className={`${typography.p} text-gray-400`}>© 2023 Positivus. All Rights Reserved.</p>
          <Link
            href="/privacy-policy"
            className={`${typography.p} mt-4 text-gray-400 transition-colors hover:text-white md:mt-0`}
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
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  // We're using static navigation items to avoid any client/server mismatch
  const navItems = [
    { href: '/about', label: 'About us' },
    { href: '/services', label: 'Services' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className="w-full py-6 px-6 md:px-16 lg:px-20 bg-white">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Positivus Home" tabIndex={0}>
          <div className="flex items-center">
            <Image src="/logos/Logo.svg" alt="Positivus Logo" width={220} height={36} priority />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-[#191A23] hover:text-gray-600 transition-colors"
              tabIndex={0}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:block px-7 py-3 border border-black rounded-full text-base font-medium text-[#191A23] hover:bg-black hover:text-white transition-colors"
          tabIndex={0}
          aria-label="Request a quote"
        >
          Request a quote
        </Link>

        <button className="md:hidden text-[#191A23]" aria-label="Toggle mobile menu" tabIndex={0}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

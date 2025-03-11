import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <Navbar />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="max-w-[1400px] mx-auto w-full">
        <Navbar />
        <main className="flex-grow bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

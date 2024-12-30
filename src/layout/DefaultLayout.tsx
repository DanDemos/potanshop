import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/Footer';
import TopBar from './topbar/TopBar';

interface DefaultLayoutProps {
  children: ReactNode; // Expecting children as a prop to be rendered within this layout
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <TopBar />

      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <main className="">
      {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
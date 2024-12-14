import React from 'react';
import { Link } from 'react-router-dom';

import { DarkmodeSwitch } from '@/components/DarkModeSwitcher';
import LocaleSelector from '@/components/LocaleSelector';
import Logo from '@/components/Logo';
import PreviewSearch from '@/widgets/PreviewSearch';

const Header = (): JSX.Element => {
  return (
    <>
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <Link to="/" tabIndex={1}>
              <Logo />
            </Link>
            <nav className="ml-6 hidden md:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-[#8c1360]">
                Experiences
              </a>
              <a href="#" className="text-gray-700 hover:text-[#8c1360]">
                Living Options
              </a>
              <a href="#" className="text-gray-700 hover:text-[#8c1360]">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-[#8c1360]">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-[#8c1360]">
                Find a Residence
              </a>
              <a href="#" className="text-gray-700 hover:text-[#8c1360]">
                Blog
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <DarkmodeSwitch />
            <LocaleSelector />
            <a href="#" className="text-white bg-[#8c1360] px-4 py-2 rounded-md hover:bg-[#73104f] shadow">
              Book a Tour
            </a>
            <a href="tel:1-855-461-0685" className="text-gray-700 hover:text-[#8c1360]">
              1-855-461-0685
            </a>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <PreviewSearch rfkId="rfkid_6" />
        </div>
      </header>
    </>
  );
};

export default Header;

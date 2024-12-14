import React from 'react';

import footerData from '@/data/footer.json';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-800 text-white py-10 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-bold">Chartwell Retirement Residences</h4>
            <p>7070 Derrycrest Dr. Mississauga, ON L5W 0G5 Canada</p>
            <a href="tel:1-855-461-0685" className="block mt-2 text-[#8c1360] hover:underline">
              1-855-461-0685
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-400 hover:text-white">
              Book a Tour
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Subscribe
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-gray-400 hover:text-white">
              Professionals
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              FAQ
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Jobs
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Investor Relations
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              The Chartwell Foundation
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-400">Material Copyright © 2024 Chartwell Master Care LP</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Statement
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Accessibility
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

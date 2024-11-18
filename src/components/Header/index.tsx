import React from 'react';
import { Link } from 'react-router-dom';

import { DarkmodeSwitch } from '@/components/DarkModeSwitcher';
import LocaleSelector from '@/components/LocaleSelector';
import Logo from '@/components/Logo';
import PreviewSearch from '@/widgets/PreviewSearch';

const Header = (): JSX.Element => {
  return (
    <div className="header-outer">
      <div className="header-inner">
        <div className="flex flex-col items-start justify-between space-y-4">
          <div className="flex items-center justify-between w-full">
            <div>
              <Link to="/" tabIndex={1}>
                <Logo />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <DarkmodeSwitch />
              <LocaleSelector />
            </div>
          </div>
          <div className="w-full">
            <PreviewSearch rfkId="rfkid_6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

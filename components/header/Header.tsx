import { ReactElement } from 'react';

import Link from 'next/link';

import HeaderContactsLinks from 'components/header/HeaderContactsLinks';
import Nav from 'components/header/Nav';

const Header = (): ReactElement => {
  return (
    <header className='header-wrapper'>
      <Link
        className="flex items-center justify-center uppercase font-['Press_Start_2P'] text-lg h-20"
        href='/'>
        Clevermining
      </Link>
      <Nav />
      <HeaderContactsLinks />
    </header>
  );
};

export default Header;

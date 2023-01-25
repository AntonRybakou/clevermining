import { ReactElement } from 'react';

import Link from 'next/link';

import HeaderContactsLinks from 'components/header/HeaderContactsLinks';
import Nav from 'components/header/Nav';

const Header = (): ReactElement => {
  return (
    <header className="header-wrapper">
      <Link className="uppercase font-['Press_Start_2P'] text-lg" href="/">
        Clevermining
      </Link>
      <HeaderContactsLinks />
      <Nav />
    </header>
  );
};

export default Header;

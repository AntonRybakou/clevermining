import { ReactElement, useState } from 'react';

import Link from 'next/link';

import ProductsSubMenu from 'components/header/ProductsSubMenu';
import { MenuIcon } from 'components/svg/MenuIcon';

const Nav = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const openSubMenu = (): void => setIsSubMenuOpen(true);
  const closeSubMenu = (): void => setIsSubMenuOpen(false);

  return (
    <>
      <button className='block md:hidden' onClick={toggleMenu}>
        <MenuIcon />
      </button>
      <nav className={`md:block ${isMenuOpen ? '' : 'hidden'}`}>
        <div
          className='flex flex-wrap flex-row items-center justify-center gap-x-7 relative'>
          <div>
            <Link className='header-nav-link relative' href='/'>
              Главная
            </Link>
          </div>
          <div
            onMouseEnter={openSubMenu}
            onMouseLeave={closeSubMenu}
          >
            <span className='header-nav-link cursor-pointer'>
              Продукты
            </span>
            {isSubMenuOpen && <ProductsSubMenu />}
          </div>
          <div>
            <Link className='header-nav-link' href='/about'>
              О нас
            </Link>
          </div>
          <div>
            <Link className='header-nav-link' href='/contacts'>
              Контакты
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

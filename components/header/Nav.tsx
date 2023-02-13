import { ReactElement, useState } from 'react';

import Link from 'next/link';

import ProductsSubMenu from 'components/header/ProductsSubMenu';

const Nav = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <>
      <button className='block md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
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
            onMouseEnter={() => setIsSubMenuOpen(true)}
            onMouseLeave={() => setIsSubMenuOpen(false)}
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

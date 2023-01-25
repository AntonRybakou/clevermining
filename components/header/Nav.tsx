import { ReactElement, useState } from 'react';

import Link from 'next/link';

import ProductsSubMenu from 'components/header/ProductsSubMenu';

const Nav = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <ul className="hidden md:flex flex-wrap flex-row gap-x-7 relative">
        <li>
          <Link className="header-nav-link" href="/">
            Главная
          </Link>
        </li>
        <li
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <Link className="header-nav-link" href="/products">
            Продукты
          </Link>
          {isMenuOpen && <ProductsSubMenu />}
        </li>
        <li>
          <Link className="header-nav-link" href="/about">
            О нас
          </Link>
        </li>
        <li>
          <Link className="header-nav-link" href="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;

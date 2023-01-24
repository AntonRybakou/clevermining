import { ReactElement, useState } from 'react';

import Link from 'next/link';

import ProductsSubMenu from 'components/header/ProductsSubMenu';

const Nav = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <ul className="flex flex-wrap flex-row gap-x-7 relative">
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
    </nav>
  );
};

export default Nav;

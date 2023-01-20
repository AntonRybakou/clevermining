import { ReactElement, useState } from 'react';

import Link from 'next/link';

import ProductsSubMenu from 'components/ProductsSubMenu';

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <Link className="font-['Press_Start_2P'] text-2xl" href="/">
        <p>Clevermining</p>
      </Link>
      <nav>
        <ul className="flex flex-wrap flex-row gap-x-10 relative">
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
    </header>
  );
};

export default Header;

import { ReactElement, useState } from 'react';

import Link from 'next/link';

import ProductsSubMenu from 'components/ProductsSubMenu';

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <Link className="uppercase font-['Press_Start_2P'] text-2xl" href="/">
        Clevermining
      </Link>
      <div className="hidden lg:flex flex-col flex-wrap">
        <Link
          className="hover:text-orange-500 before:content-['\260E'] before:mr-2"
          href="tel:+74956486278"
        >
          + 7(495)648-62-78
        </Link>
        <Link
          className="hover:text-orange-500 before:content-['\2709'] before:mr-2"
          href="mailto:ask@clevermining.ru"
        >
          ask@clevermining.ru
        </Link>
      </div>
      <nav>
        <ul className="flex flex-wrap flex-row gap-x-8 relative">
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

import { ReactElement, useState } from 'react';

import Link from 'next/link';

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-row flex-wrap items-center px-10 justify-between h-20 border border-orange-400">
      <Link className="header-logo" href="/">
        Clevermining
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
            {isMenuOpen && (
              <ul className="absolute z-10 border border-lime-400">
                <li className="header-nav-link">
                  <Link href="/products/intsite">INTSITE</Link>
                </li>
                <li className="header-nav-link">
                  <Link href="/products/sleipner">Sleipner</Link>
                </li>
                <li className="header-nav-link">
                  <Link href="/products/evaporationking">Evaporation King</Link>
                </li>
                <li className="header-nav-link">
                  <Link href="/products/reactive">
                    Реактивные установки очистки вагонов
                  </Link>
                </li>
              </ul>
            )}
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

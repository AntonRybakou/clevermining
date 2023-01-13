import { ReactElement, useState } from 'react';

import Link from 'next/link';

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-row items-center px-10 justify-between h-20 border border-orange-400">
      <Link href="/">Clevermining</Link>
      <nav>
        <ul className="flex flex-wrap flex-row gap-10 relative">
          <li>
            <Link className="menu-link" href="/">
              Главная
            </Link>
          </li>
          <li
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <Link className="menu-link" href="/products">
              Продукты
            </Link>
            {isMenuOpen && (
              <ul className="absolute z-10 border border-lime-400">
                <li className="menu-link">
                  <Link href="/products/INTSITE">INTSITE</Link>
                </li>
                <li className="menu-link">
                  <Link href="/products/Sleipner">Sleipner</Link>
                </li>
                <li className="menu-link">
                  <Link href="/products/INTSITE">Evaporation King</Link>
                </li>
                <li className="menu-link">
                  <Link href="/products/INTSITE">
                    Реактивные установки очистки вагонов
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="menu-link" href="/about">
              О нас
            </Link>
          </li>
          <li>
            <Link className="menu-link" href="/contacts">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

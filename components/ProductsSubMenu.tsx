import { ReactElement } from 'react';

import Link from 'next/link';

const ProductsSubMenu = (): ReactElement => (
  <div className="products-sub-menu">
    <ul>
      <li className="header-nav-link hover:rounded-md hover:bg-neutral-800">
        <Link href="/products/intsite">
          <p>INTSITE</p>
        </Link>
      </li>
      <li className="header-nav-link hover:rounded-md hover:bg-neutral-800">
        <Link href="/products/sleipner">
          <p>Sleipner</p>
        </Link>
      </li>
      <li className="header-nav-link hover:rounded-md hover:bg-neutral-800">
        <Link href="/products/evaporationking">
          <p>Evaporation King</p>
        </Link>
      </li>
      <li className="header-nav-link hover:rounded-md hover:bg-neutral-800">
        <Link href="/products/reactive">
          <p>Реактивные установки очистки вагонов</p>
        </Link>
      </li>
    </ul>
  </div>
);

export default ProductsSubMenu;

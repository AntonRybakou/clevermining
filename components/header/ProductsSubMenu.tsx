import { ReactElement } from 'react';

import Link from 'next/link';

const ProductsSubMenu = (): ReactElement => (
  <div className="products-sub-menu">
    <ul>
      <li className="header-nav-link hover:bg-neutral-800 rounded-l-lg">
        <Link href="/products/intsite">
          <p className="text-xl">INTSITE - компьютерное зрение</p>
        </Link>
      </li>
      <li className="header-nav-link hover:bg-neutral-800 rounded-l-lg">
        <Link href="/products/sleipner">
          <p className="text-xl">Sleipner - системы транспортировки</p>
        </Link>
      </li>
      <li className="header-nav-link hover:bg-neutral-800 rounded-l-lg">
        <Link href="/products/evaporationking">
          <p className="text-xl">Evaporation King - системы испарения</p>
        </Link>
      </li>
      <li className="header-nav-link  hover:bg-neutral-800 rounded-l-lg">
        <Link href="/products/reactive">
          <p className="text-xl">Реактивные установки очистки вагонов</p>
        </Link>
      </li>
    </ul>
  </div>
);

export default ProductsSubMenu;

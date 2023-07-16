import { ReactElement } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

const productLinks = [
  {
    href: '/products/intsite',
    name: 'INTSITE',
    description: 'технология компьютерного зрения',
  },
  {
    href: '/products/sleipner',
    name: 'Sleipner',
    description: 'системы транспортировки',
  },
  {
    href: '/products/evaporationking',
    name: 'Evaporation King',
    description: 'системы испарения',
  },
  {
    href: '/products/reactive',
    name: 'Реактивные установки',
    description: 'очистки вагонов',
  }
];

const ProductsSubMenu = (): ReactElement => (
  <motion.div className='absolute z-10 w-56 p-2 border bg-white text-center'
              initial={{ y: -10, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}>
    {productLinks.map(({ href, name, description }, i) => (
      <>
        <div className='text-neutral-500 hover:text-neutral-900'>
          <Link href={href}>
            <p><strong>{name}</strong> - {description}</p>
          </Link>
        </div>
        {i < productLinks.length - 1 && <hr />}
      </>
    ))}
  </motion.div>
  );

export default ProductsSubMenu;

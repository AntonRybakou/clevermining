import { ReactElement } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProductsSubMenu = (): ReactElement => (
  <motion.div className='absolute z-10 w-56 p-2 border bg-white'
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}>
    <div className='text-lg text-neutral-500 hover:text-neutral-900'>
      <Link href='/products/intsite'>
        <p>INTSITE - технология компьютерного зрения</p>
      </Link>
    </div>
    <hr />
    <div className='text-lg text-neutral-500 hover:text-neutral-900'>
      <Link href='/products/sleipner'>
        <p>Sleipner - системы транспортировки</p>
      </Link>
    </div>
    <hr />
    <div className='text-lg text-neutral-500 hover:text-neutral-900'>
      <Link href='/products/evaporationking'>
        <p>Evaporation King - системы испарения</p>
      </Link>
    </div>
    <hr />
    <div className='text-lg text-neutral-500 hover:text-neutral-900'>
      <Link href='/products/reactive'>
        <p>Реактивные установки очистки вагонов</p>
      </Link>
    </div>
  </motion.div>
);

export default ProductsSubMenu;

import React from 'react';

import { motion } from 'framer-motion';

const ProductCard: React.FC = () => {
  return (
    <motion.div
      className='w-full h-20 my-5 border rounded-lg flex flex-col items-center justify-center'
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}>
      Product block
    </motion.div>
  );
};

export default ProductCard;
import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardType = {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

export const ProductCard: React.FC<ProductCardType> = ({
                                                         id,
                                                         title,
                                                         image,
                                                         description,
                                                         link,
                                                       }) => {
  return (
    <motion.div
      key={id}
      className='w-full my-5 border flex flex-center justify-center items-start gap-10 justify-items-center'
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}>
      <div className='hidden sm:block relative block w-56 h-56'>
        <Image src={image}
               alt='product image'
               fill
        />
      </div>
      <div className='h-fill my-5 w-3/4 sm:w-1/2 flex flex-col'>
        <h2 className='text-2xl mb-5'><strong>{title}</strong></h2>
        <p>{description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          amet cupiditate dolore eos eum excepturi obcaecati odit perferendis sed
          sint! </p>
        <Link
          className='w-fit border border-black text-white bg-black hover:text-black hover:bg-white px-5 py-2.5 mt-5'
          href={link}>Подробнее</Link>
      </div>
    </motion.div>
  );
};

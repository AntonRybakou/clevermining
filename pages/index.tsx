import React, { ReactElement } from 'react';

import Layout from '../components/Layout';

import { ProductCard } from 'components/ProductCard';

const productsData = [
  {
    id: 1,
    title: 'INTSITE',
    image: '/images/products/comp_vision_eye.png',
    description: 'lorem',
    link: '/products/intsite',
  },
];


const IndexPage = (): ReactElement => (
  <Layout title='Главная | Clevermining'>
    <div className='h-[500px]'>
      <div className='absolute w-full h-[500px] left-0 z-0 bg-black/[0.3]'></div>
      <video
        className='absolute w-full h-[500px] left-0 z-[-1] object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/videoBg.m4v' type='video/mp4' />
      </video>
      <div
        className='relative h-full flex flex-col items-center justify-center text-white z-1'>
        <h1 className='text-7xl font-medium'>Clevermining</h1>
        <h2 className='text-xl'>Умная и эффективная горная добыча</h2>
      </div>
    </div>
    {
      productsData.map(item => {
        return <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          link={item.link} />;
      })
    }
  </Layout>
);

export default IndexPage;

import React, { ReactElement } from 'react';

import Layout from '../components/Layout';

import ProductCard from 'components/ProductCard';

const IndexPage = (): ReactElement => (
  <Layout title='Главная | Clevermining'>
    <div className='h-[500px]'>
      <video
        className='absolute w-full h-[500px] left-0 z-[-1] object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/videoBg.mp4' type='video/mp4' />
      </video>
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl font-medium">Clevermining</h1>
        <h2 className="text-xl">Умная и эффективная горная добыча</h2>
      </div>
    </div>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
  </Layout>
);

export default IndexPage;

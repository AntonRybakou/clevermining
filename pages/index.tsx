import React, { ReactElement } from 'react';

import Layout from '../components/Layout';

import { ProductCard } from 'components/ProductCard';
import { VideoBgBlock } from 'components/VideoBgBlock';

const productsData = [
  {
    id: 1,
    title: 'INTSITE - технология компьютерного зрения',
    image: '/images/products/comp_vision_eye.png',
    description: 'lorem',
    link: '/products/intsite',
  },
  {
    id: 1,
    title: 'INTSITE',
    image: '/images/products/comp_vision_eye.png',
    description: 'lorem',
    link: '/products/intsite',
  },
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
    <VideoBgBlock />
    <div className='flex flex-col gap-10 items-center justify-center my-10'>
      <h2 className='text-4xl font-bold'>Мы предлагаем</h2>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
           stroke='currentColor' className='animate-bounce w-10 h-10'>
        <path strokeLinecap='round' strokeLinejoin='round'
              d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
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

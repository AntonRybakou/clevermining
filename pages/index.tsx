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
  },{
    id: 1,
    title: 'INTSITE',
    image: '/images/products/comp_vision_eye.png',
    description: 'lorem',
    link: '/products/intsite',
  },{
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

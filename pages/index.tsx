import React, { ReactElement } from 'react';

import Layout from '../components/Layout';

const IndexPage = (): ReactElement => (
  <Layout title='Главная | Clevermining'>
    <div className='border w-full h-96'>
    This is main div
    </div>
  </Layout>
);

export default IndexPage;

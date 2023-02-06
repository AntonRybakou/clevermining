import React, { ReactElement } from 'react';

import { motion } from 'framer-motion';

import Layout from 'components/Layout';

const Index = (): ReactElement => (
  <Layout title='Продукты | Clevermining'>
    <h1>PRODUCTS</h1>
    <hr />
    <div className='flex flex-col items-center justify-center'>
      <motion.div className='w-full h-20 border rounded-lg flex flex-col items-center justify-center'
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                  }}>This is text
      </motion.div>
      <motion.div className='w-full h-20 border rounded-lg flex flex-col items-center justify-center'
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.2,
                  }}>This is text
      </motion.div>
      <motion.div className='w-full h-20 border rounded-lg flex flex-col items-center justify-center'
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut',
                    delay: 0.3,
                  }}>This is text
      </motion.div>
      <motion.div className='w-full h-20 border rounded-lg flex flex-col items-center justify-center'
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                    delay: 0.4,
                  }}>This is text
      </motion.div>
    </div>
  </Layout>
);

export default Index;

import React, { ReactElement } from 'react';

import { motion } from 'framer-motion';

import Layout from 'components/Layout';

const Index = (): ReactElement => (
  <Layout title='Продукты | Clevermining'>
    <h1 className='text-center'>PRODUCTS</h1>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, assumenda
      consectetur consequatur deleniti doloribus, dolorum eveniet fugit magni, nesciunt
      obcaecati odit pariatur quae quam quod quos repellat vero. Ab amet animi, aperiam
      asperiores assumenda autem culpa cum cumque delectus deserunt distinctio doloribus
      eos ex facilis illum ipsa ipsum iure molestiae nobis, non nulla officia, officiis
      perferendis porro praesentium quae quis quo quod repellendus sint totam ullam ut vel
      veritatis voluptas voluptate voluptates. Consectetur est et facere inventore itaque
      iusto minus modi necessitatibus, nobis placeat provident quo quos, voluptatem.
      Cumque ipsum numquam saepe sit. Accusantium aliquam, asperiores blanditiis
      consectetur cumque doloribus dolorum illo iste maxime minus molestiae neque nesciunt
      odio optio possimus provident quam quas, rem repellat repudiandae sint soluta
      tempore unde! Adipisci aliquid ducimus eligendi eveniet incidunt iste maxime,
      quisquam, ratione, similique sint soluta ullam voluptate voluptates. Aliquam
      architecto at dolor eligendi esse eveniet facere illo incidunt inventore laudantium
      libero magni, minus molestias nostrum nulla, omnis pariatur provident quaerat,
      quisquam quod recusandae sapiente sit tempore totam vel veritatis vero voluptas! A
      aliquid aspernatur atque, aut cupiditate, dicta dignissimos dolore dolorem ducimus
      earum esse hic ipsum iste itaque iure labore laboriosam libero modi perferendis
      provident quia quo rerum ullam vel velit?
    </div>
    <hr />
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at atque, consectetur
      consequuntur distinctio ea eaque error explicabo ipsa ipsum itaque laborum minima
      nam nostrum pariatur praesentium quam quas quidem quo reprehenderit repudiandae
      sapiente temporibus ullam unde veniam vitae voluptate! Aspernatur autem consequuntur
      delectus eligendi excepturi, incidunt inventore iure magnam minus quis quisquam rem
      reprehenderit suscipit tempore voluptatum. At expedita laudantium minima modi
      quaerat sapiente totam veritatis! Accusantium blanditiis consequatur delectus dolore
      doloremque, dolorum earum fugit ipsum itaque, nulla porro possimus, quibusdam
      repellendus rerum sed. Assumenda consequuntur deleniti labore nam praesentium!
      Accusantium aliquam asperiores assumenda cum distinctio dolorum enim error et,
      excepturi expedita, impedit ipsa ipsum libero nostrum odio officia officiis pariatur
      perferendis perspiciatis quaerat quam quasi quia quisquam rem reprehenderit sint
      tenetur ullam ut velit veritatis voluptas voluptatem voluptatibus voluptatum? Cumque
      dignissimos eius eum magnam nam quas quod. Consequuntur laborum numquam quod
      repellat? Assumenda cumque eos reprehenderit! A accusantium ad alias animi
      architecto asperiores beatae blanditiis commodi culpa debitis distinctio dolor eaque
      error eveniet facere fuga id illo inventore ipsam iure libero magnam minima nostrum
      odit officia perferendis, provident quaerat quia quo quod recusandae repellendus
      rerum tenetur veniam vero voluptatibus voluptatum? Atque cum nihil repudiandae sint
      tempore ut veritatis.
    </div>
    <hr />
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at atque, consectetur
      consequuntur distinctio ea eaque error explicabo ipsa ipsum itaque laborum minima
      nam nostrum pariatur praesentium quam quas quidem quo reprehenderit repudiandae
      sapiente temporibus ullam unde veniam vitae voluptate! Aspernatur autem consequuntur
      delectus eligendi excepturi, incidunt inventore iure magnam minus quis quisquam rem
      reprehenderit suscipit tempore voluptatum. At expedita laudantium minima modi
      quaerat sapiente totam veritatis! Accusantium blanditiis consequatur delectus dolore
      doloremque, dolorum earum fugit ipsum itaque, nulla porro possimus, quibusdam
      repellendus rerum sed. Assumenda consequuntur deleniti labore nam praesentium!
      Accusantium aliquam asperiores assumenda cum distinctio dolorum enim error et,
      excepturi expedita, impedit ipsa ipsum libero nostrum odio officia officiis pariatur
      perferendis perspiciatis quaerat quam quasi quia quisquam rem reprehenderit sint
      tenetur ullam ut velit veritatis voluptas voluptatem voluptatibus voluptatum? Cumque
      dignissimos eius eum magnam nam quas quod. Consequuntur laborum numquam quod
      repellat? Assumenda cumque eos reprehenderit! A accusantium ad alias animi
      architecto asperiores beatae blanditiis commodi culpa debitis distinctio dolor eaque
      error eveniet facere fuga id illo inventore ipsam iure libero magnam minima nostrum
      odit officia perferendis, provident quaerat quia quo quod recusandae repellendus
      rerum tenetur veniam vero voluptatibus voluptatum? Atque cum nihil repudiandae sint
      tempore ut veritatis.
    </div>
    <hr className='my-5' />
    <motion.div
      className='w-full h-20 my-5 border rounded-lg flex flex-col items-center justify-center'
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}>This is text
    </motion.div>
    <motion.div
      className='w-full h-20 my-5 border rounded-lg flex flex-col items-center justify-center'
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}>This is text
    </motion.div>
    <motion.div
      className='w-full h-20 my-5 border rounded-lg flex flex-col items-center justify-center'
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}>This is text
    </motion.div>
    <motion.div
      className='w-full h-20 my-5 border rounded-lg flex flex-col items-center justify-center'
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}>This is text
    </motion.div>
  </Layout>
);

export default Index;

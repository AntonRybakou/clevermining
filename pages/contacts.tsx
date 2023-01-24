import React, { ReactElement } from 'react';

import ContactForm from 'components/ContactForm';
import Layout from 'components/Layout';

const Contacts = (): ReactElement => (
  <Layout title="Контакты | Clevermining">
    <div className="flex flex-col flex-wrap items-center mx-auto">
      <h1>CONTACTS PAGE</h1>
      <ContactForm />
    </div>
  </Layout>
);

export default Contacts;

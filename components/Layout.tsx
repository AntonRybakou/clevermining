import React, { ReactElement, ReactNode } from 'react';

import Head from 'next/head';

import Footer from 'components/Footer';
import Header from 'components/Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'This is the default title',
}: Props): ReactElement => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

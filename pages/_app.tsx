import { ReactElement } from 'react';

import { AppProps } from 'next/app';

import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <Component {...pageProps} />
);

export default MyApp;

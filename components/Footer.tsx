import React, { ReactElement } from 'react';

import Image from 'next/image';

import logo from 'image/excavator-pixel.png';

const Footer = (): ReactElement => (
  <footer className="relative h-10 mt-36 border border-orange-400">
    <span>Footer</span>
    <Image
      src={logo}
      alt="clevermining-logo"
      className="absolute bottom-0 right-0"
      height="300"
      width="300"
    />
  </footer>
);

export default Footer;

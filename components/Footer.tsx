import React, { ReactElement } from 'react';

import Image from 'next/image';

import logo from 'image/excavator-pixel.png';

const Footer = (): ReactElement => (
  <footer className="relative h-24 flex items-center justify-center bg-black">
    <div className="flex flex-wrap max-w-7xl items-center justify-between text-gray-50">
      Copyright © 2023 Clevermining. All rights reserved.
    </div>
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

import { ReactElement } from 'react';

import Link from 'next/link';

const Header = (): ReactElement => (
  <header>
    <nav>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
      <Link href="/users">Users List</Link> | <Link href="/api/users">Users API</Link>
    </nav>
  </header>
);

export default Header;

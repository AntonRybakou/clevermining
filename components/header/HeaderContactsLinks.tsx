import { ReactElement } from 'react';

import Link from 'next/link';

import { EmailIcon } from '../svg/EmailIcon';
import { TelephoneIcon } from '../svg/TelephoneIcon';

type ContactLinkType = {
  href: string;
  Icon: ReactElement;
  text: string;
};

const links: ContactLinkType[] = [
  {
    href: 'tel:+74956486278',
    Icon: <TelephoneIcon />,
    text: '+ 7 (495) 648-62-78',
  },
  {
    href: 'mailto:ask@clevermining.ru',
    Icon: <EmailIcon />,
    text: 'ask@clevermining.ru',
  },
];

const HeaderContactsLinks = (): ReactElement => {
  return (
    <div className="hidden lg:flex flex-col flex-wrap font-light">
      {links.map(({ href, Icon, text }) => (
        <Link
          key={href}
          className="hover:text-blue-600 my-1 flex items-center"
          href={href}
        >
          {Icon}
          <span>{text}</span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderContactsLinks;

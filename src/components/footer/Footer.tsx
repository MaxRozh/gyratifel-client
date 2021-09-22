import React from 'react';
import Link from 'next/link';

import Svg from '_ui/svg/Svg';

import { MENU_LIST } from 'constants/menu';
import { SOCIALS_LIST } from 'constants/socials';

const FOOTER_ADDITIONAL_MENU = [
  { name: 'F.A.Q', href: '/doc' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of use', href: '/term-of-use' }
];

function Footer() {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-800">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <span className="text-xl font-bold tracking-wide text-white uppercase">Gyratifel</span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <span className="text-base font-bold tracking-wide text-gray-200">Menu</span>
          {MENU_LIST.map(({ name, href }) => (
            <div className="flex" key={name}>
              <Link href={href}>
                <a
                  aria-label={name}
                  title={name}
                  className="transition-colors duration-300 text-gray-400 hover:text-white"
                >
                  {name}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-200">Socials</span>
          <div className="flex items-center mt-1 space-x-3">
            {SOCIALS_LIST.map((item) => (
              <a
                href={item.href}
                className="text-gray-500 transition-colors duration-300 hover:text-white"
                key={item.name}
              >
                <Svg icon={item.icon} styleClassName="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-400">Need to think about what text might be here and how long.</p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-400">
          © Copyright {new Date().getUTCFullYear()} Gyratifel. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          {FOOTER_ADDITIONAL_MENU.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

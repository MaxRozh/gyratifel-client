/* eslint-disable */

import React, { Fragment } from 'react';
// import Link from 'next/link';
// import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';

import Svg from '_ui/svg/Svg';

import { LOCALES_LIST, DEFAULT_LOCALE } from 'constants/locales';

function HeaderLocale() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* eslint-disable-next-line max-len */}
        <Menu.Button className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {/*{DEFAULT_LOCALE}*/}
          <Svg icon={DEFAULT_LOCALE} styleClassName="w-5 h-5 text-violet-200 hover:text-violet-100" isCountries />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* eslint-disable-next-line max-len */}
        <Menu.Items className="absolute right-1 mt-1 origin-top-right bg-gray-800 divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          {LOCALES_LIST.map((locale) => (
            <Menu.Item key={locale}>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-violet-500 bg-white' : ''} flex items-center px-2 py-2 hover:bg-white`}
                >
                  <Svg icon={locale} styleClassName="w-5 h-5" isCountries />
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderLocale;

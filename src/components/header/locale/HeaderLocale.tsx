import React, { Fragment } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';

import Svg from '_ui/svg/Svg';

function HeaderLocale() {
  const currentLocale = 'en';
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* eslint-disable-next-line max-len */}
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {currentLocale}
          <Svg icon={currentLocale} styleClassName="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" />
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
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <EditActiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <EditInactiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  )}
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <DuplicateActiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <DuplicateInactiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  )}
                  Duplicate
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <ArchiveActiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArchiveInactiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  )}
                  Archive
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <MoveActiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <MoveInactiveIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  )}
                  Move
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <DeleteActiveIcon
                      className="w-5 h-5 mr-2 text-violet-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <DeleteInactiveIcon
                      className="w-5 h-5 mr-2 text-violet-400"
                      aria-hidden="true"
                    />
                  )}
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderLocale;

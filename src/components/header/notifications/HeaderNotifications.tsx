import React, { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';

import Svg from '_ui/svg/Svg';
import type { NotificationItemType } from 'constants/mocks/notifications';

type PropsType = {
  list: Array<NotificationItemType>;
};

function HeaderNotifications({ list }: PropsType) {
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        {/* eslint-disable-next-line max-len */}
        <Menu.Button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          <Svg styleClassName="h-6 w-6" icon="ring" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {list.map(({ id, href, img, message }) => (
            <Menu.Item key={id}>
              <Link href={href}>
                {/* eslint-disable-next-line max-len */}
                <a className="flex items-center px-4 py-3 transition-colors duration-200 transform border-b hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700">
                  <img className="object-cover w-8 h-8 mx-1 rounded-full" src={img} alt="avatar" />
                  <p className="mx-2 text-sm text-gray-600 dark:text-white">
                    {message.map((item) => {
                      if (item.type) {
                        return (
                          <span
                            className={item.type === 'important' ? 'font-bold text-blue-500' : 'font-bold'}
                            key={item.text}
                          >
                            {item.text}
                          </span>
                        );
                      }
                      return item.text;
                    })}
                  </p>
                </a>
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item>
            <Link href="/notifications">
              <a className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline">
                See all notifications
              </a>
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default HeaderNotifications;

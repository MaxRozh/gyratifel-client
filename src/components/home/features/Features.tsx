import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

import UiTransition from '_ui/transition/UiTransition';
import Svg from '_ui/svg/Svg';

const TABS_LIST = [
  {
    id: 0,
    titleKey: 'tabs.1.title',
    descriptionKey: 'tabs.1.desc',
    icon: 'lighting',
    image1: '/images/features-bg.png',
    image2: '/images/features-element.png'
  },
  {
    id: 1,
    titleKey: 'tabs.2.title',
    descriptionKey: 'tabs.2.desc',
    icon: 'arrow',
    image1: '/images/hero-image.png',
    image2: '/images/features-element.png'
  },
  {
    id: 2,
    titleKey: 'tabs.3.title',
    descriptionKey: 'tabs.3.desc',
    icon: 'moon',
    image1: '/images/testimonial.jpg',
    image2: '/images/features-element.png'
  }
];
const getClassNamesForTabs = (isSelected: boolean) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  classNames(
    'flex items-center w-full text-lg p-5 rounded border transition duration-200 ease-in-out mb-3',
    isSelected ? 'bg-gray-200 border-transparent' : 'bg-white shadow-md border-gray-200 hover:shadow-lg'
  );

type PropsType = {
  t: Function;
};

function Features({ t }: PropsType) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true" />
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 font-extrabold">{t('explore')}</h1>
            <p className="text-xl text-gray-600">{t('explore_desc')}</p>
          </div>
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <Tab.Group vertical onChange={(index) => setCurrentTabIndex(index)}>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                data-aos="fade-right"
              >
                <Tab.List className="mb-8 md:mb-0">
                  {TABS_LIST.map((item) => (
                    <Tab key={item.id} className={({ selected }) => getClassNamesForTabs(selected)}>
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">{t(item.titleKey)}</div>
                        <div className="text-gray-600">{t(item.descriptionKey)}</div>
                      </div>
                      {/* eslint-disable-next-line max-len */}
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                        <Svg icon={item.icon} styleClassName="w-3 h-3 fill-current" />
                      </div>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="zoom-y-out"
              >
                <Tab.Panels className="relative flex flex-col text-center lg:text-right">
                  {TABS_LIST.map((item, index) => (
                    <Tab.Panel className="w-full" key={item.id}>
                      <UiTransition isShow={index === currentTabIndex}>
                        <div className="relative inline-flex flex-col h-3/4">
                          <img
                            className="md:max-w-none mx-auto rounded max-h-full"
                            src={item.image1}
                            width="500"
                            height="462"
                            alt="Features bg"
                          />
                          <img
                            className="md:max-w-none absolute w-full left-0"
                            src={item.image2}
                            width="500"
                            height="44"
                            alt="Element"
                            style={{ top: '30%' }}
                          />
                        </div>
                      </UiTransition>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

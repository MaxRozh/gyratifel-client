import React from 'react';
import dynamic from 'next/dynamic';

type PropsType = {
  styleClassName?: string;
  isCountries?: boolean;
  icon: string;
};

// eslint-disable-next-line no-undef
function Svg({ styleClassName, icon, isCountries }: PropsType): JSX.Element {
  const Comp = dynamic(() => import(`../../../public/svg/${isCountries ? 'countries/' : ''}${icon}.svg`));
  // @ts-ignore
  return <Comp className={styleClassName} />;
}

export default Svg;

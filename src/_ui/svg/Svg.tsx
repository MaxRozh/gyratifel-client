import React from 'react';
import dynamic from 'next/dynamic';

type PropsType = {
  styleClassName?: string; // eslint-disable-line react/require-default-props
  icon: string;
};

// eslint-disable-next-line no-undef
function Svg({ styleClassName, icon }: PropsType): JSX.Element | null {
  if (!icon) return null;
  const Comp = dynamic(() => import(`../../../public/svg/${icon}.svg`));
  // @ts-ignore
  return <Comp className={styleClassName} />;
}

export default Svg;

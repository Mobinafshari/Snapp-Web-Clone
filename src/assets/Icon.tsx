import { retryDynamicImport } from '@utils/retryDynamicImport';
import { Suspense, SVGProps } from 'react';

const icons = {
  Send: retryDynamicImport(() => import('@icons/send.svg?react')),
  Options: retryDynamicImport(() => import('@icons/options.svg?react')),
  Code: retryDynamicImport(() => import('@icons/code.svg?react')),
};

type CustomIcon = {
  icon: keyof typeof icons;
  svgProps?: SVGProps<SVGSVGElement>;
};
const CustomIcon = ({ icon, svgProps }: CustomIcon) => {
  const Icon = icons[icon];
  return (
    <Suspense>
      <Icon {...svgProps} ref={null} />
    </Suspense>
  );
};

export default CustomIcon;

import { FC } from 'react';
import { MultiCheck, Radio } from './elements';
import { ElementVariant } from './types';

export type ElementProps = {

  element: ElementVariant
};

export const Element: FC<ElementProps> = ({ element }) => {
  switch (element.type) {
    case 'radio':
      return <Radio {...element} />;
    case 'multiCheck':
      return <MultiCheck {...element} />;
    default:
      return null;
  }
};

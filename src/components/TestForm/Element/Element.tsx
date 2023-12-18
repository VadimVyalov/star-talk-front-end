import { FC } from 'react';
import { Text, Input, Check, Radio } from '../elements';
import { ElementVariant, ElementType } from '../types';

export type ElementProps = {
  element: ElementVariant;
};

export const Element: FC<ElementProps> = ({ element }) => {
  switch (element.type) {
    case ElementType.input:
      return <Input {...element} />;
    case ElementType.text:
      return <Text {...element} />;
    case ElementType.radio:
      return <Radio {...element} />;
    case ElementType.check:
      return <Check {...element} />;
    default:
      return null;
  }
};

import { FC } from 'react';
import { ElementText } from '../../types';

export const Text: FC<ElementText> = ({ text }) => {
  return <div>{text}</div>;
};

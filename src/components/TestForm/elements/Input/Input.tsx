import { FC } from 'react';
//import {InputStyled} from './styled';
import { ElementInput } from '../../types';
import { useFormContext } from 'react-hook-form';

export const Input: FC<ElementInput> = ({ placeholder, value, id }) => {
  const { register } = useFormContext();
  return <input className='p-3 border-l border-grey-3 outline-none w-full'
    placeholder={placeholder} {...register(id, { value })} />;
};


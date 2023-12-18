import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ElementCheck, ElementType } from '../../types';

export const Check: FC<ElementCheck> = ({ id, items }) => {
  const { register } = useFormContext();

  return (
    <ul className='flex flex-col gap-2'>

      {items.map((item) => {
        return (
          <li key={item.id} className='flex gap-3' >
            <input className='none'
              id={item.id}
              type={ElementType.check}
              {...register(`${id}[${item.id}]`)}
            // {...register(`questions[${item.id}]`)}
            />
            <label htmlFor={item.id}>
              {item.value}
            </label>
          </li>
        )
      })}

    </ul>
  );
};

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ElementCheck, ElementType } from '../../types';

export const Check: FC<ElementCheck> = ({ id, items }) => {
  const { register } = useFormContext();

  return (
    <div>

      {items.map((item, i) => {
        return (
          <div key={item.id}>
            <input className='none'
              id={item.id}
              type={ElementType.check}
              {...register(`${id}[${item.id}]`)}
            // {...register(`questions[${item.id}]`)}
            />
            <label htmlFor={item.id}>
              {item.value}
            </label>
          </div>
        )
      })}

    </div>
  );
};

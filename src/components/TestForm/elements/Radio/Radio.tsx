import React from 'react';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ElementRadio, ElementType } from '../../types';

export const Radio: FC<ElementRadio> = ({ id, items }) => {
  const { register } = useFormContext();

  return (
    <div>

      {items.map(item => {
        return (
          <div key={item.id}>
            <input className='none'
              id={item.id}
              type={ElementType.radio}
              value={item.id}

              {...register(id)}
            //onChange={(e) => console.log(e.target.value) }
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

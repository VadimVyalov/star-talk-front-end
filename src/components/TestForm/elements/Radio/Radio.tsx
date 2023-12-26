//`use client`
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ElementRadio } from '../../types';
import cn from "@/helpers"

export const Radio: FC<ElementRadio> = ({ id, items }) => {
  const { register, setValue, getValues } = useFormContext();
  return (
    <ul className='flex flex-col gap-2'>

      {items.map(item => {

        return (
          <li key={item.id} className='flex'>
            <input className='invisible w-0 h-0'
              id={item.id}
              type='radio'
              value={item.id}
              {...register(`${id}`)}
              onChange={(e) => setValue(id, e.target.value, { shouldValidate: true })}
            />
            <label className={cn(getValues(id) === item.id
              ? " after:absolute after:w-3 after:h-3 after:bg-accent-100 after:rounded-full after:left-[4px] before:border-accent-100"
              : "before:border-black-100",
              "before:w-5 before:h-5 before:border before:rounded-full before:block before:pt-0.5",
              "flex hover:text-accent-100 gap-x-3 items-center relative ",
              "before:hover:border-accent-100")} htmlFor={item.id}>
              {item.value}
            </label>
          </li>
        )
      })}

    </ul>
  );
};

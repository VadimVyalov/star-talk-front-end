import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ElementMultiCheck } from '../../types';
import cn from "@/helpers"


export const MultiCheck: FC<ElementMultiCheck> = ({ id, items }) => {
  const { register, setValue, getValues } = useFormContext();
  return (
    <ul className='flex flex-col gap-2'>

      {items.map((item) => {
        return (
          <li key={item.id} className='flex' >
            <input className=' invisible w-0 h-0'
              id={item.id}
              type='checkbox'

              {...register(`${id}[${item.id}]`)}

              onChange={(e) => setValue(`${id}[${item.id}]`, e.target.checked, { shouldValidate: true })}
            />
            <label className={cn(getValues(`${id}[${item.id}]`)
              ? "after:content-check-small after:absolute after:left-[2px] after:top-[2px] before:bg-accent-100 before:border-accent-100"
              : "before:border-black-100",
              "before:w-5 before:h-5 before:border before:rounded  before:block relative",
              "flex hover:text-accent-100 gap-x-3 items-center ",
              "before:hover:border-accent-100")} htmlFor={item.id}>
              {item.value}
            </label>
          </li>
        )
      })}

    </ul>
  );
};

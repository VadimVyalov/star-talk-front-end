'use client'
import cn from "@/helpers"
import { memo } from "react";

import { useFormContext } from 'react-hook-form';

interface IFormSubmit extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string
}

const FormSubmit = memo(({ label, className = '', ...props }: IFormSubmit) => {

    const { formState: { isSubmitting, isValid } } = useFormContext<{ [key: string]: string }>();
    return (
        <button
            type='submit'
            disabled={isSubmitting || !isValid}
            className={cn("greenLink", "mt-3 px-[21px] py-[27px] leading-[10px]  w-full  mx-auto")}
            {...props}
        >
            {label}
        </button>

    )
})

FormSubmit.displayName = 'FormSubmit'

export default FormSubmit
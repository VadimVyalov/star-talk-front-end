'use client'
import cn from "@/helpers"
import { memo } from "react";

import { useFormContext } from 'react-hook-form';

interface InestedInput extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    styles?: {
        wraper?: string;
        label?: string;
        input?: string;
        error?: string;
    }
}


const FormInput = memo(({ name, label, styles, ...props }: InestedInput) => {

    const { register, formState: { errors } } = useFormContext<{ [key: string]: string }>();


    return (

        <div className={cn(styles?.wraper)}>
            <label className={cn(styles?.label)}>{label}
                <input {...register(name)}
                    className={cn(styles?.input)}
                    {...props}
                />

            </label>
            {/* {errors[name] ? <p className={cn(styles?.error)}>{errors[name]?.message}</p> : null} */}
            {errors[name]
                ? <p className={cn(styles?.error)}>{errors[name]?.message}</p>
                : <p className={cn(styles?.error, "text-transparent")}> no error</p>}

        </div>
    )
})

FormInput.displayName = 'FormInput'

export default FormInput
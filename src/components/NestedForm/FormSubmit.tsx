'use client'
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
            className={className}
            {...props}
        >
            {label}
        </button>

    )
})

FormSubmit.displayName = 'FormSubmit'

export default FormSubmit
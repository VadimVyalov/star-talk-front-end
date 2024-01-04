'use client'
import cn from "@/helpers";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";

import * as yup from "yup";

type TData = { [x: string]: any }

type TFormWrapper = {
    children: React.ReactNode,
    schema: { [x: string]: yup.StringSchema },
    onSubmit: (data: TData) => void;
    className?: string;

}

//
const FormWrapper: FC<TFormWrapper> = ({ children, schema, onSubmit, className = '' }) => {


    const resolverSchema = yup.object(schema)

    const formMetods = useForm<TData>({
        resolver: yupResolver(resolverSchema),
        mode: "onTouched",
    });



    useEffect(() => {
        if (formMetods.formState.isSubmitSuccessful) {
            formMetods.reset();
        }
    }, [formMetods.formState.isSubmitSuccessful, formMetods.reset]);


    return (

        <FormProvider {...formMetods}>
            <form className={cn("flex flex-col gap-x-5 gap-y-5 d:gap-y-6 bg-white-100 p-5 ", className)}
                //action={action}
                onSubmit={formMetods.handleSubmit(onSubmit)}
            >
                {children}

            </form>
        </FormProvider>

    )

}

export default FormWrapper

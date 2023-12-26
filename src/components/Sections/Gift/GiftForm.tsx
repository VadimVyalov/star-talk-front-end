import React from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { gift } from "@/helpers/validation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";
import { InputGift, sendFeedBack } from "@/helpers/sendFeedBack";
import { toast } from "react-toastify";
import cn from "@/helpers"



const GiftForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitting, isValid },
    } = useForm<InputGift>({
        mode: 'onTouched',
        resolver: yupResolver(gift)
    });

    const action: () => void = handleSubmit(async (data) => {

        const token = await handleReCaptchaVerify();
        if (token) {

            toast.promise(
                sendFeedBack(data, token),
                {
                    pending: 'очікую відповідь сервера...',
                    success: 'Дякуємо, запит успішно надіслано. Найближчим часом ми з Вами сконтактуємо',
                    error: 'Щось пішло не так, спробуйте пізніше'
                },
                {
                    autoClose: 3000,
                }
            );
        } else { toast.error('Спрацював захист від ботів') }
    });

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState.isSubmitSuccessful, reset]);


    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }
        const token = await executeRecaptcha("gift");
        return token;
    }, [executeRecaptcha]);

    const Style = {
        wraper: 'flex flex-col min-w-[200px]',
        label: 'text-[0]  border-b-2 border-black-15 transition-colors',
        input: 'outline-none bg-transparent text-base leading-[1.5] w-full pt-3 pb-2',
        error: ' text-error-100 text-xs/[15px]'
    }

    return (
        <form className="flex  flex-wrap gap-x-5 gap-y-4  mx-auto"
            action={action}
        >
            <div className="flex flex-wrap gap-x-5 gap-y-4 mr-auto ">

                <div className={cn(Style.wraper)}>
                    <label className={cn(Style.label, errors.phone ? 'hover:border-error-100' : ' hover:border-accent-100')}>Номер телефону
                        <input {...register("phone")}
                            placeholder="Номер телефону"
                            className={cn(Style.input)} />
                    </label>
                    {errors.phone ? <p className={cn(Style.error)}>{errors.phone.message}</p> : <p className="text-xs text-transparent">все гаразд</p>}
                </div>

                <div className={cn(Style.wraper)}>
                    <label className={cn(Style.label, errors.name ? 'hover:border-error-100' : ' hover:border-accent-100')}>Ваше ім’я
                        <input {...register("name")}
                            placeholder="Ваше ім’я"
                            className={cn(Style.input)} />
                    </label>
                    {errors.name ? <p className={cn(Style.error)}>{errors.name.message}</p> : <p className="text-xs text-transparent">все гаразд</p>}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className={cn("greenLink", "block px-[21px] py-[22px] t:py-[13px] leading-[1.25]   h-fit w-full t:w-auto ")}>
                Надіслати
            </button>

        </form>
    )
}

export default GiftForm

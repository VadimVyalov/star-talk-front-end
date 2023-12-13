import cn from "@/helpers"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";
import { InputFeedBack, sendFeedBack } from "@/helpers/sendFeedBack";
import { feedback } from "@/helpers/validation";
import { toast } from "react-toastify";


const FeedbackForm = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitting, isValid },
    } = useForm<InputFeedBack>({
        mode: "onTouched",
        resolver: yupResolver(feedback)
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

        const token = await executeRecaptcha("feedback");
        return token;
    }, [executeRecaptcha]);
    return (
        <form className="flex  flex-col gap-x-5 gap-y-5 d:gap-y-6  " action={action} >

            <div className="flex flex-col gap-y-2 w-full ">
                <label className=" text-lg/[27px] font-medium  flex flex-col gap-y-3
                            hover:border-accent-100 transition-colors">Ім’я*

                    <input {...register("name")} placeholder="Ваше ім’я"
                        className="outline-none bg-transparent text-base border border-black-30 rounded-[5px]  
                            placeholder-black-30 w-full px-[25px] py-[17px]" />
                </label>

                {errors.name ? <p className=" text-error-100 text-xs/[15px]">{errors.name.message}</p> : null}
            </div>

            <div className="flex flex-col min-w-[200px] ">
                <label className="text-lg/[27px] font-medium  flex flex-col gap-y-3
                              hover:border-accent-100 transition-colors">E-mail*
                    <input {...register("email")} placeholder="example@email.com"
                        className="outline-none bg-transparent text-base border border-black-30 rounded-[5px]  
                          placeholder-black-30 w-full px-[25px] py-[17px]" />
                </label>
                {errors.email ? <p className=" text-error-100 text-xs/[15px]">{errors.email.message}</p> : null}
            </div>

            <div className="flex flex-col min-w-[200px] ">
                <label className="text-lg/[27px] font-medium  flex flex-col gap-y-3
                              hover:border-accent-100 transition-colors">Повідомлення*
                    <textarea {...register("message")} placeholder="Введіть своє повідомлення тут..."
                        rows={4}
                        className="outline-none bg-transparent text-base border border-black-30 rounded-[5px]  
                          placeholder-black-30 w-full p-6 resize-none" />
                </label>
                {errors.message ? <p className=" text-error-100 text-xs/[15px]">{errors.message.message}</p> : null}
            </div>

            <button
                disabled={isSubmitting || !isValid}
                className={cn("greenLink", " px-[21px] d:px-[73px] py-6 leading-[10px]  w-full t:w-auto mx-auto")}
                type='submit'
            >
                Надіслати
            </button>

        </form>
    )
}

export default FeedbackForm
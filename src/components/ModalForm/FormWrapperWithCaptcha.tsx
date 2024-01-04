'use client'
import cn from "@/helpers";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FC, useCallback, useEffect } from "react";
import { sendFeedBack } from "@/helpers/sendFeedBack";
import { toast } from "react-toastify";
import * as yup from "yup";



type TFormWrapper = {
    children: React.ReactNode,
    schema: { [x: string]: yup.StringSchema },
    captchaName?: string,
    className?: string,
    onAction?: () => void
}
//
const FormWrapperWithCaptcha: FC<TFormWrapper> = ({ children, schema, captchaName = 'formWrapper', className = '', onAction = null }) => {

    type TData = { [x: string]: any }
    const resolverSchema = yup.object(schema)

    // const vSchema = yup.object({ name, phone })

    // type TvS = yup.InferType<typeof vSchema>;
    //type TForm = yup.InferType<typeof validationSchema>;
    // type TForm = yup.InferType<typeof schema>;

    const formMetods = useForm<TData>({
        resolver: yupResolver(resolverSchema),
        mode: "onTouched",
    });

    const { executeRecaptcha } = useGoogleReCaptcha();


    const action: () => void = formMetods.handleSubmit(async (data) => {
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


    }
    );

    useEffect(() => {
        if (formMetods.formState.isSubmitSuccessful) {
            formMetods.reset();
            if (onAction) onAction()
        }
    }, [formMetods.formState.isSubmitSuccessful, formMetods.reset, onAction]);


    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }

        const token = await executeRecaptcha(captchaName);
        return token;
    }, [executeRecaptcha]);

    return (

        <FormProvider {...formMetods}>
            <form className={cn("flex flex-col gap-x-5 gap-y-6 p-5 bg-mainBg  ")}
                //action={action}
                onSubmit={action}
            >
                {children}

            </form>
        </FormProvider>

    )

}

export default FormWrapperWithCaptcha

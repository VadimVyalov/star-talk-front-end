
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FC, useCallback, useEffect } from "react";
import { sendFeedBack } from "@/helpers/sendFeedBack";
import { toast } from "react-toastify";
import * as yup from "yup";
import makeAnswer from "../TestForm/helpers/makeAnswer";
import { FormData } from "../TestForm/types";

// import { DevTool } from "@hookform/devtools";

type TData = Record<string, string>

type TFormWrapper = {
    children: React.ReactNode,
    schema: Record<string, yup.AnySchema>,//{ [x: string]: yup.AnySchema },
    captchaName?: string,
    className?: string,
    Questions?: FormData[],
    onPending?: () => void,
    onSuccess?: () => void,
    onError?: () => void,
    onFinally?: (data: TData) => void,

}
//
const FormWrapperWithCaptcha: FC<TFormWrapper> = (
    { children, schema, captchaName = 'formWrapper', className = '', Questions = [],
        onPending = null, onSuccess = null, onError = null, onFinally = null }) => {


    const resolverSchema = yup.object().shape(schema)

    // const vSchema = yup.object({ name, phone })
    // type TvS = yup.InferType<typeof vSchema>;
    //type TForm = yup.InferType<typeof validationSchema>;
    // type TForm = yup.InferType<typeof schema>;

    const formMetods = useForm<TData>({
        resolver: yupResolver(resolverSchema),
        mode: "onTouched",
    });

    const { executeRecaptcha } = useGoogleReCaptcha();
    // console.log(executeRecaptcha);


    const action: () => void = formMetods.handleSubmit(async (data) => {

        const token = await handleReCaptchaVerify();
        // console.log(captchaName);
        // console.log(token);
        if (token) {
            data.role = captchaName
            if (captchaName === 'test') data.message = await makeAnswer(data, Questions)
            toast.promise(
                sendFeedBack(data, token),
                {
                    pending: {

                        render() {
                            if (onPending) onPending()
                            return 'очікую відповідь сервера...'
                        }
                    },
                    success: {
                        render() {
                            if (onSuccess) onSuccess()
                            return 'Дякуємо, запит успішно надіслано. Найближчим часом ми з Вами сконтактуємо'
                        }
                    },
                    error: {
                        render() {
                            if (onError) onError()
                            return 'Щось пішло не так, спробуйте пізніше'
                        }
                    }
                },
                {
                    autoClose: 3000,
                    pauseOnHover: false
                }
            ).finally(() => { if (onFinally) onFinally(data) });
        } else {
            toast.error('Спрацював захист від ботів')
            if (onError) onError()
        }

    }
    );

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('executeRecaptcha error');

            return;
        }

        const token = await executeRecaptcha(captchaName);


        return token;
    }, [executeRecaptcha]);

    useEffect(() => {
        if (formMetods.formState.isSubmitSuccessful) {
            formMetods.reset();
        }

    }, [formMetods.formState.isSubmitSuccessful, formMetods.reset, onFinally]);




    return (

        <FormProvider {...formMetods}>
            <form className={className}
                // flex flex-col gap-x-5 gap-y-6 p-5 bg-mainBg
                //action={action}
                onSubmit={action}
            >
                {children}

            </form>
            {/* <DevTool control={formMetods.control} /> */}
        </FormProvider>

    )

}

export default FormWrapperWithCaptcha

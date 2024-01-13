"use client"
import React from "react"
import FormWrapperWithCaptcha from "@/components/ModalForm/FormWrapperWithCaptcha";
import FormInput from "@/components/NestedForm/FormInput";
import FormTextArea from "@/components/NestedForm/FormTextArea";
import FormSubmit from "@/components/NestedForm/FormSubmit";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { email, name, message } from "@/helpers/validation";

const FeedbackForm = () => {


    const feedbackInputStyle = {
        wraper: 'flex flex-col gap-y-2 w-full',
        label: 'text-lg/[27px] font-medium  flex flex-col gap-y-3 hover:border-accent-100 transition-colors',
        input: 'outline-none bg-transparent text-base border border-black-30 rounded-[5px] placeholder-black-30 w-full px-[25px] py-[17px] resize-none',
        error: ' text-error-100 text-xs/[15px]'
    }

    return (

        <GoogleReCaptchaProvider
            reCaptchaKey={`${process.env.NEXT_PUBLIC_CAPCHA_CLIENT}`}
            scriptProps={{
                id: 'feedback_GoogleReCaptchaProvider'
            }}

        >
            <FormWrapperWithCaptcha
                schema={{ name, email, message }}
                captchaName='feedback'
                // onAction={onCloseMenu}
                className="flex flex-col gap-y-4"
            >
                <FormInput type='text' name="name"
                    label="Ім’я*" placeholder="Ім’я*"
                    styles={feedbackInputStyle} />
                <FormInput type='text' name="email"
                    label="E-mail*" placeholder="example@email.com*"
                    styles={feedbackInputStyle} />
                <FormTextArea name="message" label="Повідомлення*"
                    rows={4} placeholder="Введіть своє повідомлення тут..."
                    styles={feedbackInputStyle} />
                <FormSubmit label="Надіслати"
                    className="greenLink px-[21px] t:px-[73px] py-6 leading-[10px]  w-full t:w-auto mt-4 mx-auto" />
            </FormWrapperWithCaptcha>

        </GoogleReCaptchaProvider >
    )
}

export default FeedbackForm
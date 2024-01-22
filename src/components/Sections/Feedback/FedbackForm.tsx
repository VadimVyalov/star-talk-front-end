"use client"
import React, { useState } from "react"
import FormWrapperWithCaptcha from "@/components/ModalForm/FormWrapperWithCaptcha";
import FormInput from "@/components/NestedForm/FormInput";
import FormTextArea from "@/components/NestedForm/FormTextArea";
import FormSubmit from "@/components/NestedForm/FormSubmit";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { email, name, message } from "@/helpers/validation";
import { ModalWrapper } from "@/components/Modal/ModalWrapper";
import PoliticsNotification from "@/components/PoliticsNotification";


const FeedbackForm = () => {

    const feedbackInputStyle = {
        wraper: 'flex flex-col gap-y-1  w-full',
        label: 'text-lg/[27px] font-medium  flex flex-col transition-colors',
        input: 'outline-0 outline-accent-100 bg-transparent text-base border border-black-30 hover:border-accent-100 focus:border-accent-100 rounded-[5px] placeholder-black-30 w-full px-[25px] py-[12px] resize-none',
        inputError: 'outline-error-100 hover:border-error-100 focus:border-error-100',
        error: ' text-error-100 text-xs/[15px]'
    }
    const [showPolitics, setShowPolitics] = useState(false)

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
                // onFinally={(formData) => console.log(formData)}
                notAllow={() => { setShowPolitics(true) }}
                className="flex flex-col gap-y-4"
            >
                <FormInput type='text' name="name"
                    label="Ім’я*" placeholder="Ім’я"
                    styles={feedbackInputStyle}

                />
                <FormInput type='text' name="email"
                    label="E-mail*" placeholder="example@email.com"
                    styles={feedbackInputStyle} />
                <FormTextArea name="message" label="Повідомлення*"
                    rows={4} placeholder="Введіть своє повідомлення тут..."
                    styles={feedbackInputStyle} />
                <FormSubmit label="Надіслати" title="Надіслати"
                    className="greenLink t:px-[73px] w-full t:w-auto mt-4 mx-auto" />
            </FormWrapperWithCaptcha>

            <PoliticsNotification
                isOpen={showPolitics}
                onCloseMenu={() => { setShowPolitics(false) }} />

        </GoogleReCaptchaProvider >
    )
}

export default FeedbackForm
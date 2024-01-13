"use client"
import React from "react"
import cn from "@/helpers"
import FormWrapperWithCaptcha from "@/components/ModalForm/FormWrapperWithCaptcha";
import FormInput from "@/components/NestedForm/FormInput";
import FormSubmit from "@/components/NestedForm/FormSubmit";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { phone, name } from "@/helpers/validation";

const GiftForm = () => {


    const giftInputStyle = {
        wraper: 'flex flex-col min-w-[200px] w-full t:w-auto',
        label: 'text-[0]  border-b-2 border-black-15 transition-colors',
        input: 'outline-none bg-transparent text-base leading-[1.5] w-full pt-3 pb-2',
        error: ' text-error-100 text-xs/[15px]'
    }

    return (

        <GoogleReCaptchaProvider
            reCaptchaKey={`${process.env.NEXT_PUBLIC_CAPCHA_CLIENT}`}
            scriptProps={{
                id: 'gift_GoogleReCaptchaProvider'
            }}
        >
            <FormWrapperWithCaptcha
                schema={{ name, phone }}
                captchaName='gift'
                className="flex  flex-wrap gap-x-5 gap-y-4  mx-auto"
            >
                <FormInput type='text' name="phone"
                    label="phone" placeholder="Номер телефону"
                    styles={giftInputStyle} />
                <FormInput type='text' name="name"
                    label="name" placeholder="Ваше ім’я"
                    styles={giftInputStyle} />
                <FormSubmit label="Надіслати"
                    className={cn("greenLink",
                        " block px-[21px] py-[22px] t:py-[13px] leading-[1.25]   h-fit w-full t:w-auto ")} />
            </FormWrapperWithCaptcha>

        </GoogleReCaptchaProvider>

    )
}

export default GiftForm

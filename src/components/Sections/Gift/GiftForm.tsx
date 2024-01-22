"use client"
import React, { useState } from "react"
import cn from "@/helpers"
import FormWrapperWithCaptcha from "@/components/ModalForm/FormWrapperWithCaptcha";
import FormInput from "@/components/NestedForm/FormInput";
import FormSubmit from "@/components/NestedForm/FormSubmit";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { phone, name } from "@/helpers/validation";
import PoliticsNotification from "@/components/PoliticsNotification";

const GiftForm = () => {


    // const giftInputStyle = {
    //     wraper: 'flex flex-col min-w-[200px] w-full t:w-auto',
    //     label: 'text-[0]  border-b-2 border-black-15 transition-colors',
    //     input: 'outline-none bg-transparent text-base leading-[1.5] w-full pt-3 pb-2',
    //     error: ' text-error-100 text-xs/[15px]'
    // }
    const giftInputStyle = {
        wraper: 'flex flex-col gap-y-1  w-full',
        label: 'text-lg/[27px] font-medium  flex flex-col  transition-colors',
        input: 'outline-0 bg-transparent text-base border border-black-30 hover:border-accent-100 focus:border-accent-100 rounded-[5px] placeholder-black-30 w-full px-[25px] py-[12px] resize-none',
        inputError: 'outline-error-100 hover:border-error-100 focus:border-error-100',
        error: ' text-error-100 text-xs/[15px]'
    }
    const [showPolitics, setShowPolitics] = useState(false)
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
                notAllow={() => { setShowPolitics(true) }}
                className="flex  flex-col gap-x-4 gap-y-3  mx-auto"
            >
                <FormInput type='text' name="name"
                    label="Ім’я*" placeholder="Ім’я"
                    styles={giftInputStyle} />
                <FormInput type='text' name="phone"
                    label="Номер телефону*" placeholder="+380667778899"
                    styles={giftInputStyle} />

                <FormSubmit label="Надіслати" title='Надіслати'
                    className={cn("greenLink",
                        " px-[21px]     w-full t:max-w-[200px] mx-auto ")} />
            </FormWrapperWithCaptcha>
            <PoliticsNotification
                isOpen={showPolitics}
                onCloseMenu={() => { setShowPolitics(false) }} />

        </GoogleReCaptchaProvider>

    )
}

export default GiftForm

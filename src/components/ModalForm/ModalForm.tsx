"use client";

import cn from "@/helpers";
import { ModalWrapper } from "../Modal/ModalWrapper";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import FormWrapperWithCaptcha from "./FormWrapperWithCaptcha";
import { phone, name } from "@/helpers/validation";
import FormInput from "../NestedForm/FormInput";
import FormSubmit from "../NestedForm/FormSubmit";
import Icon from "../Icon";

interface IModalForm {
    className?: string;
    isOpen?: boolean;

    onCloseMenu: () => void;
}

const ModalForm = ({ isOpen, onCloseMenu, className = '' }: IModalForm) => {

    // const contactInputStyle = {
    //     wraper: 'flex flex-col gap-y-2 w-full',
    //     label: 'text-[0px] w-full',
    //     input: 'outline-none bg-white-100 text-base border border-black-30 rounded-[5px] placeholder-black-30 w-full px-[23px] py-[12px]',
    //     error: ' text-error-100 text-xs/[15px]'
    // }
    const contactInputStyle = {
        wraper: 'flex flex-col gap-y-1  w-full',
        label: 'text-lg/[27px] font-medium  flex flex-col hover:border-accent-100 transition-colors',
        input: 'outline-none bg-transparent text-base border border-black-30 rounded-[5px] placeholder-black-30 w-full px-[25px] py-[12px] resize-none',
        error: ' text-error-100 text-xs/[15px]'
    }
    return (
        <ModalWrapper onCloseMenu={onCloseMenu} isOpen={isOpen}
            className=" bg-overlay justify-center items-center">
            <GoogleReCaptchaProvider
                reCaptchaKey={`${process.env.NEXT_PUBLIC_CAPCHA_CLIENT}`}
                scriptProps={{
                    id: 'lesson_GoogleReCaptchaProvider'
                }}
            >
                <div className={cn("flex flex-col bg-mainBg rounded p-5 max-w-[320px] t:min-w-[440px] ", className)}>
                    <button className="flex items-center justify-center h-5 w-5 border border-transparent icon ml-auto mr-0 " onClick={onCloseMenu}>
                        <Icon name='/assets/icons/small.svg' id='close' className={cn('w-full h-full ')} />
                    </button>
                    <p className="text-xl font-semibold mx-auto mt-5 mb-8"> Записатись на урок</p>
                    <FormWrapperWithCaptcha
                        schema={{ name, phone }}
                        captchaName='lesson'
                        onFinally={onCloseMenu}
                        className='flex flex-col gap-y-8'>
                        <FormInput type='text' name="name" label="Ім’я*" placeholder="Ім’я" styles={contactInputStyle} />
                        <FormInput type='text' name="phone" label="Телефон*" placeholder="+380667778899" styles={contactInputStyle} />
                        <FormSubmit label="Надіслати"
                            className="greenLink   w-full  mx-auto" />
                    </FormWrapperWithCaptcha>
                </div>
            </GoogleReCaptchaProvider>
        </ModalWrapper>
    )
}

export default ModalForm
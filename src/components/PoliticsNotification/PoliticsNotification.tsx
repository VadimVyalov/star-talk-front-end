"use client";

import cn from "@/helpers";
import React from "react";
import { ModalWrapper } from "../Modal/ModalWrapper";

import Icon from "../Icon";
import { setLS } from "@/helpers/lsStorage";
import Link from "next/link";

interface IModalForm {
    className?: string;
    isOpen?: boolean;

    onCloseMenu: () => void;
}

const PoliticsNotification = ({ isOpen, onCloseMenu, className = '' }: IModalForm) => {

    const accept = (): void => {
        setLS("politics", true);
        onCloseMenu()
    }

    const decline = (): void => {
        setLS("politics", false);
        onCloseMenu()

    }

    return (
        <ModalWrapper onCloseMenu={onCloseMenu} isOpen={isOpen}
            className=" bg-overlay justify-center items-center">

            <div className={cn("flex flex-col bg-mainBg rounded p-5 max-w-[320px] t:min-w-[480px] ", className)}>
                <button
                    type="button"
                    title="закрити"
                    className="flex items-center justify-center h-5 w-5 border border-transparent icon ml-auto mr-0 "
                    onClick={onCloseMenu}>
                    <Icon name='/assets/icons/small.svg' id='close' className={cn('w-full h-full ')} />
                </button>
                <p className="flex flex-wrap">
                    Ви відхилили
                    <Link
                        href="/politics"
                        className="Link mx-1 text-center underline underline-offset-2 font-medium whitespace-nowrap"
                    >   Політику конфіденційності.
                    </Link>
                    Ми не можемо обробляти Ваші персональні данні
                </p>
                <div className="flex  gap-6 items-center justify-center mt-5">
                    <button
                        type="button"
                        onClick={accept}
                        className="greenLink rounded-none  w-[135px]"
                    >
                        Прийняти
                    </button>
                    <button
                        type="button"
                        onClick={decline}
                        className="greenLink rounded-none w-[135px]"
                    >
                        Відхилити
                    </button>

                </div>
            </div>
        </ModalWrapper>
    )
}

export default PoliticsNotification
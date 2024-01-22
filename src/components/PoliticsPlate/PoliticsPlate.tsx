'use client'
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { getLS, setLS } from "@/helpers/lsStorage";


const PoliticsPlate = () => {
    const [showPlate, setShowPlate] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (getLS("politics") === undefined) {
            setShowPlate(true);
        }
    }, []);

    const accept = (): void => {
        setShowPlate(false);
        setLS("politics", true);
    }

    const decline = (): void => {
        setShowPlate(false);
        setLS("politics", false);

    }

    useEffect(() => {

        const modalElement = ref?.current;
        if (!modalElement) return
        const focusableElements = modalElement.querySelectorAll('button, a');
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKeyPress = (event: KeyboardEvent) => {

            if (event.key === "Tab") {

                if (document.activeElement && !Array.from(focusableElements).includes(document.activeElement)) {
                    firstElement?.focus()
                }

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === lastElement
                ) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document?.body?.addEventListener("keydown", handleTabKeyPress);

        return () => {
            document?.body?.removeEventListener("keydown", handleTabKeyPress);

        };

    }, [showPlate]);

    return (
        <>
            {showPlate && (
                <div
                    //  tabIndex={1}
                    ref={ref}
                    className=" fixed container bottom-[20px] z-20 w-full bg-transparent  "
                >
                    <div className=" bg-white-100 py-8 border rounded border-black-30">
                        <div className="flex flex-col t:flex-row px-6 gap-6 ">

                            <p className="">
                                Ми використовуємо файли cookie. Продовжуючи використовувати наш сайт,
                                ви погоджуєтеся з {' '}
                                <Link
                                    href="/politics"
                                    className="Link underline underline-offset-2 font-medium whitespace-nowrap"
                                >
                                    Політикою конфіденційності
                                </Link>
                            </p>
                            <div className="flex flex-row t:flex-col d:flex-row gap-6 items-center">
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
                    </div>
                </div>
            )}
        </>
    );
};

export default PoliticsPlate;
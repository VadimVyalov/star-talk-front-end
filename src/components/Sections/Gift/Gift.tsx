"use client"
import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import cn from "@/helpers"
import Image from "next/image";
import GiftForm from "./GiftForm";
const about_img = '/assets/image/gift.jpg'

const Gift = () => {

  return (
    <section id="gift" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <div className="grid  d:gap-x-12 d:grid-cols-[minmax(285px,500px)_auto]">
          <h2 className={cn(" text-center font-roboto text-[40px] font-semibold", " d:col-start-2  d:row-start-2 ")}>Отримати подарунок</h2>
          <div className=" py-8 t:px-[12vw] d:p-0 d:row-span-4 d:max-w-[500px] d:col-span-1 ">
            <Image className="rounded-3xl "
              src={about_img}
              alt="about image"
              sizes="(max-width: 590px) 93vw,(max-width: 1025px) 70vw, 42vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={500} />
          </div>

          <div className="d:col-start-2 d:row-start-3 d:mt-5 ">
            <p className=" mb-8 d:mb-12"> Залиште свій телефон та ім’я </p>
            <GoogleReCaptchaProvider
              reCaptchaKey={`${process.env.NEXT_PUBLIC_CAPCHA_CLIENT}`}
              scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,

              }}
            >
              <GiftForm />
            </GoogleReCaptchaProvider>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;

import React from "react"
import cn from "@/helpers"
import Image from "next/image";
import GiftForm from "./GiftForm";
const about_img = '/assets/image/gift.jpg'

const Gift = () => {

  return (
    <section id="gift" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <div className="grid  d:gap-x-12 d:grid-cols-[minmax(285px,500px)_auto]">
          <h2 className={cn(" text-center sectionTitle leading-[1.25] d:mb-8", " d:col-start-2  d:row-start-2 ")}>Отримати подарунок</h2>
          <div className=" py-8 t:px-[12vw] d:p-0 d:row-span-4 d:max-w-[500px] d:col-span-1 my-auto">
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
            <p className=" mb-8 "> Залиште свій телефон та ім’я </p>

            <GiftForm />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
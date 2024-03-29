
import React from "react"
import cn from "@/helpers"
import Image from "next/image";
import GiftForm from "./GiftForm";
const about_img = '/assets/image/gift.jpg'

const Gift = () => {

  return (
    <section id="gift" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">
        <h2 className={cn(" text-center sectionTitle"
        )}>
          Отримати подарунок
        </h2>
        <div className="grid grid-cols-1 t:gap-x-6 t:grid-cols-[minmax(270px,570px)_minmax(200px,590px)]">


          <div className=" h-full relative t:col-start-1 t:row-span-3 flex items-center "
          // className=" py-8 t:px-[12vw] d:p-0 d:row-span-4 d:max-w-[500px] d:col-span-1 my-auto"
          >
            <Image className="rounded-3xl "
              src={about_img}
              alt="about image"
              sizes="(max-width: 590px) 93vw, 42vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={500} />
          </div>

          <div className="t:col-start-2 t:row-start-2 mt-5 t:mt-0 ">

            <p className=" mb-6 ">Залиште своє ім’я та номер телефону</p>

            <GiftForm />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
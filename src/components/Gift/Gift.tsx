"use client"

import cn from "@/helpers"
import Image from "next/image";
const about_img = '/assets/image/gift.jpg'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface InputNP {
  name: string;
  phone: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Введіть ім'я").min(2, "Введіть корректне ім'я").max(256, "Введіть до 256 символів"),
  phone: yup
    .string()
    .required("Введіть номер телефону")
    .matches(
      /^\+\d{12}$/,
      "Введіть корректний номер"
    )
});

const Gift = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputNP>({ resolver: yupResolver(schema) });
  const onSubmit = (data: InputNP) => {
    console.log(data);
  };

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


            <form className="flex  flex-wrap gap-x-5 gap-y-4  mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap gap-x-5 gap-y-4 mr-auto ">
                <div className="flex flex-col min-w-[200px] ">
                  <label className="text-[0]  border-b-2 border-black-15 
                              hover:border-accent-100 transition-colors">Ваше ім’я
                    <input {...register("name")} placeholder="Ваше ім’я"
                      className="outline-none bg-transparent text-base leading-[1.5]  w-full pt-3 pb-2 shadow-[inset_0_0_0_300px_rgba(254,251,244,1)]" />
                  </label>

                  {errors.name ? <p className=" text-error-100 text-xs">{errors.name.message}</p> : <p className="text-xs text-transparent">все гаразд</p>}
                </div>

                <div className="flex flex-col min-w-[200px] ">
                  <label className="text-[0]  border-b-2 border-black-15 
                              hover:border-accent-100 transition-colors">Номер телефону
                    <input {...register("phone")} placeholder="Номер телефону"
                      className="outline-none bg-transparent text-base leading-[1.5] w-full pt-3 pb-2  shadow-[inset_0_0_0_300px_rgba(254,251,244,1)] " />
                  </label>
                  {errors.phone ? <p className=" text-error-100 text-xs">{errors.phone.message}</p> : <p className="text-xs text-transparent">все гаразд</p>}
                </div>
              </div>

              <button className={cn("greenLink", "block px-[21px] py-3 leading-[1.25]   h-fit w-full t:w-auto ")}>Надіслати</button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gift;
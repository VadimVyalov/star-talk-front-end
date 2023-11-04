"use client";
import cn from "@/helpers"
import useGetData from "@/hooks/useGetData";
import Icon from "../Icon";
import style from "./styles.module.scss";

export type Discount = {
  id: string,
  title: string,
  description: Array<{ id: string, text: string }>,
}

// const discount_data = {
//   title: "«Приведи друга»",
//   description: [
//     {
//       id: "ds-01",
//       text: "Якщо ви приводите друга, він оплатив і пройшов 5 і більше занять, кожен з вас отримує по одному безкоштовному уроку."
//     },
//     {
//       id: "ds-02",
//       text: "Пропозиція поширюється тільки на індивідуальні заняття викладачем за тарифами, зазначеними на сайті. На інші курси акція розраховується індивідуально."
//     }
//   ]
// }

const Discount = () => {
  const { data, error, isLoading } = useGetData('discounts');

  const discount_data: Discount = data?.length > 0 ? data[0] : null;

  // console.log(discount_data)

  return (
    (discount_data && !error)
      ? (<section id="discount" className={cn("mb-[72px] t:mb-[100px] d:mb-[120px]")} >

        <h2 className="sectionTitle">Акції та знижки</h2>


        <div className={cn(style.bg, "bg-center bg-no-repeat ", "flex  justify-center",
          "h-[490px] t:h-[520px] d:h-[705px]   pt-[160px] t:pt-[190px] d:pt-[240px] ")}>

          <div className="w-[300px] t:w-[405px] d:w-[550px] px-4 t:px-6 d:px-8 text-white-100 font-medium">
            <h3 className="text-center text-2xl d:text-4xl leading-[1.3]  mb-4 d:mb-8">Акція <span className="whitespace-nowrap">{discount_data.title}</span></h3>

            <ul className="flex flex-col gap-y-3 t:gap-y-4 d:gap-y-6">
              {discount_data.description.map(item => {
                return (
                  <li key={item.id} className="flex flex-row text-[14px] t:text-[16px] d:text-[20px]  leading-[1.25] d:leading-[1.5] ">

                    <Icon name="/assets/icons/small.svg" id="check"
                      className={cn(" h-[14px] w-[14px]  t:h-[14px] t:w-[14px]  d:h-[20px] d:w-[20px] shrink-0")}
                    />

                    <div className="ml-2 t:ml-4 ">{item.text}</div>
                  </li>
                )
              })
              }

            </ul>
          </div>
        </div>
      </section >)
      : null
  );


};

export default Discount;
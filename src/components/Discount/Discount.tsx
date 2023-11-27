"use client";
import cn from "@/helpers"
import useGetData from "@/hooks/useGetData";
import Icon from "../Icon";
import style from "./styles.module.scss";
// import data from "../../../public/data/discount.json"
export type Discount = {
  id: string,
  title: string,
  description: Array<{ id: string, text: string }>,
}


const Discount = () => {
  const { data, error, isLoading } = useGetData('discounts');
  const discount_data: Discount = data?.length > 0 ? data[0] : null;

  // console.log(discount_data)

  // const discount_data = data;
  // const error = false
  // const isLoading = false


  return (
    (discount_data && !error)
      ? (<section id="discount" className={cn("mb-[72px] t:mb-[100px] d:mb-[120px]")} >
        <h2 className="sectionTitle">Акції та знижки</h2>
        <div className={cn(style.bg, "bg-center bg-no-repeat bg-cover ", "container t:max-w-[590px] d:max-w-[1440px]")}>



          <div className={cn("flex  justify-center",
            "h-[331px] t:h-[326px] d:h-[600px]  pt-[64px] t:pt-[76px] d:pt-[196px] pb-4 t:pb-6 d:pb-8 overflow-hidden")}>

            <div className="w-[340px] d:w-[540px] px-3 t:px-5 d:px-6 text-white-100  overflow-hidden h-full">
              <h3 className=" flex justify-center flex-wrap gap-x-2 font-roboto font-semibold  text-center text-2xl d:leading-[1.5] d:text-[40px] 
                     mb-3 t:mb-4 d:mb-[60px]"><span >Акція</span> <span >{discount_data.title}</span></h3>

              <ul className="flex flex-col gap-y-2 d:gap-y-8  ">
                {discount_data.description.map(item => {
                  return (
                    <li key={item.id} className="flex flex-row text-[14px] d:text-[16px]  leading-[1.5] t:leading-[1.25] d:leading-[1.5] ">

                      <Icon name="/assets/icons/small.svg" id="check"
                        className={cn(" h-[10px] t:w-[10px]  d:h-[20px] d:w-[20px] shrink-0")}
                      />

                      <p className=" mb-[1px] ml-1.5 t:ml-2 d:ml-3 ">{item.text}</p>
                    </li>
                  )
                })
                }

              </ul>
            </div>
          </div>
        </div>
      </section >)
      : null
  );


};

export default Discount;
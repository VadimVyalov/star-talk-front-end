import Icon from "../../Icon";
import cn from "@/helpers"
import Image from "next/image";
import { Period } from "@/types/data";


interface Props {
  period: Period,
  // baseUrl: string
}

const PriceItem = ({ period }: Props) => {
  const cl = period.lessons_amount > 20 ? Number(period.lessons_amount.toString().slice(-1)) : period.lessons_amount;
  const cz = cl > 0 && cl < 5 ? 'тя' : 'ь'
  const { title, slogan, price_description, lessons_amount, price_per_lesson, image, new: new_period, hot: hot_period } = period
  return (

    <div className="flex flex-col justify-between items-center relative w-full">
      <div className="mb-[38px] h-[100px] w-auto">

        {/* <Icon name={baseUrl} id={image}
          className={cn(" h-full w-full")}
        /> */}
        <Image
          className="bg-transparent"
          src={`/assets/image/price/${image}.png`}
          alt={`star-${image}`}
          width={100}
          height={100}
        />

      </div>
      <div className="text-center leading-[1.5]">
        <h3 className="text-xl leading-[1.5] font-semibold mb-[12px] h-[3em] flex items-center justify-center">
          {title}
        </h3>
        <p className=" text-base  font-semibold mb-[6px]">
          {lessons_amount} {`занят${cz} в місяць`}
        </p>
        {slogan.trim() !== ''
          ?
          <p className="text-base  mb-4">({slogan})</p>
          : null
        }
        <p className=" text-[28px] font-bold mb-5 ">
          {price_per_lesson} грн/заняття
        </p>
      </div>
      <ul className="flex flex-col gap-2.5 pl-8 mb-14 w-full">
        {
          price_description.map((description) => {
            return (
              description?.text?.trim() !== ''
                ? <li key={description.id} className="prices-list-item">{description.text}</li>
                : null
            )
          })}
      </ul>
      {(new_period || hot_period) ? (
        <Icon name='/assets/icons/newHot.svg' id={hot_period ? 'hot' : 'new'}
          className={cn(" h-[66px] w-[66px] shrink-0 absolute -top-[34px] -left-[28px]")}
        />) : (null)
      }
    </div>


  )
}

export default PriceItem
import Image from "next/image"
import Icon from "../Icon";
import cn from "@/helpers"
import type { Review } from "./Reviews";


interface Props {
  rewiew: Review

}


const rRewiew = ({ rewiew }: Props) => {

  const { rate, message, author } = rewiew

  const fillStars = (rate: number) => {
    const star = []
    for (let index = 0; index < 5; index++) {
      star.push({ id: `str-0${index}`, fill: index < rate })

    }
    return star
  }

  return (

    <div className="flex flex-col slider-item  ">
      <div className="flex mb-3 h-[20px] w-auto gap-x-3 justify-start ml-0 mr-auto">

        {fillStars(rate).map(star => {
          return (
            <Icon key={star.id} name='/assets/icons/small.svg' id='starR'
              className={cn(" h-6 w-6 stroke-gold", star.fill ? 'text-gold' : 'text-transparent')} />)
        }
        )}
      </div>

      <div className="flex flex-col justify-between w-full h-full">

        <div className="mb-6">
          <p > {message} </p>


        </div>
        <p className=" mb-4 d:mb-0 "> {author}  </p>
      </div>

    </div>


  )
}

export default rRewiew
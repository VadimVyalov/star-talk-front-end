import Image from "next/image"
import cn from "@/helpers"
import type { Teacher } from "./Teachers";
import { useState } from "react";
import "./card.css"
import Icon from "../../Icon";

interface Props {
  teacher: Teacher
}

const TeacherItem = ({ teacher }: Props) => {

  const { name, short_description, description, photo } = teacher
  const [flip, setFlip] = useState(false)
  return (

    <div className=" items-center  slider-item bg-white-100 overflow-hidden" >
      <div className="card " onClick={() => setFlip(!flip)}>
        <div className={cn("w-full card__face card__face--front", flip ? ' is-flipped' : '')}>
          <Icon name="/assets/icons/small.svg" id="doubleArrow"
            className={cn(" h-[46px] w-[46px] t:w-[43px] t:h-[43px] d:h-[36px] d:w-[36px] shrink-0", "absolute right-4 top-4 t:right-3 t:top-3 d:right-2 d:top-2")}
          />
          <Image
            alt={`${name} фото`}
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${photo}`}
            height={375}
            width={280}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />

          <div className="flex flex-col gap-y-2 text-left leading-[1.5] pt-5 pb-2 px-2 w-full">
            <p className=" text-xl   font-semibold ">
              {name}
            </p>
            <p> {short_description}  </p>

          </div>
        </div>

        <ul className={cn("flex flex-col gap-2 p-2 pr-3 mr-2  card__face card__face--back absolute ", flip ? '' : 'is-flipped')}>
          {
            description.map((description) => {

              return (
                description.id !== '' ? <li key={description.id} className="prices-list-item">{description.text}</li> : null
              )

            })}
        </ul>
      </div>
    </div>
  )
}

export default TeacherItem
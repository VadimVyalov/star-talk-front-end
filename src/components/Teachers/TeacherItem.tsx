import Image from "next/image"

import cn from "@/helpers"
import type { Teacher } from "./Teachers";
import "./card.css"
import { useState } from "react";

interface Props {
  teacher: Teacher
}


const TeacherItem = ({ teacher }: Props) => {

  const { name, short_descritpion, description, photo } = teacher
  const [flip, setFlip] = useState(false)
  return (

    <div className="flex flex-col justify-between items-center  slider-item  " >
      <div className="card " onClick={() => setFlip(!flip)}>
        <div className={cn("  w-full card__face card__face--front  ", flip ? ' is-flipped' : '')}>
          <Image
            alt={`${name} фото`}
            src={photo}
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
            <p> {short_descritpion}  </p>

          </div>
        </div>

        <ul className={cn("flex flex-col gap-2 p-2 pr-3 mr-2  card__face card__face--back absolute ", flip ? ' ' : 'is-flipped')}>
          {
            description.map((description) => {

              return (
                <li key={description.id} className="prices-list-item">{description.text}</li>
              )
            })}
        </ul>


      </div>


    </div>


  )
}

export default TeacherItem
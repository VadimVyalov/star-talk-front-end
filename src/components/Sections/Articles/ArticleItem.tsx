import React from "react";
import Image from "next/image"
import cn from "@/helpers"
import Link from "next/link";
import Icon from "../../Icon";
import { Article } from "@/types/data";

interface Props {
  article: Article
}

const ArticleItem = ({ article }: Props) => {

  const { id, image_preview, title, date } = article

  return (

    <div className=" items-center p-5 t:p-4 d:p-8  rounded-3xl bg-white-100 overflow-hidden" >

      <div className={cn("w-full h-full flex flex-col ")}>
        <Image
          className="rounded-[5px] overflow-hidden shrink-0"
          alt={`${image_preview} фото`}
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${image_preview}`}
          height={280}
          width={530}

          style={{
            width: '100%',
            height: 'auto',
          }}
        />

        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-row justify-between leading-[1.5] mt-3 d:mt-5 w-full">
            <p className="text-sm d:text-lg font-semibold line-clamp-2 ">
              {title}
            </p>
            <p className=" text-xs d:text-base text-black-30 font-medium ml-3 whitespace-nowrap"> {date}  </p>
          </div>

          <Link href={`/articles/${id}`} title='Читати далі'
            className={cn("  flex items-center gap-x-3 group w-fit mt-3 d:mt-5 font-semibold text-sm ")}>
            <span className="flex items-center justify-center w-9 h-9  border
           border-accent-100 rounded-full group-hover:bg-white-100
           bg-accent-100 group-hover:text-accent-100 text-white-100 transition-colors">
              <Icon name="/assets/icons/small.svg" id="arrow-right" />
            </span>
            Читати далі
          </Link>
        </div>

      </div>
    </div >
  )
}

export default ArticleItem
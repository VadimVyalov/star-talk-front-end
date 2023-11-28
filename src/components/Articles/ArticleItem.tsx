import Image from "next/image"
import cn from "@/helpers"
import type { Article } from "./Articles";
import { useState } from "react";
import Link from "next/link";
import Icon from "../Icon";

interface Props {
  article: Article
}


const ArticleItem = ({ article }: Props) => {

  const { id, image_preview, title, date, seo_description, keyword } = article
  // console.log(`/https://star-talk.foradmin.pp.ua/api/v1/article/image_preview/${id}`);

  return (

    <div className=" items-center p-5 t:p-4 d:p-8  rounded-3xl bg-white-100 overflow-hidden" >

      <div className={cn("w-full h-full flex flex-col ")}>
        <Image
          alt={`${image_preview} фото`}
          src={`https://star-talk.foradmin.pp.ua/api/v1/article/image_preview/${id}`}
          height={280}
          width={530}

          style={{
            width: '100%',
            height: 'auto',
          }}

        />

        <div className="flex flex-row justify-between leading-[1.5] mt-3 d:mt-5 w-full">
          <p className="text-sm t:text-xs d:text-lg font-semibold ">
            {title}
          </p>
          <p className=" text-xs t:text-[10px] d:text-base text-black-30 font-medium ml-3"> {date}  </p>

        </div>
        <Link href={`/articles/${id}`} className={cn("  flex items-center gap-x-3 group w-fit mt-3 d:mt-5 font-semibold text-sm t:text-[8px] d:text-sm")}>
          <span className="flex items-center justify-center w-9 h-9 t:w-[21px] t:h-[21px] d:w-9 d:h-9 border-[1px]
          
           border-accent-100 rounded-full group-hover:bg-white-100
           bg-accent-100 group-hover:text-accent-100 text-white-100 transition-colors">
            <Icon name="/assets/icons/small.svg" id="arrow-right" className="w-4 h-4 t:w-2 t:h-2 d:w-4 d:h-4" />
          </span>
          Читати далі
        </Link>

      </div>



    </div >
  )
}

export default ArticleItem
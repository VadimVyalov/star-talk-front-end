"use client";

import useGetData from "@/hooks/useGetData";
//import ArticleItem from "./ArticleItem";
//import data from "../../../../public/data/articles.json"
//import Sceleton from "./Skeleton";
import Link from "next/link";
import cn from "@/helpers"
import ArticleItem from "@/components/Sections/Articles/ArticleItem";
import Sceleton from "@/components/Sections/Articles/Skeleton";
import { Article } from "@/types/data";



const Articles = ({ id }: { id: string }) => {
  const title = 'Читай також'

  const { data: unsortData, error, isLoading } = useGetData<Article[]>(`article`);

  const dataNum = unsortData?.length || 0
  const unData = !Array.isArray(unsortData) || dataNum < 2


  const data: Article[] = []
  const articleIndex = unsortData?.findIndex(i => i.id === id) || 0

  //console.log(articleIndex);

  if (unData) return null// <h2 className="sectionTitle">Помилка завантаження даних</h2>

  if (dataNum > 1 && articleIndex > -1) {

    if (articleIndex === 0) {
      if (dataNum > 2) {
        data.push(unsortData[dataNum - 1])
        data.push(unsortData[1])
      } else {
        data.push(unsortData[0])
        data.push(unsortData[1])
      }
    }

    if (articleIndex === dataNum - 1) {
      if (dataNum > 2) {
        data.push(unsortData[articleIndex - 1])
        data.push(unsortData[0])
      } else {
        data.push(unsortData[1])
        data.push(unsortData[0])
      }
    }

    if (articleIndex > 0 && articleIndex < dataNum - 1) {
      data.push(unsortData[articleIndex - 1])
      data.push(unsortData[articleIndex + 1])

    }

  }

  return (
    <section id="articles" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container flex flex-col items-center">

        {title ? <h2 className="sectionTitle">{title}</h2> : null}
        <div className="w-full grid grid-cols-1 t:grid-cols-2 gap-6">
          {(!error && !unData) ? (
            !isLoading ? (

              data.map((article: Article, i: number) => {

                return (
                  <ArticleItem key={article.id} article={article} />
                )
              })
            ) : (['art-1', 'art-2'].map(i => {
              return (
                <Sceleton key={i} />
              )
            }))
          ) : <p className="text-error-100 text-center text-3xl"> Щось пішло не так </p>
          }
        </div>

        {dataNum > 3
          ? <Link href="/articles" className={cn("greenLink flex text-lg items-center gap-x-2 mt-[60px] t:mt-12",
            " w-full t:w-fit px-[22px] py-[18px] justify-center")}>
            <span>Дивитись більше</span>
          </Link>
          : null
        }
      </div >
    </section >
  );
}

export default Articles;

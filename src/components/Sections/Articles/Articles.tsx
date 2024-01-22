"use client";

import useGetData from "@/hooks/useGetData";
import ArticleItem from "./ArticleItem";
//import data from "../../../../public/data/articles.json"
import Sceleton from "./Skeleton";
import Link from "next/link";
import cn from "@/helpers"
import { Article } from "@/types/data";



const Articles = ({ limit = 0, offset = 0, title = 'Статті' }: { limit?: number, offset?: number, title?: string }) => {

  // const error = false;
  // const isLoading = false;
  const { data, error, isLoading } = useGetData<Article[]>(`article?limit=${limit + 1}&offset=${offset}`);
  const unData = !Array.isArray(data) || data?.length < 1
  const dataNum = data?.length || 0
  if (dataNum === limit + 1 && !unData) {
    data.pop()
  }
  return (
    ((!error && !unData) || isLoading)
      ? <section id="articles" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
        <div className="container flex flex-col items-center">

          {title ? <h2 className="sectionTitle">{title} </h2> : null}

          <div className="w-full grid grid-cols-1 t:grid-cols-2 gap-6">
            {!isLoading
              ? (data?.map((article: Article, i: number) =>

                <ArticleItem key={article.id} article={article} />
              ))
              : (['art-1', 'art-2'].map(i => {
                return (
                  <Sceleton key={i} />
                )
              })) // <p className="text-error-100 text-center text-3xl"> Щось пішло не так </p>
            }
          </div>

          {!isLoading

            ? <Link href="/articles" title="Дивитись більше"
              className={cn("greenLink flex items-center gap-x-2 mt-[60px] t:mt-12",
                " w-full t:w-fit px-[22px] justify-center")}>
              <span>Дивитись більше</span>
            </Link>
            : null}

        </div >
      </section >
      : null
  );
}

export default Articles;

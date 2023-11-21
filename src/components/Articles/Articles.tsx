"use client";

//import useGetData from "@/hooks/useGetData";
import ArticleItem from "./ArticleItem";
import data from "../../../public/data/articles.json"
import Sceleton from "./Skeleton";
import Link from "next/link";
import Icon from "../Icon";
import cn from "@/helpers"

export type Article = {
  id: string,
  image: string,
  image_preview: string,
  title: string,
  author: string,
  text: string,
  date: string,
  seo_description: string,
  keyword: string,

}



const Articles = () => {

  const error = false;
  const isLoading = false;

  //const { data, error, isLoading } = useGetData('teacher');
  //   console.log(data)

  return (
    <section id="articles" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container flex flex-col items-center">

        <h2 className="sectionTitle">Статті</h2>
        <div className="w-full grid grid-cols-1 t:grid-cols-2 gap-6">
          {!error ? (

            !isLoading ? (

              data.map((teacher: Article) => {
                return (
                  <ArticleItem key={teacher.id} article={teacher} />

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

        <Link href="/articles" className={cn("greenLink flex text-lg items-center gap-x-2 mt-[60px] t:mt-12",
          " w-full t:w-fit px-[35px] py-[18px] justify-center")}>
          <span>Дивитись більше</span>

          {/* <BsArrowRightShort size={28} /> */}
        </Link>
      </div >
    </section >
  );
}

export default Articles;

'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useGetData from "@/hooks/useGetData";

import ArticleItem from "@/components/Sections/Articles/ArticleItem";
import Sceleton from "@/components/Sections/Articles/Skeleton";
import { Article } from "@/types/data";
import { ArrowUp } from '@/components/ArrowUp/ArrowUp';
import useScreen from '@/hooks/useScreen';




export default function Page() {


  const screen = useScreen()
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const { data: unsortData, error, isLoading } = useGetData<Article[]>(`article?limit=50`);
  const offset = Number(searchParams.get('page')) || 1

  // const perPage = 6
  const dataNum = unsortData?.length || 0
  const unData = !Array.isArray(unsortData) || dataNum < 1

  const [data, setData] = useState<Article[]>()
  const [currentPage, setCurrentPage] = useState(offset)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )


  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1)
  }

  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage(prev => prev + 1)
  }

  const perPage = useMemo(() => {
    switch (true) {
      case screen.isD: return 6;
      case screen.isT: return 4;
      case screen.isM: return 3;
      default: return 6;

    }
  }, [screen])

  const pageCount = useMemo(() => {
    return dataNum > perPage ? Math.ceil(dataNum / perPage) : 1
  }, [dataNum, perPage])

  const sceletonData = [...Array(perPage).fill('').map((_, i) => `artAll-${i + 1}`)]

  useEffect(() => {

    if (!unData) {
      setData([...unsortData.slice((currentPage - 1) * perPage, currentPage * perPage)])

      router.push(pathname + '?' +
        createQueryString('page', `${currentPage > pageCount ? pageCount : currentPage}`),
        { scroll: true })

      if (currentPage > pageCount) setCurrentPage(pageCount)
    }
    //console.log(pageCount);

  }, [unData, currentPage, perPage, pageCount])


  if ((unData || error) && !isLoading) {

    return <h2 className="sectionTitle">Помилка завантаження даних</h2>

  }



  return (
    <section id="articles" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container flex flex-col items-center">
        <h2 className="sectionTitle">Статті</h2>

        <div className="w-full grid grid-cols-1 t:grid-cols-2 gap-6">
          {(
            !isLoading ? (

              data?.map((article: Article, i: number) => {

                return (
                  <ArticleItem key={article.id} article={article} />
                )
              })
            ) : (sceletonData.map(i => <Sceleton key={i} />))
          )
          }
        </div>



        {pageCount > 1 ?
          <div className='flex flex-col t:flex-row gap-6 mt-10 w-full items-center justify-center'>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className='greenLink  w-full t:w-[150px]'>
              Попередні
            </button>
            <p className='text-lg/[18px] p-4 items-center justify-center flex border rounded border-accent-100 w-auto   ' >
              {currentPage}/{pageCount}</p>
            <button
              onClick={nextPage}
              disabled={currentPage === pageCount}
              className='greenLink w-full t:w-[150px]'>
              Наступні
            </button>
          </div>
          : null}

      </div >
      <ArrowUp className="fixed bottom-40 t:bottom-12 right-6 z-10" />
    </section >
  );

}
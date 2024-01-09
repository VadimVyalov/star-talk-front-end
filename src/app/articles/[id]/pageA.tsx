
import React from 'react'
import Articles from '@/components/Sections/Articles'
import Article from './components/Article'
import { ArrowUp } from '@/components/ArrowUp/ArrowUp'

import { Metadata, ResolvingMetadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getDataById(id: string) {

  const res = await fetch(`${BASE_URL}article/${id}`)

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}


async function getData() {

  const res = await fetch(`${BASE_URL}article/`)

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}


type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  try {

    const articles = await getData()
    //const { title, seo_description, keyword } = article

    return articles//.map((article) => ({      id: article.id,}))

  } catch (error) {
    return [{}]

  }

}

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {

//   try {

//     const article = await getDataById(params.id)
//     const { title, seo_description, keyword } = article

//     return {
//       title: title,
//       description: seo_description,
//       keywords: keyword
//     }

//   } catch (error) {
//     return {}

//   }
// }

export default async function Page({ params, searchParams }: Props) {

  const offset = searchParams.offset

  return (
    <>
      {/* <Article params={params} /> */}
      <Articles limit={2} offset={Number(offset)} title='Читай також' />
      <ArrowUp className="fixed bottom-40 t:bottom-12 right-6 z-10" />
    </>
  )
}


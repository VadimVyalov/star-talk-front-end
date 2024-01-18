
import React from 'react'
//import Articles from '@/components/Sections/Articles'
import ArticleA from './components/Article/ArticleA'
import { ArrowUp } from '@/components/ArrowUp/ArrowUp'

import { Metadata, ResolvingMetadata } from 'next'
import Articles from './components/Article/Articles';

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

    return articles.map((article: { id: string }) => ({ id: article.id }))

  } catch (error) {
    return [{}]

  }

}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  try {

    const article = await getDataById(params.id)
    const { title, seo_description, keyword, image, image_preview } = article

    return {
      title: title,
      description: seo_description,
      keywords: keyword,
      openGraph: {
        title: title,
        description: seo_description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${params.id}`,
        siteName: 'StarTalk',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${image_preview}`, // Must be an absolute URL
            width: 530,
            height: 280,
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${image}`, // Must be an absolute URL
            width: 1200,
            height: 555,
          },

        ],
        locale: 'en_US',
        type: 'website',
      }

    }

  } catch (error) {
    return {}

  }
}

export default async function Page({ params, searchParams }: Props) {

  // const offset = searchParams.offset

  return (
    <>
      <ArticleA id={params.id} />
      <Articles id={params.id} />
      <ArrowUp className="fixed bottom-40 t:bottom-12 right-6 z-10" />
    </>
  )
}


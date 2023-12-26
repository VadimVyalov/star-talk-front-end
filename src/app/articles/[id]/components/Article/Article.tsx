'use client'
import React from 'react'
import { Descendant } from 'slate'

import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import cn from "@/helpers"

import useGetData from '@/hooks/useGetData'
import Viewer from '@/components/Editor/viewer'
import "./viewerStyle.css"

const Article = ({ id }: { id: string }) => {

  const { data: article, error, isLoading } = useGetData(`article/${id}`);

  if (error || isLoading) return (
    <section id="articles" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container flex flex-col items-center">
        {isLoading ? ('чекай на скелетон') : error ? ('щось пішло не так') : null}
      </div>
    </section>
  )

  const { title, date, author, text, image } = article

  let content

  try {
    content = JSON.parse(text);
  } catch (err) {
    content = [
      {
        type: 'paragraph',
        children: [{ text: 'Error parse article' }],
      },
    ]
  }

  return (
    <section id="article" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container flex flex-col items-center ">
        <div className='flex font-medium gap-x-3 w-full'>
          <Link href="/" title="Головна" className='  hover:text-accent-100 transition '> Головна  </Link>
          <Icon name='/assets/icons/small.svg' id='chevronUp'
            className={cn('w-5 h-5 shrink-0 rotate-90')}
          />
          <Link href="/articles" title="Статті" className=' hover:text-accent-100 transition'> Статті  </Link>
        </div>


        {(!error && !isLoading) ? (
          <>

            <h2 className="sectionTitle mt-10 t:pb-5">{title}</h2>

            <p className="text-left w-full text-lg leading-[1.5] font-medium mb-6">{date}</p>
            <div className={cn("w-full h-full flex flex-col rounded-[5px] ")}>
              <Image
                alt={`фото ${title} `}
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${image}`}
                height={555}
                width={1200}

                style={{
                  width: '100%',
                  height: 'auto',
                }}

              />

              <Viewer content={content as Descendant[]}
                classname='article-viever mt-8 d:mt-10' />

              <div className="flex flex-col t:flex-row gap-y-8  justify-between leading-[1.5] mt-8 t:mt-12 w-full">
                <div className="flex flex-col justify-between leading-[1.5] text-lg  font-medium gap-y-2 py-2 ">
                  <p > {author}  </p>
                  <p > Автор  </p>
                </div>

                <div className="flex  items-center gap-x-5 leading-[1.5] ">
                  <p className=" text-lg font-semibold"> Поділитись:  </p>

                  <a href="#instagram" title="instagram" className='flex shrink-0 icon'>
                    <Icon name='/assets/icons/social.svg' id='instagram'
                      className={cn('w-8 h-8 shrink-0')}
                    />
                  </a>
                  <a href="#facebook" title="facebook" className='flex shrink-0 icon'>
                    <Icon name='/assets/icons/social.svg' id='facebook'
                      className={cn('w-8 h-8 shrink-0')}
                    />
                  </a>
                  <a href="#viber" title="Viber" className='flex shrink-0 icon'>
                    <Icon name='/assets/icons/social.svg' id='viber'
                      className={cn('w-8 h-8 shrink-0')}
                    />
                  </a>
                  <a href="#telegram" title="telegram" className='flex shrink-0 icon'>
                    <Icon name='/assets/icons/social.svg' id='telegram'
                      className={cn('w-8 h-8 shrink-0')}
                    />
                  </a>


                </div>
              </div>

            </div>


          </>) : null
        }

      </div >


    </section >
  )
}

export default Article
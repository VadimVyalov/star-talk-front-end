'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { Editable, withReact, Slate, RenderElementProps, RenderLeafProps } from 'slate-react'
import {
  Transforms,
  createEditor,
  Descendant,
} from 'slate'
import { withHistory } from 'slate-history'

import { BlockButton, Element, Leaf, MarkButton, Toolbar } from '@/components/Editor/components'

import data from "../../../../public/data/articles.json"
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/Icon'
import cn from "@/helpers"
import Articles from '@/components/Articles'



async function getData(id: string) {
  const baseUrl = 'https://star-talk.foradmin.pp.ua/api/v1/'
  const res = await fetch(`${baseUrl}article/${id}`)


  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page({ params }: { params: { id: string } }) {

  const readValue: Descendant[] =
    [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ]

  const article = data.filter(i => i.id === params.id)[0]

  const { id, image, title, date, author, text, seo_description, keyword } = article

  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])


  const writer = useMemo(() => withReact(createEditor()), [])
  // const content = JSON.parse(text)

  const serv = await getData('65556bfa225e9773ac1f15e9')
  const content = await JSON.parse(serv.text)




  return (
    <section id="articles" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container flex flex-col items-center">
        <div className=" items-center p-5 t:p-4 d:p-8  rounded-3xl bg-white-100 overflow-hidden" >

          <div className={cn("w-full h-full flex flex-col ")}>
            <Image
              alt={`${image} фото`}
              src={image}
              height={1200}
              width={555}

              style={{
                width: '100%',
                height: 'auto',
              }}

            />
            <Slate editor={writer} initialValue={content as Descendant[]}>

              <Editable
                style={{
                  backgroundColor: 'rgb(156, 230, 255)',
                  minHeight: '200px',

                  outline: 'rgb(0, 128, 0) solid 2px',
                }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                readOnly

              />
            </Slate>

            <div className="flex flex-row justify-between leading-[1.5] mt-3 d:mt-5 w-full">
              <p className="text-sm t:text-xs d:text-lg font-semibold ">
                {title}
              </p>
              <p className=" text-xs t:text-[10px] d:text-base text-black-30 font-medium ml-3"> {date}  </p>

            </div>

          </div>



        </div >
      </div>
      <Articles />
    </section>
  )
}



// export default function Test() {

//   const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
//   const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])
//   const editor = useMemo(() => withHistory(withReact(createEditor())), [])
//   const writer = useMemo(() => withHistory(withReact(createEditor())), [])

//   const readValue: Descendant[] =
//     [
//       {
//         type: 'paragraph',
//         children: [{ text: 'A line of text in a paragraph.' }],
//       },
//     ]
//   return (
//     <section id="about" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
//       <div className="container">


//         <button onClick={() => {
//           console.log('==')
//           const content = JSON.stringify(editor.children)
//           console.log(content)
//           localStorage.setItem('content', content)

//         }}
//         > Save</button>

//         <button onClick={async () => {
//           // const content = JSON.parse(localStorage.getItem('content') || '{}')
//           const data = await getData('65556bfa225e9773ac1f15e9')
//           const content = await JSON.parse(data.text)

//           console.log(content)

//           let totalNodes = writer.children.length;
//           if (content.length <= 0) return;

//           for (let i = 0; i < totalNodes - 1; i++) {
//             console.log(i)
//             Transforms.removeNodes(writer, {
//               at: [totalNodes - i - 1],
//             });
//           }

//           for (const value of content) {
//             Transforms.insertNodes(writer, value, {
//               at: [writer.children.length],
//             });
//           }

//           Transforms.removeNodes(writer, {
//             at: [0],
//           });

//         }}> Read</button>

//         <Slate editor={writer} initialValue={readValue}>

//           <Editable
//             style={{
//               backgroundColor: 'rgb(156, 230, 255)',
//               minHeight: '200px',

//               outline: 'rgb(0, 128, 0) solid 2px',
//             }}
//             renderElement={renderElement}
//             renderLeaf={renderLeaf}
//             readOnly


//           />
//         </Slate>
//       </div>
//     </section>
//   )
// }
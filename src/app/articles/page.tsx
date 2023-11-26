'use client'
import React, { useCallback, useMemo } from 'react'
import { Editable, withReact, Slate, RenderElementProps, RenderLeafProps } from 'slate-react'
import {
  Transforms,
  createEditor,
  Descendant,
} from 'slate'
import { withHistory } from 'slate-history'

import { BlockButton, Element, Leaf, MarkButton, Toolbar } from '@/components/Editor/components'


const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', strike: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]



async function getData(id: string) {
  const baseUrl = 'https://star-talk.foradmin.pp.ua/api/v1/'
  const res = await fetch(`${baseUrl}article/${id}`)


  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export default function Test() {

  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const writer = useMemo(() => withHistory(withReact(createEditor())), [])

  const readValue: Descendant[] =
    [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ]
  return (
    <section id="about" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">
        <Slate editor={editor} initialValue={initialValue} >
          <Toolbar>
            <BlockButton format="title" icon="title" />
            <BlockButton format="quote" icon="quote" />
            <BlockButton format="list-ordered" icon="list-numbered" />
            <BlockButton format="list-unordered" icon="list-bulleted" />

            <MarkButton format="bold" icon="bold" />
            <MarkButton format="italic" icon="italic" />
            <MarkButton format="underline" icon="underlined" />
            <MarkButton format="strike" icon="strike" />

            <BlockButton format="left" icon="align-left" />
            <BlockButton format="center" icon="align-center" />
            <BlockButton format="right" icon="align-right" />
            <BlockButton format="justify" icon="align-justify" />
          </Toolbar>
          <Editable
            style={{
              backgroundColor: 'rgb(255, 230, 156)',
              minHeight: '200px',

              outline: 'rgb(0, 128, 0) solid 2px',
            }}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            autoFocus
          // readOnly

          />
        </Slate>

        <button onClick={() => {
          console.log('==')
          const content = JSON.stringify(editor.children)
          console.log(content)
          localStorage.setItem('content', content)

        }}
        > Save</button>

        <button onClick={async () => {
          // const content = JSON.parse(localStorage.getItem('content') || '{}')
          const data = await getData('65556bfa225e9773ac1f15e9')
          const content = await JSON.parse(data.text)

          console.log(content)

          let totalNodes = writer.children.length;
          if (content.length <= 0) return;

          for (let i = 0; i < totalNodes - 1; i++) {
            console.log(i)
            Transforms.removeNodes(writer, {
              at: [totalNodes - i - 1],
            });
          }

          for (const value of content) {
            Transforms.insertNodes(writer, value, {
              at: [writer.children.length],
            });
          }

          Transforms.removeNodes(writer, {
            at: [0],
          });

        }}> Read</button>

        <Slate editor={writer} initialValue={readValue}>

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
      </div>
    </section>
  )
}
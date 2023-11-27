import React, { PropsWithChildren } from 'react'

import { useSlate, RenderElementProps, RenderLeafProps } from 'slate-react'
import { isBlockActive, isMarkActive, toggleBlock, toggleMark } from './helper'
import { TEXT_ALIGN_TYPES } from './constants'
import cn from "@/helpers"

import Icon from '../Icon'

import { textAlign, textFormat, textType } from './slateEditor'
interface BaseProps {
    className?: string
    [key: string]: unknown
}
type But = { format: (textType | textAlign | textFormat), icon: string, }


const Button = ({ className, active, reversed, icon, ...props }:
    PropsWithChildren<{ active?: boolean, reversed?: boolean, icon: string } & BaseProps>) => (
    <span
        {...props}
        className={cn(
            className,
            "cursor-pointer border-[1px] rounded-[2px] border-grey-2 flex  w-8 h-8  ",
            active ? 'text-black-100' : 'text-black-30'

        )}

    ><Icon name='/assets/icons/editor.svg' id={icon}
        className="w-full h-full"
        />
    </span>
)

export const Toolbar = (
    ({ className, ...props }: PropsWithChildren<BaseProps>) => (
        <div
            {...props}
            data-test-id="menu"
            className={cn(className, "flex pl-2 gap-1",
                "  relative  pt-[1px] px-4 pb-4 mx-0 -my-5 border-b-[2px] border-solid border-[#eee] mb-5"
            )}
        />
    )
)

export const BlockButton = ({ format, icon }: But) => {
    const editor = useSlate()
    return (
        <Button
            active={isBlockActive(
                editor,
                format,
                TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
            )}
            onMouseDown={(event: { preventDefault: () => void }) => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
            title={format}
            icon={icon}
        >

        </Button>
    )
}

export const MarkButton = ({ format, icon }: But) => {
    const editor = useSlate()
    return (
        <Button
            active={isMarkActive(editor, format)}

            onMouseDown={(event: { preventDefault: () => void }) => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
            title={format}
            icon={icon}
        >

        </Button>
    )
}

export const Element = ({ attributes, children, element }: RenderElementProps) => {
    const style = { textAlign: element.align }
    switch (element.type) {
        case 'title':
            return (
                <p style={style} className='editor-title' {...attributes}>
                    {children}
                </p>
            )
        case 'quote':
            return (
                <blockquote style={style} className='editor-quote' {...attributes}>
                    {children}
                </blockquote>
            )
        case 'list-unordered':
            return (
                <ul style={style} className='editor-list-unordered' {...attributes}>
                    {children}
                </ul>
            )
        case 'list-ordered':
            return (
                <ol style={style} className='editor-list-ordered' {...attributes}>
                    {children}
                </ol>
            )
        case 'list-item':
            return (
                <li style={style} className='editor-list-element' {...attributes}>
                    {children}
                </li>
            )

        default:
            return (
                <p style={style} className='editor-paragraf' {...attributes}>
                    {children}
                </p>
            )
    }
}

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
    if (leaf?.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf?.strike) {
        children = <del>{children}</del>
    }

    if (leaf?.italic) {
        children = <em>{children}</em>
    }

    if (leaf?.underline) {
        children = <ins>{children}</ins>
    }

    return <span {...attributes}>{children}</span>
}
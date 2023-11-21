import {
    Editor,
    Transforms,
    Element as SlateElement,
} from 'slate'
import { LIST_TYPES, TEXT_ALIGN_TYPES } from './constants'

import { textAlign, textType, listType } from './slateEditor'


export const isBlockActive = (editor: Editor, format: string, blockType = 'type') => {
    const { selection } = editor
    if (!selection) return false



    const activeBlock = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n[blockType as keyof typeof n] === format

        })
    )

    return !!activeBlock[0]
}

export const isMarkActive = (editor: Editor, format: string) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format as keyof typeof marks] === true : false

}

export const toggleBlock = (editor: Editor, format: string) => {

    const isList = LIST_TYPES.includes(format)
    const isAlign = TEXT_ALIGN_TYPES.includes(format)

    const isActive = isBlockActive(
        editor,
        format,
        isAlign ? 'align' : 'type'
    )



    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type as string) &&
            !isAlign,
        split: true,
    })

    let newProperties: Partial<SlateElement>

    if (isAlign) {
        newProperties = {
            align: isActive ? undefined : format as textAlign,
        }
    } else {
        newProperties = {
            type: isActive ? 'paragraph' : isList ? 'list-item' : format as textType,
        }
    }
    Transforms.setNodes<SlateElement>(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format as textType, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

export const toggleMark = (editor: Editor, format: string) => {

    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}
'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { Editable, withReact, Slate, RenderElementProps, RenderLeafProps } from 'slate-react'
import { Element, Leaf } from "./components"
import {
    Transforms,
    createEditor,
    Descendant,
} from 'slate'

const Viewer = ({ content, classname = '' }: { content: Descendant[], classname?: string }) => {

    const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
    const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])
    const writer = useMemo(() => withReact(createEditor()), [])
    // console.log('viewer');

    return (
        <Slate editor={writer} initialValue={content}>

            <Editable
                className={classname}
                // style={{
                //     backgroundColor: 'rgb(156, 230, 255)',
                //     minHeight: '200px',

                //     outline: 'rgb(0, 128, 0) solid 2px',
                // }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                readOnly

            />
        </Slate>
    )

}

export default Viewer


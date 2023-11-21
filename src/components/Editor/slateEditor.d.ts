import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

type textType = 'paragraph'|'list-ordered' | 'list-unordered'|'list-item'|'quote' |'title' 
type textAlign = 'left' | 'center' | 'right' | 'justify'
type textFormat = 'bold' | 'italic' | 'underline' | 'strike'
type listType ='list-ordered' | 'list-unordered'

type CustomText = {
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
  strike?: true;
}

type CustomElement = {
  type?: textType;
  align?: textAlign; 
  children: CustomText[];
}


declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor,
    Element: CustomElement,
    Text: CustomText,
  }
}

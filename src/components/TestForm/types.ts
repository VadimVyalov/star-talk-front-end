
export type ElementBase< ExtraProps> = {
  type: 'radio'|'multiCheck';
  id: string;
} & ExtraProps;



export type ElementRadio = ElementBase<

  {
 items: { id: string, value: string }[]
  }
>;

export type ElementMultiCheck = ElementBase<

  {
    items: { id: string, value: string }[]
  }
  >;

export type ElementInput = ElementBase<

  {
    value?: string;
    placeholder: string;
  }
  >;

 export type ElementText = ElementBase<
  
  {
    text: string;
  }
>; 

export type ElementVariant =

  | ElementRadio
  | ElementMultiCheck;
  

export type FormData = {
  type: 'radio'|'multiCheck';
  id: string;
  title: string;
  variants: { id: string, value: string }[]
  ansver: string[];
};
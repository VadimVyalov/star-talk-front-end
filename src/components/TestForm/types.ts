export type ElementBase<Type, ExtraProps> = {
  type: Type;
  id: string;
} & ExtraProps;

export enum ElementType {
  text = 'text',
  input = 'input',
  radio = 'radio',
  check = 'checkbox'
}

export type ElementText = ElementBase<
  ElementType.text,
  {
    text: string;
  }
>;

export type ElementInput = ElementBase<
  ElementType.input,
  {
    value?: string;
    placeholder: string;
  }
>;

export type ElementRadio = ElementBase<
  ElementType.radio,
  {
 items: { id: string, value: string }[]
  }
>;

export type ElementCheck = ElementBase<
  ElementType.check,
  {
    items: { id: string, value: string }[]
  }
>;

export type ElementVariant =
  | ElementText
  | ElementInput
  | ElementRadio
  | ElementCheck;

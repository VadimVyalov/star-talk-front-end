export type Article = {
  id: string,
  image: string,
  image_preview: string,
  title: string,
  author: string,
  text: string,
  date: string,
  seo_description: string,
  keyword: string,

}
export type Period = {
  id: string,
  title: string,
  lessons_amount: number,
  slogan: string,
  price_per_lesson: number,
  price_description: Array<{ id: string, text: string }>,
  image: string,
  new: boolean,
  hot: boolean,
}

export type Teacher = {
  id: string,
  name: string,
  short_description: string,
  description: Array<{ id: string, text: string }>,
  photo: string
}

export type Review = {
  id: string,
  rate: number,
  message: string,
  author: string
}

export type FAQ = {
  id: string,
  question: string,
  answer: string,

}
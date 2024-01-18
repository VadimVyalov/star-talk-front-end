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
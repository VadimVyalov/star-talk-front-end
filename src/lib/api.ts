export interface Period  {
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
 
const buildUrl = (...path: string[]) =>
    `${BASE_URL}${path.join('/')}`;
   
const stringifyQueryParams = (params: Record<string, string>) =>
    new URLSearchParams(params).toString();

const sendRequest = async<T>(url: string, init ?:RequestInit) => {
    
    const res = await fetch(url, init)
    if (!res.ok) {
        throw new Error(await res.text())
    }

    return (await res.json()) as T
}

export const getPrices = (init?: RequestInit) =>
    sendRequest<Period[]>(buildUrl('price'),init)

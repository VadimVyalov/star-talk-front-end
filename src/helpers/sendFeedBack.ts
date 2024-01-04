
'use server';

export type InputFeedBack ={
  name: string;
  email: string;
  message: string;
  
}

export type InputGift ={
  name: string;
  phone: string;
}

export type InputLesson ={
  name: string;
  phone: string;
}

export async function sendFeedBack(data:{ [x: string]: string },token:(string|null)) {
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
   
    if (token) {
      const Data = {
        name: data?.name?.trim() ||'',
        email: data?.email?.trim() ||'',
        comment: data?.message?.trim() ||'',
        phone: data?.phone?.trim() || "+00000000001111" ,
        token: token,
        gift: data?.gift || false,
      };  

      try {
        const res = await fetch(`${BASE_URL}feedback`, {
          method: "POST",
          body: JSON.stringify(Data),
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
          },
        })
        

        if (!res.ok) {
          const error = await res.json()
          throw new Error(`Failed to send feedback: ${error?.message || res.status}` )
        }

        const data = await res.json()
        return  data?.message || res.status
        

      } catch (error: unknown) {
        
        if (typeof error === "string") {
            throw error
          } else if (error instanceof Error) {
          throw  error.message
          }    
        
        }
    }
}
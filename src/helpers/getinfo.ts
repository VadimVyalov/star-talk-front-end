
'use server';

import { cookies } from 'next/headers'

export  async function login(email: string, password: string) {
 
    const baseUrl = 'https://star-talk.foradmin.pp.ua/api/v1'

    const description = { email, password }
    
  const res = await fetch(`${baseUrl}/auth/sign-in`, {
    method: "POST",
      body: JSON.stringify(description),
    credentials: 'same-origin',
    headers: {
      "content-type": "application/json",
    },
  })
    console.log('----------')
    console.log(res.headers.get('set-cookie'));
    

  if (!res.ok) {

    throw new Error('Failed to send data')
  }

  return res.json()
}

export async function getData(id: string) {
  const baseUrl = 'https://star-talk.foradmin.pp.ua/api/v1'
  const res = await fetch(`${baseUrl}/article/${id}`)

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export const getinfo = async () => {
   

console.log('access');


   
    
    
}
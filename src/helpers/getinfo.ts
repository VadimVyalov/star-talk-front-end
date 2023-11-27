
'use server';

import { cookies } from 'next/headers'
const baseUrl = 'https://star-talk.foradmin.pp.ua/api/v1'

export  async function login(email: string, password: string) {
 
  
    const description = { email, password }
    
  const res = await fetch(`${baseUrl}/auth/sign-in`, {
    method: "POST",
      body: JSON.stringify(description),
    credentials: 'include',
    headers: {
      "content-type": "application/json",
    },
  })

    const getCookie = async (name: string) => {
    return cookies().get(name)?.value ?? 'nott';
  }
  


  // const cookie = await getCookie('access-cookie');

  
  
const parseCookie = (str: string) =>
  str
  .split(';')
  .map((v: string) => v.split('='))
  .reduce((acc: { [x: string]: string; }, v: string[]) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {})
  
    

  if (!res.ok) {

    throw new Error('Failed to send data')
  }
  const data = res.json()
  const cook = res.headers.get('set-cookie')
 // cookies().set(cook)

  //console.log(cook);
  
  const cookie = cookies().getAll().map(i =>` ${i.name} = ${i.value}`)
  
  console.log(`--- ${ cookie} ---`)
  
  return { data, cook }
}

export async function getData(id: string) {
 
  const res = await fetch(`${baseUrl}/article/${id}`)

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}




export const getinfo = async () => {

  console.log('FAQ');
  
  const description =   {
 question: "Що це",
      answer: "Хто зна що"

 
  }
  
  const res = await fetch(`${baseUrl}/faq`, {
    method: "POST",
      body: JSON.stringify(description),
    credentials: 'include',
    headers: {
      "content-type": "application/json",
      Cookie: "access-cookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA4MDczNjgsImlhdCI6MTcwMDc2NDE2OCwiVXNlcklEIjoiNjU0MTExZWM0NTM5NzQzNTQ5Mjg0N2U1In0.Wee-KaXL5X98e_vng3R93aTSA7AJ7asAwaQ9xrPXxPU; expires=Fri, 24 Nov 2023 06:29:28 GMT; path=/; HttpOnly; secure; SameSite=None, refresh-cookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDA4NTA1NjgsImlhdCI6MTcwMDc2NDE2OCwiVXNlcklEIjoiNjU0MTExZWM0NTM5NzQzNTQ5Mjg0N2U1In0.CTNXw35Dz4i6VuHkdgpwD0NGTzThIbb7jWUCF9S_3z8; expires=Fri, 24 Nov 2023 18:29:28 GMT; path=/api/v1/auth/refresh; HttpOnly; secure; SameSite=None"
    },
  })
    console.log(`----------`)
 
    

  if (!res.ok) {

   // throw new Error('Failed to send data')
console.log(res.status);
  }

  return res.json()

    
}
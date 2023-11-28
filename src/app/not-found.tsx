import Link from 'next/link'
function NotFound() {
  return (
    <section className=" mx-auto">
      <div className=" container">
        <div className="bg-[url('/assets/image/cloud-m.svg')]  t:bg-[url('/assets/image/cloud-t.svg')] d:bg-[url('/assets/image/cloud-d.svg')]  
                          bg-center  bg-no-repeat bg-contain t:bg-auto  text-center flex flex-col items-center mx-auto ">
          <p className="text-[128px] t:text-[148px] d:text-[190px]  t:mt-[117px] d:mt-[156px] font-roboto leading-[1.1]">404</p>
          <p className="text-[34px] t:text-[75px] d:text-[96px] mt-[134px] t:mt-[16px] d:mt-[20px] font-bree leading-[1.1042] uppercase">error</p>
          <p className="text-[18px] t:text-[24px] d:text-[32px] mt-[143px] t:mt-[39px] d:mt-[45px]">Шкода, але сторінку не знайдено</p>
          <Link href="/" className="greenLink w-full t:w-fit py-[18px] t:py-5 px-[22px] mt-[45px] t:mt-4
          text-lg t:text-base ">Повернутись на головну</Link>
        </div>
      </div>
    </section >
  )
}

export default NotFound
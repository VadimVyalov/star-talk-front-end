
import Link from 'next/link'
// import cloud from '../../public/assets/image/cloud.svg'



function NotFound() { 

  return (
    <section className=" mx-auto">
      <div className=" container">

        <div className="bg-[url('../../public/assets/image/cloud-m.svg')]  t:bg-[url('../../public/assets/image/cloud-t.svg')] d:bg-[url('../../public/assets/image/cloud-d.svg')]  
        bg-center  bg-no-repeat   text-center flex flex-col items-center mx-auto ">
          <p className="text-[128px] t:text-[148px] d:text-[190px] mt-[-150px] pb-[32px] t:pb-0 t:mt-[117px] d:mt-[156px] font-roboto leading-[1.1]">404</p>
          <p className="text-[34px] t:text-[75px] d:text-[96px] py-[110px] t:py-0 t:mt-[16px] d:mt-[20px] font-bree leading-[1.1042] uppercase">error</p>
          <p className="text-[18px] t:text-[24px] d:text-[32px] pt-[20px] pb-[45px] t:py-0 t:mt-[39px] d:mt-[45px]">Шкода, але сторінку не знайдено</p>
          <Link href="/" className="block w-full t:w-fit px-[23px] py-[21px] t:py-[15px] mb-[-100px] t:mb-0  t:mt-[13px] d:mt-[16px] rounded-bl-3xl rounded-tr-3xl bg-accent-50 text-white-50
          text-[16px] text-center font-semibold ">Повернутись на головну</Link>

        </div>
      </div>


    </section >
  )
}

export default NotFound
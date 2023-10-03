
import Link from 'next/link'
// import cloud from '../../public/assets/image/cloud.svg'



function NotFound() {

  return (
    <section className="desktop:mb-[120px] mx-auto">
      <div className="container mx-auto ">

        <div className=" bg-[url('../../public/assets/image/cloud-d.svg')]  bg-center
          mx-[108px]  text-center  ">
          <p className="text-[190px] font-roboto leading-[1.1] pt-[155px] ">404</p>
          <p className="text-8xl uppercase font-bree leading-[1.1] pt-[20px]">error</p>
          <p className="text-3xl pt-[45px]">Шкода, але сторінку не знайдено.</p>
          <Link href="/" className="text-2xl pt-[16px]">Back to HomePage</Link>

        </div>
      </div>


    </section >
  )
}

export default NotFound
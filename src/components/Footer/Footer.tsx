'use client';
import Image from "next/image";
import Link from "next/link";
import useScreen from '@/hooks/useScreen';
import Navigation from "../Navigation";
import Social from "../Social";
import cn from "@/helpers";
import Icon from "../Icon";
const logo = "/assets/icons/logo.svg"

const Footer = () => {
  const { isT } = useScreen();
  //console.log(isT)
  return (

    <div id="footer" className="container pb-8">

      <div className="flex flex-col justify-center items-center t:items-start
      t:grid t:grid-cols-2 tb:grid-cols-3  pb-6 t:pb-10 d:pb-14 pt-8 t:pt-10 d:pt-16 ">
        <Image
          src={logo}
          alt="Star Talk"
          width={133}
          height={33}
        />

        <div className="tb:col-start-2 tb:col-end-3 tb:row-start-1 tb:row-span-3 mx-auto
                        t:col-start-1 t:row-start-4 t:col-span-2 t:w-fit  ">
          <Navigation itemCn="gap-x-4" wrapCn="gap-y-3   mt-10 tb:mt-0 " />
        </div>


        <div className=" tb:col-start-3 tb:row-start-1 tb:row-span-3
                        t:col-start-2 t:row-start-1 t:row-span-3 
        flex flex-col items-center t:items-end gap-y-4 t:gap-x-6 shrink-0 mt-10 t:mt-0 ">
          <p className="font-roboto  text-2xl leading-9 font-semibold">Контакти</p>
          <div className="flex flex-row gap-x-4 items-center">
            <Link href="#viber" title="Viber" className='flex shrink-0 icon'>
              <Icon name='/assets/icons/social.svg' id='viber'
                className={cn('w-8 h-8 shrink-0')}
              />
            </Link>
            <Link href="tel:+380950963400">
              <span className="text-base t:text-[20px] font-medium  hover:text-accent-100 transition ">+380950963400</span>
            </Link>
          </div>
          <Link className=" hover:text-accent-100 transition " href='mailto:startalk.school@gmail.com'>startalk.school@gmail.com</Link>
        </div>

        <Social className="t:col-start-1 t:row-start-2 mt-6 t:mt-5" />

      </div>

      <div className="flex flex-col gap-2 justify-center">
        <p className="text-center  font-medium ">ФОП Сімак Тетяна Василівна</p>
        <Link className=" whitespace-nowrap font-medium text-center mx-auto " href={'/'}>Політика конфедейційності</Link>
        <p className="text-center ">Copyright © 2023 WebUzvar.  <span className="whitespace-nowrap"> All Rights Reserved</span> </p>
      </div>

    </div>

  );
};

export default Footer;

'use client';
import Image from "next/image";
import Link from "next/link";
//import useScreen from '@/hooks/useScreen';
import Navigation from "../Navigation";
import Social from "../Social";
import cn from "@/helpers";
import Icon from "../Icon";
const logo = "/assets/icons/logo.svg"
import { menuFooter } from '@/constants/menuItems'
import socialLink from "@/constants/socialLink";

const Footer = () => {
  // const { isT } = useScreen();
  //console.log(isT)
  return (

    <div id="footer" className="container pb-8 mb-[68px] t:mb-0">

      <div className=" justify-center items-center t:items-start
      grid t:grid-cols-3  pb-6  t:pb-10 d:pb-14 pt-8 t:pt-10 d:pt-16 ">

        <Link
          href="/" title="Star Talk"
          className="col-start-1 row-start-1 mx-auto t:ml-0 shrink-0 cursor-pointer " >
          <Image className="bg-transparent"
            src={logo}
            alt="Star Talk"
            width={133}
            height={33}
          />
        </Link>

        <div className="col-start-1 row-start-2 t:col-start-1 t:col-end-4 t:row-start-1 t:row-span-4 mx-auto
                        t:w-fit  flex justify-center z-10 ">
          <Navigation menuItems={menuFooter} itemCn="gap-x-4" wrapCn="gap-y-3 d:flex-row  gap-x-6  mt-10 t:mt-1  " />
        </div>

        <div className="col-start-1 row-start-4 t:col-start-3 t:row-start-1 t:row-span-3
                        flex flex-col items-center t:items-end gap-y-4
                        t:gap-x-6 shrink-0 mt-6 t:mt-0 ">
          <p className=" font-roboto  text-2xl leading-9 font-semibold">Контакти</p>
          <div className="flex flex-row gap-x-4 items-center">
            <a href={`${socialLink.viber.link}${socialLink.viber.owner}`}
              title={socialLink.viber.title}
              target='_blank'
              rel="noopener noreferrer nofollow"
              className='flex shrink-0 icon'>
              <Icon name='/assets/icons/social.svg' id='viber'
                className={cn('w-8 h-8 shrink-0')}
              />
            </a>
            <a href="tel:+380950963400"
              title="phone"
              rel="noopener noreferrer nofollow"
              className="text-base t:text-[20px] font-medium  hover:text-accent-100 transition">
              +380950963400
            </a>
          </div>
          <a href='mailto:startalk.school@gmail.com'
            rel="noopener noreferrer nofollow"
            className=" hover:text-accent-100 transition ">
            startalk.school@gmail.com
          </a>
        </div>

        <Social className="t:col-start-1 t:row-start-2 mx-auto mt-6 t:ml-0 t:mt-5" />
        <p className="text-left  font-medium col-start-1 mt-4 row-start-5 t:row-start-3 whitespace-nowrap ">ФОП Сімак Тетяна Василівна</p>

        <Link className=" whitespace-nowrap font-medium text-center mx-auto   hover:text-accent-100 transition
        row-start-3 t:col-start-2 t:row-start-5 mt-6  d:col-start-2 d:row-start-2 d:mt-3 " href={'/politics'}>Політика конфедейційності</Link>
      </div>

      <div className="flex flex-col gap-2 justify-center">
        {/* <p className="text-center ">Copyright © 2023 WebUzvar.  <span className="whitespace-nowrap"> All Rights Reserved</span> </p> */}
        <p className="text-center ">© 2023 WebUzvar | Усі права захищено </p>
      </div>

    </div>

  );
};

export default Footer;

'use client';
import Image from "next/image";
import Link from "next/link";
//import useScreen from '@/hooks/useScreen';
import Navigation from "../Navigation";
import Social from "../Social";
import cn from "@/helpers";
import Icon from "../Icon";
const logo = "/assets/icons/logo.svg"
import { menuHeader } from '@/constants/menuItems'
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

        <div className="col-start-1 row-start-2 t:col-start-1  t:row-start-3  mx-auto
                        t:ml-0">
          <Navigation menuItems={menuHeader} itemCn="" wrapCn="gap-y-3 mt-10 t:mt-8 d:mt-10  " />
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
              className="text-base t:text-[20px] font-medium  Link">
              +380950963400
            </a>
          </div>
          <a href='mailto:startalk.school@gmail.com'
            title="Email"
            rel="noopener noreferrer nofollow"
            className=" Link ">
            startalk.school@gmail.com
          </a>
        </div>

        <Social className="t:col-start-1 t:row-start-2 mx-auto mt-6 t:ml-0 t:mt-5" />
        <p className=" text-center font-medium col-start-1 mt-4 whitespace-nowrap
        row-start-5 t:col-start-1 t:col-span-3 t:row-start-5  ">
          ФОП Сімак Тетяна Василівна</p>

        <Link href={'/politics'} title='Політика конфедейційності'
          className=" whitespace-nowrap font-medium text-center  Link
         row-start-3 t:col-start-1 t:row-start-4 t:col-span-3 mt-6 t:mt-4" >
          Політика конфедейційності
        </Link>
      </div>

      <a href="https://webuzvar.com/"
        title="Перейти на сайт розробника"
        target='_blank'
        rel="noopener noreferrer nofollow"
        className="Link flex mx-auto justify-center items-center flex-col t:flex-row">

        <span className="whitespace-nowrap">© 2023 WebUzvar</span>
        <span className="mx-1 hidden t:inline">|</span>
        <span className="whitespace-nowrap  ">Усі права захищено</span>
      </a>


    </div>

  );
};

export default Footer;

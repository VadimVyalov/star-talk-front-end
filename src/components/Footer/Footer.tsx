'use client';
import Image from "next/image";
import Link from "next/link";
import useScreen from '@/hooks/useScreen';
import Navigation from "../Navigation";
import Social from "../Social";
import viber_icon from "../../../public/assets/icons/viber.svg"
import telephone_icon from "../../../public/assets/icons/telephone.svg"

const logo ="/assets/icons/logo.svg"

const Footer = () => {
  const { isT } = useScreen();
  //console.log(isT)
  return (

    <div id="footer" className="container pb-8">

      <div className="flex  flex-col t:flex-row items-center t:items-start t:justify-between pb-6 t:pb-10 d:pb-14 pt-8 t:pt-10 d:pt-16 ">

        <div className="flex flex-col gap-y-8 shrink-0">
          <Image
            src={logo}
            alt="Star Talk"
            width={133}
            height={33}
          />
          {isT ? <Social /> : null}
        </div>
        <div className="relative flex flex-col d:text-center gap-y-4  ">
          <Navigation itemCn="gap-x-4" wrapCn="t:pb-[88px] d:pb-0 mt-10 t:mt-0 mb-2 t:mb-0" />
          <Link className="t:absolute t:bottom-10 t:left-0 d:static whitespace-nowrap font-medium " href={'/'}>Політика конфедейційності</Link>
          <p className="t:absolute t:bottom-0 t:left-0 d:static whitespace-nowrap font-medium ">ФОП Сімак Тетяна Василівна</p>
        </div>

        <div className="flex flex-col items-center t:items-end gap-y-4 t:gap-x-6 shrink-0 mt-10 t:mt-0 mb-6 t:mb-0">
          <p className="font-roboto  text-2xl leading-9 font-semibold">Контакти</p>

          <div className="flex flex-row gap-x-6 items-center">
            <a href="#viber" title="Viber" className=' shrink-0 '>
              <Image
                src={viber_icon}
                alt="viber icon"
                width={32}
                height={32}
              />
            </a>
            <a href="#tel" className="flex gap-x-2 ">
              <Image
                src={telephone_icon}
                alt="telephone icon"
                width={16}
                height={16}
              />
              <span className="text-base t:text-[20px] font-medium ">0667778899</span>
            </a>
          </div>
          <Link href={'mailto:startalk.school@gmail.com'}>startalk.school@gmail.com</Link>

        </div>
        {!isT ? <Social /> : null}
      </div>

      <p className="text-center pb">Copyright © 2023 WebUzvar | All Rights Reserved </p>

    </div>


  );
};

export default Footer;

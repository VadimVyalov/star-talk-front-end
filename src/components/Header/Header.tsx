'use client';
import Image from "next/image";

import ContactsPanel from "../ContactsPanel";
import Navigation from "../Navigation";
import Link from "next/link";
import { useState } from "react";

import useScreen from "@/hooks/useScreen";
import { BurgerMenuA } from "../BurgerMenuA/BurgerMenuA";
const logo = "/assets/icons/logo.svg"
import { menuHeader } from '@/constants/menuItems'
import ModalForm from "../ModalForm";

const Header = () => {



  const [open, setOpen] = useState(false);
  const onCloseMenu = () => { setOpen(false) };
  const { isD } = useScreen();
  return (
    <header id="header" className="mb-[72px] t:mb-[60px]">
      <div className="container   relative">
        <ContactsPanel />

        <div className="flex justify-between items-center mt-7">
          <Link className=" shrink-0 cursor-pointer " href="/" title="Star Talk">
            <Image className="bg-transparent"
              src={logo}
              alt="Star Talk"
              width={133}
              height={33}
            />
          </Link>


          {isD ? (

            <><Navigation menuItems={menuHeader} wrapCn='flex-row gap-x-6' />

              <button className="greenLink px-[24px] py-[16px]"
                type='button'
                onClick={() => { setOpen(true) }}>
                Записатись на урок
              </button>
              <ModalForm isOpen={open} onCloseMenu={onCloseMenu} />
            </>

          ) : (<BurgerMenuA />


            // <button title="меню" onClick={() => setOpen(prev => !prev)} className='flex flex-col justify-between items-center  icon p-1 !w-10 !h-10 z-20'>
            //   <Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200 ', open ? 'rotate-45 translate-y-[14px] translate-x-[2px] w-[90%] ' : '')} />
            //   <Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', open ? 'w-0' : '')} />
            //   <Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', open ? '-rotate-45 -translate-y-[14px] translate-x-[2px] w-[90%]' : '')} />
            // </button>

          )}

          {/* <div className={cn(" bg-mainBg rounded-b-3xl pb-6 flex flex-col items-center border-[1px] border-solid border-grey-2 z-20",
            "absolute right-0 bottom-0 translate-y-full -translate-x-[16px] t:-translate-x-[32px] d:-translate-x-[120px] overflow-hidden transition-[max-width] duration-300",
            open ? "max-w-[300px] " : "max-w-0 border-none")}
            onClick={() => setOpen(false)}>
            <Navigation
              wrapCn='mb-6  t:flex-col '
              itemCn="border-b-[1px] border-grey-2 "
              linkCn="mx-5 text-xl tracking-[-0.347px] leading-[70px] text-center " />
            <Link href="/" className="greenLink px-[42px] py-[18px]">Замовити урок</Link>
          </div>

          {open ? <ModalPortal onCloseMenu={onCloseMenu} isOpen={open} className=" bg-overlay justify-center items-center" /> : null} */}


        </div>
      </div>
    </header>
  );
};

export default Header;

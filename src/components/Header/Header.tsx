'use client';
import Image from "next/image";
import useScreen from '@/hooks/useScreen';
import ContactsPanel from "../ContactsPanel";
import Navigation from "../Navigation";
import Link from "next/link";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

const logo ="/assets/icons/logo.svg"

const Header = () => {
  const { isD } = useScreen();

  return (
    <header id="header" className="mb-[72px] t:mb-[60px]">
      <div className="container  ">
        <ContactsPanel />
        <div className="flex justify-between items-center mt-7">
          <Link className=" shrink-0 " href="/" title="Star Talk">
            <Image
              src={logo}
              alt="Star Talk"
              width={133}
              height={33}
            />
          </Link>

          {isD ?
            (<>
              <Navigation />
              <Link href="/" className="greenLink px-[23px] py-[15px] ">Замовити урок</Link>
            </>) :
            (<BurgerMenu />)}
        </div>
      </div>
    </header>
  );
};

export default Header;

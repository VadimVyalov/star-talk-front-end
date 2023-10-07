'use client';
import Image from "next/image";
import useScreen from '@/hooks/useScreen';
import ContactsPanel from "../ContactsPanel";
import Navigation from "../Navigation";
import logo from "../../../public/assets/icons/logo.svg"
import Link from "next/link";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";


const Header = () => {
  const { isD } = useScreen();

  return (
    <header>
      <div className="container  ">
        <ContactsPanel />
        <div className="flex justify-between items-center my-7">
          <Link className=" shrink-0 " href="/" title="Star Talk">
            <Image
              src={logo}
              alt="Star Talk"
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

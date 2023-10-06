'use client';
import Image from "next/image";
import useScreen from '../../hooks/useScreen';
import { FC } from "react";

import ContactsPanel from "../ContactsPanel";
import Navigation from "../Navigation";
import logo from "../../../public/assets/icons/logo.svg"
import Link from "next/link";

const Header: FC = () => {
  const { isD } = useScreen();
  return (
    <header>
      <div className="container  ">
        <ContactsPanel />
        <div className="flex justify-between items-center my-7">
          <Link className=" shrink-0 "href="/" title="Star Talk">
            <Image
              src={logo}
              alt="Star Talk"
              />
          </Link>

          {isD ? <Navigation /> : <p>BurgerMenu</p>}

          <Link href="/" className="greenLink ">Замовити урок</Link>

        </div>

      </div>
    </header>
  );
};

export default Header;

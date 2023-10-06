import Image from "next/image";
import { FC } from "react";

import ContactsPanel from "../ContactsPanel";
import Navigation from "../Navigation";
import logo from "../../../public/assets/icons/logo.svg"

const Footer: FC = () => {
  return (

    <div className="container">
      <ContactsPanel />
      <div>
        <Image
          src={logo}
          alt="Star Talk"

        />

        {/* <Navigation /> */}
      </div>
    </div>

  );
};

export default Footer;

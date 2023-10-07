'use client';
import Image from "next/image";
import ContactsPanel from "../ContactsPanel";
import Navigation from "../Navigation";
import logo from "../../../public/assets/icons/logo.svg"

const Footer= () => {
  return (

    <div className="container">
      <ContactsPanel />
      <div>
        <Image
          src={logo}
          alt="Star Talk"
        />

         <Navigation /> 
      </div>
    </div>

  );
};

export default Footer;

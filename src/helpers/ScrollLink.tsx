import { usePathname } from 'next/navigation'
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";


type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {

    const pathname = usePathname() 

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
     
   if (pathname!==e.currentTarget.pathname ) return;
       
  
      e.preventDefault();
   
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;

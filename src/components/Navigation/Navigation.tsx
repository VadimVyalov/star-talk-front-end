import Link from "next/link";
import { type ClassValue } from "clsx";
import cn from "@/helpers";
interface NavigationProps {
  wrapCn?: ClassValue;
  itemCn?: ClassValue;
  linkCn?: ClassValue;
  mobile?: boolean;
  menuItems: { id: string, title: string, link: string }[];
}

const Navigation = ({ mobile = false, itemCn = "", linkCn = "", wrapCn = '', menuItems }: NavigationProps) => {

  return (
    <nav className={cn(mobile ? "w-full" : "w-fit")} >
      <ul className={cn("flex flex-col ", wrapCn)}>
        {
          menuItems?.map(i => {
            return (
              <li key={i.id} className={cn(itemCn, "hover:text-accent-100 transition ")}>
                <Link className={cn(" block whitespace-nowrap font-medium h-full ", linkCn)}
                  title={i.title}
                  href={i.link}
                > {i.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navigation;

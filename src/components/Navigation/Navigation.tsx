import Link from "next/link";
import { type ClassValue } from "clsx";
import cn from "@/helpers";
interface NavigationProps {
  wrapCn?: ClassValue;
  itemCn?: ClassValue;
  linkCn?: ClassValue;

}

const Navigation = ({ itemCn = "", linkCn = "", wrapCn = '' }: NavigationProps) => {
  const menuItems = [
    { id: 'm-01', title: 'Ціни', link: '/#prices' },
    { id: 'm-02', title: 'Калькулятор', link: '/#calculator' },
    //   { id: 'm-03', title: 'Акції', link: '/#discounts' },
    { id: 'm-04', title: 'Про нас', link: '/#about' },
    // { id: 'm-05', title: 'Викладачі', link: '/#teachers' },
    // { id: 'm-06', title: 'Статті', link: '/articles' },
    { id: 'm-07', title: 'Відгуки', link: '/#reviews' }
  ]

  return (
    <nav className="w-fit" >
      <ul className={cn("flex flex-col ", wrapCn)}>
        {
          menuItems.map(i => {
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

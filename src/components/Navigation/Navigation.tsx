import { FC } from "react";
import ScrollLink from "../ScrollLink";

const Navigation: FC = () => {
  const menuItems = [
    { id: 'm-01', title: 'Ціни', link: '/#prices' },
    { id: 'm-02', title: 'Тривалість навчання', link: '/#prices' },
    { id: 'm-03', title: 'Акції', link: '/#discounts' },
    { id: 'm-04', title: 'Про нас', link: '/#about' },
    { id: 'm-05', title: 'Викладачі', link: '/#teachers' },
    { id: 'm-06', title: 'Статті', link: '/articles' },
    { id: 'm-07', title: 'Відгуки', link: '/responses' }
  ]

  return (
    <nav>
      <ul className="flex gap-6">
        {
          menuItems.map(i => {
            return (
              <li key={i.id}>
                <ScrollLink className="font-medium whitespace-nowrap" 
                  title={i.title} 
                  href={i.link} 
                  > {i.title}  
                </ScrollLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navigation;

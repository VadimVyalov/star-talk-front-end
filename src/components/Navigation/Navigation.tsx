
import ScrollLink from "../ScrollLink";


const Navigation = () => {
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
    <nav >
      <ul className="flex d:gap-6 flex-col  mb-12 d:mb-0 d:flex-row">
        {
          menuItems.map(i => {
            return (
              <li key={i.id} className="border-b-[1px] border-[#18181b33]  d:border-none ">
                <ScrollLink className=" block text-xl  d:text-base font-medium tracking-[-0.347px] d:tracking-normal whitespace-nowrap mx-5 d:mx-0 leading-[70px] d:leading-normal text-center h-full" 
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

import Image from "next/image";
import data from '../../../../public/data/advantages.json'

const Advantages = () => {
  return (
    <section className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">
        <h2 className="sectionTitle">Наші переваги</h2>
        <ul className="grid t:grid-cols-2 d:grid-cols-3 justify-center gap-5 d:gap-6  ">
          {data?.map(item => {
            return (
              <li key={item.id} className="flex border-[1px] border-black-30 rounded-[5px] px-12 py-9 t:px-6 t:py-9  d:py-10">
                <Image
                  className="w-[70px] h-[70px] d:w-[80px] d:h-[80px] bg-inherit block shrink-0"
                  alt={item.title}
                  src={item.img}
                  width={80}
                  height={80}
                />

                <div className="pl-4">
                  <h3 className="font-semibold mb-1 ">{item.title}</h3>
                  <p className="text-sm leading-[1.5] font-normal">{item.description}</p>
                </div>
              </li>)
          })
          }
        </ul>
      </div>
    </section>
  );
};

export default Advantages;

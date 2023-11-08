import Image from "next/image";
const data = [
  {
    id: 'a-01',
    title: 'Доступна вартість',
    img: '/assets/image/advantages/01.png',
    description: 'Ціна на індивідуальні заняття найвигідніша'
  },
  {
    id: 'a-02',
    title: 'Подарунки і сертифікати',
    img: '/assets/image/advantages/02.png',
    description: 'Подарунки. Сертифікати при закінченні навчання'
  },
  {
    id: 'a-03',
    title: 'Словниковий запас',
    img: '/assets/image/advantages/03.png',
    description: 'Високий рівень словникового запасу'
  },
  {
    id: 'a-04',
    title: 'Різний підхід до кожного',
    img: '/assets/image/advantages/04.png',
    description: 'Різний підхід для різних видів'
  },
  {
    id: 'a-05',
    title: 'Зручний час навчання',
    img: '/assets/image/advantages/05.png',
    description: 'Різний підхід для різних видів'
  },
  {
    id: 'a-06',
    title: 'Мовне середовище',
    img: '/assets/image/advantages/06.png',
    description: 'Мова якою можуть оволодіти всі в короткий проміжок часу'
  },


]
const Advantages = () => {
  return (
    <section className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">
        <h2 className="sectionTitle">Наші переваги</h2>
        <ul className="grid t:grid-cols-2 d:grid-cols-3 justify-center gap-5 d:gap-6  ">
          {data.map(item => {
            return (
              <li key={item.id} className="flex border-[1px] border-black-30 rounded-[5px] px-12 py-9 t:px-6 t:py-9  d:py-10">
                <Image
                  className="w-[70px] h-[70px] d:w-[80px] d:h-[80px]"
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

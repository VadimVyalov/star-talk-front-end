import { FC } from "react";
import Image from "next/image";

const Advantages: FC = () => {
  return (
    <section className="d:mb-[120px]">
      <div className="container">
        <h2 className="sectionTitle">Наші переваги</h2>
        <ul className="flex flex-wrap justify-center desktop:gap-[24px] ">
          <li className="advantage-item">
            <div>
              <Image
                alt="Доступна вартість"
                src={"assets/icons/adv1.svg"}
                height={80}
                width={80}
              />
            </div>
            <div>
              <h3 className="mb-[5px] text-[18px] font-semibold">Доступна вартість</h3>
              <p>Ціна на індивідуальні заняття найвигідніша</p>
            </div>
          </li>
          <li className="advantage-item">
            <div>
              <Image
                alt="Подарунки і сертифікати"
                src={"assets/icons/adv2.svg"}
                height={80}
                width={80}
              />
            </div>
            <div>
              <h3 className="mb-[5px] text-[18px] font-semibold">Подарунки і сертифікати</h3>
              <p>Подарунки. Сертифікати при закінченні навчання</p>
            </div>
          </li>
          <li className="advantage-item">
            <div>
              <Image
                alt="Словниковий запас"
                src={"assets/icons/adv3.svg"}
                height={80}
                width={80}
              />
            </div>
            <div>
              <h3 className="mb-[5px] text-[18px] font-semibold">Словниковий запас</h3>
              <p>Високий рівень словникового запасу</p>
            </div>
          </li>
          <li className="advantage-item">
            <div>
              <Image
                alt="Різний підхід до кожного"
                src={"assets/icons/adv4.svg"}
                height={80}
                width={80}
              />
            </div>
            <div>
              <h3 className="mb-[5px] text-[18px] font-semibold">Різний підхід до кожного</h3>
              <p>Різний підхід для різних видів</p>
            </div>
          </li>
          <li className="advantage-item">
            <div>
              <Image
                alt="Зручний час навчання"
                src={"assets/icons/adv5.svg"}
                height={80}
                width={80}
              />
            </div>
            <div>
              <h3 className="mb-[5px] text-[18px] font-semibold">Зручний час навчання</h3>
              <p>Різний підхід для різних видів</p>
            </div>
          </li>
          <li className="advantage-item">
            <div>
              <Image
                alt="Мовне середовище "
                src={"assets/icons/adv6.svg"}
                height={80}
                width={80}
              />
            </div>
            <div>
              <h3 className="mb-[5px] text-[18px] font-semibold">Мовне середовище</h3>
              <p>Мова якою можуть оволодіти всі в короткий проміжок часу</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;

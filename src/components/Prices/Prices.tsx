"use client";

import { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Prices: FC = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slider",
  };
  return (
    <section id="prices" className="desktop:mb-[120px]">
      <div className="container">
        <h2 className="sectionTitle">Ціни на індивідуальні заняття</h2>
        <div>
          <Slider {...settings}>
            <div className="slider-item">
              <div className="flex flex-col justify-between items-center">
                <div className="mb-[38px]">
                  <Image
                    alt="Індивідуальні заняття"
                    src={"assets/icons/price.svg"}
                    height={100}
                    width={100}
                  />
                </div>
                <div className="mb-[78px]">
                  <h3 className="mb-[12px] text-xl text-center font-semibold">
                    Індивідуальні заняття1
                  </h3>
                  <p className="mb-[6px] text-base text-center font-semibold">
                    4 заняття в місяць
                  </p>
                  <p className="mb-[6px] text-base text-center">
                    (Якщо ну зовсім мало вільного часу)
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 pl-5">
                  <li className="prices-list-item">Зручні дні і час</li>
                  <li className="prices-list-item">
                    Акцент на розмовну англійську
                  </li>
                  <li className="prices-list-item">
                    Збільшення словникового запасу
                  </li>
                  <li className="prices-list-item">
                    доступ до каналу з піснями з подвійними субтитрами
                  </li>
                  <li className="prices-list-item">
                    доступ до каналу з щоденною порцією корисної англійської
                  </li>
                  <li className="prices-list-item">
                    доступ до каналу з щоденною порцією корисної англійської
                  </li>
                  <li className="prices-list-item">
                    доступ до чату для листування і вдосконалення Writing
                  </li>
                </ul>
              </div>
              <button className=" w-[298px] h-[60px] text-xl font-semibold text-accent-50 border-[1px] border-accent-50 rounded-[5px]">
                Оплатити
              </button>
            </div>
            <div className="slider-item">
              <div className="mb-[38px]">
                <Image
                  alt="Індивідуальні заняття"
                  src={"assets/icons/price.svg"}
                  height={100}
                  width={100}
                />
              </div>

              <h3>Індивідуальні заняття2</h3>
              <p>4 заняття в місяць</p>
              <p>(Якщо ну зовсім мало вільного часу)</p>
              <ul>
                <li>Зручні дні і час</li>
                <li>Акцент на розмовну англійську</li>
                <li>Збільшення словникового запасу</li>
                <li>доступ до каналу з піснями з подвійними субтитрами</li>
                <li>
                  доступ до каналу з щоденною порцією корисної англійської
                </li>
                <li>
                  доступ до каналу з щоденною порцією корисної англійської
                </li>
                <li>доступ до чату для листування і вдосконалення Writing</li>
              </ul>
              <button>Оплатити</button>
            </div>
            <div className="slider-item">
              <div className="mb-[38px]">
                <Image
                  alt="Індивідуальні заняття"
                  src={"assets/icons/price.svg"}
                  height={100}
                  width={100}
                />
              </div>
              <h3>Індивідуальні заняття3</h3>
              <p>4 заняття в місяць</p>
              <p>(Якщо ну зовсім мало вільного часу)</p>
              <ul>
                <li>Зручні дні і час</li>
                <li>Акцент на розмовну англійську</li>
                <li>Збільшення словникового запасу</li>
                <li>доступ до каналу з піснями з подвійними субтитрами</li>
                <li>
                  доступ до каналу з щоденною порцією корисної англійської
                </li>
                <li>
                  доступ до каналу з щоденною порцією корисної англійської
                </li>
                <li>доступ до чату для листування і вдосконалення Writing</li>
              </ul>
              <button>Оплатити</button>
            </div>
            <div className="slider-item">
              <div className="mb-[38px]">
                <Image
                  alt="Індивідуальні заняття"
                  src={"assets/icons/price.svg"}
                  height={100}
                  width={100}
                />
              </div>
              <h3>Індивідуальні заняття4</h3>
              <p>4 заняття в місяць</p>
              <p>(Якщо ну зовсім мало вільного часу)</p>
              <ul>
                <li>Зручні дні і час</li>
                <li>Акцент на розмовну англійську</li>
                <li>Збільшення словникового запасу</li>
                <li>доступ до каналу з піснями з подвійними субтитрами</li>
                <li>
                  доступ до каналу з щоденною порцією корисної англійської
                </li>
                <li>
                  доступ до каналу з щоденною порцією корисної англійської
                </li>
                <li>доступ до чату для листування і вдосконалення Writing</li>
              </ul>
              <button>Оплатити</button>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Prices;

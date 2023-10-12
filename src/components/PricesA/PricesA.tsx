"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SCREENS } from "../../../public/const/screens";
import useGetData from "@/hooks/useGetData";
import PriceItem from "./PriceItem";

const data = [

  {
    id: "p-01",
    title: "Індивідуальні заняття",
    lessons_amount: 0,
    slogan: "Якщо ну зовсім мало вільного часу",
    price_per_lesson: 500,
    price_description: [
      'Зручні дні і час',
      'акцент на розмовну англійську',
      'збільшення словникового запасу',
      'доступ до каналу з піснями з подвійними субтитрами',
      'доступ до чату для листування і вдосконалення Writing',
    ],
    image: "assets/icons/price.svg",
    new: false,
    hot: true,
  },
  {
    id: "p-02",
    title: "Індивідуальні заняття",
    lessons_amount: 1,
    slogan: "Якщо любиш 2 рази на тиждень",
    price_per_lesson: 450,
    price_description: [
      'зручні дні і час',
      'акцент на розмовну англійську',
      'збільшення словникового запасу',
      'доступ до каналу з піснями з подвійними субтитрами',
      'доступ до каналу з щоденною порцією корисної англійської',
      'доступ до чату для листування і вдосконалення Writing',
    ],
    image: "assets/icons/price.svg",
    new: false,
    hot: true,
  },
  {
    id: "p-03",
    title: "Індивідуальні заняття",
    lessons_amount: 4,
    slogan: "Якщо хочеш швидких результатів",
    price_per_lesson: 425,
    price_description: [
      'зручні дні і час',
      'акцент на розмовну англійську',
      'збільшення словникового запасу',
      'доступ до каналу з піснями з подвійними субтитрами',
      'доступ до каналу з щоденною порцією корисної англійської',
      'доступ до чату для листування і вдосконалення Writing',
    ],
    image: "assets/icons/price.svg",
    new: false,
    hot: true,
  },
  {
    id: "p-04",
    title: "Індивідуальні заняття",
    lessons_amount: 11,
    slogan: "Якщо ну зовсім мало вільного часу",
    price_per_lesson: 500,
    price_description: [
      'зручні дні і час',
      'акцент на розмовну англійську',
      'збільшення словникового запасу',
      'доступ до каналу з піснями з подвійними субтитрами',
      'доступ до каналу з щоденною порцією корисної англійської',
      'доступ до чату для листування і вдосконалення Writing',
    ],
    image: "assets/icons/price.svg",
    new: false,
    hot: true,
  },
  {
    id: "p-05",
    title: "Індивідуальні заняття",
    lessons_amount: 20,
    slogan: "Якщо ну зовсім мало вільного часу",
    price_per_lesson: 500,
    price_description: [
      'зручні дні і час',
      'акцент на розмовну англійську',
      'збільшення словникового запасу',
      'доступ до каналу з піснями з подвійними субтитрами',
      'доступ до каналу з щоденною порцією корисної англійської',
      'доступ до чату для листування і вдосконалення Writing',
    ],
    image: "assets/icons/price.svg",
    new: false,
    hot: true,
  },
  {
    id: "p-06",
    title: "Індивідуальні заняття",
    lessons_amount: 21,
    slogan: "Якщо любиш 2 рази на тиждень",
    price_per_lesson: 450,
    price_description: [
      'зручні дні і час',
      'акцент на розмовну англійську',
      'збільшення словникового запасу',
      'доступ до каналу з піснями з подвійними субтитрами',
      'доступ до каналу з щоденною порцією корисної англійської',
      'доступ до чату для листування і вдосконалення Writing',
    ],
    image: "assets/icons/price.svg",
    new: false,
    hot: true,
  },
  {
    id: "p-07",
    title: "Індивідуальні заняття",
    lessons_amount: 25,
    slogan: "Якщо хочеш швидких результатів",
    price_per_lesson: 425,
    price_description: [
      'зручні дні і час',
      'акцент на розмовну англійську',
      'збільшення словникового запасу',
      'доступ до каналу з піснями з подвійними субтитрами',
      'доступ до каналу з щоденною порцією корисної англійської',
      'доступ до чату для листування і вдосконалення Writing',
    ],
    image: "assets/icons/price.svg",
    new: false,
    hot: true,
  },

]



const PricesA = () => {

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    infinite: true,
    arrows:false,
    className:'slider-price',
    responsive: [
      {
        breakpoint: SCREENS.d,
        settings: {
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          infinite: true,
        
        }
      },
      {
        breakpoint: SCREENS.t,
        settings: {
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          infinite: true,
        }
      },
    ]
  };

  //  const { data, error,isLoading }= useGetData('price');
  //   console.log(data)
  return (
    <section id="prices" className="desktop:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Ціни на індивідуальні заняття</h2>
        <div className="">
          <Slider {...settings}>
            {data.map(period => {
              return (
                <div key={period.id} className="slider-item">
                    <PriceItem period={period} baseUrl='' />
                    <button className=" w-full h-[60px] text-xl font-semibold text-accent-50 border-[1px] border-accent-50 rounded-[5px]">
                    Записатись  </button>
                </div>
              )
            })}


          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PricesA;

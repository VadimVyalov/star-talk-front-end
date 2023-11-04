"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SCREENS } from "@/lib/screens";
import useGetData from "@/hooks/useGetData";
import PriceItem from "./PriceItem";
//import data from "../../../public/data/price.json"
import Sceleton from "./Skeleton";

export type Period = {
  id: string,
  title: string,
  lessons_amount: number,
  slogan: string,
  price_per_lesson: number,
  price_description: Array<{ id: string, text: string }>,
  image: string,
  new: boolean,
  hot: boolean,
}
const baseUrl = '/assets/icons/stars.svg'

const PricesA = () => {

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    infinite: true,
    arrows: false,
    className: 'slider-price',
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

  // const error = false;
  // const isLoading = false;

  const { data, error, isLoading } = useGetData('price');
  //   console.log(data)

  return (
    <section id="prices" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Ціни на індивідуальні заняття</h2>
        {!error ? (

          <div className="">
            <Slider {...settings}>
              {!isLoading ? (
                data.map((period: Period) => {
                  return (
                    <div key={period.id} className="slider-item">
                      <PriceItem period={period} baseUrl={baseUrl} />
                      <button className=" w-[95%] h-[60px] text-lg  font-semibold mx-1.5 whiteLink">
                        Записатись  </button>
                    </div>
                  )
                })
              ) : (['sk-1', 'sk-2', 'sk-3'].map(i => {
                return (
                  <Sceleton key={i} />
                )
              }))
              }
            </Slider>
          </div>
        ) : <p className="text-error-100 text-center text-3xl"> Щось пышло не так </p>
        }
      </div >
    </section >
  );
}

export default PricesA;

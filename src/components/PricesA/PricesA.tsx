"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SCREENS } from "../../../public/const/screens";
import useGetData from "@/hooks/useGetData";
import PriceItem from "./PriceItem";
import data from "../../../public/data/price.json"


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

  //  const { data, error,isLoading }= useGetData('price');
  //   console.log(data)

  return (
    <section id="prices" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Ціни на індивідуальні заняття</h2>
        <div className="">
          <Slider {...settings}>
            {data.map(period => {
              return (
                <div key={period.id} className="slider-item">
                  <PriceItem period={period} baseUrl='' />
                  <button className=" w-[95%] h-[60px] text-lg  font-semibold mx-1.5 greenLink">
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

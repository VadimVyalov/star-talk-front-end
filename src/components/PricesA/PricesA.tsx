"use client";

import Slider from "react-slick";

import { priceSlider } from "@/lib/sliderSettings";

import useGetData from "@/hooks/useGetData";
import PriceItem from "./PriceItem";
//import data from "../../../public/data/price.json"
import Sceleton from "./Skeleton";
import "./sliderStyle.css"
const baseUrl = '/assets/icons/stars.svg'

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

const PricesA = () => {


  // const error = false;
  // const isLoading = false;

  const { data, error, isLoading } = useGetData('price');
  //console.log(data)

  return (
    <section id="prices" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Ціни на індивідуальні заняття</h2>
        {!error ? (

          <div className="">
            <Slider {...priceSlider}>
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
        ) : <p className="text-error-100 text-center text-3xl"> Щось пішло не так </p>
        }
      </div >
    </section >
  );
}

export default PricesA;

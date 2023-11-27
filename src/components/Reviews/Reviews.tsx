"use client";

import Slider from "react-slick";

import { rewiewsSlider } from "@/lib/sliderSettings";

import useGetData from "@/hooks/useGetData";
import Rewiew from "./Rewiew";
//import data from "../../../public/data/rewiews.json"
import Sceleton from "./Skeleton";
import "./sliderStyle.css"
//const baseUrl = '/assets/icons/stars.svg'

export type Review = {
  id: string,
  rate: number,
  message: string,
  author: string
}

const Reviews = () => {


  // const error = false;
  // const isLoading = false;

  const { data, error, isLoading } = useGetData('comments');
  //   console.log(data)

  return (
    <section id="reviews" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Відгуки</h2>
        {!error ? (

          <div className="">
            <Slider {...rewiewsSlider}>
              {!isLoading ? (
                data.map((rewiew: Review) => {
                  return (

                    <Rewiew key={rewiew.id} rewiew={rewiew} />


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

export default Reviews;

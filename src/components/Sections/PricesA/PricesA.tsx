"use client";

import Slider from "react-slick";
import { priceSlider } from "@/constants/sliderSettings";
import useGetData from "@/hooks/useGetData";
import PriceItem from "./PriceItem";
import Sceleton from "./Skeleton";
import "./sliderStyle.css"
import ModalForm from "@/components/ModalForm";
import { useMemo, useState } from "react";
import useScreen from "@/hooks/useScreen";
import { Period } from "@/types/data";

//import data from "../../../public/data/price.json"
//const baseUrl = '/assets/icons/stars.svg'

const PricesA = () => {

  // const error = false;
  // const isLoading = false;

  const { data, error, isLoading } = useGetData<Period[]>('price');
  //console.log(data)
  const unData = !Array.isArray(data) || data?.length < 1
  const [open, setOpen] = useState(false);
  const onCloseMenu = () => { setOpen(false) };

  const screen = useScreen()

  const perPage = useMemo(() => {
    switch (true) {
      case screen.isD: return 3;
      case screen.isT: return 2;
      case screen.isM: return 1;
      default: return 3;

    }
  }, [screen])

  const sceletonData = [...Array(perPage).fill('').map((_, i) => `Price-${i + 1}`)]

  return (
    ((!error && !unData) || isLoading)
      ? <section id="prices" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
        <div className="container">

          <h2 className="sectionTitle">Ціни на індивідуальні заняття</h2>

          <div className="">
            <Slider {...priceSlider}>
              {!isLoading ? (
                data?.map((period: Period) => {
                  return (
                    <div key={period.id} className="slider-item">
                      <PriceItem period={period} />
                      <button
                        title="Записатись на урок"
                        className=" w-[95%] h-[60px] text-lg  font-semibold mx-1.5 whiteLink"
                        onClick={() => { setOpen(true) }}
                      >
                        Записатись  </button>
                    </div>
                  )
                })
              ) : (sceletonData.map(i => {
                return (
                  <Sceleton key={i} />
                )
              }))
              }
            </Slider>
            <ModalForm isOpen={open} onCloseMenu={onCloseMenu} />
          </div>

        </div >
      </section >
      : null
  );
}

export default PricesA;

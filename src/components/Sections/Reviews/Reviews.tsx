"use client";
import Slider from "react-slick";
import { rewiewsSlider } from "@/constants/sliderSettings";
import useGetData from "@/hooks/useGetData";
import Rewiew from "./Rewiew";
import Sceleton from "./Skeleton";
import "./sliderStyle.css"
import { Review } from "@/types/data";



const Reviews = () => {

  const { data, error, isLoading } = useGetData<Review[]>('comments');
  const unData = !Array.isArray(data) || data?.length < 1
  return (
    ((!error && !unData) || isLoading)
      ? <section id="reviews" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
        <div className="container">

          <h2 className="sectionTitle">Відгуки</h2>


          <div className="">
            <Slider {...rewiewsSlider}>
              {!isLoading ? (
                data?.map((rewiew: Review) => {
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

        </div >
      </section >
      : null

  );
}

export default Reviews;

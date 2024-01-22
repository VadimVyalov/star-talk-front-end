"use client";

import Slider from "react-slick";
import { teachersSlider } from "@/constants/sliderSettings";
import useGetData from "@/hooks/useGetData";
import TeacherItem from "./TeacherItem";
import "./sliderStyle.css"
import Sceleton from "./Skeleton";
import { Teacher } from "@/types/data";
import { useMemo } from "react";
import useScreen from "@/hooks/useScreen";



const Teachers = () => {

  const { data, error, isLoading } = useGetData<Teacher[]>('teachers');

  const unData = !Array.isArray(data) || data?.length < 1
  const screen = useScreen()
  const perPage = useMemo(() => {
    switch (true) {
      case screen.isD: return 4;
      case screen.isT: return 2;
      case screen.isM: return 1;
      default: return 4;

    }
  }, [screen])

  const sceletonData = [...Array(perPage).fill('').map((_, i) => `teacher-${i + 1}`)]

  return (
    ((!error && !unData) || isLoading)
      ? <section id="teachers" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
        <div className="container">

          <h2 className="sectionTitle">Викладачі</h2>


          <div className="">
            <Slider {...teachersSlider}>
              {!isLoading
                ? (
                  data?.map((teacher: Teacher) => {
                    return (
                      <TeacherItem key={teacher.id} teacher={teacher} />
                    )
                  })
                )
                : (sceletonData.map(i => {
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

export default Teachers;

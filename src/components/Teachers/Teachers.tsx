"use client";

import Slider from "react-slick";
import { teachersSlider } from "@/lib/sliderSettings";
import useGetData from "@/hooks/useGetData";
import TeacherItem from "./TeacherItem";
//import data from "../../../public/data/teachers.json"
import "./sliderStyle.css"
import Sceleton from "./Skeleton";

export type Teacher = {
  id: string,
  name: string,
  short_description: string,
  description: Array<{ id: string, text: string }>,
  photo: string
}



const Teachers = () => {

  // const error = false;
  // const isLoading = false;

  const { data, error, isLoading } = useGetData('teachers');
  // console.log(data)

  return (
    <section id="teachers" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Викладачі</h2>
        {!error ? (

          <div className="">
            <Slider {...teachersSlider}>
              {!isLoading ? (
                data.map((teacher: Teacher) => {
                  return (

                    <TeacherItem key={teacher.id} teacher={teacher} />

                  )
                })
              ) : (['te-1', 'te-2', 'te-3', 'te-4'].map(i => {
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

export default Teachers;

"use client";

import useGetData from "@/hooks/useGetData";
import { useEffect, useState } from "react";
import Question from "./Question";
import Sceleton from "./Skeleton";


export type FAQ = {
  id: string,
  question: string,
  answer: string,

}

const Questions = () => {

  const { data, error, isLoading } = useGetData('faq');
  const unData = !Array.isArray(data) && data?.length < 1
  const [opened, SetOpened] = useState('close')

  // if (!unData && !isLoading) console.log(data[0]?.id);

  useEffect(() => {
    if (!unData && !isLoading) SetOpened(data[0].id)
  }, [data])

  return (
    <section id="questions" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Відповіді на питання, що часто ставляться</h2>
        {(!error && !unData) ? (

          <div className="flex flex-col gap-y-8 items-center ">

            {!isLoading ? (
              data.map((question: FAQ) => {
                return (
                  <Question key={question.id} question={question} isOpen={opened === question.id} toogle={SetOpened} />
                )
              })
            ) : (['faq-1', 'faq-2', 'faq-3'].map(i => {
              return (
                <Sceleton key={i} />
              )
            }))
            }

          </div>
        ) : <p className="text-error-100 text-center text-3xl"> Щось пішло не так </p>
        }
      </div >
    </section >
  );
}

export default Questions;

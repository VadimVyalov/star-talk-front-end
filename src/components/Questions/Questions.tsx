"use client";


import useGetData from "@/hooks/useGetData";
import Question from "./Question";
import data from "../../../public/data/question.json"
import Sceleton from "./Skeleton";


export type FAQ = {
  id: string,
  question: string,
  answer: string,

}

const Questions = () => {


  // const error = false;
  // const isLoading = true;

  const { data, error, isLoading } = useGetData('faq');
  //   console.log(data)

  return (
    <section id="questions" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div className="container">

        <h2 className="sectionTitle">Відповіді на питання, що часто ставляться</h2>
        {!error ? (

          <div className="flex flex-col gap-y-8 items-center ">

            {!isLoading ? (
              data.map((question: FAQ) => {
                return (

                  <Question key={question.id} question={question} />

                )
              })
            ) : (['sk-1', 'sk-2', 'sk-3'].map(i => {
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

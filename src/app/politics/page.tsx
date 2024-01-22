'use client'
import React from "react";
import { setLS } from "@/helpers/lsStorage";



export default function Politics() {

  const accept = (): void => {
    setLS("politics", true);

  }

  const decline = (): void => {
    setLS("politics", false);


  }
  return (
    <section id="article" className="mb-[72px] t:mb-[100px] d:mb-[120px]">
      <div id="politics" className="container flex flex-col items-center ">

        <h2 className="sectionTitle">Політика конфеденційності</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quod cumque quis nihil sunt suscipit impedit. Corrupti ullam laboriosam in aut, quam tenetur sequi asperiores placeat dolores, eius, officia beatae!</p>
        <div className="flex  gap-6 items-center justify-center mt-5">
          <button
            type="button"
            onClick={accept}
            className="greenLink rounded-none  w-[135px]"
          >
            Прийняти
          </button>
          <button
            type="button"
            onClick={decline}
            className="greenLink rounded-none w-[135px]"
          >
            Відхилити
          </button>

        </div>

      </div>
    </section>
  )
}
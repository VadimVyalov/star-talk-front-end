import Image from "next/image";

export default function Politics() {
  return (
    <main className="">
      <div className="">
        <div className="w-[300px] h-[300px] border border-red-500 p-2 ">
          <div className=" line-clamp-[10]  ">
            {/* <Image
              className="bg-transparent float-right "
              src={`/assets/image/price/02.png`}
              alt={`star-02`}
              width={100}
              height={100}
            /> */}
            <span className="w-40 h-48 border-2 border-blue-500 float-right text-center p-1">
              іконка
            </span>
            <p >Lorem
              <span> Aliquam non eaque aspernatur excepturi in. Sunt eius optio</span>
              elit.
            </p>

            <p className="before:clear-both before:block">rerum possimus provident ratione, adipisci, tempore, odit totam</p>
            <p> sint aut aliquid officia harum?Lorem ipsum dolor, sit amet consectetur</p>
            <p>adipisicing elit. Aliquam non eaque aspernatur excepturi in. Sunt eius optio</p>
            <p>rerum possimus provident ratione, adipisci, tempore, odit totam sint</p>
            <p>aut aliquid officia harum?</p>


          </div>
        </div>


      </div>
    </main>
  )
}
import Image from "next/image";

export default function Politics() {
  return (
    <main className="">
      <div className="">
        <div className="w-[300px] h-[300px] border border-red-500 p-2 ">
          <p className=" line-clamp-[10]  ">
            {/* <Image
              className="bg-transparent float-right "
              src={`/assets/image/price/02.png`}
              alt={`star-02`}
              width={100}
              height={100}
            /> */}
            <span className="w-40 h-20 border-2 border-blue-500 float-right text-center p-1">
              іконка
            </span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non eaque aspernatur excepturi in. Sunt eius optio rerum possimus provident ratione, adipisci, tempore, odit totam sint aut aliquid officia harum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non eaque aspernatur excepturi in. Sunt eius optio rerum possimus provident ratione, adipisci, tempore, odit totam sint aut aliquid officia harum?
          </p>
        </div>


      </div>
    </main>
  )
}
import Image from "next/image"

  type Period =  {
    id: string,
    title: string,
    lessons_amount: number,
    slogan: string,
    price_per_lesson: number,
    price_description: Array<string>,
    image: string,
    new: boolean,
    hot: boolean,
  } 

  interface Props {
    period :Period,
    baseUrl:string
 }


const PriceItem = ( {period , baseUrl=''}:Props) => {
const cl=period.lessons_amount>20? Number(period.lessons_amount.toString().slice(-1)):period.lessons_amount ;
const cz= cl>0&&cl<5?'тя':'ь' 
    return (
        
     <div className="flex flex-col justify-between items-center">
    <div className="mb-[38px]">
      <Image
        alt="Індивідуальні заняття"
        src={`${baseUrl}${period.image}`}
        height={100}
        width={100}
      />
    </div>
    <div className="text-center leading-[1.5]">
      <h3 className=" text-xl   font-semibold mb-[12px]">
        {period.title}
      </h3>
      <p className=" text-base  font-semibold mb-[6px]">
        {period.lessons_amount} {`занят${cz} в місяць`}
      </p>
      <p className="text-base  mb-4">
        ({period.slogan})
      </p>
      <p className=" text-[28px] font-bold mb-5 ">
             {period.price_per_lesson} грн/заняття
      </p>
    </div>
    <ul className="flex flex-col gap-2.5 pl-8 mb-14">
      {
        period.price_description.map((description,i) => {
          const key=period.id+'-d-'+i
          return (
            <li key={key} className="prices-list-item">{description}</li>
          )
        })}
    </ul>

  </div>

        
    )
}

export default PriceItem
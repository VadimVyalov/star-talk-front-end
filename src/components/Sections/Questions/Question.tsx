import Icon from "../../Icon";
import cn from "@/helpers"
import { FAQ } from "@/types/data";



interface Props {
  question: FAQ,
  isOpen: boolean,
  toogle: (id: string) => void,
}



const Question = ({ question, isOpen, toogle }: Props) => {

  const { question: title, answer, id } = question
  // const [isOpen, SetIsopen] = useState(false)
  return (

    <div className=" px-6 py-6 t:px-8 t:py-9 d:px-16 d:py-11 bg-white-100 border-[1px] border-black-30 rounded-[5px] d:max-w-[856px] w-full">

      <div className=" flex leading-[1.5] gap-x-6 items-center ">
        <button title="дізнатися більше" onClick={() => toogle(isOpen ? 'not' : id)}
          className="flex h-12 w-12 p-2.5 text-white-100 border-[1px] border-solid border-accent-100 bg-accent-100 rounded-full shrink-0">
          <Icon name="/assets/icons/small.svg" id="plus"
            className={cn(" h-full w-full shrink-0 transition duration-300", isOpen ? "-rotate-45" : "rotate-0")}
          />
        </button>
        <h3 className=" text-2xl   font-semibold "> {title} </h3>
      </div >
      <div className={cn("overflow-hidden transition-[max-height] duration-300", isOpen ? "max-h-[500px] " : "max-h-0 ")}>
        <p className={cn("  pl-[72px] mt-1 ")}>  {answer} </p>
      </div>

    </div>


  )
}

export default Question
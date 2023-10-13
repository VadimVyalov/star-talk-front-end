import viber_icon from "../../../public/assets/icons/viber.svg"
import telephone_icon from "../../../public/assets/icons/telephone.svg"

import Image from "next/image";
import Social from "../Social";

const ContactsPanel = () => {
  return (
    <div className="flex justify-between  items-center py-[28px] border-b-[1px] border-black-30">

      <div className="flex flex-wrap items-start t:items-center gap-y-2 gap-x-10 flex-col t:flex-row ">
        <p className='font-roboto font-medium tracking-tight text-base d:text-2xl whitespace-nowrap'>Приєднуйтесь до нас!</p>

        <Social />
      </div>

      <div className="flex  items-end t:items-center gap-y-2 gap-x-4 t:gap-x-6 shrink-0 flex-col-reverse t:flex-row">
        <a href="#viber" title="Viber" className=' shrink-0'>
          <Image
            src={viber_icon}
            alt="viber icon"
            width={32}
            height={32}
          />
        </a>
        <a href="#tel" className="flex gap-x-2 ">
          <Image
            src={telephone_icon}
            alt="telephone icon"
            width={16}
            height={16}
          />
          <span className="text-base t:text-[20px] font-medium ">0667778899</span>
        </a>
      </div>
    </div>
  );
};

export default ContactsPanel;

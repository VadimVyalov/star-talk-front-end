
import socialLink from "@/constants/socialLink";
import cn from "@/helpers";
import Link from "next/link";
import Icon from "../Icon";
import Social from "../Social";


const ContactsPanel = () => {
  return (
    <div className="flex justify-between  items-center py-[28px] border-b-[1px] border-black-30">

      <div className="flex items-start  gap-y-2 gap-x-8 flex-col tb:flex-row min-w-[100px]  ">
        <p className='font-roboto font-medium tracking-tight text-base t:text-[20px] d:text-2xl truncate w-full '>Приєднуйтесь до нас!</p>
        <Social />
      </div>

      <div className="flex  items-end tb:items-center gap-y-2 gap-x-4 t:gap-x-6 shrink-0 flex-col-reverse tb:flex-row">
        <a href={`${socialLink.viber.link}${socialLink.viber.owner}`}
          title={socialLink.viber.title}
          target='_blank'
          rel="noopener noreferrer nofollow"
          className='flex shrink-0 icon'>
          <Icon name='/assets/icons/social.svg' id='viber'
            className={cn('w-8 h-8 shrink-0')}
          />
        </a>
        <a href="tel:+380950963400"
          title="phone"
          target='_blank'
          rel="noopener noreferrer nofollow"
          className="flex gap-x-2 text-base t:text-[20px] font-medium hover:text-accent-100 transition">
          +380950963400
          {/* <span className="text-base t:text-[20px] d:text-2xl  font-medium hover:text-accent-100 transition ">+380950963400</span> */}
        </a>
      </div>
    </div>
  );
};

export default ContactsPanel;

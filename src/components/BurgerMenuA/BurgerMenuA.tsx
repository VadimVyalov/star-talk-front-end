"use client";
import cn from "@/helpers";
import Icon from "../Icon";
import Link from "next/link";
import { ModalPortal } from "../Modal/ModalPortal";
import Navigation from "../Navigation";
import { useState } from "react";
import { menuHeader } from '@/lib/menuItems'

export function BurgerMenuA() {



	const [open, setOpen] = useState(false);

	const onCloseMenu = () => {
		setOpen(false);
	};
	return (
		<>
			{/* <button onClick={onOpenMenu} className='flex shrink-0 icon !w-10 !h-10'> */}
			<button title="меню" onClick={() => setOpen(prev => !prev)} className='flex flex-col justify-between items-center  icon p-1 !w-10 !h-10 z-20'>

				<Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', open ? 'rotate-45 translate-y-[14px] translate-x-[2px] w-[90%] ' : '')} />
				<Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', open ? 'w-0' : '')} />
				<Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', open ? '-rotate-45 -translate-y-[14px] translate-x-[2px] w-[90%]' : '')} />
			</button>

			{/* </button> */}
			{
				(open) ? <ModalPortal onCloseMenu={onCloseMenu} isOpen={open} className=" bg-overlay justify-center items-center">
					<div className={cn(" bg-mainBg rounded-b-3xl pb-6 flex flex-col items-center ", open ? "" : "")}>
						<Navigation
							menuItems={menuHeader}
							mobile={true}
							wrapCn='mb-12 '
							itemCn="border-b-[1px] border-grey-3  "
							linkCn="mx-5 text-xl leading-[70px] text-center " />
						<Link href="/" className="greenLink mx-6 px-[24px] py-[18px]">Записатись на урок</Link>
					</div>
				</ModalPortal> : null
			}
		</>);
}

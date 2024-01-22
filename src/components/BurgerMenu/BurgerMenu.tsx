"use client";
import cn from "@/helpers";
import Icon from "../Icon";
import Link from "next/link";
import { ModalPortal } from "../Modal/ModalPortal";
import Navigation from "../Navigation";
import { useState } from "react";


export function BurgerMenu() {
	const [open, setOpen] = useState(false);
	const onOpenMenu = () => {
		setOpen(true);
	};
	const onCloseMenu = () => {
		setOpen(false);
	};
	return (
		<>
			<button
				type="button"
				onClick={onOpenMenu}
				className='flex shrink-0 icon !w-10 !h-10'>
				<Icon name='/assets/icons/small.svg' id='menu'
					className={cn('w-full h-full shrink-0')}
				/>
			</button>
			{/* {
				open ? <ModalPortal onCloseMenu={onCloseMenu} isOpen={open} className=" bg-overlay justify-center items-center">
					<div className={cn(" bg-mainBg rounded-b-3xl pb-6 flex flex-col items-center ", open ? "" : "")}>
						<Navigation
							wrapCn='mb-12'
							itemCn="border-b-[1px] border-[#18181b33]  d:border-none"
							linkCn="mx-5 text-xl tracking-[-0.347px] leading-[70px] text-center " />
						<Link href="/" className="greenLink px-[42px] py-[18px]">Замовити урок</Link>
					</div>
				</ModalPortal> : null
			} */}
		</>);
}

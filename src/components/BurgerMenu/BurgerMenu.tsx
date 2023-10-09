"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ModalPortal } from "../Modal/ModalPortal";
import Navigation from "../Navigation";

const menu_icon = "/assets/icons/menu.svg";

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
			<button onClick={onOpenMenu}>
				<Image
					src={menu_icon}
					alt="menu icon"
					width={40}
					height={33}
				/>
			</button>
			{
				open ? <ModalPortal onCloseMenu={onCloseMenu} isOpen={true} className=" bg-overlay">
					<div className=" bg-mainBg rounded-b-3xl pb-6 flex flex-col items-center">
						<Navigation
							wrapCn='mb-12'
							itemCn="border-b-[1px] border-[#18181b33]  d:border-none"
							linkCn="mx-5 text-xl tracking-[-0.347px] leading-[70px] text-center " />
						{/* d:mx-0 d:text-base d:tracking-normal d:leading-normal */}
						<Link href="/" className="greenLink px-[42px] py-[18px]">Замовити урок</Link>
					</div>
				</ModalPortal> : null
			}
		</>);
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import menu_icon from "../../../public/assets/icons/menu.svg"
import { ModalPortal } from "../Modal/ModalPortal";
import Navigation from "../Navigation";

export function BurgerMenu() {
	const [open, setOpen] = useState(false);
	const onOpenMenu = () => {
		setOpen(true);
	};
	const onCloseMenu = () => {
		setOpen(false);
	};
	return  (
	<>
		<button	onClick={onOpenMenu}>
			<Image
              src={menu_icon}
              alt="menu icon"
              width={40}
              height={33}
            />
		</button>
		{
			open ?	<ModalPortal onCloseMenu={onCloseMenu} isOpen={true}>
				<div className=" bg-mainBg rounded-b-3xl pb-6 flex flex-col items-center">
					<Navigation  />
					<Link href="/" className="greenLink px-[42px] py-[18px]">Замовити урок</Link>
				</div>
					</ModalPortal> : null
		}
	</>);
}

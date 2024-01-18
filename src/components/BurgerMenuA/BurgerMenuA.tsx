"use client";
import cn from "@/helpers";
import Icon from "../Icon";

import Navigation from "../Navigation";
import { useLayoutEffect, useState } from "react";
import { menuHeader } from '@/constants/menuItems'
import ModalForm from "../ModalForm";
import { ModalWrapper } from "../Modal/ModalWrapper";

export function BurgerMenuA() {



	const [openMenu, setOpenMenu] = useState(false);
	const [openForm, setOpenForm] = useState(false);

	useLayoutEffect(() => {


		const ringButton = document.getElementById('ringButton')

		if (ringButton) {
			openMenu || openForm ? ringButton.style.visibility = 'hidden' : ringButton.style.visibility = 'visible'
		}

	}, [openMenu, openForm]);

	const onCloseMenu = () => {

		//console.log('close');
		setOpenMenu(false);
		setOpenForm(false)
	}

	const onOpenForm = () => {

		//console.log('open');
		setOpenMenu(false);
		setOpenForm(true);
	}

	return (
		<>
			<button title="меню"
				onClick={() => setOpenMenu(prev => !prev)}
				disabled={openForm}
				className='flex flex-col justify-between items-center  icon disabled:text-black-50 p-1 !w-10 !h-10 z-20'>

				<Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', openMenu ? 'rotate-45 translate-y-[14px] translate-x-[2px] w-[90%] ' : '')} />
				<Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', openMenu ? 'w-0' : '')} />
				<Icon name='/assets/icons/small.svg' id='menu2' className={cn('w-full h-1 transition-all duration-200', openMenu ? '-rotate-45 -translate-y-[14px] translate-x-[2px] w-[90%]' : '')} />
			</button>


			<ModalWrapper onCloseMenu={onCloseMenu} isOpen={openMenu} className=" bg-overlay justify-center items-center">
				<div className={cn(" bg-mainBg rounded-b-3xl pb-6 flex flex-col items-center ", openMenu ? "" : "")}
				>
					<Navigation
						onClick={onCloseMenu}
						menuItems={menuHeader}
						mobile={true}
						wrapCn='mb-12 '
						itemCn="border-b-[1px] border-grey-3  "
						linkCn="mx-5 text-xl leading-[70px] text-center " />

					<button className="greenLink mx-6 px-[24px]"
						type='button'
						onClick={onOpenForm}>
						Записатись на урок
					</button>

				</div>
			</ModalWrapper>

			< ModalForm isOpen={openForm} onCloseMenu={onCloseMenu} />


		</>);
}

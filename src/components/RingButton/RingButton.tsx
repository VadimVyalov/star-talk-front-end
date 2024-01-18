"use client";
import cn from "@/helpers";
import { useState } from "react";
import ModalForm from "../ModalForm";
//import { useLayoutEffect, useState } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const RingButton = ({ className = "", ...props }: ButtonProps) => {

	const [open, setOpen] = useState(false);

	const onCloseMenu = () => {
		setOpen(false);
	};

	return (
		<>
			<div className={cn("w-full fixed bottom-[60px] t:bottom-[50%]   z-5")}
			// style={{ width: `calc(100vw - ${com}px)` }}
			>
				<div className="container  w-full h-full relative ">

					<button id='ringButton'
						className={cn(className, "absolute right-4 left-4 t:-right-[90px] t:left-[unset] t:-top-[33px] t:-rotate-90",
							"t:w-60  border rounded-t-[24px] rounded-b-none flex items-center justify-center")}
						type='button'
						onClick={() => { setOpen(true) }}

						{...props}
					>

						Записатись на урок
					</button>
				</div>
			</div>
			<ModalForm isOpen={open} onCloseMenu={onCloseMenu} />
		</>
	);
}



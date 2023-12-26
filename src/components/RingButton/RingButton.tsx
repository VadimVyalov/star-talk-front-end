"use client";
import cn from "@/helpers";
//import { useLayoutEffect, useState } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const RingButton = ({ className = "", ...props }: ButtonProps) => {

	return (
		<div className={cn("w-full fixed bottom-[66px] t:bottom-[50%]   z-5")}
		// style={{ width: `calc(100vw - ${com}px)` }}
		>
			<div className="container  w-full h-full relative ">
				<button id='ringButton'
					className={cn(className, "absolute right-4 left-4 t:-right-[86px] t:left-[unset] t:-top-[33px] t:-rotate-90",
						"t:w-60 h-[66px] border rounded-t-[24px] rounded-b-none flex items-center justify-center")}
					type={'button'}
					// onClick={() => {
					// 	console.log(document.body.style.paddingRight);



					// }}

					{...props}
				>

					Записатись на урок
				</button>
			</div>
		</div>
	);
}



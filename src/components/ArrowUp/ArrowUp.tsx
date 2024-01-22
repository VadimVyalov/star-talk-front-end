"use client";
import cn from "@/helpers";
import Icon from "../Icon";

import { useEffect, useState } from "react";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const ArrowUp = ({ className = "", ...props }: ButtonProps) => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const getHelpSection = document.getElementById("header");

			if (getHelpSection) {
				const sectionRect = getHelpSection.getBoundingClientRect();
				setShowButton(window.scrollY > sectionRect.bottom)
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<button
			id='arrowUp'
			className={`${className} ${showButton ? " w-16 h-16 border-[1px] rounded-full flex items-center justify-center border-accent-100 hover:text-accent-100 bg-accent-100 hover:bg-mainBg" : "hidden"}  `}
			type="button"
			title="догори"
			onClick={() => {
				document.documentElement.scrollIntoView({ behavior: "smooth", });

			}}

			{...props}
		>
			{/* <BsChevronUp className=" w-10 h-10 stroke-accent-100 stroke-1" /> */}
			{/* <BsChevronUp className=" absolute w-10 h-10 fill-mainBg " /> */}
			<Icon name='/assets/icons/small.svg' id='chevronUp'
				className={cn('w-12 h-12 stroke-accent-100 stroke-1 ')} />
			<Icon name='/assets/icons/small.svg' id='chevronUp'
				className={cn('absolute w-12 h-12 fill-mainBg ')} />
		</button>
	);
}

ArrowUp.displayName = "ArrowUp";

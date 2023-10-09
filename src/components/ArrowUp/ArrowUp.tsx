"use client";

import {  useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const ArrowUp = ({ className = "",...props}: ButtonProps) => {
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
				className={`${className} ${	showButton ? "w-16 h-16 border-[1px] rounded-full flex items-center justify-center border-accent-50 text-accent-50 hover:bg-accent-50 hover:text-mainBg" : "hidden"}  `}
				type={'button'}
				onClick={() => {
					document.documentElement.scrollIntoView({behavior: "smooth",});
					
				}}
				
				{...props}
			>
				<BsChevronUp className=" w-10 h-10 fill-inherit "/>
			</button>
		);
	}

	ArrowUp.displayName = "ArrowUp";

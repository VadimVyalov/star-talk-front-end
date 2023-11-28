"use client";

import { useState } from "react";

import { ModalPortal } from "../Modal/ModalPortal";
import cn from "@/helpers"

interface ModalWrapperProps {
	className?: string;
	isOpen?: boolean;
	children: React.ReactNode;
	onCloseMenu: () => void;
}

export function ModalWrapper({
	className = "",
	children,
	isOpen = false,
	onCloseMenu,

}: ModalWrapperProps) {

	return (

		<ModalPortal onCloseMenu={onCloseMenu} isOpen={isOpen} className=" bg-overlay justify-center items-center">
			<div onClick={(e) => {
				e.stopPropagation();
				//console.log(e)
			}} className={cn(" bg-mainBg rounded  p-5 flex flex-col items-center z-20", className)}>
				{children}
			</div>
		</ModalPortal>

	)
}


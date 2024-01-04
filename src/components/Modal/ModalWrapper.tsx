"use client";

import React, { useLayoutEffect } from "react";
import { ModalPortal } from "./ModalPortal";

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
	useLayoutEffect(() => {

		const ringButton = document.getElementById('ringButton')
		const arrowUp = document.getElementById('arrowUp')

		if (ringButton) {
			isOpen ? ringButton.style.visibility = 'hidden' : ringButton.style.visibility = 'visible'
		}

		if (arrowUp) {
			isOpen ? arrowUp.style.visibility = 'hidden' : arrowUp.style.visibility = 'visible'
		}

	}, [isOpen]);
	return (

		<ModalPortal onCloseMenu={onCloseMenu} isOpen={isOpen} className={className}>
			<div onClick={(e) => {
				e.stopPropagation();
				// console.log('==========')
			}} >
				{children}
			</div>
		</ModalPortal>

	)
}


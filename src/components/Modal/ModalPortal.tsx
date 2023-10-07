import { useKeyPress } from "@/hooks/useKeyPress";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	className?: string;
	isOpen?: boolean;
	children: React.ReactNode;
	onCloseMenu: () => void;
}

export function ModalPortal({
	onCloseMenu,
	isOpen,
	className = "",
	children,
}: ModalProps) {
	const { lockScroll, unlockScroll } = useScrollLock();
	useKeyPress("Escape", onCloseMenu);

	useEffect(() => {
		lockScroll();
		return () => unlockScroll();
	}, [isOpen]);

	if (!isOpen) return null;

	const portalContainerId = "modal-root";
	const portalContainer = document.getElementById(portalContainerId);

	if (!portalContainer) 	return null;

	const modalContent = (
		<div
			className="fixed top-0 left-0 w-[100vw] h-[100vh]
			flex justify-center items-center z-10  bg-overlay"
			onClick={onCloseMenu}
			>
			
			{children}
		
		</div>
	);

	return ReactDOM.createPortal(modalContent, portalContainer);
}

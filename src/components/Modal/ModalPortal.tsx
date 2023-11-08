import { useKeyPress } from "@/hooks/useKeyPress";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import cn from "@/helpers";
interface ModalProps {
	className?: string;
	isOpen?: boolean;
	children?: React.ReactNode;
	onCloseMenu: () => void;
}

export function ModalPortal({
	onCloseMenu,
	isOpen,
	className = "",
	children = null,

}: ModalProps) {
	const { lockScroll, unlockScroll } = useScrollLock();
	useKeyPress("Escape", onCloseMenu);

	useEffect(() => {
		lockScroll();
		return () => unlockScroll();
	}, [isOpen, lockScroll, unlockScroll]);

	if (!isOpen) return null;

	const portalContainerId = "modal-root";
	const portalContainer = document.getElementById(portalContainerId);

	if (!portalContainer) return null;

	const modalContent = (
		<div
			className={cn("fixed top-0 left-0 w-[100vw] h-[100vh] flex  z-10 ", className)}
			onClick={onCloseMenu}
		>
			{children}

		</div>
	);

	return ReactDOM.createPortal(modalContent, portalContainer);
}

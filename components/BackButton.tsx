"use client";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type BackButtonProps = {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton: FC<BackButtonProps> = ({ children, ...props }) => {
	const router = useRouter();
	return (
		<button type="button" {...props} onClick={() => router.back()}>
			{children}
		</button>
	);
};

export default BackButton;

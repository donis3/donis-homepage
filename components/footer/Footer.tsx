import React, { FC } from "react";

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
	return (
		<footer className="bg-slate-700/80 text-white p-4 text-sm font-light">
			{/* Color Showcase */}
			<div className="py-3">
				<h3>Colors</h3>
				<div className="grid grid-cols-5 gap-4">
					<div className="bg-primary text-white p-4">Primary</div>
					<div className="bg-secondary-600 text-white p-4">
						Secondary-600
					</div>
					<div className="bg-accent text-white p-4">Accent</div>
					<div className="bg-light-300 text-black p-4">Light-300</div>
					<div className="bg-muted text-black p-4">muted</div>
				</div>
			</div>
			©2023 Deniz
		</footer>
	);
};

export default Footer;

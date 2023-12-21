import React, { FC } from "react";
import { menuItems } from "@/data/texts/shared";
import { social } from "@/data/texts/social";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { GoMoveToTop } from "react-icons/go";
import MoveTop from "./MoveTop";

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
	return (
		<footer className="bg-primary-100 p-4 text-sm font-light relative z-10">
			<MoveTop />
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
				<div className="">
					<h3 className="text-2xl font-bold tracking-tighter h-auto md:h-10  flex items-end ">
						<Link
							href={"/"}
							className="text-zinc-200  hover:text-white">
							Donis.Dev
						</Link>
					</h3>

					<ul className=" text-zinc-400 ">
						{menuItems.map((item, i) => {
							return (
								<li key={`footer_menu_item_${i}`}>
									<Link
										href={item.href}
										className="hover:text-zinc-200">
										{item.text}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className=" flex flex-col items-end justify-start gap-2">
					<h4 className="text-base font-medium tracking-tight h-auto md:h-10 flex items-end  text-zinc-200 w-full md:px-1 md:justify-end">
						Get in touch!
					</h4>
					<ul className=" text-zinc-300 flex flex-wrap gap-4 text-xl w-full items-center justify-between  md:justify-end ">
						{social.map((item, i) => {
							return (
								<li
									key={`footer_social_item_${i}`}
									className="group">
									<Link
										href={item.data ?? "/"}
										target="_blank"
										className="opacity-50 hover:opacity-100 hover:text-white  inline-flex items-center gap-1 px-2 py-2  w-auto group-first:pl-0  md:group-last:pr-0 md:group-first:pl-2 ">
										{item.icon}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="py-1 col-span-1 md:col-span-2 border-t border-slate-600 flex flex-col md:flex-row items-center justify-between gap-2 text-gray-400 text-xs">
					<span>©2023 All Rights Reserved</span>
					<div className="flex flex-row gap-1 items-center">
						<span>Made with </span>
						<FaHeart className="text-red-600" />
						<span>by Deniz Özkan</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

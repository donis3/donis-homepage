import React, { FC } from "react";
import { FaEnvelope } from "react-icons/fa";
import { social } from "@/data/about/social";
import Link from "next/link";

const Social: FC = () => {
	return (
		<ul className="text-sm font-normal flex flex-col gap-2">
			{social.map((item) => {
				return <SocialItem socialItemData={item} key={item.id} />;
			})}
		</ul>
	);
};

export default Social;

type SocialItemProps = {
	socialItemData: (typeof social)[0];
};
const SocialItem: FC<SocialItemProps> = ({ socialItemData }) => {
	if (!socialItemData.data) return <></>;

	return (
		<li className="flex flex-row gap-2 items-center">
			{socialItemData.icon}
			<Link href={socialItemData.data}>{socialItemData.text}</Link>
		</li>
	);
};

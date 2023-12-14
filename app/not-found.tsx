import Link from "next/link";
import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

type notfoundProps = {};

const notfound: FC<notfoundProps> = ({}) => {
	return (
		<div className="flex flex-col justify-between min-h-dscreen w-full overflow-x-hidden">
			<main className="flex-1 ">
				<section className="w-full relative pt-[var(--navbar-h)] text-zinc-50 max-w-lg mx-auto">
					<div className="w-full p-4 bg-zinc-500/10 rounded-lg mt-10">
						<h1 className="text-xl font-bold ">Not Found</h1>
						<p className="py-4 leading-snug text-zinc-500">
							The page you're looking for was not found. This may
							be an error on our part.
						</p>
						<div className="flex justify-center py-4">
							<Link
								href={"/"}
								className="py-2 px-4 rounded-md bg-zinc-400 flex gap-2 items-center">
								<FaArrowLeft />
								Home
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default notfound;

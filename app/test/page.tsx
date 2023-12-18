import useProjects from "@/data/useProjects";
import React, { FC } from "react";

type TestPageProps = {};

const TestPage: FC<TestPageProps> = async ({}) => {
	const { getAllProjectsSorted } = useProjects();

	const results = await getAllProjectsSorted();

	return (
		<section className="w-full bg-gradient-to-b from-primary-400 to-primary-100  relative pt-[var(--navbar-h)] text-muted-800  to-90%">
			<div className="flex flex-wrap gap-4 p-4">
				{results.map((data) => {
					return <span key={data.id}>{data.id}, </span>;
				})}
			</div>
		</section>
	);
};

export default TestPage;

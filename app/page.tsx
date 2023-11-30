import Section from "./_homepage/Section";
import Divider from "@/components/dividers/Divider";

export default function Home() {
	return (
		<div className="flex flex-col justify-between min-h-dscreen w-full overflow-x-clip">
			<header className="bg-slate-500/20 p-4 text-xl font-bold">
				CompanyLogo
			</header>
			<main className="flex-1">
				<Section className="bg-blue-400">
					<h2 className="font-medium text-lg mb-2">Im section 1</h2>
					<p className="font-normal text-base leading-tight">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. A temporibus quis deserunt vel vero odit illum
						doloribus amet magni dolore nulla cum ab architecto nemo
						neque, commodi nisi soluta quo!
					</p>
				</Section>
				<Section className="bg-red-400" divider="wave" dividerFillClass="fill-blue-400">
					<h2 className="font-medium text-lg mb-2">Im section 2</h2>
					<p className="font-normal text-base leading-tight">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. A temporibus quis deserunt vel vero odit illum
						doloribus amet magni dolore nulla cum ab architecto nemo
						neque, commodi nisi soluta quo!
					</p>
				</Section>
				<Section className="bg-green-400" divider="waves" dividerFillClass="fill-red-400" dividerFlip>
					<h2 className="font-medium text-lg mb-2">Im section 3</h2>
					<p className="font-normal text-base leading-tight">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. A temporibus quis deserunt vel vero odit illum
						doloribus amet magni dolore nulla cum ab architecto nemo
						neque, commodi nisi soluta quo!
					</p>
				</Section>
			</main>
			<footer className="bg-slate-700/80 text-white p-4 text-sm font-light">
				©2023 Deniz
			</footer>
		</div>
	);
}

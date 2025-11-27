import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsClientSkeleton() {
	return (
		<>
			<div>
				<div className="mb-4 flex items-center justify-between gap-x-2">
					<Skeleton className="h-8 w-32" />
					<Skeleton className="h-9 w-20" />
				</div>
				<div className="mb-6">
					<div className="flex flex-wrap justify-evenly gap-2">
						{Array.from({ length: 5 }).map((_, i) => (
							<Skeleton key={i} className="h-8 w-16" />
						))}
					</div>
				</div>
			</div>
			<section>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="border-border rounded-lg border p-4">
							<Skeleton className="mb-2 h-6 w-3/4" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="mt-1 h-4 w-2/3" />
						</div>
					))}
				</div>
			</section>
		</>
	);
}

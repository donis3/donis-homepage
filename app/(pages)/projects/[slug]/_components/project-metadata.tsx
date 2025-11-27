import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import type { ProjectMetadata } from "@/core/project-helpers/project-metadata-schema";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

interface ProjectMetadataProps {
	metadata: ProjectMetadata;
}

export default function ProjectMetadata({ metadata }: ProjectMetadataProps) {
	const formattedDate = format(metadata.date, "PP", { locale: enUS });

	return (
		<div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
			<span className="text-muted-foreground block flex-1 text-sm whitespace-nowrap">
				{formattedDate}
			</span>

			{metadata.githubUrl && (
				<Button asChild variant="outline" size="sm">
					<a
						href={metadata.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<LuGithub className="stroke-blue-700" />
						GitHub
					</a>
				</Button>
			)}
			{metadata.projectUrl && (
				<Button asChild variant="outline" size="sm">
					<a
						href={metadata.projectUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ExternalLink className="stroke-amber-500" />
						View Project
					</a>
				</Button>
			)}
		</div>
	);
}

import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import { FolderGitIcon } from "lucide-react";

export default function NoProjects() {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<FolderGitIcon />
				</EmptyMedia>
				<EmptyTitle>No Projects</EmptyTitle>
				<EmptyDescription>No projects found</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				We couldn&apos;t find any projects yet but they may be added soon.
			</EmptyContent>
		</Empty>
	);
}

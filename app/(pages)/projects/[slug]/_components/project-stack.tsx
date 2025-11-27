type ProjectStackProps = {
	stack: string[];
};

export default function ProjectStack({ stack }: ProjectStackProps) {

    if(stack.length === 0) {
        return null;
    }
	return (
		<section className="mx-auto  max-w-2xl md:bg-accent md:rounded-lg p-4">
            <h2 className="mb-4 text-lg font-semibold tracking-tight">Tech Stack</h2>
			<div className=" flex flex-wrap gap-2 justify-start">
				{stack.map((tech) => (
					<span
						key={tech}
						className="bg-secondary/10 md:border md:bg-background text-secondary-foreground rounded-full px-2 py-1 text-xs font-medium"
					>
						{tech}
					</span>
				))}
			</div>
		</section>
	);
}

import type { Project } from "~/types/project"

type Props = {
	project: Project
}

export const ProjectCard = ({ project }: Props) => {
	return (
		<div className="w-full h-[600px] flex flex-col justify-start items-center border border-gray-200 shadow-md overflow-hidden">
			<img src={project.image} className="h-[250px] w-full object-cover object-top" />
			<h2 className="p-4 font-serif text-xl text-center">{project.title}</h2>
			<p className="px-4 py-2 text-center text-md text-ellipsis overflow-hidden h-[200px]">{project.description}</p>
			<a href={`/projects/${project.id}`} className="py-2 px-7 m-4 bg-[#a2305d] hover:bg-[#8b2950] text-gray-50">View</a>
		</div>
	)
}
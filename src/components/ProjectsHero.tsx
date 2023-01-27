import ProjectData from '~/data/projectData.json'
import type { Project } from '~/types/project'
import { ProjectCard } from './ProjectCard'

const projects: Project[] = ProjectData

export const ProjectsHero = () => {
	return (
		<div className="w-full flex flex-row flex-1 gap-12 p-12 justify-center items-center">
			{
				projects.map((p) => {
					return <ProjectCard key={p.title} project={p} />
				})
			}
		</div>
	)
}
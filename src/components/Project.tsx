type Props = {
	project: Project
}

type Project = {
	id: number,
	title: string
	description: string
	image: string
}

export const Project = ({ project }: Props) => {
	return (
		<div>aaa {project.description}</div>
	)
}
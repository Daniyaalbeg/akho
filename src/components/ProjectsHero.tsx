type Project = {
	title: string
	description: string
	image: string
}

const projects: Project[] = [
	{
		title: "DISABLED REGISTRATION & SUPPORT",
		description: "We register disabled citizens in rural areas who are hidden and hardly ever see the light of day. Without registration no one knows how many disabled citizens Pakistan has. Without knowing the number we cannot begin to serve their interest. Help us in this endeavor and help us shine some light on their state and challenges. This is linked to our wheelchair program.",
		image: "https://akho.org.pk/wp-content/uploads/2017/03/disabled-boy.jpg"
	},
	{
		title: "DISABLED REGISTRATION & SUPPORT",
		description: "We register disabled citizens in rural areas who are hidden and hardly ever see the light of day. Without registration no one knows how many disabled citizens Pakistan has. Without knowing the number we cannot begin to serve their interest. Help us in this endeavor and help us shine some light on their state and challenges. This is linked to our wheelchair program.",
		image: "https://akho.org.pk/wp-content/uploads/2017/03/disabled-boy.jpg"
	},
	{
		title: "DISABLED REGISTRATION & SUPPORT",
		description: "We register disabled citizens in rural areas who are hidden and hardly ever see the light of day. Without registration no one knows how many disabled citizens Pakistan has. Without knowing the number we cannot begin to serve their interest. Help us in this endeavor and help us shine some light on their state and challenges. This is linked to our wheelchair program.",
		image: "https://akho.org.pk/wp-content/uploads/2017/03/disabled-boy.jpg"
	}
]

export const ProjectsHero = () => {
	return (
		<div className="w-full flex flex-row flex-1 gap-12 p-12 justify-center items-center">
			{
				projects.map((p) => {
					return <ProjectCard project={p} />
				})
			}
		</div>
	)
}

type Props = {
	project: Project
}

const ProjectCard = ({ project }: Props) => {
	return (
		<div className="w-[400px] h-[600px] flex flex-col justify-start items-center border border-gray-200">
			<img src={project.image} className="h-[250px] w-full" />
			<h2 className="p-4">{project.title}</h2>
			<p className="p-4">{project.description}</p>
			<button className="py-1 px-4 m-4 bg-[#a2305d] text-gray-50 rounded-md">View</button>
		</div>
	)
}
type Project = {
	title: string
	description: string
	image: string
}

const projects: Project[] = [
	{
		title: "Disabled Registration",
		description: "We register disabled citizens in rural areas who are hidden and hardly ever see the light of day. Without registration no one knows how many disabled citizens Pakistan has. Without knowing the number we cannot begin to serve their interest. Help us in this endeavor and help us shine some light on their state and challenges. This is linked to our wheelchair program.",
		image: "https://akho.org.pk/wp-content/uploads/2017/03/disabled-boy.jpg"
	},
	{
		title: "Operation Eid Partnership",
		description: "Operation Eid” is a project that inspires people to pack a gift box for under privilege children on Eid day. AKHO will help distribute these boxes to the deserving children locally and in remote areas. You can donate these boxes straight to AKHO address or ask us to pick them up at different addresses.",
		image: "https://akho.org.pk/wp-content/uploads/2017/03/operation-eid.jpg"
	},
	{
		title: "Ramzan Ration",
		description: "Every Ramzan AKHO tries to reach the vulnerable forgotten people who find every day expenses a huge challenge. In this month or mercy, peace and compassion we are supposed to reach out and serve as many people as possible. AKHO create food packs with the attached items and distributes it in the poorest families. We urge everyone to join in with whatever they can mange and help us reach as many families as possible.",
		image: "https://akho.org.pk/wp-content/uploads/2020/02/Screenshot-2020-02-20-at-9.34.25-PM.png"
	}
]

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

type Props = {
	project: Project
}

const ProjectCard = ({ project }: Props) => {
	return (
		<div className="w-[480px] h-[600px] flex flex-col justify-start items-center border border-gray-200 shadow-sm overflow-hidden">
			<img src={project.image} className="h-[250px] w-full object-cover" />
			<h2 className="p-4 font-serif text-xl text-center">{project.title}</h2>
			<p className="px-4 py-2 text-center text-md text-ellipsis overflow-hidden h-[200px]">{project.description}</p>
			<button className="py-2 px-7 m-4 bg-[#a2305d] text-gray-50">View</button>
		</div>
	)
}
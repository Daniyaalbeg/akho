export const HeaderOther = () => {
	return (
		<>
		<header className='fixed flex w-full items-center justify-between h-20 bg-white transition-all duration-700 shadow-lg z-50'>
			<div className="p-8 flex w-full items-center justify-between">
				<a href="/"><img src="/akho_logo.png" className='h-12 transition-all duration-500' /></a>
				<div className="space-x-8">
					<Link title="ABOUT US" url="/about/" />
					<Link title="PROJECTS" url="/projects/" />
					<Link title="CHAMPIONS" url="/champions/" />
					<Link title="HAPPY STORIES" url="/happy-stories/" />
					<Link title="CONTACT" url="/contact/" />
				</div>
			</div>
		</header>
		<div className="h-20 w-full" />
		</>
	)
}

const Link = ({ title, url, expanded = true }: { title: string, url: string, expanded?: boolean}) => {
	return <a className={` ${expanded ? "text-base text-gray-800" : "text-lg text-gray-50"} drop-shadow-xl hover:text-[#a1315d] transition-all duration-200`} href={url}>{title}</a>
}
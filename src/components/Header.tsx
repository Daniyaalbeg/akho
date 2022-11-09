export const Header = () => {

	return (
		<header className="bg-red-100 p-8 h-24 w-full flex items-center justify-between">
			<img src="/akho_logo.png" />
			<div className="space-x-8">
				<a href="/about-us/">ABOUT US</a>
				<a href="/projects/">PROJECTS</a>
				<a href="/champions/">CHAMPIONS</a>
				<a href="/happy-stories/">HAPPY STORIES</a>
			</div>
		</header>
	)
}
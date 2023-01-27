import { useEffect, useState } from "react";

export const Header = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
	// TODO Interpolate values between state changes
	return (
		<header className={`fixed flex w-full items-center z-50 justify-between ${!!scrollPosition ? 'shadow-lg' : undefined} ${!!scrollPosition ? 'h-20 bg-white' : 'h-32 bg-gradient-to-b from-[#00000090] to-transparent backdrop-blur-sm'} transition-all duration-700`}>
			<div className="p-8 flex w-full items-center justify-between">
				<img src="/akho_logo.png" className={`${!!scrollPosition ? 'h-12' : 'h-16 drop-shadow-[0_35px_35px_rgba(255,255,255,1)]'} transition-all duration-500`} />
				<div className="space-x-8">
					<Link expanded={!!scrollPosition} title="ABOUT US" url="/about/" />
					<Link expanded={!!scrollPosition} title="PROJECTS" url="/projects/" />
					<Link expanded={!!scrollPosition} title="CHAMPIONS" url="/champions/" />
					<Link expanded={!!scrollPosition} title="HAPPY STORIES" url="/happy-stories/" />
					<Link expanded={!!scrollPosition} title="CONTACT" url="/contact/" />
				</div>
			</div>
		</header>
	)
}

const Link = ({ title, url, expanded }: { title: string, url: string, expanded: boolean}) => {
	return <a className={` ${expanded ? "text-base text-gray-800" : "text-lg text-gray-50"} drop-shadow-xl hover:text-[#a1315d] transition-all duration-200`} href={url}>{title}</a>
}
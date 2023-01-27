export const ThreeCards = () => {
	return (
		<div className="w-full h-[200px] flex flex-row gap-6 my-24 px-8">
			<a className="w-full">
			<div className={`py-8 px-4 flex flex-col justify-center hover:cursor-pointer items-center w-full bg-[#a2305d] hover:bg-[#7c2548]`} >
				<p className="text-gray-50">
				WOMEN WHO MATTER
				</p>
				<p className="font-serif text-gray-50 text-2xl">
				Our Champions
				</p>
			</div>
		</a>
		<a className="w-full">
			<div className={`py-8 px-4 flex flex-col justify-center hover:cursor-pointer items-center w-full bg-[#fd619d] hover:bg-[#d05081]`} >
				<p className="text-gray-50">
				SUCCESS STORIES FROM AKHO
				</p>
				<p className="font-serif text-gray-50 text-2xl">
				Happy Stories
				</p>
			</div>
		</a>
		<a className="w-full">
			<div className={`py-8 px-4 flex flex-col justify-center hover:cursor-pointer items-center w-full bg-[#a2305d] hover:bg-[#80264a]`} >
				<p className="text-gray-50">
				MAKE A DIFFERENCE
				</p>
				<p className="font-serif text-gray-50 text-2xl">
				Join as our Volunteer
				</p>
			</div>
		</a>
		</div>
	)
}

const Card = ({ title, subTitle, color, highlightColor }: { title: string, subTitle: string, color: string, highlightColor: string }) => {
	return (
		<a className="w-full">
			<div className={`py-8 px-4 flex flex-col justify-center hover:cursor-pointer items-center w-full bg-[${color}] hover:bg-[${highlightColor}]`} >
				<p className="text-gray-50">
					{subTitle}
				</p>
				<p className="font-serif text-gray-50 text-2xl">
					{title}
				</p>
			</div>
		</a>
	)
}
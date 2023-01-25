export const ThreeCards = () => {
	return (
		<div className="w-full h-[200px] flex flex-row gap-6 my-24 px-8">
			<Card subTitle="WOMEN WHO MATTER" title="Our Champions" color='#a2305d' highlightColor='#fd619d' />
			<Card subTitle="SUCCESS STORIES FROM AKHO" title="Happy Stories" color='#fd619d' highlightColor='#a2305d' />
			<Card subTitle="MAKE A DIFFERENCE" title="Join as our Volunteer" color='#a2305d' highlightColor='#fd619d' />
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
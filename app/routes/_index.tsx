export const meta = () => [
	{
		title: "Hello, is it me you're looking for?",
	},
	{
		charset: 'utf-8',
	},
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0',
	},
];

const Index = () => (
	<div className="grid w-screen xs:grid-cols-1 lg:min-h-screen lg:grid-cols-12 lg:grid-rows-layout">
		<div className="bg-black text-white xs:h-12 xs:py-4 xs:text-center lg:col-span-3 lg:h-96 lg:py-20 lg:pr-2 lg:text-right">
			<h1 className="font-display uppercase xs:text-xl lg:text-6xl xl:text-7xl">
				Hello,
				<br className="xs:hidden lg:block" /> I'm
				<br />
			</h1>
		</div>
		<div className="xs:h-20 xs:py-4 xs:text-center lg:col-span-9 lg:h-96 lg:py-20 lg:pl-2 lg:text-left">
			<h1 className="font-display uppercase xs:text-3xl lg:text-6xl xl:text-7xl">
				<br className="xs:hidden lg:block" />
				Daniel
				<br />
				Henderson
			</h1>
		</div>
		<div className="bg-black pr-2 text-right text-white xs:hidden lg:col-span-3 lg:block lg:py-20"></div>
		<div className="xs:px-4 xs:py-8 lg:col-span-9 lg:px-10 lg:py-20">
			<div className="flex h-full max-w-6xl flex-col text-center">
				<div className="flex-grow">
					<h2 className="text-2xl italic xs:pb-8 lg:pb-10">I am a full-stack engineer based in Sydney, Australia.</h2>
					<p className="pb-10 text-lg">
						I have 10+ years of experience with a wide variety of projects in numerous industries as diverse as online
						entertainment, logistics and supply chain solutions, the tertiary education sector, and financial services.
					</p>
					<p className="pb-10 font-serif text-xl">
						The site is still under construction, but for now,{' '}
						<a href="https://www.linkedin.com/in/mr-daniel-henderson/" target="_blank">
							check out my LinkedIn
						</a>
						.
					</p>
				</div>
				<footer className="w-full self-end text-center text-gray-400 lg:py-4">
					<hr className="pb-4" />
					<p className="text-sm">
						Built with{' '}
						<a href="https://remix.run/" target="_blank">
							Remix
						</a>{' '}
						and{' '}
						<a href="https://tailwindcss.com/" target="_blank">
							TailwindCSS
						</a>
						, hosted on{' '}
						<a href="https://vercel.com/" target="_blank">
							Vercel
						</a>
					</p>
				</footer>
			</div>
		</div>
	</div>
);

export default Index;

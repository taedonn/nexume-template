import Image from "next/image"
import Link from "next/link"
import nexumeConfig from "~/nexume.config"

const { layout } = nexumeConfig

export default function Home() {
	const getDateDiff = (d1: string, d2: string) => {
		const pattern = /^\d{4}-\d{2}$/
		const date = new Date()
		let d1y, d1m, d2y, d2m, dateDiff, yToM

		if (d1 !== '' && pattern.test(d1)) {
			d1y = Number(d1.split('-')[0])
			d1m = Number(d1.split('-')[1])

			if (d2 !== '' && pattern.test(d2)) {
				d2y = Number(d2.split('-')[0])
				d2m = Number(d2.split('-')[1])
			} else {
				d2y = date.getFullYear()
				d2m = date.getMonth()
			}
			
			yToM = d2y === d1y
			? d2m - d1m
			: d2y - d1y === 1
				? (13 - d1m) + d2m
				: ((d2y - d1y - 1) * 12) + (13 - d1m) + d2m
			dateDiff = (Math.ceil((yToM / 12) * 10) / 10).toString()

			return dateDiff.includes('.') ? (dateDiff.split('.')[0] + (dateDiff.split('.')[0] === '0' || dateDiff.split('.')[0] === '1' ? 'y ' : 'ys ') + dateDiff.split('.')[1] + 'm') : (dateDiff + 'y')
		} else return ''
	}

	return (
		<main className="pt-16 pb-8 px-5 w-full flex justify-center leading-normal tracking-wide text-l-2">
			<div style={{maxWidth: layout.width ? layout.width : 794}} className="w-full">

				{/* Title */}
				<section className="flex flex-col lg:flex-row gap-16 pb-8 border-b border-l-e">
					{
						layout.profileImg &&
						<div className="w-56 h-56 relative shrink-0 overflow-hidden rounded-lg bg-l-e">
							<Image src={layout.profileImg} alt="Profile image" fill priority={true} sizes="100%" className="object-cover"/>
						</div>
					}
					<div>
						<h1 className="text-4xl font-semibold">John Doe</h1>
						<h3 className="text-xl mt-1.5">Developer</h3>
						<div className="px-6 py-5 mt-3 rounded-lg border-2 border-h-main/50 bg-h-main/10">
							<div className="group relative flex items-center gap-2 text-l-5">
								<div className="relative">
									<i className="fa-solid fa-angle-right absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 duration-200"></i>
									<div className="group-hover:scale-0 group-hover:opacity-0 duration-200">
										<i className="fa-brands fa-github"></i>
									</div>
								</div>
								<Link href="https://github.com/myrepo" target="_blank" className="group text-h-main">
									<span className="rounded-md border-2 border-transparent group-hover:border-h-main duration-200">https://github.com/myrepo</span>
									<i className="fa-solid fa-link ml-1 text-xs"></i>
								</Link>
							</div>
							<div className="group mt-1.5 relative flex items-center gap-2 text-l-5">
								<div className="relative">
									<i className="fa-solid fa-angle-right absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 duration-200"></i>
									<div className="group-hover:scale-0 group-hover:opacity-0 duration-200">
										<i className="fa-solid fa-earth-asia"></i>
									</div>
								</div>
								<Link href="https://myportfolio.com" target="_blank" className="group text-h-main">
									<span className="rounded-md border-2 border-transparent group-hover:border-h-main duration-200">https://myportfolio.com</span>
									<i className="fa-solid fa-link ml-1 text-xs"></i>
								</Link>
							</div>
						</div>
						<div className="px-6 py-5 mt-3 rounded-lg border-2 border-l-8/50 bg-l-e/10">
							<div className="group relative flex items-center gap-2 text-l-5">
								<i className="fa-regular fa-compass"></i>
								California, United States
							</div>
							<div className="group mt-1.5 relative flex items-center gap-2 text-l-5">
								<i className="fa-solid fa-at"></i>
								example@example.com
							</div>
							<div className="group mt-1.5 relative flex items-center gap-2 text-l-5">
								<i className="fa-solid fa-headphones-simple"></i>
								000-0000-0000
							</div>
						</div>
					</div>
				</section>

				{/* About me */}
				<section className="mt-8">
					<h2 className="mb-6 text-3xl font-semibold">About me</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						<br/>
						<br/>
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of 
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
						like Aldus PageMaker including versions of Lorem Ipsum.
						<br/>
						<br/>
						The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
						Sections 1.10.32 and 1.10.33 from &#34;de Finibus Bonorum et Malorum&#34; by Cicero are also reproduced 
						in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
					</p>
				</section>

				{/* Skills */}
				<section className="mt-20">
					<h2 className="flex gap-4 text-3xl font-semibold">
						Skills
						<div className="w-max relative cursor-pointer group">
							<i className="fa-solid fa-circle-question absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-200"></i>
							<i className="fa-regular fa-circle-question group-hover:scale-0 group-hover:opacity-0 duration-200"></i>
							<div className="w-max text-xs font-normal pl-4 absolute right-0 top-1/2 translate-x-full -translate-y-1/2 invisible group-hover:visible">
							<div className="w-full px-6 py-2 rounded-full text-white bg-l-2 origin-left scale-0 -translate-x-3 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 duration-200">
								<div>
									Developing: grey<br/>
									Production: purple
								</div>
								<div className="w-3 h-3 rotate-45 absolute left-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-l-2"></div>
							</div>
							</div>
						</div>
					</h2>
					<div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
						<h3 className="w-40 shrink-0 text-lg">Languages</h3>
						<ul className="flex flex-wrap gap-2">
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
								<i className="text-xl fa-brands fa-square-js"></i>
								JavaScript
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								TypeScript
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-xl fa-brands fa-html5"></i>
								HTML/CSS
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-xl fa-brands fa-java"></i>
								Java
							</li>
						</ul>
					</div>
					<div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
						<h3 className="w-40 shrink-0 text-lg">Frameworks</h3>
						<ul className="flex flex-wrap gap-2">
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
								<i className="text-lg fa-solid fa-code"></i>
								Next.js
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-xl fa-brands fa-vuejs"></i>
								Vue.js
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								Nuxt.js
							</li>
						</ul>
					</div>
					<div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
						<h3 className="w-40 shrink-0 text-lg">Libraries</h3>
						<ul className="flex flex-wrap gap-2">
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
								<i className="text-xl fa-brands fa-react"></i>
								React
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
								<i className="text-lg fa-solid fa-code"></i>
								Tailwind CSS
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								Redux
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								Pinia
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								Axios
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								Next Auth
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								JSON Web Tokens
							</li>
						</ul>
					</div>
					<div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
						<h3 className="w-40 shrink-0 text-lg">Databases</h3>
						<ul className="flex flex-wrap gap-2">
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
								<i className="text-lg fa-solid fa-code"></i>
								MySQL
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								Prisma
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								NoSQL
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								Firebase
							</li>
						</ul>
					</div>
					<div className="w-full flex flex-col lg:flex-row gap-4 py-6 border-b border-l-e">
						<h3 className="w-40 shrink-0 text-lg">Tools & IDEs</h3>
						<ul className="flex flex-wrap gap-2">
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
								<i className="text-xl fa-brands fa-git-alt"></i>
								Git
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main">
								<i className="text-xl fa-brands fa-github"></i>
								GitHub
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-xl fa-brands fa-sourcetree"></i>
								Sourcetree
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-xl fa-brands fa-jira"></i>
								Jira
							</li>
							<li className="text-sm px-4 py-2.5 flex items-center gap-2.5 rounded-full border border-l-c text-l-5">
								<i className="text-lg fa-solid fa-code"></i>
								VSCode
							</li>
						</ul>
					</div>
				</section>

				{/* Experiences */}
				<section className="mt-20">
					<h2 className="flex items-center gap-4 text-3xl font-semibold">
						Experiences
						<div className="h-fit text-sm font-normal flex items-center rounded-lg overflow-hidden text-white">
							<div className="px-2.5 py-1.5 bg-l-5">Total</div>
							<div className="px-2.5 py-1.5 bg-h-main">
								{ getDateDiff("2019-08", "") !== '' && getDateDiff("2019-08", "") }
							</div>
						</div>
					</h2>
					<div className="w-full mt-8 flex flex-col lg:flex-row gap-5">
						<div className='w-full lg:w-[30%] shrink-0 flex flex-col gap-4'>
							<h3 className='w-fit text-lg pl-2 pr-5 font-medium flex items-center rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main'>
								<div className='w-10 h-10 flex justify-center items-center'>
									<svg className='w-5 h-5 fill-h-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"/></svg>
								</div>
								Company name
							</h3>
							<div className='flex flex-col gap-1.5 lg:pl-2'>
								<div>Junior developer</div>
								<div className='text-sm text-l-8'>2019.08 ~ 2021.04</div>
							</div>
						</div>
						<div className="w-full">
							<h3 className="text-lg font-medium">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</h3>
							<ul className="mt-3 pl-5 list-disc flex flex-col gap-3">
								<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
								<li>Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
								<li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
							</ul>
						</div>
					</div>
					<div className="w-full mt-12 flex flex-col lg:flex-row gap-5">
						<div className='w-full lg:w-[30%] shrink-0 flex flex-col gap-4'>
							<h3 className='w-fit text-lg pl-2 pr-5 font-medium flex items-center rounded-full border-2 border-h-main/50 bg-h-main/10 text-h-main'>
								<div className='w-10 h-10 flex justify-center items-center'>
									<svg className='w-5 h-5 fill-h-main' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"/></svg>
								</div>
								Company name
							</h3>
							<div className='flex flex-col gap-1.5 lg:pl-2'>
								<div>Senior developer</div>
								<div className='text-sm text-l-8'>2021.04 ~</div>
							</div>
						</div>
						<div className="w-full">
							<h3 className="text-lg font-medium">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</h3>
							<ul className="mt-3 pl-5 list-disc flex flex-col gap-3">
								<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
								<li>Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
								<li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Educations */}
				<section className="mt-20">
					<h2 className="flex items-center gap-4 text-3xl font-semibold">Educations</h2>
					<ul className="w-full mt-8 flex flex-col gap-3">
						<li className="w-full p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-lg border border-l-c">
							<div className="w-32 h-32 shrink-0 flex justify-center items-center rounded-lg bg-h-main/10 text-h-main">
								<i className="text-5xl fa-solid fa-school"></i>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="font-medium text-lg">XXXXXX Secondary School</h3>
								<div>Post secondary deploma</div>
								<div className="text-sm text-l-5">2010.06 ~ 2013.06</div>
							</div>
						</li>
						<li className="w-full p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-lg border border-l-c">
							<div className="w-32 h-32 shrink-0 flex justify-center items-center rounded-lg bg-h-main/10 text-h-main">
								<i className="text-5xl fa-solid fa-school"></i>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="font-medium text-lg">XXXXXX XXXXXX University</h3>
								<div>Bachelor&#39;s degree of computer engineering</div>
								<div className="text-sm text-l-5">2013.09 ~ 2019.09</div>
							</div>
						</li>
						<li className="w-full p-6 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 rounded-lg border border-l-c">
							<div className="w-32 h-32 shrink-0 flex justify-center items-center rounded-lg bg-h-main/10 text-h-main">
								<i className="text-5xl fa-regular fa-id-card"></i>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="font-medium text-lg">IBM Certified Database Associate</h3>
								<div>Working with SQL and XML, data security</div>
								<div className="text-sm text-l-5">2019.12</div>
							</div>
						</li>
					</ul>
				</section>

				{/* Footer */}
				<footer className="mt-20 text-center text-sm">
					<div>MIT License © 2023-{new Date().getFullYear()} <Link href="https://github.com/taedonn/nexume" target="_blank" className="underline hover:text-h-main duration-200">Nexume</Link></div>
				</footer>

			</div>
		</main>
	)
}
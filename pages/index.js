import Image from "next/image";

export default function Home() {
	return (
		<div className="max-w-screen-xl mx-auto my-10">
			<div className="grid grid-cols-3 gap-5">
				<div className="col-span-2">
					<div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
						<Image
							src="https://images.unsplash.com/photo-1657456621506-76924543dbca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
							layout="fill"
							objectFit="cover"
						/>
						<div className="absolute bottom-10 left-10">
							<h1 className="text-white text-4xl font-bold">Graph CMS</h1>
						</div>
					</div>
				</div>
				<div className="border border-slate-200 rounded-xl p-6  divide-y-2 divide-slate-100 flex flex-col gap-5">
					<div className="flex items-start gap-3">
						<div className="flex-shrink-0 relative w-14 h-14 rounded-full overflow-hidden">
							<Image
								src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div>
							<h1 className="leading-none text-slate-700 font-bold">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h1>
							<p className="text-sm text-slate-400 mt-1">31 March 2022</p>
						</div>
					</div>

					<div className="flex items-start gap-3 pt-3">
						<div className="flex-shrink-0 relative w-14 h-14 rounded-full overflow-hidden">
							<Image
								src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div>
							<h1 className="leading-none text-slate-700 font-bold">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h1>
							<p className="text-sm text-slate-400 mt-1">31 March 2022</p>
						</div>
					</div>

					<div className="flex items-start gap-3 pt-3">
						<div className="flex-shrink-0 relative w-14 h-14 rounded-full overflow-hidden">
							<Image
								src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<div>
							<h1 className="leading-none text-slate-700 font-bold">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h1>
							<p className="text-sm text-slate-400 mt-1">31 March 2022</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-5 my-10">
				<div className="col-span-2">
					<div className="border border-slate-200 p-6 rounded-xl grid grid-cols-2 gap-x-5 gap-y-10">
						<div>
							<div>
								<div className="relative w-full h-56 rounded-xl overflow-hidden">
									<Image
										src="https://images.unsplash.com/photo-1659193788664-f085e3076db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="flex items-center gap-3 my-4">
									<div className="relative w-7 h-7 rounded-full overflow-hidden">
										<Image
											src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<p className="text-sm text-slate-400 leading-none">
										Katen Done ∙ 31 March 2022
									</p>
								</div>
								<h1 className="text-slate-700 text-lg font-bold leading-none">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</h1>
								<p className="text-slate-400 leading-5 mt-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Officiis, modi labore. Mollitia, dolorem incidunt sequi aperiam
								</p>
							</div>
						</div>

						<div>
							<div>
								<div className="relative w-full h-56 rounded-xl overflow-hidden">
									<Image
										src="https://images.unsplash.com/photo-1659193788664-f085e3076db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="flex items-center gap-3 my-4">
									<div className="relative w-7 h-7 rounded-full overflow-hidden">
										<Image
											src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<p className="text-sm text-slate-400 leading-none">
										Katen Done ∙ 31 March 2022
									</p>
								</div>
								<h1 className="text-slate-700 text-lg font-bold leading-none">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</h1>
								<p className="text-slate-400 leading-5 mt-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Officiis, modi labore. Mollitia, dolorem incidunt sequi aperiam
								</p>
							</div>
						</div>

						<div>
							<div>
								<div className="relative w-full h-56 rounded-xl overflow-hidden">
									<Image
										src="https://images.unsplash.com/photo-1659193788664-f085e3076db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="flex items-center gap-3 my-4">
									<div className="relative w-7 h-7 rounded-full overflow-hidden">
										<Image
											src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<p className="text-sm text-slate-400 leading-none">
										Katen Done ∙ 31 March 2022
									</p>
								</div>
								<h1 className="text-slate-700 text-lg font-bold leading-none">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</h1>
								<p className="text-slate-400 leading-5 mt-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Officiis, modi labore. Mollitia, dolorem incidunt sequi aperiam
								</p>
							</div>
						</div>

						<div>
							<div>
								<div className="relative w-full h-56 rounded-xl overflow-hidden">
									<Image
										src="https://images.unsplash.com/photo-1659193788664-f085e3076db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<div className="flex items-center gap-3 my-4">
									<div className="relative w-7 h-7 rounded-full overflow-hidden">
										<Image
											src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<p className="text-sm text-slate-400 leading-none">
										Katen Done ∙ 31 March 2022
									</p>
								</div>
								<h1 className="text-slate-700 text-lg font-bold leading-none">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</h1>
								<p className="text-slate-400 leading-5 mt-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Officiis, modi labore. Mollitia, dolorem incidunt sequi aperiam
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

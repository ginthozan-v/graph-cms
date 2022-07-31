import Image from "next/image";
import moment from "moment";

const Banner = ({ banner, title, author, category, created }) => {
	return (
		<div className="relative w-full h-[600px]">
			<Image src={banner} layout="fill" objectFit="cover" />
			<div className="absolute bg-slate-900 opacity-60 w-full h-full"></div>
			<div className="absolute bottom-10 left-64">
				<div className="border-t border-gray-50/40 pt-6">
					<h1 className="text-4xl font-bold text-white">{title}</h1>
					<div className="flex items-center gap-5 my-4">
						<div className="relative w-8 h-8 rounded-full overflow-hidden">
							<Image
								src={author.photo.url}
								layout="fill"
								objectFit="cover"
								alt="avatar"
							/>
						</div>
						<p className="text-base text-white/70 leading-none flex items-baseline gap-2">
							{author.name} · {category} · {moment(created).format("DD MMMM YYYY")}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;

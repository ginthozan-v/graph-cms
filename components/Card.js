import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const Card = ({ post }) => {
	return (
		<Link href={`/post/${post.slug}`}>
			<div className="cursor-pointer">
				<div className="relative w-full h-64 rounded-xl overflow-hidden">
					<Image
						src={post.featuredImage.url}
						layout="fill"
						objectFit="cover"
						alt="featured image"
					/>
				</div>
				<div className="flex items-center gap-3 my-4">
					<div className="relative w-7 h-7 rounded-full overflow-hidden">
						<Image
							src={post.author.photo.url}
							layout="fill"
							objectFit="cover"
							alt="avatar"
						/>
					</div>
					<p className="text-sm text-slate-400 leading-none">
						{post.author.name} ∙ {moment(post.createdAt).format("DD MMMM YYYY")}
					</p>
				</div>
				<h1 className="text-slate-700 text-lg font-bold leading-none">{post.title}</h1>
				<p className="text-slate-400 leading-5 mt-2 text-ellipsis overflow-hidden h-20">
					{post.excerpt}
				</p>
			</div>
		</Link>
	);
};

export default Card;

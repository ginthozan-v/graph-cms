import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const RecentPostCard = ({ post }) => {
	return (
		<Link href={`/post/${post.slug}`}>
			<div className="flex items-start gap-3 py-4 cursor-pointer">
				<div className="flex-shrink-0 relative w-14 h-14 rounded-full overflow-hidden">
					<Image src={post.featuredImage.url} layout="fill" objectFit="cover" />
				</div>
				<div>
					<h1 className="leading-none text-slate-700 font-bold">{post.title}</h1>
					<p className="text-sm text-slate-400 mt-1">
						{moment(post.createdAt).format("DD MMMM YYYY")}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default RecentPostCard;

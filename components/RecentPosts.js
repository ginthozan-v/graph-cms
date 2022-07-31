import { useEffect, useState } from "react";
import { getRecentPost, getSimilarPost } from "../services";
import RecentPostCard from "./RecentPostCard";

const RecentPosts = ({ categories, slug }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPost(categories, slug).then((result) => setPosts(result));
		} else {
			getRecentPost().then((result) => setPosts(result));
		}
	}, [slug]);

	return (
		<div className="my-10 border border-slate-200 rounded-xl p-6 ">
			<h1 className="text-lg text-slate-700 font-bold">Recent Posts</h1>

			<div className="grid grid-cols-1 divide-y">
				{posts.map((post, i) => (
					<RecentPostCard key={i} post={post} />
				))}
			</div>
		</div>
	);
};

export default RecentPosts;

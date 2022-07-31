import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import moment from "moment";
import { BsChat } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMusic, FaSpotify } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from "./../components/Card";
import { getPost } from "../services";
import RecentPosts from "./../components/RecentPosts";
import Categories from "./../components/Categories";

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Graphql Blog</title>
			</Head>
			<div className="max-w-screen-xl mx-auto">
				<div className="grid grid-cols-3 gap-10  items-start">
					<div className="col-span-2 ">
						<div className="my-10">
							<div>
								<div className="flex items-center gap-3 my-4">
									<div className="relative w-10 h-10 rounded-full overflow-hidden">
										<Image
											src={posts[0].node.author.photo.url}
											layout="fill"
											objectFit="cover"
											alt="avatar"
										/>
									</div>
									<p className="text-base text-slate-400 leading-none flex items-baseline gap-2">
										{posts[0].node.author.name} ·{" "}
										{moment(posts[0].node.createdAt).format("DD MMMM YYYY")} ·{" "}
										<BsChat className="w-4 h-4" /> (0)
									</p>
								</div>
								<h1 className="text-5xl font-bold text-slate-900 mt-3">
									{posts[0].node.title}
								</h1>
							</div>

							<div className="relative w-fll h-[500px] rounded-xl overflow-hidden mt-5">
								<Image
									src={posts[0].node.featuredImage.url}
									layout="fill"
									objectFit="cover"
									alt="featured image"
								/>
							</div>

							<div className="max-w-4xl mx-auto mt-5">
								<p className="text-lg text-slate-400">{posts[0].node.excerpt}</p>

								<div className="mt-8 border-t border-slate-200 pt-5 flex items-center justify-between">
									<div className="flex items-center gap-4 leading-none">
										<FaFacebookF className="w-4 h-4 text-slate-400" />
										<FaTwitter className="w-4 h-4 text-slate-400" />
										<FaInstagram className="w-4h-4 text-slate-400" />
										<FaYoutube className="w-4 h-4 text-slate-400" />
										<FaMusic className="w-4 h-4 text-slate-400" />
										<FaSpotify className="w-4 h-4 text-slate-400" />
									</div>

									<Link href={`post/${posts[0].node.slug}`}>
										<a className="flex items-center gap-1 test-slate-800 font-semibold">
											Continue reading <MdKeyboardArrowRight />
										</a>
									</Link>
								</div>
							</div>
						</div>

						<div className="border border-slate-200 p-6 rounded-xl grid grid-cols-2 gap-x-5 gap-y-10 my-10">
							{posts.map((post, i) => (
								<Card key={i} post={post.node} />
							))}
						</div>
					</div>

					<div>
						<RecentPosts />

						<Categories />
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const posts = (await getPost()) || [];
	return {
		props: { posts },
	};
}

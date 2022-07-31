import { getPost, getPostDetails } from "../../services";
import RecentPosts from "../../components/RecentPosts";
import { Banner, Content } from "../../components/post";
import CommentsForm from "./../../components/post/CommentsForm";

const Post = ({ post }) => {
	console.log(post);
	return (
		<div>
			<Banner
				banner={post.featuredImage.url}
				title={post.title}
				author={post.author}
				category={post.categories[0].name}
				created={post.createdAt}
			/>
			<div className=" max-w-screen-xl mx-auto">
				<div className="grid grid-cols-3 gap-10 ">
					<div className="col-span-2 my-10">
						<Content description={post.excerpt} content={post.content.raw} />
						<CommentsForm />
					</div>
					<div>
						<RecentPosts slug={post.slug} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;

export async function getStaticProps({ params }) {
	const post = await getPostDetails(params.slug);

	return {
		props: { post },
	};
}

export async function getStaticPaths() {
	const posts = await getPost();

	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: false,
	};
}

import Image from "next/image";
import { BsChat } from "react-icons/bs";
import { FaArrowAltCircleRight, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube, FaMusic, FaSpotify } from "react-icons/fa";

const SingleBlog = () => {
	return (
		<div className="max-w-screen-xl mx-auto my-10">
			<div className="max-w-4xl mx-auto">
				<div className="flex items-center gap-3 my-4">
					<div className="relative w-10 h-10 rounded-full overflow-hidden">
						<Image
							src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<p className="text-base text-slate-400 leading-none flex items-baseline gap-2">
						Katen Done · 31 March 2022 · <BsChat className="w-4 h-4" /> (0)
					</p>
				</div>
				<h1 className="text-3xl font-bold text-slate-900 mt-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h1>
			</div>

			<div className="relative w-fll h-[600px] rounded-xl overflow-hidden mt-5">
				<Image
					src="https://images.unsplash.com/photo-1657299143322-934f44698807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className="max-w-4xl mx-auto mt-5">
				<p className="text-lg text-slate-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta beatae amet
					incidunt tenetur necessitatibus, et vel quaerat mollitia sequi distinctio rerum
					architecto esse doloribus? Perferendis, aliquid necessitatibus. Fugit, quia
					perspiciatis.
				</p>

				<div className="mt-8 border-t border-slate-200 pt-5 flex items-center justify-between">
					<div className="flex items-center gap-4 leading-none">
						<FaFacebookF className="w-4 h-4 text-slate-400" />
						<FaTwitter className="w-4 h-4 text-slate-400" />
						<FaInstagram className="w-4h-4 text-slate-400" />
						<FaYoutube className="w-4 h-4 text-slate-400" />
						<FaMusic className="w-4 h-4 text-slate-400" />
						<FaSpotify className="w-4 h-4 text-slate-400" />
					</div>

					<p>
						Continue reading <FaArrowAltCircleRight />
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;

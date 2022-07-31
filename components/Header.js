import React from "react";
import Link from "next/link";
import {
	FaFacebookF,
	FaGripLines,
	FaHamburger,
	FaInstagram,
	FaMusic,
	FaSearch,
	FaSpotify,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

const Header = () => {
	return (
		<div className="bg-red-50/50 py-5 leading-none">
			<div className="max-w-screen-xl mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/">
						<a className="text-2xl font-bold mr-6">Graph CMS</a>
					</Link>
					<nav className="flex items-center gap-4 text-neutral-600">
						<p className="bg-gradient-to-tr from-[#FC5C76] to-[#FDA287] py-2 px-4 text-white font-semibold rounded-full ">
							Home
						</p>
						<p>Features</p>
						<p>Lifestyle</p>
						<p>Inspiration</p>
						<p>Contact</p>
					</nav>
				</div>
				<div className="flex items-center">
					<div className="flex items-center gap-4 leading-none">
						<FaFacebookF className="w-4 h-4 text-slate-700" />
						<FaTwitter className="w-4 h-4 text-slate-700" />
						<FaInstagram className="w-4h-4 text-slate-700" />
						<FaYoutube className="w-4 h-4 text-slate-700" />
						<FaMusic className="w-4 h-4 text-slate-700" />
						<FaSpotify className="w-4 h-4 text-slate-700" />
					</div>
					<div className="flex items-center gap-2 ml-10">
						<div className="bg-gradient-to-t from-[#FC5C76] to-[#FDA287] rounded-full p-2">
							<FaSearch className="w-3 h-3 text-white" />
						</div>
						<div className="bg-gradient-to-t from-[#FC5C76] to-[#FDA287] rounded-full p-2">
							<FaGripLines className="w-3 h-3 text-white" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

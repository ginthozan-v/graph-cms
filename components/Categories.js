import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((result) => setCategories(result));
	}, []);

	return (
		<div className="my-10 border border-slate-200 rounded-xl p-6 ">
			<h1 className="text-lg text-slate-700 font-bold text-center">Categories</h1>
			<div className="flex flex-wrap gap-2 justify-center mt-5">
				{categories.map((category) => (
					<Link key={category.slug} href={`/category/${category.slug}`}>
						<a className="flex-shrink-0 bg-gradient-to-b from-[#FC5C76] to-[#FDA287] text-white py-2 px-5 text-sm rounded leading-none  hover:shadow-md hover:shadow-[#FDA287]/50 transition-shadow duration-300">
							{category.name}
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;

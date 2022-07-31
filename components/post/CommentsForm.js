import React, { useRef } from "react";

const CommentsForm = () => {
	const commentEl = useRef();
	const nameEl = useRef();
	const emailEl = useRef();
	return (
		<div className="mt-10 grid grid-col gap-2 bg-gray-100 p-4 rounded-lg">
			<textarea
				ref={commentEl}
				className="p-4 outline-none w-full rounded-lg bg-gray-50 focus:ring-1 ring-slate-300"
				placeholder="Comment"
				name="comment"
			></textarea>

			<input
				ref={commentEl}
				type="text"
				className="py-2 px-4 outline-none w-full rounded-lg bg-gray-50 focus:ring-1 ring-slate-300"
				placeholder="Name"
				name="name"
			/>
			<input
				ref={emailEl}
				type="email"
				className="py-2 px-4 outline-none w-full rounded-lg bg-gray-50 focus:ring-1 ring-slate-300"
				placeholder="Email"
				name="email"
			/>

			<button className="bg-red-100 text-red-500 hover:bg-red-200  transition-colors leading-none py-3 px-6 rounded ml-auto">
				Post Comment
			</button>
		</div>
	);
};

export default CommentsForm;

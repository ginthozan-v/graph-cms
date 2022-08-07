import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../../services";

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false);
	const [localStorage, setLocalStorage] = useState(null);
	const [success, setSuccess] = useState(false);
	const commentEl = useRef();
	const nameEl = useRef();
	const emailEl = useRef();
	const storeDataEl = useRef();

	const handleComment = () => {
		const { value: comment } = commentEl.current;
		const { value: name } = nameEl.current;
		const { value: email } = emailEl.current;
		const { checked: storeData } = storeDataEl.current;

		if (!comment || !name || !email) {
			setError(true);
			return;
		}

		const commentObj = { name, email, comment, slug };

		if (storeData) {
			window.localStorage.setItem("name", name);
			window.localStorage.setItem("email", email);
		} else {
			window.localStorage.removeItem("name", name);
			window.localStorage.removeItem("email", email);
		}

		submitComment(commentObj).then((res) => {
			setSuccess(true);

			setTimeout(() => {
				setSuccess(false);
			}, 3000);
		});
	};

	useEffect(() => {
		nameEl.current.value = window.localStorage.getItem("name");
		emailEl.current.value = window.localStorage.getItem("email");
	}, []);

	return (
		<div className="grid gap-2 p-4 mt-10 bg-gray-100 rounded-lg grid-col">
			<p className="mb-2 text-xl font-bold text-gray-600">Leave a comment</p>
			<textarea
				ref={commentEl}
				className="w-full p-4 rounded-lg outline-none bg-gray-50 focus:ring-1 ring-slate-300"
				placeholder="Comment"
				name="comment"
			></textarea>

			<input
				ref={nameEl}
				type="text"
				className="w-full px-4 py-2 rounded-lg outline-none bg-gray-50 focus:ring-1 ring-slate-300"
				placeholder="Name"
				name="name"
			/>
			<input
				ref={emailEl}
				type="email"
				className="w-full px-4 py-2 rounded-lg outline-none bg-gray-50 focus:ring-1 ring-slate-300"
				placeholder="Email"
				name="email"
			/>
			<div>
				<div className="flex items-center gap-2 my-2">
					<input
						ref={storeDataEl}
						type="checkbox"
						id="storeData"
						name="storeData"
						value={true}
						className="w-5 h-5 text-blue-600 bg-gray-100 border-0 rounded-lg cursor-pointer accent-emerald-500"
					/>
					<label
						className="leading-none text-gray-500 cursor-pointer"
						htmlFor="storeData"
					>
						Save my email for the next time I comment!
					</label>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<p className="font-semibold text-red-500">{error && "All fields are required!"}</p>
				<p className="font-semibold text-green-800">
					{success && "Comment submitted for review!"}
				</p>
				<button
					onClick={handleComment}
					className="px-6 py-3 ml-auto leading-none transition-colors rounded bg-violet-100 text-violet-500 hover:bg-violet-200"
				>
					Post Comment
				</button>
			</div>
		</div>
	);
};

export default CommentsForm;

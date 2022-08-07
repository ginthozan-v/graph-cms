import parse from "html-react-parser";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getComments } from "../../services";

const Comment = ({ slug }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getComments(slug)
			.then((result) => setComments(result))
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			{comments.length > 0 && (
				<div className="mt-5 border-t-2">
					{comments.map((comment) => (
						<div className="p-5 mt-5 border rounded-lg">
							<div className="flex items-center gap-5 my-4">
								<p className="flex items-baseline gap-2 text-base leading-none text-gray-700">
									<span className="font-bold">{comment.name}</span> · on{" "}
									{moment(comment.createdAt).format("DD MMMM YYYY")}
								</p>
							</div>
							<div className="w-full mt-2 text-gray-600 whitespace-pre-line">
								{parse(comment.comment)}
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Comment;

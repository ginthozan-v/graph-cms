import React from "react";

const Content = ({ description, content }) => {
	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case "heading-one":
				return (
					<h3 key={index} className="text-xl font-semibold mb-4">
						{text}
					</h3>
				);
			case "paragraph":
				return (
					<p key={index} className="mb-8">
						{text}
					</p>
				);
			case "heading-four":
				return (
					<h3 key={index} className="text-md font-semibold mb-4">
						{text}
					</h3>
				);
			case "code-block":
				return (
					<pre key={index} className="bg-gray-50 rounded-lg p-4 my-5">
						{text}
					</pre>
				);
			case "block-quote":
				return (
					<div className="border-l-4 pl-4 my-5">
						<i key={index} className=" text-2xl">
							"{obj.children[0].children[0].text}"
						</i>
					</div>
				);
			case "image":
				return (
					<img
						key={index}
						src={obj.src}
						height={obj.height}
						width={obj.width}
						alt={obj.title}
					/>
				);
			default:
				return modifiedText;
		}
	};

	return (
		<div>
			<h5>{description}</h5>

			<div className="mt-10">
				{content.children.map((typeObj, index) => {
					const children = typeObj.children.map((item, itemIndex) =>
						getContentFragment(itemIndex, item.text, item),
					);

					return getContentFragment(index, children, typeObj, typeObj.type);
				})}
			</div>
		</div>
	);
};

export default Content;

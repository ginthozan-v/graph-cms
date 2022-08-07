import { gql, GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const hygraph = new GraphQLClient(graphqlAPI);

export const getPost = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await hygraph.request(query);
	return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				author {
					bio
					name
					id
					photo {
						url
					}
				}
				createdAt
				slug
				title
				excerpt
				featuredImage {
					url
				}
				categories {
					name
					slug
				}
				content {
					raw
				}
			}
		}
	`;

	const result = await hygraph.request(query, { slug });
	return result.post;
};

export const getRecentPost = async () => {
	const query = gql`
		query GetPostDetails(){
			posts(
				orderBy: createdAt_ASC	
				last:3
			){
				title
				featuredImage{
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await hygraph.request(query);
	return result.posts;
};

export const getSimilarPost = async (categories, slug) => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
			posts(
				where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await hygraph.request(query, { categories, slug });
	return result.posts;
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;
	const result = await hygraph.request(query);
	return result.categories;
};

export const submitComment = async (obj) => {
	const results = await fetch("/api/comments/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(obj),
	});

	return results.json();
};

export const getComments = async (slug) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(where: { post: { slug: $slug } }) {
				comment
				createdAt
				name
			}
		}
	`;
	const result = await hygraph.request(query, { slug });
	return result.comments;
};

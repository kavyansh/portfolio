export default async function gql(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

export async function fetchBlogPost(slug) {
  const query = `
        query {
            post(slug: "${slug}"
                 hostname: "") {
                _id
                title
                slug
                dateAdded
                dateUpdated
                isFeatured
                content
                coverImage
                totalReactions
                tags {
                name
                }
            }
        }`;
  const response = await gql(query);
  return response.data.post;
}

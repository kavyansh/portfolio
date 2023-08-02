import { useEffect, useState } from 'react';
import gql from '../../services/hashnode';
import PostItem from './PostItem';
import Loading from '../../components/ui/Loading';

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "Yash722") {
            publication {
                posts(page: $page) {
                    blogId: _id
                    title
                    summary: brief
                    slug
                    coverImage
                }
            }
        }
    }
`;

function Blog() {
  const [posts, setPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(
    function () {
      async function fetchBlogs() {
        const data = await gql(GET_USER_ARTICLES, { page: currentPage });
        setPosts(data.data.user.publication.posts);
      }
      fetchBlogs();
    },
    [currentPage],
  );

  return (
    <div className="grid gap-6 p-10">
      {posts ? (
        posts.map((post) => {
          return <PostItem key={post.title} post={post} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Blog;

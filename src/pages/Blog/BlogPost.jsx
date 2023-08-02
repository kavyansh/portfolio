import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchBlogPost } from '../../services/hashnode';

function BlogPost() {
  const { blogId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const [post, setPost] = useState(null);

  useEffect(
    function () {
      if (!slug) return;
      async function fetchPost() {
        const data = await fetchBlogPost(slug);
        setPost(data);
      }
      fetchPost();
    },
    [slug],
  );

  return (
    <div>
      {post ? (
        <div className="blog p-4 text-xl" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default BlogPost;

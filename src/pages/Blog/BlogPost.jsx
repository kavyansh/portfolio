import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchBlogPost } from '../../services/hashnode';

function BlogPost() {
  const { blogId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const [post, setPost] = useState(null);
  const { title, coverImage, content } = post ? post : {};

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

  if (!post) return <h1>Loading...</h1>;

  return (
    <div className="m-4 h-auto rounded-lg bg-white p-4">
      <div className="m-8 p-4 text-center text-5xl font-semibold">{title}</div>
      {coverImage && (
        <div className="mx-20 mb-10 h-[16%]">
          <img src={coverImage} className="mx-auto h-full w-auto rounded-xl object-cover object-center" />
        </div>
      )}
      <div className="blog-post blog h-auto p-4 text-xl" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default BlogPost;

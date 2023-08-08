import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchBlogPost } from '../../services/hashnode';
import Loading from '../../components/ui/Loading';

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

  if (!post) return <Loading />;

  return (
    <div className="mt-10 h-auto rounded-lg p-8 ">
      <div className="">
        {coverImage && (
          <div className="md:h-[350px]">
            <img src={coverImage} className="mx-auto h-full w-full rounded-xl object-cover object-center" />
          </div>
        )}
        <div className="m-8 mx-auto max-w-[60%] whitespace-normal p-2 text-center text-center text-5xl font-semibold text-blue-950">
          {title}
        </div>
      </div>
      <div className="blog-post blog h-auto p-4 text-xl" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default BlogPost;

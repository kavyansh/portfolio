import { useNavigate } from 'react-router-dom';

function PostItem({ post }) {
  const { blogId, title, summary, coverImage, slug } = post;

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/blogs/${blogId}?slug=${slug}`);
  }

  return (
    <div onClick={handleClick}>
      <div className="xl:justify-betwee flex w-full cursor-pointer flex-col gap-4 rounded-lg border border-gray-200 bg-blue-50 p-6  shadow-lg transition-[transform] duration-300 hover:scale-[101.5%] xl:flex-row xl:items-center">
        {coverImage && <img className=" h-[300px] object-cover xl:w-[50%]" src={coverImage} alt="" />}
        <div className={coverImage ? `px-4 xl:w-[50%]` : `px-4`}>
          <h1 className="mx-4 my-4 text-center text-3xl font-bold text-gray-700">{title}</h1>
          <p className="p-2 text-lg">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;

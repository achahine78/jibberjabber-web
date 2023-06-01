import PostFeed from "../../components/postfeed/PostFeed";
import { useGetPosts } from "./useGetPosts";


const HomePage = () => {
  const { posts } = useGetPosts();
  return (
    <div>
      <PostFeed posts={posts} />
    </div>
  );
};

export default HomePage;

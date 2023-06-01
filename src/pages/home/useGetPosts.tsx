import { TPost } from '../../types/Post'; 
import { useEffect, useState } from "react";
import { privateAxios } from "../../api";

export const useGetPosts = () => {
    const [posts, setPosts] = useState<TPost[]>([]);
    useEffect(() => {
      privateAxios.get('/api/post').then(({ data }) => {
        if (data.posts) {
          setPosts(data.posts);
        }
      })
    }, []);

    return { posts }
}
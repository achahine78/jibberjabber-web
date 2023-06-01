import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { privateAxios } from "../../api";

type Post = {
  id: string;
  content: string;
  room?: string[];
  createdAt: string;
  upvotes: number;
  downvotes: number;
};

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => (
  <Card style={{ width: 500, margin: '1rem' }}>
    <Row style={{ justifyContent: 'space-between' }}>
      <Col>
        <p>{post.content}</p>
      </Col>
      <Col>
        <div><PlusOutlined /></div>
        <div>{ post.upvotes - post.downvotes }</div>
        <div><MinusOutlined /></div>
      </Col>
    </Row>
  </Card>
);

type PostFeedProps = {
  posts: Post[];
};

const PostFeed = ({ posts }: PostFeedProps) => (
  <>
    {posts.map((post) => (
      <Post post={post} key={post.id} />
    ))}
  </>
);

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    privateAxios.get('/api/post').then(({ data }) => {
      if (data.posts) {
        setPosts(data.posts);
      }
    })
  }, []);
  return (
    <div>
      <PostFeed posts={posts} />
    </div>
  );
};

export default HomePage;

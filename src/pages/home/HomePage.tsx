import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { useState } from "react";

const dummyPosts = [
  {
    id: "0",
    content: "what's the deal with airplane peanuts?",
    createdAt: String(Date.now()),
    upvotes: 20,
    downvotes: 3,
  },
  {
    id: "1",
    content: "what's the deal with all these airplane peanuts?",
    createdAt: String(Date.now()),
    upvotes: 26,
    downvotes: 3,
  },
  {
    id: "2",
    content: "how you like them apples",
    createdAt: String(Date.now()),
    upvotes: 0,
    downvotes: 12,
  },
];

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
  const [posts, setPosts] = useState<Post[]>(dummyPosts);
  return (
    <div>
      <PostFeed posts={posts} />
    </div>
  );
};

export default HomePage;

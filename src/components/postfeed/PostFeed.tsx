import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { TPost } from '../../types/Post'; 

type PostProps = {
  post: TPost;
};

const Post = ({ post }: PostProps) => (
  <Card style={{ width: 500, margin: "1rem" }}>
    <Row style={{ justifyContent: "space-between" }}>
      <Col>
        <p>{post.content}</p>
      </Col>
      <Col>
        <div>
          <PlusOutlined />
        </div>
        <div>{post.upvotes - post.downvotes}</div>
        <div>
          <MinusOutlined />
        </div>
      </Col>
    </Row>
  </Card>
);

type PostFeedProps = {
  posts: TPost[];
};

const PostFeed = ({ posts }: PostFeedProps) => (
  <>
    {posts.map((post) => (
      <Post post={post} key={post.id} />
    ))}
  </>
);

export default PostFeed;
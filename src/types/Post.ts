export type TPost = {
  id: string;
  content: string;
  room?: string[];
  createdAt: string;
  upvotes: number;
  downvotes: number;
};

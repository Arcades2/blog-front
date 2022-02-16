export type Post = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  slug: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  categories: Category[];
};

export type Category = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type User = {
  username: string;
};

export type Comment = {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
  post: Post;
  user: User;
};

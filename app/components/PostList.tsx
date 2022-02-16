import PostListItem from './PostListItem';
import type { Post } from '~/types';

type Props = {
  posts: Post[];
};

function PostList({ posts }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;

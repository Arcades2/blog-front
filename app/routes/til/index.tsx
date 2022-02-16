import { useLoaderData } from 'remix';
import { getPosts } from '~/api/posts';
import type { Post } from '~/types';
import PostList from '~/components/PostList';

export const loader = () => getPosts();

function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="mt-10">
      <PostList posts={posts} />
    </div>
  );
}

export default Posts;

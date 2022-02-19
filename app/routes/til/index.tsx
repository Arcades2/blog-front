import { useLoaderData, json, HeadersFunction, LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';
import { getPosts } from '~/api/posts';
import type { Post } from '~/types';
import PostList from '~/components/PostList';

export const loader: LoaderFunction = async () =>
  json(await getPosts(), {
    headers: {
      'Cache-Control': `max-age=300, s-maxage=3600, stale-while-revalidate=${
        24 * 60 * 60
      }`,
    },
  });

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const loaderCacheControl = loaderHeaders.get('Cache-Control');
  invariant(loaderCacheControl, 'loaderHeaders Cache-Control is required');

  return {
    'Cache-Control': loaderCacheControl,
  };
};

function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="mt-10">
      <PostList posts={posts} />
    </div>
  );
}

export default Posts;

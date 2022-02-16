import { useMemo } from 'react';
import { Link } from 'remix';
import dayjs from 'dayjs';
import { Post } from '~/types';
import estimateReadingTime from '~/utils/estimateReadingTime';

type Props = {
  post: Post;
};

function PostListItem({ post }: Props) {
  const readingTime = useMemo(() => estimateReadingTime(post.content), [post]);

  return (
    <li className="px-4 py-2">
      <Link to={post.slug}>
        <h2 className="font-bold text-teal-400 hover:text-opacity-75">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm italic">
        {dayjs(post.created_at).format('YYYY-MM-DD')} •{' '}
        <span className="not-italic">🕘</span>
        {readingTime} minute{readingTime > 1 ? 's' : ''}
      </p>
      {!!post.categories.length && (
        <p className="flex gap-4 text-[#B8B3E9]">
          {post.categories.map((category) => (
            <span>#{category.name}</span>
          ))}
        </p>
      )}
      <p>{post.subtitle}</p>
    </li>
  );
}

export default PostListItem;

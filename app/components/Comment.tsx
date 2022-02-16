import dayjs from 'dayjs';
import { Comment as CommentType } from '~/types';

type Props = {
  comment: CommentType;
};

function Comment({ comment }: Props) {
  return (
    <div className="py-5">
      <div>
        <span className="font-semibold">{comment.user.username}</span> •{' '}
        <span className="italic text-sm">
          {dayjs(comment.created_at).format('YYYY-MM-DD')}
        </span>
      </div>
      <div className="mt-2 whitespace-pre-wrap break-words dark:bg-slate-900/75 bg-slate-300/75 rounded p-4">
        {comment.content}
      </div>
    </div>
  );
}

export default Comment;

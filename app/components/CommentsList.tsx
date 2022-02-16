import type { Comment as CommentType } from '~/types';
import Comment from './Comment';

type Props = {
  comments: CommentType[];
};

function CommentsList({ comments }: Props) {
  return (
    <div className="divide-y">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsList;

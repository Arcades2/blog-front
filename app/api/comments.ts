import iaxios from './iaxios';

const getComments = async (postId: number) => {
  const { data } = await iaxios.get('/comments', {
    params: {
      post_eq: postId,
      _sort: 'created_at:DESC',
    },
  });
  return data;
};

type CreateCommentData = {
  content: string;
  post: number;
};

const createComment = async (comment: CreateCommentData, token: string) => {
  const { data } = await iaxios.post('/comments', comment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export { getComments, createComment };

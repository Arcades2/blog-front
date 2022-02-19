/* eslint-disable react/no-danger */
import { ActionFunction, json, redirect, useLoaderData } from 'remix';
import type { LoaderFunction, LinksFunction, HeadersFunction } from 'remix';
import invariant from 'tiny-invariant';
import hljsStyle from 'highlight.js/styles/github-dark.css';
import { getPost } from '~/api/posts';
import { commitSession, getSession } from '~/sessions';
import { getComments, createComment } from '~/api/comments';
import CommentsList from '~/components/CommentsList';
import type { Comment as CommentType } from '~/types';
import NewComment from '~/components/NewComment';
import getGithubAuthUrl from '~/utils/getGithubAuthUrl';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: hljsStyle },
];

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.slug, 'params.slug is required');

  const session = await getSession(request.headers.get('Cookie'));

  const post = await getPost(params.slug);
  const comments = await getComments(post.id);

  const liteComments = comments.map((comment: CommentType) => ({
    id: comment.id,
    content: comment.content,
    created_at: comment.created_at,
    user: {
      username: comment.user.username,
    },
  }));

  return json(
    {
      post,
      comments: liteComments,
      authenticated: session.has('token'),
      commentState: session.get('commentState') || null,
    },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
        'Cache-Control': `max-age=60`,
      },
    },
  );
};

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.slug, 'params.slug is required');

  const formData = await request.formData();
  const session = await getSession(request.headers.get('Cookie'));

  const content = formData.get('content');
  invariant(content, 'content is required');

  const post = await getPost(params.slug);

  await createComment(
    {
      content: content.toString(),
      post: post.id,
    },
    session.get('token'),
  );

  session.flash('commentState', {
    state: 'success',
    message: 'Comment created',
  });

  return redirect(`/til/${params.slug}`, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const loaderCacheControl = loaderHeaders.get('Cache-Control');
  invariant(loaderCacheControl, 'loaderHeaders Cache-Control is required');

  return {
    'Cache-Control': loaderCacheControl,
  };
};

export default function PostSlug() {
  const { post, comments, authenticated } = useLoaderData();

  return (
    <div className="mt-10">
      <h1>{post.title}</h1>
      <div
        className="mt-16 prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400" />
        <span className="flex-shrink mx-4 text-gray-400">Comments</span>
        <div className="flex-grow border-t border-gray-400" />
      </div>
      <div>
        {authenticated ? (
          <NewComment />
        ) : (
          <div className="text-center">
            <a
              className="bg-teal-400 py-2 px-4 rounded-sm"
              type="button"
              href={getGithubAuthUrl()}
            >
              Login with GitHub to comment
            </a>
          </div>
        )}
        <CommentsList comments={comments} />
      </div>
    </div>
  );
}

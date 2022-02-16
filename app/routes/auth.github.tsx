import { json } from 'remix';
import type { LoaderFunction } from 'remix';
import iaxios from '~/api/iaxios';
import { getSession, commitSession } from '~/sessions';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);

  const { data } = await iaxios.get('/auth/github/callback', {
    params: {
      access_token: search.get('access_token'),
    },
  });

  session.set('token', data.jwt);
  session.set('user', data.user);

  return json('Successful login', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function GitHubAuth() {
  return (
    <div className="my-8">
      <p className="text-center">Successful login with GitHub</p>
    </div>
  );
}

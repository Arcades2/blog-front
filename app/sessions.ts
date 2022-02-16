import { createCookieSessionStorage } from 'remix';

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: '__session',
      // TODO: set domain and secure true
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
      sameSite: 'lax',
    },
  });

export { getSession, commitSession, destroySession };

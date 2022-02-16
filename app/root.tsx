/* eslint-disable react/no-danger */
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';
import tailwindStyles from './tailwind.css';
import globalStyles from './styles/global.css';
import Header from './components/Header';

export const meta: MetaFunction = () => ({ title: 'New Remix App' });

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: globalStyles },
];

export const loader: LoaderFunction = async () => ({
  ENV: {
    GITHUB_AUTH_URL: process.env.GITHUB_AUTH_URL,
  },
});

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-800 dark:text-gray-200 min-h-screen bg-gray-200">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

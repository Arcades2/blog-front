import { marked } from 'marked';
import hljs from 'highlight.js';
import iaxios from './iaxios';

marked.setOptions({
  highlight: (code, lang) => hljs.highlight(lang, code).value,
});

const getPosts = async () => {
  const response = await iaxios.get('/posts', {
    params: {
      _sort: 'created_at:DESC',
    },
  });
  return response.data;
};

const getPost = async (slug: string) => {
  const response = await iaxios.get('/posts', {
    params: {
      slug,
    },
  });
  const post = response.data?.[0];

  if (post) {
    return {
      ...post,
      content: marked(post.content),
    };
  }

  return new Response('Not found', {
    status: 404,
  });
};

export { getPosts, getPost };

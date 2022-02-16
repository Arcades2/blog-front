function getGithubAuthUrl() {
  if (typeof window === 'undefined') {
    return process.env.GITHUB_AUTH_URL;
  }
  /* @ts-ignore */
  return window.ENV.GITHUB_AUTH_URL;
}

export default getGithubAuthUrl;

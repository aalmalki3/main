export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (path.startsWith('/career')) {
    return fetch("https://aalmalki3.github.io/shfq" + path.replace('/career', '') || "/index.html");
  }
  if (path.startsWith('/family')) {
    return fetch("https://aalmalki3.github.io/manasweet" + path.replace('/family', '') || "/index.html");
  }
  if (path.startsWith('/psych')) {
    return fetch("https://aalmalki3.github.io/psych" + path.replace('/psych', '') || "/index.html");
  }

  return context.next();
}


/**
 * 
 * @param {string} query The GraphQL query string
 * @returns {{ props: { posts: { nodes: { title: string, content: string, id: string, date: string } } } }}
 */
export async function genericRequest(query) {
  const res = await fetch(WP_SERVER + '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: query,
    })
  });


  // console.log("RES: ", await res);
  const json = await res.json();

  // console.log(json);

  return {
    props: {
      posts: json.data.posts,
      orderDesc: json.data.categories.nodes[0].description
    }
  }
}
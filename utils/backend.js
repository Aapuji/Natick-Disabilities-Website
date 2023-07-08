//@ts-check

import { WP_SERVER } from "../pages";

export async function getBasicRequest(page) {
  const res = await fetch(WP_SERVER + '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: generatePageQuery(page),
    })
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
      orderDesc: json.data.categories.nodes[0].description
    }
  }
}

/** Returns the base query for a page, given the name of the page.
 * 
 * In Wordpress, the category slugs (with dashes turned into spaces) will be `PAGE_NAME Page Category`, and the names of the categories will be `PAGE_NAME Page`.  
 * 
 * @param {string} pageName Page to create query for (eg. `"Home"`, `'About'`) 
 */
export function generatePageQuery(pageName) {
  return `
    query ${pageName}PageQuery {
      posts(where: {categoryName: "${pageName} Page Category"}) {
        nodes {
          title
          content
          id
          date
        }
      }
      categories(where: {name: "${pageName} Page"}) {
        nodes {
          description
        }
      }
    }
  `;
}

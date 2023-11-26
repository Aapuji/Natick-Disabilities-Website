import parse from 'html-react-parser';

//@ts-check

import { WP_SERVER } from "../pages";
import * as Utils from "./wp-utils";

/** Creates a basic request to Wordpress and returns the props for it.
 * 
 * Requests `title`, `content`, `id`, and `date` for each post in the given page's category, as well as the description of that category. 
 * 
 * @param {string} page Name of the page that this request is for.
 * @returns {Promise<{ props: { posts: { nodes: { title: string, content: string, id: string, date: string }[] }, orderDesc: string }}>}
 */
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


class Category {
  static Home = new Category('Home Page', 'Page');
  static About = new Category('About Page', 'Page');
  static Resources = new Category('Resources Page', 'Page');
  static Events = new Category('Events Page', 'Page');

  static MemberProfiles = new Category('About Profiles', 'Section')
  static EventCard = new Category('EventCard', 'Section');
  static EventPopup = new Category('EventPopup', 'Section');

  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  static from(name) {
    switch (name) {
      case 'Home Page':
        return Category.Home;
      case 'About Page':
        return Category.About;
      case 'Resources Page':
        return Category.Resources;
      case 'Events Page':
        return Category.Events;
      case 'About Profiles':
        return Category.MemberProfiles;
      case 'Event Card':
        return Category.EventCard;
      case 'Event Popup':
        return Category.EventPopup;
      default:
        return null;
    }
  }
}

/** Evaluate styles based on the tag
 * 
 * @param {{ title: string, content: string, id: string, date: string }} postRef Reference to post
 * @param {string} category Category that it is in (they will always only have 1)
 * @returns {object} New element
*/
function evaluatePost(postRef, category) {
  let elements = Utils.splitContent(postRef.content);
  let cat = Category.from(category);

  console.log("Contents: " + elements);

  for (let i = 0; i < elements.length; i++) {
    elements[i] = evaluateElement(elements[i], cat);
  }

  return elements;
}

/** Evaluates element by turning string into object, then
 * 
 * @param {string} element
 * @param {Category} category  
 * 
*/
function evaluateElement(element, category) {
  // String -> Object (gets tag, className, etc.)
  let e = parse(element);

  // Evaluates the Tag Name
  evaluateTag(e);

  // Evaluates styles (by adding styles, or replacing styles, or removing styles)
  evaluateStyles(e, category);
}

/** Changes tag names ('a' and 'img') and adds attributes required for those new tag names.
 * 
*/
function evaluateTag(elementRef) {
  switch (elementRef.name) {
    case 'a': 
      elementRef.name = 'Link';
      break;
    case 'img':
      elementRef.name = 'Image';
      break;
    default:
      break;
  }
}

/** Adds, removes, and replaces styles from the elements
 * 
 * 
*/
function evaluateStyles(elementRef, category) {
  switch (category.name) {
    case 'Home Page':
      break;
    default:
      break;
  }
}

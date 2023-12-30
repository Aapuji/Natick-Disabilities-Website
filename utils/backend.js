import parse, { attributesToProps } from 'html-react-parser';

//@ts-check

import { WP_SERVER } from "../pages";
import * as Utils from "./wp-utils";

/** Creates a basic request to Wordpress and returns the props for it.
 * 
 * Requests `title`, `content`, `id`, and `date` for each post in the given page's category, as well as the description of that category. 
 * 
 * @param {string} page Name of the page that this request is for. Capitalize the first letter of each word.
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
 * @param {string} pageName Page to create query for (eg. `"Home"`, `'About'`).
*/
export function generatePageQuery(pageName) {
  return `
    query ${combineWords(pageName)}PageQuery {
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

/** Makes a string workable in a GraphQL query (just removes spaces).
 * 
 * @param {string} string The string to remove spaces from
 * @returns {string} string without spaces
 */
function combineWords(string) {
  return string.replace(' ', '');
}


export class Category {
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

export function evaluatePost(postRef, category) {
  let elements = Utils.splitContent(postRef.content);
  let cat = Category.from(category);

  // console.log("Contents: " + elements);

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
export function evaluateElement(element, category) {
  // String -> Object (gets tag, className, etc.)
  // let e = parse(element);
  // console.log('E')
  // console.log(e);

  // Evaluates the Tag Name
  // evaluateTag(e);

  // Evaluates styles (by adding styles, or replacing styles, or removing styles)
  let el = evaluateStyles(element, category);

  console.dir(el);

  return el;
}

/** Changes tag names ('a' to Link and 'img' to Image) and adds attributes required for those new tag names.
 * 
*/
export function evaluateTag(elementRef) {
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
export function evaluateStyles(elementRef, category) {
  console.dir(elementRef)
  switch (category.name) {
    case 'Home Page':
      if (parse(elementRef).type === 'p') {
        console.log("hello:");
        console.dir(parse('<h1 className="Hello World">Hi</h1>'));
        // elementRef.props = { className: 'backend r-home-content', ...elementRef.props };
        return parse(elementRef, {
          replace(domNode) {
            console.log('HERE!!!!');
            if (domNode.attribs){
              console.log('IN HERE!!! 1');
              console.dir(domNode);
              if (domNode.name === 'p') {
                console.log('IN IN HERE!!! 2');
                let props = attributesToProps(domNode.attribs);
                props.className = 'backend r-home-content';
                let output = <p {...props}>{domNode.children}</p>;
                console.log('OUTPUT')
                console.log(output);
              }
            }
          }
        })
      }
      break;
    default:
      break;
  }
}

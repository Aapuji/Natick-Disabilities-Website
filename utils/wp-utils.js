import * as Backend from './backend';
import parse from 'html-react-parser';

/** Returns an object with useful values gotten from the given post reference.
 * 
 * @param {{ title: string, content: string, id: string, date: string }} postRef A reference to a post (ie. `posts.nodes[n]`)
 */

export function getBasicSectionInfo(postRef) {
  let title = postRef.title ?? '';
  let subtitle = '';

  let contents = splitContent(postRef.content)/*.map(removeP)*/;
  
  for (let i = 0; i < contents.length; i++) {
    let { annot, text } = removeAnnotation(contents[i]);

    if (annot == 'Subtitle') {
      subtitle = text;
      contents.splice(i, 1);
      break;
    }
  }

  // Returns an object with the values that are going to be used by jsx after the function call.
  return {
    title,
    subtitle,
    contents,
    content: '<div>' + postRef.content + '</div>'
  }
}

/** Takes a profile post and adds the required data to  the `members` and `profiles` arrays. Assumes that this function is only being applied to the correct sections (doesn't check if it's being used in the right places).
 * 
 * @param {{ title: string, content: string, id: string, date: string }} postRef A reference to a post (ie. `posts.nodes[n]`).
 * @param {{ key: number, name: string, startDate: string, term: number, position: string }[]} membersRef A reference to the array of member objects
 * @param {{ key: number, name: string, position: string, img: Image, desc: string }[]} profilesRef A reference to the array of profile objects
 * 
 * Additionally, `postRef` must adhere to the following order:
 * 1. TITLE (name of member)
 * 2. P TAG (start date)
 * 3. P TAG (term)
 * 4. P TAG (position)
 * 5. IMAGE (image, preferrably headshot, of the member)
 * 6. P TAG (description of the member)
 * 
*/
export function handleProfilePost(postRef, membersRef, profilesRef) {
  const data = analyzeProfile(postRef);

  appendToMemberTable(membersRef, data);
  appendToProfileArray(profilesRef, data);
}

/** Gets the important data from an about-page-profile post and returns it as an object. Requires that the first 5 tags of content not have children, other than text (eg. <p>Hello</p>)
 * 
 * @param {{ title: string, content: string, id: string, date: string }} postRef A reference to a post (ie. `posts.nodes[n]`).
 * @returns {{ name: string, startDate: string, term: number, position: string, image: Image, blurb: string }}
*/
function analyzeProfile(postRef) {
  const contents = splitContent(postRef.content);

  // parse(...).props.children is a string if the tag holds text
  // parseInt(...) parses a string into an int.
  let startDate = parse(contents[0]).props.children;
  let term = parseInt(parse(contents[1]).props.children);
  let position = parse(contents[2]).props.children;
  let image = parse(contents[3]);
  let blurb = parse(contents[4]).props.children;

  return { 
    name: postRef.title,
    startDate,
    term,
    position,
    image,
    blurb
  };
}

/** Appends relevant data to `membersRef`.
 * 
 * @param {{ name: string, startDate: string, term: number, position: string }[]} membersRef A reference to the array of member objects.
 * @param {{ name: string, startDate: string, term: number, position: string, image: Image, blurb: string }} data An object containing all the data gotten from `analyzeProfile`.
*/
function appendToMemberTable(membersRef, data) {
  membersRef.push({ 
    key: membersRef.length,
    name: data.name,
    startDate: data.startDate,
    term: data.term,
    position: data.position,
  });
}

/** Appends relevant data to `profilesRef`.
 * 
 * @param {{ key: number, name: string, position: string, img: string, desc: string }[]} profilesRef A reference to the array of profile objects
 * @param {{ name: string, startDate: string, term: number, position: string, image: Image, blurb: string }} data An object containing all the data gotten from `analyzeProfile`.
*/
function appendToProfileArray(profilesRef, data) {
  profilesRef.push({
    key: profilesRef.length,
    name: data.name,
    position: data.position,
    image: data.image.props.children.props.src,
    desc: data.blurb
  });
}

/** Gets the important data from an event post and returns it as an object. Requires that the first 4 tags of content not have children, other than text (eg. <p>Hello</p>)
 * 
 * @param {{ title: string, content: string, id: string, date: string }} postRef A reference to a post (ie. `posts.nodes[n]`).
 * @returns {{ name: string, date: string, time: string, location: string, desc: Image }}
*/
function analyzeEventPost(postRef) {
  const contents = splitContent(postRef.content);

  // parse(...).props.children is a string if the tag holds text
  let date = parse(contents[0]).props.children;
  let time = parse(contents[1]).props.children;
  let location = parse(contents[2]).props.children;
  let desc = parse(contents[3]).props.children;

  return { 
    name: postRef.title,
    date,
    time,
    location,
    desc
  };
}

/** 
 *
 * @param {{ title: string, date: string, time: string, location: string, desc: string }} postRef A reference to a post (ie. `posts.nodes[n]`).
 * @param {{ key: string, name: string, date: string, time: string, location: string, desc: string }[]} eventsRef
*/
export function handleOngoingEventPost(postRef, eventsRef){
  const data = analyzeEventPost(postRef);
  
  eventsRef.push({
    key: eventsRef.length,
    name: data.name,
    date: data.date,
    time: data.time,
    location: data.location,
    desc: data.desc
  });
}

/** 
 *
 * @param {{ title: string, date: string, time: string, location: string, desc: string }} postRef A reference to a post (ie. `posts.nodes[n]`).
 * @param {{ key: string, name: string, date: string, time: string, location: string, desc: string }[]} eventsRef
*/
export function handlePastEventPost(postRef, eventsRef) {
  const data = analyzeEventPost(postRef);

  eventsRef.push({
    key: eventsRef.length,
    name: data.name,
    date: data.date,
    time: data.time,
    location: data.location,
    desc: data.desc
  });
}

/** Given category description and a reference to an array of posts, this will sort the array to order the content on the page.
 * 
 * @param {string} categoryDesc Relevant part of description of category for the page listing the order of the content on the page.
 * @param {{ title: string, content: string, id: string, date: string }[]} postsRef A reference to the posts array to sort (ie. `posts.nodes`).
*/
export function orderPageContent(categoryDesc, postsRef) {
  let orderArr = categoryDesc.split(/\r\n|\n/);  // Splits category description into lines
  
  for (let i = 0; i < orderArr.length; i++) {
    orderArr[i] = orderArr[i].replace(/ *[0-9]*\.? */, '');  // Removes number and dot (eg. "4. ")
  }

  // Sorts the posts according to the order
  // In Wordpress, admin can add the number delimiters (eg. "1. "), but those are only to help them, the code will display it in the order from top to bottom.
  postsRef.sort((a, b) => orderArr.indexOf(a.title) - orderArr.indexOf(b.title));
}

/** Removes HTML tags from text.
 * 
 * @param {string} html The initial text with html tags.
 * @param {string[]} tags List of html tags to remove.
 * @returns {string} Initial string with all tags removed (as of now, it doesn't work with tags with attributes).
 */

export function removeTags(html, tags) {
  const regex = new RegExp(`</?${tags.map(tag => tag)} */?>`, 'g');
  return html.replace(regex, '');
}

/** Removes `p` tags from text.
 * 
 * @param {string} html The initial text with `p` tags.
 * @returns {string} Text with `p` tags removed.
 */
// export function removeP(html) {
//   return removeTags(html, ['p']); 
// }

/** Splits content into lines, with empty lines removed.
 * 
 * @param {string} content Content from WPGraphQL query.
 * @returns {string[]} Array of given content, split by line breaks, with any empty line being removed. 
 */
export function splitContent(content) {
  return content.split(/\r\n|\n/).filter(el => el !== '');
}

// THIS STUFF MAY BE USELESS

const VALID_ANNOTATIONS = [
  'Subtitle',
];

/** Finds, removes, and returns an annotation and its corresponding text in a line.
 * 
 * Assumed format of line with annotation: `ANNOT: TEXT`.
 * 
 * @param {string} line Line of content
 * @returns {{ annot: string | null, text: string }} An object with `annot` and `text` properties. The `annot` property is the annotation, and is a string if there is one or `null` if there wasn't an annotation found, while `text` is the rest of the line after the colon.
 */
export function removeAnnotation(line) {
  if (line === '') {
    return {
      annot: null,
      text: ''
    }
  }

  let index = line.indexOf(':');
  let annotIdx = VALID_ANNOTATIONS.indexOf(line.substring(0, index));
  
  if (annotIdx == -1) {
    return {
      annot: null,
      text: line
    };
  }

  return {
    annot: VALID_ANNOTATIONS[annotIdx],
    text: line.substring(index + 1).trim()
  }
}


// THIS STUFF MAY BE USELESS






/**
 * 
 * @param {{ type: string, props: object[] | object }} element The element to evaluate.
 * 
 * ```ts
 * type element = {
 *   type: string,
 *   props: prop[] | prop
 * };
 * 
 * type prop = {
 *  children: element[] | element | string | null,
 *   id?: string,
 *   className?: string,
 *   src?: string,
 *   // ... otherAttributes
 * }
 * ```
 */
/*

We want to give the ability to add:
  * Text
    - <p>, nothing
  * Headers
    - <h[1-6]>
  * Links
    - <a> (become <Link>)
  * Inline Links
    - <a> (become <Link>)
  * Images
    - <img src alt >
  * Tables?
    - <table>
    - <th>
    - <tb>
    - <td>
    - <tr>
*/


//// WRONG, DONT USE. WRITE A NEW ONE, IF NEEDED.
// // Probably bad.
// // /**
// //  This takes in an array
// //  parse returns either an array of elements or an element.
// //  So check if its an object, and if so, make it an array with one element
// // */

// /**
//  * @param {*} elements List of elements to evaluate
//  * @param {string} page String representation of the page (eg. Home, About, etc.) 
// */
// export function evaluateMultipleElements(elements, page) {
//   for (let i = 0; i < elements.length; i++) {
//     let element = elements[i];

//     evaluateElement(element, page);
//   }
// }


export class FromCategory {
  // For a generic page
  static Page = new FromCategory("Page");
  // Member profiles in about page
  static MemberProfile = new FromCategory("MemberProfile");
  // Resources in resources pages
  static ResourcePage = new FromCategory("ResourcePage");
  // Event Card that holds information and brief.
  static EventCard = new FromCategory("EventCard");
  // Event information held inside the popup.
  static EventPopup = new FromCategory("EventPopup");

  constructor(name) {
    this.name = name;
  }
}

/** 
 * Takes an object representing an element and modifies some of the attributes and props to the ones that fit our site, and then regenerates the jsx.
 * 
 * @param {*} element An HTML element gotten from WordPress.
 * @param {FromCategory} fromCategory Represents the category this element is from.
 * 
 * After getting the result from this function, call `parse` on it (from 'html-react-parser').
 * 
 * # Examples
 * 
 * ---
 * ### Replacing `a` with `Link`.
 * input: 
 * ```jsx
 * <a className="WP-classes" href="ref">Text</a>
 * ```
 * 
 * output: 
 * ```jsx
 * <Link className="our-classes" href="ref">Text</Link>
 * ```
 * 
 * ---
 * ### Replacing classes in images
 * input : 
 * ```jsx
 * <img className="WP-classes" src="src" />
 * ```
 * 
 * output: 
 * ```jsx
 * <Image className="our-classes" src="src" ... />
 * ```
 * 
 * or even:
 * ```jsx
 * <div className="image-container">
 *   <Image className="our-classes" src="src" ... fill />
 * </div>
 * ```
*/
function evaluateElement(element, fromCategory) {
  // element.props.className = 'backend ' + element.props.className;
  let classes = element.props.className.split(' ');

  // Mandatory styles; default styles for each tag (part 1: Default Styles)
  // If you want to add to existing classes (for debugging), use +=, but to replace use =.
  applyDefaultStyles(element, fromCategory);

  // TODO: remove wordpress classes and stuff
  // TODO: add our own classes
  replaceWPStyles(element, fromCategory);

  // Evaluates the children
  evaluateChildrenOf(element);

  return element;
}

/** Adds default styles to the given element reference corresponding to the category it is from.
 * 
 * @param {*} elementRef A reference to the element (mutates the object).
 * @param {FromCategory} fromCategory Represents the category this element is from.
 */
function applyDefaultStyles(elementRef, fromCategory) {
  // Use += here to not delete the WordPress styles.

  switch (elementRef.type) {
    case 'div':
      elementRef.props.className += 'backend r-class-a';
      break;
    case 'span':
      break;
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      break;
    case 'p':
      // Should be automatically styled (font, size, etc.) ?
      break;
    case 'a':
      elementRef.type = 'Link';
      elementRef.props.className += 'backend r-link';
      break;
    case 'img':
      elementRef.type = 'Image';
      elementRef.props.className += 'backend r-img';
    default:
      break; // do nothing
  }
}

/**
 * 
 * @param {*} elementRef A reference to an HTML element (mutates the object).
 * @param {FromCategory} fromCategory Represents the category this element is from.
 */
function replaceWPStyles(elementRef, fromCategory) {

}

/** Evaluates the children of an element
 * 
 * @param {*} elementRef Reference to the element 
 * @param {FromCategory} fromCategory Represents the category this element is from.
 * @returns string of jsx as a string
 */
export function evaluateChildrenOf(elementRef, fromCategory) {
  // children is array of elements (objects)
  if (Array.isArray(children)) {
    return evaluateElements(children, page);
  }

  // children is null (check if works)
  if (children === null) {
    return '';
  }

  // children is string
  if (typeof children === 'string') {
    return children;
  }

  // children is an element (object)
  return evaluateElement(children, page);
}


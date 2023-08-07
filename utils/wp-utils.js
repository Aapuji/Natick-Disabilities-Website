
/** Returns an object with useful values gotten from the given post reference.
 * 
 * @param {{ title: string, content: string, id: string, date: string }} postRef A reference to a post (ie. `posts.nodes[n]`)
 */
export function getBasicSectionInfo(postRef) {
  let title = postRef.title ?? '';
  let subtitle = '';

  let contents = splitContent(postRef.content)/*.map(removeP)*/;
  
  console.log(contents);

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
    contents
  }
}



/**
 * 
 * @param {{ type: string, props: object[] | object }} element The element to evaluate.
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

We want to give the the ability to add:
  * Text
    - <p>, nothing
  * Headers
    - <h[1-6]>
  * Links
    - <a> (become )
  * Inline Links
    - <a>
  * Images
    - <img src alt >
  * Tables?
    - <table>
    - <th>
    - <tb>
    - <td>
    - <tr>
*/


// Probably bad.
// /**
//  This takes in an array
//  parse returns either an array of elements or an element.
//  So check if its an object, and if so, make it an array with one element
// */

/**
 * @param {*} elements List of elements to evaluate
 * @param {string} page String representation of the page (eg. Home, About, etc.) 
*/
export function evaluateElements(elements, page) {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    evaluateElement(element, page);
  }
}

/** 
 * Takes an object representing an element and modifies some of the attributes and props to the ones that fit our site, and then regenerates the jsx.
 * 
 * @param {*} element
 * @param {*} page String representation of the page.
 * 
 * --- 
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
function evaluateElement(element, page) {
  // element.props.className = 'backend ' + element.props.className;
  let classes = element.props.className.split(' ');

  // Mandatory styles; default styles for each tag (part 1: Default Styles)
  // Part 2 (not here): replacing styles from Wordpress with our equivalents
  // If you want to add to existing classes (for debugging), use +=, but to replace use =.
  switch (element.type) {
    case 'div':
      element.props.className = 'backend r-class-a class-b';
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
      // Should be automatically styled (font, size, etc.)
      break;
    case 'a':
      element.type = 'Link';
      element.props.className = 'backend b-link';
      break;
    case 'img':
      element.type = 'Image';
      element.props.className = 'backend b-img';
    default:
      break; // throw away
  }

  // TODO: remove wordpress classes and stuff
  // TODO: add our own classes

  // Return string of jsx
  // Returns html tags
  let html = `<${element.type} ${element.props.entries().map(
    (key, value) => {
      // ... 
    } 
  )
  })}>${evaluateChildren(element.children)}</${element.type}>`;

  return html;
}

/** Evaluates the children of an element
 * 
 * @param {} children 
 * @param {string} page String representation of the page.
 * @returns string of jsx as a string
 */
export function evaluateChildren(children, page) {
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


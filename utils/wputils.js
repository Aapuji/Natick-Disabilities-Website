import parse from 'html-react-parser';

// type element = {
//   type: string,
//   props: [prop] | prop
// }; 

// type prop = {
//   ...attrNames,
//   children: [element] | element | string | null
// };

/**
 This takes in an array
 parse returns either an array of elements or an element.
 So check if its an object, and if so, make it an array with one element
*/
export function evaluateElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    evaluateElement(element);
  }
}

function evaluateElement(element) {
  switch (element.type) {
    case 'div': /* Todo */ break;
    // ...
    default:
      break; // throw away
  }

  // Return string of jsx
  // Returns html tags
  let html = `<${element.type} ${element.props.map(prop => {
    switch (prop) {
      case 'children': return '';
      // ...
    }
  })}>${evaluateChildren(element.children)}</${element.type}>`;

  return html;
}

/** Evaluates the children of an element
 * 
 * @param {...} children 
 * @returns string of jsx as a string
 */
export function evaluateChildren(children) {
  // children is array of elements (objects)
  if (Array.isArray(children)) {
    return evaluateElements(children);
  }

  // children is null
  if (children === null) {
    return '';
  }

  // children is string
  if (typeof children === 'string') {
    return children;
  }

  // children is an element (object)
  return evaluateElement(children);
}

/** Given category description and a reference to an array of posts, this will sort the array to order the content on the page.
 * 
 * @param {string} categoryDesc Relevant part of description of category for the page listing the order of the content on the page.
 * @param {{ title: string, content: string, id: string, date: string }[]} postsRef A reference to the posts array to sort (ie. `posts.nodes`).
*/
export function orderPageContent(categoryDesc, postsRef) {
  let orderArr = categoryDesc.split(/\r\n|\n/);  // Splits category description into lines
  console.log('SPLIT ORDER', orderArr);
  
  for (let i = 0; i < orderArr.length; i++) {
    orderArr[i] = orderArr[i].replace(/[0-9]*\.? */, '');  // Removes number and dot (eg. "4. ")
  }

  console.log('Before sort:\n', postsRef);

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
export function removeP(html) {
  return removeTags(html, ['p']); 
}

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


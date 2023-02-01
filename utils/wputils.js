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
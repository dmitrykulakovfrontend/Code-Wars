/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

// Answer: 

/*
* input: string with unknown properties
* output: false or string that starting with # and all words capitalized + without spaces and length is less than 140
*
* generateHashtag('') => false
* generateHashtag('    ') => false
* generateHashtag('Coding is Great') => '#CodingIsGreat'
*
* initialize a result variable with # in it, and flag which indicated when letter should be uppercase,
* iterate through string and if character is not space and flag is true then add to result uppercase character and toggle
* flag, if character is space then swap flag to true, otherwise if none of these conditions worked, then just add character.
*
*
* */

function generateHashtag (str) {
  if (str.trim().length === 0) return false;
  let result = '#';
  let isNextLetterBig = true;
  for (const char of str) {
    if (char !== ' ' && isNextLetterBig === true) {
      result += char.toUpperCase();
      isNextLetterBig = false;
    } else  if (char === ' ') {
      isNextLetterBig = true;
    } else {
      result += char;
    }
  }
  return result.length > 140 ? false : result
}

// BigO: O(n)

/*
  Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

  For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

  As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

  If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

// Answer:

function firstNonRepeatingLetter(s) {
  const seen = {};
  for (let char of s) {
    let lowerCase = char.toLowerCase();
    if (!seen[lowerCase]) {
      seen[lowerCase] = {
        amount: 1,
        letter: char,
      };
    } else {
      seen[lowerCase].amount++
    }
  }
  for (key in seen) {
    let lowerCase = key.toLowerCase();
    if (seen[lowerCase].amount === 1) return seen[lowerCase].letter
  }
  return '';
}

// BigO: O(n)

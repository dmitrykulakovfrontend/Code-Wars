/*
  When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

  Example:

  'red white blue' //returns string value of white

  'red blue gold' //returns gold
*/

// Answer:

function longestWord(str) {
  str = str.split(" ").sort(({ length }, word2) => length - word2.length);
  return str[str.length - 1];
}
// BigO: O(n)

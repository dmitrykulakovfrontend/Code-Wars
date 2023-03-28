/*
  When provided with a String, capitalize all vowels

  For example:

  Input : "Hello World!"

  Output : "HEllO WOrld!"

  Note: Y is not a vowel in this kata.
*/

// Answer:

function swap (s) {
  const vowels = "aeiou"
  return [...s].map(letter => vowels.includes(letter) ? letter.toUpperCase() : letter).join("");
}

// BigO: O(n)

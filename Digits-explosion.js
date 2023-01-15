/*
  Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
*/

// Answer:

function explode(s) {
  return s.replace(/./g,(match) => match.repeat(+match));
}

// BigO: O(n)

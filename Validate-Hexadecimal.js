/*
  Create a function to validate if a string is a valid hexadecimal.

  Two patterns is valid

  6 chars (ff00ff)
  3 chars (f0f).
*/

// Answer:

function isHex(str) {
  return /^[\da-f]{3}$|^[\da-f]{6}$/i.test(str);
}

// BigO: O(n)

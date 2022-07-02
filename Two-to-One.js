/*
  Take 2 strings s1 and s2 including only letters from a to z.
  Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// Answer:

function longest(s1, s2) {
  let result = '';
  distinct = new Set(s1 + s2);
  for (char of distinct) {
    result += char;
  }
  return result.split('').sort().join('')
}

// BigO: O(n)

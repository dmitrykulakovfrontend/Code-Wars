/*
  Write a function that removes every lone 9 that is inbetween 7s.

  "79712312" --> "7712312"
  "79797"    --> "777"
*/

// Answer:

function sevenAte9(str) {
  return str.replace(/797/g, "77").replace(/797/g, "77");
}
// BigO: O(n)

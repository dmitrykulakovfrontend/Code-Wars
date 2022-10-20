/*
  Implement a function to calculate the sum of the numerical values in a nested list. For example :

  sumNested([1, [2, [3, [4]]]]) => 10
*/

// Answer:

const sumNested = arr => arr.reduce((a, c) => a += Array.isArray(c) ? sumNested(c) : c, 0)

// BigO: O(n)

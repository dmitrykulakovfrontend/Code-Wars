/*
  Write a function which calculates the average of the numbers in a given list.

  Note: Empty arrays should return 0.
*/

// Answer:

const find_average = (a) => a.reduce((p, c) => p + c, 0) / a.length || 0;

// BigO: O(n)

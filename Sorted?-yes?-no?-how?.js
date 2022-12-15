/*
  Complete the method which accepts an array of integers, and returns one of the following:

  "yes, ascending" - if the numbers in the array are sorted in an ascending order
  "yes, descending" - if the numbers in the array are sorted in a descending order
  "no" - otherwise
  You can assume the array will always be valid, and there will always be one correct answer.
*/

// Answer:

function isSortedAndHow(array) {
  const copy = [...array];
  if (array.sort((a,b) => b - a).toString() === copy.toString()) {
    return 'yes, descending';
  }
  if (array.sort((a,b) => a - b).toString() === copy.toString()) {
    return 'yes, ascending';
  }
  return 'no'
}

// BigO: O(n)

/*
  You are given an array of values.

  Sum every number value in the array, and any nested arrays (to any depth).

  Ignore all other types of values.
*/

// Answer:

function arraySum(arr) {
  let result = 0;
  for (let element of arr) {
    if (typeof element === 'number') {
      result += element;
    } else if (Array.isArray(element)) {
      result += arraySum(element);
    }
  }
  return result;
}

// BigO: O(n)

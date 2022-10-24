/*
  Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

  the array can't be empty
  only non-negative, single digit integers are allowed
  Return nil (or your language's equivalent) for invalid inputs.

  Examples
  [4, 3, 2, 5] would return [4, 3, 2, 6]
  [1, 2, 3, 9] would return [1, 2, 4, 0]
  [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
  [0, 1, 3, 7] would return [0, 1, 3, 8]
*/

// Answer:

function upArray(arr){
  if (arr.length < 1) return null;
  if (arr.some(num => num > 9 || num < 0)) return null;
  
  arr[arr.length - 1]++;
  
  for (let i = arr.length - 1; i > 0; i--) {
    let num = arr[i];
    if (num > 9) {
      arr[i] = 0;
      arr[i - 1]++;
    }
  }
  
  if (arr[0] > 9) {
    arr[0] = 0;
    arr.unshift(1);
  };
  
  return arr
}

// BigO: O(n)

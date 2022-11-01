/*
  You get an array of arrays.
  If you sort the arrays by their length, you will see, that their length-values are consecutive.
  But one array is missing!


  You have to write a method, that return the length of the missing array.

  Example:
  [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

  If the array of arrays is null/nil or empty, the method should return 0.

  When an array in the array is null or empty, the method should return 0 too!
  There will always be a missing element and its length will be always between the given arrays.
*/

// Answer:

export function getLengthOfMissingArray(arrayOfArrays:any[]):number {
  if (!arrayOfArrays || arrayOfArrays.some(subArray => subArray.length == 0 || !subArray)) return 0;
  
  arrayOfArrays = arrayOfArrays.sort((arrA,arrB) => arrA.length - arrB.length)
  
  for (let i = 0; i < arrayOfArrays.length - 1; i++) {
    let current = arrayOfArrays[i];
    let next = arrayOfArrays[i + 1] || null;
    if (next.length - current.length !== 1) return current.length + 1
  }
  
  return 0
}

// BigO: O(n)

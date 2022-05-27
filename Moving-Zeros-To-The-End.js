// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// Answer

/*

  input: array with different items;
  output: array with same order of items except zeros, all zeros in the end of array
  
  moveZeros([1,2,3,4,0,5]) => [1,2,3,4,5,0]
  moveZeros([0,0,0,'a',false]) => ['a', false, 0, 0, 0]
  
  pseudo: initialize a result array and amount of zeros, iterate through given array and check is it zero or not,
  if it is not then push item to new array, if it is zero increase amount of zeros variable and continue to next element.
  After that make iteration until amount of zeros will become 0, on each step push 0 to array.

*/


function moveZeros(arr) {
  const result = [];
  let zerosAmount = 0;
  for (let element of arr) {
    if (element !== 0) {
      result.push(element);
    } else {
      zerosAmount += 1;
    }
  }
  while (zerosAmount > 0) {
    result.push(0);
    zerosAmount -= 1;
  }
  return result;
}

// BigO: O(n + m) where m = amount of zeros in array

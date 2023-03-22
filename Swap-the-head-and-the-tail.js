/*
  You need to swap the head and the tail of the specified array:

  the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

  Return new array.

  For example:

     [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
      \----/   \----/         
       head     tail 

     [ -1, 2 ]  => [ 2, -1 ] 
     [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  
*/

// Answer:

function swapHeadAndTail(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let isEven = arr.length % 2 === 0;
  const tail = arr.slice(0, middle);
  const head = arr.slice(-middle);
  console.log({head,tail})
  if (isEven) {
    return [...head, ...tail];
  } else {
    return [...head, arr[middle], ...tail];
  }
}

// BigO: O(n2) ? O(n) ?

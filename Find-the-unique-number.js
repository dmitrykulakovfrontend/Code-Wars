/*
  There is an array with some numbers. All numbers are equal except for one. Try to find it!

  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  It’s guaranteed that array contains at least 3 numbers.

  The tests contain some very huge arrays, so think about performance.
*/

// Answer:

function findUniq(arr) {
  let el
  let count = 0
  let i = 1
  while (i < arr.length) {
    
    if (arr[0] === arr[i]) {
      count++
    }else {
      el = arr[i]
    }
    i++
  }

  if (count === 0) {
    return arr[0]
  } else {
    return el
  }
} 

// BigO: O(n)

/*
  Given a positive integer n, calculate the following sum:

  n + n/2 + n/4 + n/8 + ...
  All elements of the sum are the results of integer division.

  Example
  25  =>  25 + 12 + 6 + 3 + 1 = 47

*/

// Answer:

function halvingSum(n) {
  let result = n;
  do {
    n = Math.floor(n / 2)
    result += n
  } while (n >= 1)
  return result;
}

// BigO: O(n)

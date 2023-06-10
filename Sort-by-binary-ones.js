/*
  In this example you need to implement a function that sort a list of integers based on it's binary representation.

  The rules are simple:

  sort the list based on the amount of 1's in the binary representation of each number.
  if two numbers have the same amount of 1's, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
  if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as is lower)
  Examples:

  Input: [1,15,5,7,3]

  ( in binary strings is: ["1", "1111", "101", "111", "11"])
  Output: [15, 7, 3, 5, 1]

  (and after sortByBinaryOnes is: ["1111", "111", "11", "101", "1"])
*/

// Answer:

function sortByBinaryOnes(list) {
  return list.sort((a, b) => {
    const binaryA = a.toString(2);
    const binaryB = b.toString(2);
    const re = /1/g;
    const amountOfOnesA = binaryA.match(re)?.length || 0;
    const amountOfOnesB = binaryB.match(re)?.length || 0;
    if (amountOfOnesA == amountOfOnesB) {
      if (binaryA.length == binaryB.length) {
        return a - b;
      }
      return binaryA.length - binaryB.length;
    }
    return amountOfOnesB - amountOfOnesA;
  });
}

// BigO: O(n2)
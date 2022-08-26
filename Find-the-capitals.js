/*
  Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

  Example
  Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// Answer:

var capitals = function (word) {
  let res = [];
  for (let char of word) {
    if (char === char.toUpperCase()) {
      res.push(word.indexOf(char))
    }
  }
  return res;
};

// BigO: O(n)

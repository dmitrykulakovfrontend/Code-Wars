/* 
  Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

  For example:

  uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// Answer

var uniqueInOrder=function(iterable){
  let result = [];
  let previousChar = null;
  for (let i = 0; i < iterable.length; i++) {
    char = iterable[i];
    if (!previousChar) {
      result.push(char);
      previousChar = char;
    }
    if (char === previousChar) continue;
    result.push(char);
    previousChar = char;
  }
  return result;
}

// BigO: O(n)

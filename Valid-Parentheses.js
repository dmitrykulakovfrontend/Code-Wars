/* 
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
  "()"              =>  true
  ")(()))"          =>  false
  "("               =>  false
  "(())((()())())"  =>  true
*/

// Answer

/*
* input: string which length is more than 0 and less than 100;
* output: boolean which shows is order of parentheses is valid
* examples:
* validParentheses('()') // true
* validParentheses('(') // false
* validParentheses('(()') // false
* 
* pseudocode: declare an queue, and loop through string, for each opening parentheses add item in queue
* for each closing, remove item from queue, if queue length is not 0 then return false, otherwise true.
*
* */

function validParentheses(parens) {
  const queue = [];
  for (let item of parens) {
    if (item === '(') {
      queue.push(item)
    } else if (item === ')') {
      if (!queue.pop()) {
        return false
      }
    }
  }
  return queue.length === 0;
}

// BigO: O(n)
// Optimizations: Only after writing code i realised that instead of queue i could just make a number and increase/decrease
// it by 1 depending on parentheses, it would optimize memory usage.

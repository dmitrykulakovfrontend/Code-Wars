/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database.
At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers.
Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

// Answer

/*
* input: string with numeric characters
* output: string without numeric characters
* 
* stringClean('123') => ''
* stringClean('abc123') => 'abc'
* stringClean(1f2o3o4) => 'foo'
*
* create a result variable, if character not a number add that character to variable, return variable.
*
* */

function stringClean(s){
  let result = '';
  for (char of s) {
    if (isNaN(parseInt(char))) result += char;
  }
  return result;
}

// BigO: O(n)
// Optimizations: i could do a one line solution like this: 
// const stringClean = s => s.split('').reduce((p, c) => isNaN(parseInt(c)) ? p + c : p,'')
// but i think its hard to read and worse because here is 2 loops

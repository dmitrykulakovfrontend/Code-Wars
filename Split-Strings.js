/*
  Complete the solution so that it splits the string into pairs of two characters.
  If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  Examples:

  * 'abc' =>  ['ab', 'c_']
  * 'abcdef' => ['ab', 'cd', 'ef']
*/

// Answer:
function solution(str){
   let result = [];
   for (let i = 0; i < str.length;) {
     result.push(`${str[i]}${str[i+1] || '_'}`)
     i += 2;
   }
  return result;
}

// BigO: O(n)

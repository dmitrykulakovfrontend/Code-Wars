/* 
A format for expressing an ordered list of integers is to use a comma separated list of either

- individual integers
- or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20";

*/

// Answer:

function solution(list) {
 let result = '';
 let temp;
   console.log(list);
 for (let index = 0; index < list.length; index++) {
   let num = list[index];
   let nextNum = list[index + 1];
   if (nextNum - num > 1) {
     result += `${num},`
     continue;
   } else {
     let distance = 0;
     temp = num;
     while (nextNum - num <= 1) {
        index += 1;
        distance += 1;
        num = list[index];
        nextNum = list[index + 1];
     }
     if (distance > 1) {
       result += `${temp}-${num},`;     
     } else {
       result += temp === num ? `${num},` : `${temp},${num},`; 
     }
   }
   
 };
  return result.slice(0, result.length - 1);
}

// BigO: should be O(n) but not sure about .slice method,
// Optimizations: I could do it with reduce and map and then this code would be much simpler and easier to understand, but it would cost efficiency

/*
  Given a mixed array of number and string representations of integers, add up the string
  integers and subtract this from the total of the non-string integers.

  Return as a number.
*/

// Answer:

function divCon(mixedNumbers){
  let firstNum = 0;
  let secondNum = 0;
  for (let num of mixedNumbers) {
    if (typeof num === 'string') firstNum += Number(num)
    else secondNum += num
  }
  return secondNum - firstNum
}

// BigO: O(n)

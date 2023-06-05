/*
  Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

  "2357111317192329313741434753596167717379..."
  You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.

  For example:
  solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.
  Tests go up to about index 20000.
*/

// Answer:

function solve(a, b) {
  let str = "";
  let currentNumber = 2;
  while (str.length < 20000 + b) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) str += currentNumber;
    currentNumber++;
  }
  return str.slice(a, a + b);
}

// BigO: O(n2)

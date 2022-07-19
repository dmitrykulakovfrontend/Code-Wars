/*
  Given a number return the closest number to it that is divisible by 10.

  Example input:

  22
  25
  37
  Expected output:

  20
  30
  40
*/

// Answer:

const closestMultiple10 = num => {
  num = num / 10 
  num = Math.round(num);
  num = num * 10
  return num
};

// BigO: O(1)

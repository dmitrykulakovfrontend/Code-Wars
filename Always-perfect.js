/*
  While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

  So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

  If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

  If string contains 4 numbers but not consecutive it returns "not consecutive".
*/

// Answer:

function checkRoot(string){
  let numbers = string.match(/\d+/g)
  if (!numbers || numbers.length !== 4 || numbers.includes(0)) return 'incorrect input'
  numbers = numbers.map(s => +s)
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== 1) return 'not consecutive'
  }
  let product = numbers.reduce((acc, curr) => acc * curr) + 1
  let square = Math.sqrt(product)
  return `${product}, ${square}`
}

// BigO: O(n)
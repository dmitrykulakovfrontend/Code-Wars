/*
  My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

  In honor of my grandfather's memory we will write a function using his formula!

  Take a list of ages when each of your great-grandparent died.
  Multiply each number by itself.
  Add them all together.
  Take the square root of the result.
  Divide by two.
  Example
  predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
  Note: the result should be rounded down to the nearest integer.
*/

// Answer:

export function predictAge(...ages: number[]): number {
  return Math.floor(Math.sqrt(ages.map(i => i * i).reduce((a,b) => a + b, 0)) / 2)
};

// BigO: O(n)

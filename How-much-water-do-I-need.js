/*
My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes.
You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes.
The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

My washing machine is an old model that can only handle double the amount of load (or max_load).
If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'.
The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.
*/

// Answer

/*
* input: 3 non negative integers: water, load, clothes.
* output: string or float, depends on result of function.
* howMuchWater(10,10,21) => 'Too much clothes'
* howMuchWater(10,10,2) => 'Not enough clothes'
* howMuchWater(10,11,20) => 23.58
*
* use formula (water * 1.1 ^ (clothes - load)) and then round to 2 decimals.
* if clothes more than load * 2 return 'Too much clothes'
* if clothes less than load return 'Not enough clothes'
*
* */

function howMuchWater(water, load, clothes){
  if (clothes > load * 2) return 'Too much clothes';
  if (clothes < load) return 'Not enough clothes';
  return Math.round((water * 1.1 ** (clothes - load)) * 100) / 100
}

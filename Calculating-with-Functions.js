/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

// Answer:

const num = (digit) => {
  return (operand) => {
    return operand ? operand(digit) : digit;
  }
};
const zero = num(0);
const one = num(1);
const two = num(2);
const three = num(3);
const four = num(4);
const five = num(5);
const six = num(6);
const seven = num(7);
const eight = num(8);
const nine = num(9);

const plus = (num2) => (num1) => Math.floor(num1 + num2)
const minus = (num2) => (num1) => Math.floor(num1 - num2)
const times = (num2) => (num1) => Math.floor(num1 * num2)
const dividedBy = (num2) => (num1) => Math.floor(num1 / num2)

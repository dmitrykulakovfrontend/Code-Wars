/*
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it.

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input).
Return the final value after execution is complete.
*/

// Answer:

function chain(input, functions) {
  let value = input;
  for (func of functions) {
    value = func(value);
  }
  return value;
}

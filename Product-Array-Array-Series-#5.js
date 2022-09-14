/*
  Given an array/list [] of integers.
  Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

  Notes
  Array/list size is at least 2 .

  Array/list's numbers Will be only Positives

  Repetition of numbers in the array/list could occur.

  Input >> Output Examples
  productArray ({12,20}) ==>  return {20,12}
*/

// Answer:

function productArray(numbers){
  let result = [];
  for (let [index, number] of numbers.entries()) {
    result.push(numbers.reduce((acc, curr, i) => i === index ? acc : acc * curr,1))
  }
  return result;
}

// BigO: O(n2)

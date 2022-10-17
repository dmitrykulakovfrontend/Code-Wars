/*
  Your task is to create two functions :

  One function to turn an object into an array
  One function to turn an array into an object
  Examples :

  arrayToObject([1, 1, 2, 2, 3, 3]) => {1:2, 2:2, 3:2}

  objectToArray({2:5, 99:1}) => [2, 2, 2, 2, 2, 99]
  arrayToObject receives an array.
  It must return an object, where the key is the values found in the array and the value is the number of times it was found({value:times_found})

  objectToArray receives an object. It must return an array.
  Each value is repeated as many times as each key of the object.
  When the key of the object is a number, the values of the array must be numbers. (Ex : {1:5} must return [1,1,1,1,1] not ['1','1','1','1','1'] )

  You must not change the value given in input.
*/

// Answer:

function arrayToObject(arr){
  let seen = {}
  for (let num of arr) {
    seen[num] ? seen[num]++ : seen[num] = 1;
  }
  return seen;
}

function objectToArray(obj){
  const result = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      result.push(Number.isNaN(+key) ? key : +key);
    }
  }
  return result
}

// BigO: O(n) and O(n^2)

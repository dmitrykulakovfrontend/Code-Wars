/*
  Implement an iterator which receives an array of values, and returns an object with:

  a function next
  a number index
  A call to the next function should return an object with 2 attributes:

  value (the next value in the input array; undefined if the value is not present or the array has been fully processed)
  done (boolean which specifies whether the input array has been fully processed)
  Accessing the index attribute should return the index of the value currently held by the iterator.

  Example:
  const iterator = createIterator(['One', , 'Two']);

  iterator.index  // 0
  iterator.next() // { value: 'One', done: false }
  iterator.index  // 1

  // A hole in the array - value is undefined
  iterator.next() // { value: undefined, done: false }
  iterator.index  // 2

  iterator.next() // { value: 'Two', done: false }
  iterator.index  // 3

  // Iteration has finished - value is undefined, done becomes true
  iterator.next() // { value: undefined, done: true }
  iterator.index  // 3

  // Subsequent calls to next of a fully processed iterator don't change anything
  iterator.next() // { value: undefined, done: true }
  iterator.index  // 3
  */

// Answer:

const createIterator = (array) => {
  return new Iterator(array)
};

class Iterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }
  next() {
    if (this.index + 1 > this.array.length) {
      return { value: undefined, done: true};
    }
    this.index++;
    return { value: this.array[this.index - 1], done: false};
  }
}

// BigO: O(n)

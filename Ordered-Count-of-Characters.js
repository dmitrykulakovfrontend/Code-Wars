/*
  Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

  Consult the solution set-up for the exact data structure implementation depending on your language.

  Example:

  orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// Answer:

const orderedCount = function (text) {
  const map = new Map()
  const result = []
  for (char of text) {
    map.has(char) ? map.set(char,map.get(char) + 1) : map.set(char,1)
  }
  for (entry of map) {
    result.push(entry)
  }
  return result
}

// BigO: O(n)
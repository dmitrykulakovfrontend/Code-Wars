/*
  Complete the function that takes a string as an input, and return a list of all the unpaired
  characters (i.e. they show up an odd number of times in the string), in the order they were encountered as an array.

  In case of multiple appearances to choose from, take the last occurence of the unpaired character.

  Notes:

  A wide range of characters is used, and some of them may not render properly in your browser.
  Your solution should be linear in terms of string length to pass the last test.
  Examples
  "Hello World"   -->  ["H", "e", " ", "W", "r", "l", "d"]
  "Codewars"      -->  ["C", "o", "d", "e", "w", "a", "r", "s"]
  "woowee"        -->  []
  "wwoooowweeee"  -->  []
  "racecar"       -->  ["e"]
  "Mamma"         -->  ["M"]
  "Mama"          -->  ["M", "m"]
*/

// Answer:

function oddOneOut(str) {
  // create a new Map, it is important because usual object doesnt save order of elements in all cases.
  const frequency = new Map();
  let result = [];
  // iterate through string backwards, to take always only last occurence of element.
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i]
    frequency.has(char) ? frequency.set(char, frequency.get(char) + 1) : frequency.set(char, 1);
  }
  // destructure key and value from object and push keys only if it appears odd number times
  for ([key, value] of frequency) {
    if (value % 2 !== 0) {
      result.push(key);
    }
  }
  // reverse result array so it is not backwards, but we still took it last occurences
  return result.reverse()
}

// BigO: O(n)

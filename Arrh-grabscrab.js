/*
  Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

  At long last, we need a way to unscramble what these pirates are saying.

  Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

  For example:

  grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
  Should return ["sport", "ports"].

  Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

  Good luck!
*/

// Answer:

function grabscrab(anagram, dictionary) {
  let result = []
  for (let word of dictionary) {
    const obj = {};
    const obj2 = {};
    for (let char of word) {
      obj[char] ? obj[char]++ : obj[char] = 1;
    }
    for (let char of anagram) {
      obj2[char] ? obj2[char]++ : obj2[char] = 1;
    }
    for (let char in obj2) {
      if (!obj[char] || obj[char] !== obj2[char]) break;
      delete obj[char];
    }
    Object.keys(obj).length === 0 ? result.push(word) : null
  }
  return result
}

// BigO: O(n2)

/* What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none.

*/

// Answer

/*

  input: anagram string and array with strings;
  output: array with same anagram string;
  
  anagrams('abc', ['bca', 'loka', 'random', cba]) => ['bca', cba]
  
  pseudo: initialize map object and result empty array, iterate through anagram string and add in map letter and how much
  this letter meets. Then iterate through array with strings, make same map object with letters amount but each time when
  adding letter compare it with original one, and if letter which we are adding is not exist in original,
  or amount of letters is more then break iteration through that string, at the end add string to result array.

*/

function anagrams(word, words) {
  const result = [];
  const originMap = {};
  for (const char of word) {
    if (!originMap[char]) {
      originMap[char] = 1;
    } else {
      originMap[char] += 1;
    }
  }
  for (const word of words) {
    const map = {};
    let isAnagram = true;
    for (const char of word) {
      
      if (!map[char]) {
        map[char] = 1;
      } else {
        map[char] += 1;
      }
      if (!originMap[char] || originMap[char] < map[char]) {
        isAnagram = false;
        break;
      }
      
    }
    if (isAnagram) result.push(word);
  }
  return result;
}

// BigO: O(n + m2)

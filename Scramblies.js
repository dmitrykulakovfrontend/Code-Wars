/*
  Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:

  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered.
  Examples
  scramble('rkqodlw', 'world') ==> True
  scramble('cedewaraaossoqqyt', 'codewars') ==> True
  scramble('katas', 'steak') ==> False
*/

// Answer:

function scramble(str1, str2) {
  if (str2.length > str1.length) return false;
  let map1 = countLetters(str1);
  let map2 = {};

  for (let char of str2) {
    if (!map1[char]) return false;
    if (!map2[char]) {
      map2[char] = 1;
    } else {
      map2[char]++;
    }
    if (map1[char] < map2[char]) return false;
  }

  return true;
}

function countLetters(str) {
  let answer = {};
  for (let letter of str) {
    if (!answer[letter]) {
      answer[letter] = 1;
    } else {
      answer[letter]++;
    }
  }
  return answer;
}
// BigO: O(n*2)

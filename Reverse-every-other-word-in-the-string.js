/*
  Reverse every other word in a given string, then return the string. 
  Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
  Punctuation marks should be treated as if they are a part of the word in this kata.

*/

// Answer:

function reverse(str){
  let formattedStr = format(str);
  let wordsArr = formattedStr.split(' ');
  for (let i = 1; i < wordsArr.length; i += 2) {
    wordsArr[i] = wordsArr[i].split('').reverse().join('')
  }
  return wordsArr.join(' ')
}

function format(str) {
  str = str.trim();
  str = str.replace(new RegExp(' +', 'g'), ' ');
  return str;
}

// BigO: O(n2)

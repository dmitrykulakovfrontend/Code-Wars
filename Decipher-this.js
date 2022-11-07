/*
  You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

  For each word:

  the second and the last letter is switched (e.g. Hello becomes Holle)
  the first letter is replaced by its character code (e.g. H becomes 72)
  Note: there are no special characters used, only letters and spaces

  Examples

  decipherThis('72olle 103doo 100ya'); // 'Hello good day'
  decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

// Answer:

function decipherThis(str) {
  let wordsArr = str.split(' ');
  let textWordsArr = wordsArr.map(word => {
    let number = word.split('').map(Number).filter(item => !Number.isNaN(item)).join('');
    return String.fromCharCode(number) + word.slice(number.length)
  })
  return textWordsArr.map(word => {
    return word.length <= 2 ? word : word[0] + word[word.length - 1] + word.slice(2,-1) + word[1]
  }).join(' ')
}; 

// BigO: O(n2)

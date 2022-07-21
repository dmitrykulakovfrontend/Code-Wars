/*
  Given a string of words, you need to find the highest scoring word.

  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

  You need to return the highest scoring word as a string.

  If two words score the same, return the word that appears earliest in the original string.

  All letters will be lowercase and all inputs will be valid.
*/

// Answer:

function high(x){
  let words = x.split(' ');
  let scoresArr = words.map(word => {
    let letters = word.split('')
    let score = 0;
    letters.forEach(letter => score += letter.charCodeAt() - 96)
    return {word, score};
  })
  let sortedArr = scoresArr.sort((a,b) => b.score - a.score)
  sortedArr
  return sortedArr[0].word;
}

// BigO: O(n2)

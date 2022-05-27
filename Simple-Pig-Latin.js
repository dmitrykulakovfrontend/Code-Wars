// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Answer

/*

  input: string
  output: Pig Latin string
  
  pigIt('Codewars is great') => 'odewarsCay siay reatGay'
  pigIt('I love JavaScript') => 'Iay oveLay avaScriptJay'
  
  Pig -> ig + Pay
  
  pseudo: initialize result as empty string, split string with spaces to get words, iterate throught it and during that
  iteration check with regex is it punctuation or not, if it is then just add it to result string and continue iteration
  otherwise create a temporal string which later will be added to result, take first letter of word in temporal string
  and add 'ay',
  word = 'Pig'
  temp = 'P' + 'ay'
  
  add to word without first letter(we can use slice on string?) temporal string, then add that word to result.
  
*/

function pigIt(str){
  let result = '';
  let words = str.split(' ');
  const punctuationRegex = /[.,\/#!$%\^&\?*;:{}=\-_`~()]/g;
  
  for (let word of words) {
    
    if (punctuationRegex.test(word)) {
      result +=`${word} `
      continue;
    }
    
    let temp = word[0] + 'ay';
    
    let pigLatinWord = word.slice(1) + temp;
    
    result +=`${pigLatinWord} `
    
  }
  return result.trim();
}

// BigO: O(n + n)

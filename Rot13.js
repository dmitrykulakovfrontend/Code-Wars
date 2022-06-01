/*
  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

  Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string,
  they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

// Answer:

/*

  input: string
  output: string ciphered with Rot13
  
  rot13('test') => grfg
  
  pseudo: get array with ascii char codes, loop through them and change them depending on ascii number, transform array into
  string and return it.

*/

function rot13(message){
  let charCodes = message.split('').map(c => c.charCodeAt());
  for (let i = 0; i < charCodes.length; i++){
    if (charCodes[i] >= 97 && charCodes[i] <= 122) {
      let result = charCodes[i] + 13;
      charCodes[i] = result > 122 ? result - 26 : result;
    }
    if (charCodes[i] >= 65 && charCodes[i] <= 90) {
      let result = charCodes[i] + 13;
      charCodes[i] = result > 90 ? result - 26 : result;
    }
  }
  return charCodes.map((c) => String.fromCharCode(c)).join('');
}

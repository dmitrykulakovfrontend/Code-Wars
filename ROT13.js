/*
  How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

  I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
  According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

  Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

  Test examples:

  "EBG13 rknzcyr." -->
  "ROT13 example."

  "This is my first ROT13 excercise!" -->
  "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

// Answer:

function rot13(str) {
  let isLetter = /[a-z]/i;
  return str.split('').reduce((acc, char) => {
    if (!isLetter.test(char)) {
      return acc + char;
    } else {
      if (char === char.toUpperCase()) {
        let charCode = char.charCodeAt() + 13
        charCode = charCode > 90 ? charCode - 26 : charCode;
        return acc + String.fromCharCode(charCode);
      } else {
        let charCode = char.charCodeAt() + 13
        charCode = charCode > 122 ? charCode - 26 : charCode;
        return acc + String.fromCharCode(charCode);
      }
    }
  },'')
}

// BigO: O(n)

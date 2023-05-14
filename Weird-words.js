/*
  Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

  Notes:

  Spaces and special characters should remain the same.
  Capital letters should transfer in the same way but remain capitilized.
  Examples
  "Hello"               -->  "Ifmmp"
  "What is your name?"  -->  "Xibu jt zpvs obnf?"
  "zoo"                 -->  "app"
  "zzZAaa"              -->  "aaABbb"
*/

// Answer:

function nextLetter(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char >= "a" && char <= "z") {
      if (char === "z") {
        result += "a";
      } else {
        result += String.fromCharCode(char.charCodeAt(0) + 1);
      }
    } else if (char >= "A" && char <= "Z") {
      if (char === "Z") {
        result += "A";
      } else {
        result += String.fromCharCode(char.charCodeAt(0) + 1);
      }
    } else {
      result += char;
    }
  }
  return result;
}

// BigO: O(n)

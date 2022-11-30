/*
  Task
  Given a string str, reverse it and omit all non-alphabetic characters.

  Example
  For str = "krishan", the output should be "nahsirk".

  For str = "ultr53o?n", the output should be "nortlu".

  Input/Output
  [input] string str
  A string consists of lowercase latin letters, digits and symbols.

  [output] a string
*/

// Answer:

function reverseLetter(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0;i--) {
    if (/[A-Za-z]/.test(str[i])) {
      result += str[i]
    }
  }
  return result;
}

// BigO: O(n)

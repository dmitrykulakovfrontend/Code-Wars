/* 
  Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct.
  However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

  Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

// Answer:

function maskify(str) {
  if (str.length < 5) return str;
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 4) {
      result += '#';
    } else {
      result += str[i];
    }
  }
  return result;
}

// BigO: O(n)

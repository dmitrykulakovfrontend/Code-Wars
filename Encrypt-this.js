/*
  Encrypt this!

  You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

  Your message is a string containing space separated words.
  You need to encrypt each word in the message using the following rules:
  The first letter must be converted to its ASCII code.
  The second letter must be switched with the last letter
  Keepin' it simple: There are no special characters in the input.
  Examples:
  encryptThis("Hello") === "72olle"
  encryptThis("good") === "103doo"
  encryptThis("hello world") === "104olle 119drlo"
*/

// Answer:

var encryptThis = function(text) {
  return text.split(' ').map(str => {
    let charCode = str[0].charCodeAt();
    let firstChar = str[1] || '';
    let letters = str.slice(2, str.length - 1);
    let lastChar = str[str.length - 1] || '';
    if (str.length === 1) return `${charCode}`
    if (str.length === 2) return `${charCode}${firstChar}`;
    return `${charCode}${lastChar}${letters}${firstChar}`
  }).join(' ');
}

// BigO: O(n2)

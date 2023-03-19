/*
  Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

  Example (input -> output):
  'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'
  You can learn more about Base64 encoding and decoding here.

  Note: This kata uses the non-padding version ("=" is not added to the end).
*/

// Answer:

String.prototype.toBase64 = function() {
  return Buffer.from(this).toString('base64')
}
String.prototype.fromBase64 = function() {
  return Buffer.from(this, 'base64').toString()
}

// BigO: O(n)
